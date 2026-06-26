import Link from "next/link";

export default function JoinCTA() {
  return (
    <section className="bg-navy dark:bg-soft-grey w-full py-25 px-[5%] relative overflow-hidden">
      <div className="absolute w-125 h-125 rounded-full bg-[rgba(59,130,196,0.15)] blur-[90px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-175 mx-auto text-center relative z-10">
        <div
          className="inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.14em] uppercase text-[rgba(255,255,255,0.45)] dark:text-accent mb-5"
          data-aos="fade-up"
        >
          ✦ Get involved
        </div>

        <h2
          className="font-['Fraunces',serif] text-[clamp(2rem,5vw,3.5rem)] font-light tracking-tight text-[#fff] leading-[1.1] mb-4"
          data-aos="fade-up"
        >
          This is your space{" "}
          <em className="italic opacity-65 font-light text-accent">too.</em>
        </h2>

        <p
          className="text-[1rem] text-[rgba(255,255,255,0.55)] dark:text-secondary leading-[1.75] font-light max-w-125 mx-auto mb-10"
          data-aos="fade-up"
        >
          Whether you need support, want to volunteer, or just want to belong
          somewhere real — Mindsphere has a place for you. No judgment. No
          pressure. Just a community that genuinely cares.
        </p>

        <div
          className="flex flex-wrap gap-3.5 justify-center"
          data-aos="fade-up"
        >
          <Link
            href="/get-involved"
            className="font-['DM_Sans',sans-serif] text-[0.95rem] font-medium px-9 py-3.5 bg-white text-navy dark:bg-accent dark:text-white rounded-full inline-flex items-center gap-2 transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(255,255,255,0.15)]"
          >
            Join the community →
          </Link>

          <Link
            href="/about"
            className="font-['DM_Sans',sans-serif] text-[0.95rem] font-normal px-7 py-3.5 border rounded-full bg-(--btn-bg) text-(--btn-text) hover:dark:text-navy border-(--btn-border) transition-all duration-250 hover:bg-white hover:text-black hover:border-white"
            style={
              {
                "--btn-bg": "transparent",
                "--btn-text": "rgba(255,255,255,0.8)",
                "--btn-border": "rgba(255,255,255,0.8)",
              } as React.CSSProperties
            }
          >
            Learn about us
          </Link>
        </div>
      </div>
    </section>
  );
}
