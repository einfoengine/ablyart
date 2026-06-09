"use client";

const clientBrands = [
  "Ultima",
  "Zaag System",
  "Shadow Warrior",
  "Devonix",
  "Techtcy",
  "Theme Fisher",
  "Themexpert",
  "JoomShaper",
  "BinoTech",
  "GradBirds",
  "ArabTools",
  "EverExpert",
  "iJoomla",
  "OS Pharmacy",
  "Zogaan",
  "VSenk",
];

export default function CompanyLogosSection({ id }: { id?: string }) {
  const duplicatedBrands = [...clientBrands, ...clientBrands];

  return (
    <section id={id} className="py-20 md:py-24 bg-[var(--background)] relative overflow-hidden border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[var(--accent)] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
        <p className="text-sm md:text-base font-semibold tracking-widest text-gray-500 uppercase">
          Founder-reported trusted and past client brands
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

        <div
          className="flex w-fit items-center"
          style={{
            animation: "marquee 40s linear infinite",
          }}
        >
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .hover-pause:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="flex items-center hover-pause">
            {duplicatedBrands.map((brand, idx) => (
              <div key={`${brand}-${idx}`} className="px-5 md:px-8 flex items-center justify-center opacity-45 hover:opacity-100 transition-opacity duration-300">
                <span className="min-w-[150px] text-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm md:text-base font-black tracking-[-0.02em] text-white/80">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
