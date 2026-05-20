"use client";

import React from "react";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--white)] py-[120px] px-[5%] pb-[88px] text-center border-b border-[var(--bd)]">
      
      {/* ─── BACKGROUND GRID ─── */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.45]" 
        style={{
          backgroundImage: `linear-gradient(var(--bd) 1px, transparent 1px), linear-gradient(90deg, var(--bd) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_85%_at_50%_50%,transparent_35%,var(--white)_100%)]" />
      </div>

      {/* ─── DECORATIVE ORBS ─── */}
      {/* Orb 1 */}
      <div className="absolute pointer-events-none blur-[90px] w-[480px] h-[480px] rounded-full top-[-180px] right-[-80px] bg-[rgba(59,130,196,0.07)] dark:bg-[rgba(91,155,213,0.1)]" />
      {/* Orb 2 */}
      <div className="absolute pointer-events-none blur-[90px] w-[320px] h-[320px] rounded-full bottom-[-60px] left-[-60px] bg-[rgba(13,31,60,0.04)] dark:bg-[rgba(30,77,140,0.12)]" />

      <div className="max-w-[720px] mx-auto relative z-[1]">
        {/* Tag */}
        <div 
          data-aos="fade-up"
          className="inline-flex items-center gap-[8px] border border-[var(--bd2)] rounded-full px-[16px] py-[6px] text-[0.75rem] font-medium text-[var(--t2)] bg-[var(--off)] mb-[24px]"
        >
          <span className="w-[6px] h-[6px] rounded-full bg-[var(--accent)] animate-pulse-custom" />
          Community insights
        </div>

        {/* Title */}
        <h1 
          data-aos="fade-up" 
          data-aos-delay="100"
          className="font-fraunces text-[clamp(2.4rem,6vw,4.5rem)] font-light tracking-[-0.04em] leading-[1.05] text-[var(--text)] mb-[20px]"
        >
          Explore our <em className="italic text-[var(--accent)] font-serif">Blog</em>
        </h1>

        {/* Subtitle */}
        <p 
          data-aos="fade-up" 
          data-aos-delay="200"
          className="text-[1.05rem] text-[var(--t2)] font-light leading-[1.75] max-w-[520px] mx-auto mb-[44px]"
        >
          Discover the latest stories, tools, and updates from our growing community of teens building something real together.
        </p>

        {/* Stats Strip */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="300"
          className="inline-flex items-center bg-[var(--white)] border border-[var(--bd)] rounded-[var(--rx)] shadow-[var(--sh2)] overflow-hidden"
        >
          <StatBox number="120+" label="Articles" />
          <StatBox number="8" label="Topics" isLast={false} />
          <StatBox number="Weekly" label="Updates" isLast={true} />
        </div>
      </div>

      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .4; transform: scale(1.5); }
        }
      `}</style>
    </section>
  );
}

// ─── Stat Box Component ───
const StatBox = ({ number, label, isLast = false }: { number: string; label: string; isLast?: boolean }) => (
  <div className={`px-[32px] py-[18px] text-center relative ${!isLast ? "after:content-[''] after:absolute after:right-0 after:top-[20%] after:h-[60%] after:w-[1px] after:bg-[var(--bd)]" : ""}`}>
    <div className="font-fraunces text-[1.6rem] font-light text-[var(--text)] tracking-[-0.03em] leading-none mb-[3px]">
      {number}
    </div>
    <div className="text-[0.68rem] font-normal text-[var(--t3)] tracking-[0.06em] uppercase">
      {label}
    </div>
  </div>
);