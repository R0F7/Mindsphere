export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-30 pb-22 px-[5%] text-center border-b border-bd">
      {/* ── BACKGROUND GRID & RADIAL MASK ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage: `linear-gradient(var(--bd) 1px, transparent 1px), linear-gradient(90deg, var(--bd) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_85%_at_50%_50%,transparent_35%,var(--white)_100%)]" />
      </div>

      {/* Orb 1 (Top Right) */}
      <div className="absolute rounded-full pointer-events-none blur-[90px] w-120 h-120 bg-[rgba(59,130,196,0.07)] dark:bg-[rgba(91,155,213,0.1)] -top-45 -right-20" />

      {/* Orb 2 (Bottom Left) */}
      <div className="absolute rounded-full pointer-events-none blur-[90px] w-[320px] h-80 bg-[rgba(13,31,60,0.04)] dark:bg-[rgba(30,77,140,0.12)] -bottom-15 -left-15" />

      {/* ── HERO CONTENT INNER ── */}
      <div className="max-w-180 mx-auto relative z-10">
        {/* Live Status Badge */}
        <div
          className="inline-flex items-center gap-2 border border-bd2 rounded-(--rf) px-4 py-1.5 text-[0.75rem] font-medium text-t2 bg-off mb-6"
          data-aos="fade-up"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-[pulse_2s_ease-in-out_infinite]" />
          Mental wellness library
        </div>

        {/* Main Heading */}
        <h1
          className="font-fraunces font-light text-[clamp(2.4rem,6vw,4.5rem)] tracking-[-0.04em] leading-[1.05] text-text mb-5"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          Your mental health
          <br />
          <em className="italic text-accent">
            resource library
          </em>
        </h1>

        {/* Subtitle */}
        <p
          className="text-[1.05rem] font-light text-t2 leading-[1.75] max-w-130 mx-auto mb-11"
          data-aos="fade-up"
          data-aos-delay="160"
        >
          A carefully curated collection of books, articles, research, and
          guides — everything you need to understand and support your mental
          wellbeing, all in one place.
        </p>

        {/* ── STATS STRIP ── */}
        <div
          className="inline-flex items-center bg-white border border-bd rounded-(--rx) shadow-sh2 overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="240"
        >
          {/* Stat 1 */}
          <div className="px-8 py-4.5 text-center relative after:content-[''] after:absolute after:right-0 after:top-[20%] after:h-[60%] after:w-px after:bg-bd">
            <div className="font-fraunces text-[1.6rem] font-light text-text tracking-[-0.03em] leading-none mb-0.5">
              180+
            </div>
            <div className="text-[0.68rem] font-normal tracking-[0.06em] text-t3 uppercase">
              Resources
            </div>
          </div>

          {/* Stat 2 */}
          <div className="px-8 py-4.5 text-center relative after:content-[''] after:absolute after:right-0 after:top-[20%] after:h-[60%] after:w-px after:bg-bd">
            <div className="font-fraunces text-[1.6rem] font-light text-text tracking-[-0.03em] leading-none mb-0.5">
              5
            </div>
            <div className="text-[0.68rem] font-normal tracking-[0.06em] text-t3 uppercase">
              Categories
            </div>
          </div>

          {/* Stat 3 */}
          <div className="px-8 py-4.5 text-center">
            <div className="font-fraunces text-[1.6rem] font-light text-text tracking-[-0.03em] leading-none mb-0.5">
              Free
            </div>
            <div className="text-[0.68rem] font-normal tracking-[0.06em] text-t3 uppercase">
              Always
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
