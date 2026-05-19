import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full bg-white px-[5%] pt-35 pb-20 text-center overflow-hidden"
      id="home"
    >
      {/* ── BACKGROUND GRID ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45 
                   bg-[linear-gradient(var(--bd)_1px,transparent_1px),linear-gradient(90deg,var(--bd)_1px,transparent_1px)] 
                   bg-size-[60px_60px]
                   after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_85%_85%_at_50%_50%,transparent_35%,var(--white)_100%)]"
      />

      {/* ── BACKGROUND ORBS (BLURRED) ── */}
      {/* Orb 1 */}
      <div className="absolute pointer-events-none rounded-full blur-[90px] w-120 h-120 bg-[rgba(59,130,196,0.07)] -top-45 -right-20" />
      {/* Orb 2 */}
      <div className="absolute pointer-events-none rounded-full blur-[90px] w-[320px] h-80 bg-[rgba(13,31,60,0.04)] -bottom-15 -left-15" />

      {/* ── HERO CONTENT INNER ── */}
      <div className="relative z-10 mx-auto max-w-180 w-full">
        {/* Tagline */}
        <div
          className="inline-flex items-center gap-2 border border-strong rounded-full px-4 py-1.5 text-[0.75rem] font-medium text-t2 bg-off mb-6"
          data-aos="fade-up"
        >
          {/* Animated Pulse Dot */}
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-[pulse_2s_ease-in-out_infinite]" />
          Your personal companion
        </div>

        {/* Heading */}
        <h1
          className="font-fraunces text-[clamp(2.4rem,6vw,4.2rem)] font-light tracking-[-0.04em] line-clamp-none leading-[1.08] text-text mb-4.5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Your mental health,
          <br />
          <em className="italic font-light text-accent font-fraunces">
            supported.
          </em>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base text-t2 font-light leading-[1.75] max-w-130 mx-auto mb-9"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          A guided space to track how you feel, reflect, find tools, and get
          help — designed to walk with you through every step of your mental
          wellness journey.
        </p>

        {/* ── LOGIN NUDGE BAR ── */}
        <div
          className="inline-flex items-center gap-4 bg-[linear-gradient(135deg,rgba(13,31,60,0.04),rgba(59,130,196,0.06))] border border-strong rounded-3xl p-[16px_24px] shadow-sm flex-wrap justify-center max-w-full"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="text-[0.88rem] text-t2 font-light text-center sm:text-left">
            <strong className="font-medium text-text">
              Get the full experience.
            </strong>{" "}
            Log in to track your mood, save your history, and access
            personalised insights.
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/login"
              className="text-[0.82rem] font-medium px-4.5 py-2 rounded-full bg-navy text-white transition-all duration-220 hover:opacity-85"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="text-[0.82rem] font-medium px-4.5 py-2 rounded-full border border-strong text-text bg-transparent transition-all duration-220 hover:bg-soft"
            >
              Sign up free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
