"use client";


import Image from "next/image";

const clientLogos = [
  { name: "HBK", src: "/client-HBK.png" },
  { name: "An Naada", src: "/client-an-naada.png" },
  { name: "Hayawear", src: "/client-hayawear.png" },
  { name: "Jadroo", src: "/client-jadroo.png" },
  { name: "Khas Food", src: "/client-khas-food.png" },
  { name: "OS PPharma", src: "/client-os-ppharma.png" },
  { name: "Ultima", src: "/client-ultima.png" },
  { name: "Zaag", src: "/client-zaag.png" },
  { name: "Zaag XD", src: "/client-zaag-xd.png" }
];

export default function CompanyLogosSection({ id }: { id?: string }) {
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section id={id} className="py-20 md:py-24 bg-[var(--background)] relative overflow-hidden border-y border-white/5">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[var(--accent)] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
        <p className="text-sm md:text-base font-semibold tracking-widest text-gray-500 uppercase">
          Trusted by high-growth SaaS, E-Com, and B2B leaders
        </p>
      </div>

      {/* Infinite Scroll Track */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Wrapper */}
        <div 
          className="flex w-fit items-center"
          style={{
            animation: "marquee 40s linear infinite",
          }}
        >
          {/* We define the marquee keyframes dynamically in a style tag for portability */}
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
            {duplicatedLogos.map((logo, idx) => (
              <div 
                key={idx} 
                className="px-10 md:px-16 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer grayscale hover:grayscale-0"
              >
                <Image 
                  src={logo.src} 
                  alt={`${logo.name} logo`} 
                  width={160} 
                  height={80} 
                  className="object-contain h-12 w-auto md:h-14 brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
