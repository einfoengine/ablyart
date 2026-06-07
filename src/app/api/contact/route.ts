import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  formType?: unknown;
  source?: unknown;
  name?: unknown;
  email?: unknown;
  message?: unknown;
  fields?: unknown;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function cleanFields(fields: unknown) {
  if (!fields || typeof fields !== "object" || Array.isArray(fields)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(fields)
      .map(([key, value]) => [key, cleanString(value)])
      .filter(([, value]) => value.length > 0),
  ) as Record<string, string>;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatLabel(key: string) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (char) => char.toUpperCase());
}

function buildEmailHtml({
  formType,
  source,
  name,
  email,
  message,
  fields,
}: {
  formType: string;
  source: string;
  name: string;
  email: string;
  message: string;
  fields: Record<string, string>;
}) {
  const fieldRows = Object.entries(fields)
    .map(
      ([key, value]) => `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-weight:700;color:#111827;">${escapeHtml(formatLabel(key))}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#374151;">${escapeHtml(value)}</td>
        </tr>
      `,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;">
      <h1 style="font-size:22px;margin:0 0 16px;">New AblyArt ${escapeHtml(formType)} submission</h1>
      <p style="margin:0 0 18px;color:#4b5563;">Source: ${escapeHtml(source || "Website")}</p>
      <table style="border-collapse:collapse;width:100%;max-width:720px;border:1px solid #e5e7eb;">
        <tbody>
          ${name ? `<tr><td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-weight:700;">Name</td><td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;">${escapeHtml(name)}</td></tr>` : ""}
          <tr><td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-weight:700;">Email</td><td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;">${escapeHtml(email)}</td></tr>
          ${message ? `<tr><td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-weight:700;">Message</td><td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;">${escapeHtml(message)}</td></tr>` : ""}
          ${fieldRows}
        </tbody>
      </table>
    </div>
  `;
}

function buildEmailText({
  formType,
  source,
  name,
  email,
  message,
  fields,
}: {
  formType: string;
  source: string;
  name: string;
  email: string;
  message: string;
  fields: Record<string, string>;
}) {
  return [
    `New AblyArt ${formType} submission`,
    `Source: ${source || "Website"}`,
    name ? `Name: ${name}` : "",
    `Email: ${email}`,
    message ? `Message: ${message}` : "",
    ...Object.entries(fields).map(([key, value]) => `${formatLabel(key)}: ${value}`),
  ]
    .filter(Boolean)
    .join("\n");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const fields = cleanFields(payload.fields);
  const formType = cleanString(payload.formType) || "Website form";
  const source = cleanString(payload.source);
  const name = cleanString(payload.name || fields.name || fields.fullName);
  const email = cleanString(payload.email || fields.email || fields.workEmail);
  const message = cleanString(payload.message || fields.message || fields.goals);

  if (!email) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (formType.toLowerCase().includes("contact") && (!name || !message)) {
    return NextResponse.json({ error: "Please complete the required contact details." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO || "hello@ablyart.com";
  const from = process.env.CONTACT_EMAIL_FROM || "AblyArt Website <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Email delivery is not configured yet. Add RESEND_API_KEY, CONTACT_EMAIL_TO, and CONTACT_EMAIL_FROM to the environment.",
      },
      { status: 503 },
    );
  }

  const emailBody = {
    from,
    to,
    reply_to: email,
    subject: `New AblyArt submission: ${formType}`,
    html: buildEmailHtml({ formType, source, name, email, message, fields }),
    text: buildEmailText({ formType, source, name, email, message, fields }),
  };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailBody),
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    console.error("Resend email delivery failed", details);
    return NextResponse.json({ error: "Unable to send your message right now. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
