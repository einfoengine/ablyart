type LegalPageProps = {
  eyebrow: string;
  title: string;
  updated: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
};

export default function LegalPage({ eyebrow, title, updated, sections }: LegalPageProps) {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden pt-[140px] pb-16">
        <div className="hero-blob-1 opacity-40" />
        <div className="hero-blob-2 opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <span className="tag-pill">
              <span className="glow-dot" />
              {eyebrow}
            </span>
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black tracking-[-0.04em] leading-[1.05] mb-5">
            {title}
          </h1>
          <p className="text-[rgba(240,240,248,0.5)]">Last updated: {updated}</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="glass-card p-7 md:p-10 space-y-9">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-black tracking-[-0.03em] mb-4">{section.heading}</h2>
              <p className="text-[rgba(240,240,248,0.58)] leading-[1.85]">{section.body}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
