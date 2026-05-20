const STATS = [
  { num: "2.4k+", label: "Community members" },
  { num: "180+", label: "Resources in library" },
  { num: "50+", label: "Volunteer supporters" },
  { num: "12+", label: "Countries reached" },
];

export default function ImpactSection() {
  return (
    <section className="bg-navy dark:bg-soft-grey py-20 px-[5%] relative overflow-hidden transition-colors duration-300">
      {/* --- GLOWING ORB --- */}
      <div className="absolute w-100 h-100 rounded-full pointer-events-none blur-[80px] bg-[rgba(59,130,196,0.15)] -top-25 -right-25" />

      <div className="container relative z-1">
        {/* --- TOP CONTENT --- */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center mb-14"
          data-aos="fade-up"
        >
          <h2 className="font-fraunces text-[clamp(1.8rem,3vw,2.5rem)] font-light text-white dark:text-text tracking-[-0.02em] leading-[1.2]">
            Small team.
            <br />
            <em className="italic opacity-60">Real impact.</em>
          </h2>

          <p className="text-[0.9rem] text-[rgba(255,255,255,0.5)] dark:text-t2 leading-[1.75] font-light">
            Every number here represents a real teen who found something they
            were looking for — a tool, a word, a community, a moment of quiet
            clarity.
          </p>
        </div>

        {/* --- IMPACT GRID --- */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`
        bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] 
        dark:bg-off-white dark:border-border
        p-[32px_24px] transition-colors duration-300 hover:bg-[rgba(255,255,255,0.09)]
        
        /* Mobile: Full Width (Top & Bottom Rounded) */
        ${i === 0 ? "rounded-t-lg" : ""}
        ${i === STATS.length - 1 ? "rounded-b-lg" : ""}

        /* MD Screen: 2 Columns (Corners specifically rounded) */
        ${i === 0 ? "md:rounded-tl-lg md:rounded-tr-none" : ""}
        ${i === 1 ? "md:rounded-tr-lg md:rounded-tl-none" : ""}
        ${i === 2 ? "md:rounded-bl-lg md:rounded-br-none" : ""}
        ${i === 3 ? "md:rounded-br-lg md:rounded-bl-none" : ""}

        /* LG Screen: 4 Columns (Reset to original 1st and last only) */
        ${i === 0 ? "lg:rounded-l-lg lg:rounded-tr-none" : ""}
        ${i === 1 ? "lg:rounded-none" : ""}
        ${i === 2 ? "lg:rounded-none" : ""}
        ${i === 3 ? "lg:rounded-r-lg lg:rounded-bl-none" : ""}
      `}
            >
              <div className="font-fraunces text-[2.6rem] font-light text-white dark:text-text tracking-[-0.04em] leading-none mb-1.5">
                {stat.num}
              </div>
              <div className="text-[0.78rem] text-[rgba(255,255,255,0.45)] dark:text-t3 font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
