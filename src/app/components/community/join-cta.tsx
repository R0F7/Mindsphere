export default function JoinCTA() {

  return (
    <section className="relative overflow-hidden bg-navy dark:bg-soft py-25 px-[5%]">
      
      {/* ── BACKGROUND GLOWING ORB ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-[rgba(59,130,196,0.15)] blur-[90px] pointer-events-none" />

      {/* ── CTA INNER CONTAINER ── */}
      <div className="max-w-175 mx-auto text-center relative z-10">
        
        {/* Label */}
        <div 
          className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-[rgba(255,255,255,0.4)] dark:text-accent mb-5"
          data-aos="fade-up"
        >
          ✦ You belong here
        </div>

        {/* Big Italic Quote */}
        <blockquote 
          className="font-fraunces font-light italic text-[clamp(1.6rem,4vw,2.8rem)] text-white dark:text-text Desert-leading-[1.3] tracking-[-0.02em] mb-4 before:content-['\201C'] before:opacity-40 after:content-['\201D'] after:opacity-40"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          Someone out there feels exactly like you do right now. You just haven't met them yet.
        </blockquote>

        {/* Attribution */}
        <div 
          className="text-[0.82rem] font-light text-[rgba(255,255,255,0.4)] dark:text-t2 mb-10"
          data-aos="fade-up"
          data-aos-delay="160"
        >
          — A Mindsphere community member
        </div>

        {/* Action Button */}
        <a
          href="#platforms"
          className="font-dm-sans text-[0.95rem] font-medium px-9 py-3.5 bg-white text-navy dark:bg-accent dark:text-white rounded-(--rf) inline-flex items-center gap-2 transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(255,255,255,0.15)]"
          data-aos="fade-up"
          data-aos-delay="240"
        >
          Join the Community →
        </a>

      </div>
    </section>
  );
}