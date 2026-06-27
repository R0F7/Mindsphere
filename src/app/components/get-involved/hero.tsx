import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-[var(--white)] pt-[120px] pb-[88px] px-[5%] text-center overflow-hidden border-b border-[var(--border)]">
      {/* Background Grid Layer */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.45] 
          after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_85%_85%_at_50%_50%,transparent_35%,var(--white)_100%)]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hero Orbs (Blurred Background Elements) */}
      <div className="absolute rounded-full pointer-events-none blur-[90px] w-[480px] h-[480px] bg-[rgba(59,130,196,0.07)] dark:bg-[rgba(91,155,213,0.1)] -top-[180px] -right-[80px]" />
      <div className="absolute rounded-full pointer-events-none blur-[90px] w-[320px] h-[320px] bg-[rgba(13,31,60,0.04)] dark:bg-[rgba(30,77,140,0.12)] -bottom-[60px] -left-[60px]" />

      <div className="relative z-[1] max-w-[720px] mx-auto">
        {/* Animated Badge */}
        <div
          className="inline-flex items-center gap-2 border border-strong rounded-full px-4 py-1.5 text-[0.75rem] font-medium text-secondary mb-6 bg-off-white"
          data-aos="fade-up"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Get Involved
        </div>

        {/* Headline */}
        <h1
          className="font-fraunces font-light text-[clamp(2.4rem,6vw,4.5rem)] tracking-[-0.04em] leading-[1.05] text-text mb-5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Be Part of{" "}
          <em className="italic text-accent">Something</em>
          <br />
          That Matters
        </h1>

        {/* Sub-headline */}
        <p
          className="text-[1.05rem] text-[var(--text-secondary)] font-light leading-[1.75] max-w-[520px] mx-auto mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Join us, reach out, verify your credentials, or simply stay connected.
          Every form of involvement shapes what Mindsphere becomes.
        </p>

        {/* Anchor Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {[
            { label: "Join Us", href: "#join" },
            { label: "Login / Sign Up", href: "#auth" },
            { label: "Contact Us", href: "#contact" },
            { label: "Verify Certificate", href: "#verify" },
            { label: "Newsletter", href: "#newsletter" },
          ].map((anchor, idx) => (
            <a
              key={anchor.label}
              href={anchor.href}
              className="text-[0.78rem] font-normal px-[18px] py-[7px] border border-strong rounded-full text-secondary bg-white transition-all duration-200 hover:bg-navy hover:text-white hover:border-navy"
              data-aos="fade-up"
              data-aos-delay={`${idx}00`}
            >
              {anchor.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
