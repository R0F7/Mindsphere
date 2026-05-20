export default function Hero() {
  return (
    <section className="bg-white pt-30 pb-22 px-[5%] text-center relative overflow-hidden border-b border-border transition-colors duration-300">
      
      {/* --- BACKGROUND GRID --- */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.45]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_85%_at_50%_50%,transparent_35%,var(--white)_100%)]" />
      </div>

      {/* --- DECORATIVE ORBS --- */}
      {/* Top Right Orb (o1) */}
      <div className="absolute w-120 h-120 rounded-full pointer-events-none filter blur-[90px] bg-[rgba(59,130,196,0.07)] dark:bg-[rgba(91,155,213,0.1)] -top-[180px] -right-[80px]" />
      
      {/* Bottom Left Orb (o2) */}
      <div className="absolute w-[320px] h-[320px] rounded-full pointer-events-none filter blur-[90px] bg-[rgba(13,31,60,0.04)] dark:bg-[rgba(30,77,140,0.12)] -bottom-[60px] -left-[60px]" />

      <div className="max-w-[720px] mx-auto relative z-[1]">
        
        {/* --- TAG --- */}
        <div 
          className="inline-flex items-center gap-[8px] border border-strong rounded-full px-[16px] py-[6px] text-[0.75rem] font-medium text--secondary mb-[24px] bg-off-white"
          data-aos="fade-up"
        >
          <span className="w-[6px] h-[6px] rounded-full bg-accent animate-pulse-custom" />
          Events & Workshops
        </div>

        {/* --- TITLE --- */}
        <h1 
          className="font-fraunces text-[clamp(2.4rem,6vw,4.5rem)] font-light tracking-[-0.04em] leading-[1.05] text-primary mb-[20px]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Gather.<br />
          <em className="italic text-accent">Grow.</em><br />
          Connect.
        </h1>

        {/* --- SUBTITLE --- */}
        <p 
          className="text-[1.05rem] text-secondary font-light leading-[1.75] max-w-130 mx-auto mb-11"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Real conversations. Real tools. Every event is designed to bring teens together and make mental wellness less lonely.
        </p>

        {/* --- STATS STRIP --- */}
        <div 
          className="inline-flex items-center bg-white border border-border rounded-xl shadow-md overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {[
            { n: "40+", l: "Events" },
            { n: "18", l: "Countries" },
            { n: "Free", l: "Always" },
          ].map((stat, i, arr) => (
            <div 
              key={i}
              className={`px-[32px] py-[18px] text-center relative ${
                i !== arr.length - 1 ? "after:content-[''] after:absolute after:right-0 after:top-[20%] after:h-[60%] after:w-[1px] after:bg-border" : ""
              }`}
            >
              <div className="font-fraunces text-[1.6rem] font-light text-primary tracking-[-0.03em] leading-none mb-[3px]">
                {stat.n}
              </div>
              <div className="text-[0.68rem] font-normal text-muted tracking-[0.06em] uppercase">
                {stat.l}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}