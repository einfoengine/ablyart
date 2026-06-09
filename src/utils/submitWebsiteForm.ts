export type WebsiteFormPayload = {
  formType: string;
  source?: string;
  name?: string;
  email?: string;
  message?: string;
  fields?: Record<string, string>;
};

export function formDataToRecord(formData: FormData) {
  const fields: Record<string, string> = {};

  formData.forEach((value, key) => {
    if (typeof value === "string") {
      fields[key] = value.trim();
    }
  });

  return fields;
}

export async function submitWebsiteForm(payload: WebsiteFormPayload) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = (await response.json().catch(() => null)) as { error?: string } | null;

  if (!response.ok) {
    throw new Error(result?.error || "Unable to submit the form right now. Please try again.");
  }

  return result;
}
