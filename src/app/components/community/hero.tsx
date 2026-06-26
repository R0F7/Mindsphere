import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="display-flex flex items-center relative overflow-hidden bg-white dark:bg-dark-bg pt-27.5 md:pt-35 pb-16 md:pb-20 px-[5%]">
      {/* ── HERO GRID BACKGROUND ── */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--bd) 1px, transparent 1px),
            linear-gradient(90deg, var(--bd) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      >
        {/* Grid Fade Vignette Effect */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, var(--white) 100%)",
          }}
        />
      </div>

      {/* ── HERO ORBS (BLURRED GLOWS) ── */}
      {/* Orb 1 (Top Right) */}
      <div className="absolute rounded-full pointer-events-none filter blur-[90px] w-125 h-125 -top-37.5 -right-20 bg-[rgba(59,130,196,0.07)] dark:bg-[rgba(91,155,213,0.1)]" />

      {/* Orb 2 (Bottom Left) */}
      <div className="absolute rounded-full pointer-events-none filter blur-[90px] w-87.5 h-87.5 bottom-0 -left-20 bg-[rgba(13,31,60,0.05)] dark:bg-[rgba(30,77,140,0.12)]" />

      {/* ── HERO INNER CONTAINER ── */}
      <div className="relative z-10 container w-full text-center">
        {/* Hero Tag */}
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="inline-flex items-center gap-2 border border-bd2 rounded-full px-4 py-1.5 text-[0.75rem] font-medium text-t2 mb-7 bg-off"
        >
          {/* Pulsing Dot */}
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-custom" />
          A space built for you
        </div>

        {/* Main Heading */}
        <h1
          className="font-fraunces text-[clamp(2.4rem,6vw,4.2rem)] font-light tracking-[-0.04em] line-clamp-none leading-[1.08] text-text mb-4.5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          You don't have to go
          <br /> through {""}
          <em className="italic font-light text-accent font-fraunces">
            this alone.
          </em>
        </h1>

        {/* Subtitle */}
        <p
          data-aos="fade-up"
          data-aos-duration="600"
          className="text-[1.05rem] text-t2 max-w-130 leading-[1.75] font-light mx-auto mb-9 reveal d3"
        >
          A safe space where teens share, heal, and grow together — no judgment,
          no pressure, just genuine community.
        </p>

        {/* Action Buttons */}
        <div
          data-aos="fade-up"
          data-aos-duration="650"
          className="flex gap-3 justify-center flex-wrap mb-10 reveal d4"
        >
          <Link
            href="#discord"
            className="btn-outline bg-navy! text-white! font-medium! hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(13,31,60,0.22)]"
          >
            Join Discord →
          </Link>
          <Link href="#facebook" className="btn-outline">
            Explore Facebook
          </Link>
        </div>

        {/* ── STATS STRIP ── */}
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="flex items-center justify-center gap-0 bg-white dark:bg-dark-card border border-bd rounded-3xl shadow-[0_4px_20px_-2px_rgba(13,31,60,0.08),0_2px_6px_-1px_rgba(13,31,60,0.04)] overflow-hidden max-w-135 mx-auto px-8 py-4"
        >
          {/* Stat Item 1 */}
          <div className="flex-1 text-center relative after:content-[''] after:absolute after:right-0 after:top-[20%] after:h-[60%] after:w-px after:bg-bd">
            <div className="font-fraunces font-light text-[2rem] text-text tracking-[-0.03em] line-height-1">
              1,200+
            </div>
            <div className="text-[0.72rem] text-t3 font-light tracking-[0.04em] uppercase -mt-1.5">
              Members
            </div>
          </div>

          {/* Stat Item 2 */}
          <div className="flex-1 text-center relative after:content-[''] after:absolute after:right-0 after:top-[20%] after:h-[60%] after:w-px after:bg-bd">
            <div className="font-fraunces font-light text-[2rem] text-text tracking-[-0.03em] line-height-1">
              15+
            </div>
            <div className="text-[0.72rem] text-t3 font-light tracking-[0.04em] uppercase -mt-1.5">
              Events Hosted
            </div>
          </div>

          {/* Stat Item 3 */}
          <div className="flex-1 text-center relative">
            <div className="font-fraunces font-light text-[2rem] text-text tracking-[-0.03em] line-height-1">
              20+
            </div>
            <div className="text-[0.72rem] text-t3 font-light tracking-[0.04em] uppercase -mt-1.5">
              Countries
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
