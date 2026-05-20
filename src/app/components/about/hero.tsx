import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="min-h-[60vh] flex items-center pt-35 px-[5%] pb-20 relative overflow-hidden bg-white"
      id="top"
    >
      {/* --- BACKGROUND GRID & RADIAL FADE --- */}
      <div className="absolute inset-0 opacity-50 pointer-events-none bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-size-[60px_60px] after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,var(--white)_100%)]" />

      {/* --- GLOWING ORBS --- */}
      {/* Orb 1 */}
      <div className="absolute rounded-full pointer-events-none blur-[90px] w-125 h-125 bg-[rgba(59,130,196,0.07)] dark:bg-[rgba(91,155,213,0.1)] -top-37.5 -right-25" />
      {/* Orb 2 */}
      <div className="absolute rounded-full pointer-events-none blur-[90px] w-87.5 h-87.5 bg-[rgba(13,31,60,0.05)] dark:bg-[rgba(30,77,140,0.12)] bottom-0 -left-20" />

      {/* --- INNER CONTENT --- */}
      <div className="relative z-1 container w-full">
        {/* Breadcrumb */}
        <div
          className="flex items-center gap-2 text-[0.78rem] text-t3 mb-6"
          data-aos="fade-up"
        >
          <Link
            href="/"
            className="text-t2 transition-colors duration-200 hover:text-text"
          >
            Home
          </Link>
          <span className="opacity-40">/</span>
          <span className="opacity-40">About</span>
        </div>

        {/* Tag */}
        <div
          className="inline-flex items-center gap-2 border border-bd2 rounded-full py-1.5 px-4 text-[0.75rem] font-medium text-t2 mb-7 bg-off-white"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Custom pulse animation dot */}
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-custom" />
          Our story
        </div>

        {/* Heading */}
        <h1
          className="font-fraunces text-[clamp(3rem,7vw,6.5rem)] font-light leading-[1.05] tracking-[-0.04em] text-text mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We didn't wait for
          <br />
          someone to{" "}
          <em className="italic text-accent">build this.</em>
          <br />
          So we did.
        </h1>

        {/* Subtitle */}
        <p
          className="text-[clamp(1rem,1.4vw,1.1rem)] text-t2 max-w-140 leading-[1.75] font-light"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Mindsphere started as a quiet conversation between teens who felt
          unseen. It grew into something bigger — a platform, a community, a
          movement. We are teenagers who decided mental health deserved better
          than stigma and silence.
        </p>
      </div>
    </section>
  );
}
