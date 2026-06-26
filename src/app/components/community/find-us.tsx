"use client";

import React from "react";
import Link from "next/link";

export default function FindUs() {
  return (
    <>
      {/* ── 1. PLATFORMS SECTION ── */}
      <section
        id="platforms"
        className="bg-off dark:bg-dark-bg py-25 px-[5%] overflow-x-hidden"
      >
        <div className="container w-full">
          {/* Section Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            {/* .lbl */}
            <div className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-[var(--accent)] mb-3.5">
              Join the conversation
            </div>
            {/* .ttl & .ttl em */}
            <h2 className="font-fraunces font-light text-[clamp(2rem,4vw,3rem)] tracking-[-0.025em] leading-[1.1] text-[var(--text)] mb-3.5">
              Find us{" "}
              <em className="not-italic italic text-[var(--accent)]">
                where you are
              </em>
            </h2>
          </div>

          {/* Platforms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Discord Card */}
            <div data-aos="fade-right" data-aos-delay="80">
              <div
                id="discord"
                className="group relative overflow-hidden bg-white dark:bg-dark-card border border-bd rounded-(--rx) p-10 transition-all duration-350 hover:-translate-y-1 hover:shadow-sh3"
              >
                <div className="absolute top-0 left-0 right-0 h-0.75 rounded-t-(--rx) bg-linear-to-r from-[#5865F2] to-[#7289DA] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start justify-between mb-5">
                  <div className="w-13 h-13 rounded-(--rl) flex items-center justify-center text-[1.4rem] bg-soft">
                    💬
                  </div>

                  <span className="text-[0.65rem] font-medium tracking-widest uppercase padding-[4px_10px] px-2.5 py-1 rounded-(--rf) bg-[rgba(239,68,68,0.08)] text-[#DC2626]">
                    Most Active
                  </span>
                </div>

                <h3 className="font-fraunces text-[1.6rem] font-normal text-text mb-2.5">
                  Discord
                </h3>
                <p className="text-[0.875rem] text-t2 line-height-[1.7] leading-relaxed font-light mb-7">
                  Our primary hub for real-time connection. 24/7 peer support,
                  gaming nights, and dedicated safe spaces for sharing your
                  journey — all in one place. Over 1,200 teens and counting.
                </p>

                <Link
                  href="#"
                  className="text-[0.85rem] font-medium px-6 py-2.75 rounded-(--rf) inline-flex items-center gap-2 transition-all duration-220 bg-navy text-white hover:bg-[#5865F2] hover:shadow-[0_4px_16px_rgba(88,101,242,0.3)]"
                >
                  Join Now →
                </Link>
              </div>
            </div>
            
            {/* Facebook Card */}
            <div data-aos="fade-left" data-aos-delay="80">
              <div
                id="facebook"
                className="group relative overflow-hidden bg-white dark:bg-dark-card border border-bd rounded-(--rx) p-10 transition-all duration-350 hover:-translate-y-1 hover:shadow-sh3"
              >
                <div className="absolute top-0 left-0 right-0 h-0.75 rounded-t-(--rx) bg-linear-to-r from-[#1877F2] to-[#42A5F5] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {/* Card Top */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-13 h-13 rounded-(--rl) flex items-center justify-center text-[1.4rem] bg-soft">
                    👥
                  </div>
                  {/* .plat-badge */}
                  <span className="text-[0.65rem] font-medium tracking-widest uppercase px-2.5 py-1 rounded-(--rf) bg-(--accent-l) text-accent">
                    Community
                  </span>
                </div>

                {/* Card Content */}
                <h3 className="font-fraunces text-[1.6rem] font-normal text-text mb-2.5">
                  Facebook
                </h3>
                <p className="text-[0.875rem] text-t2 line-height-[1.7] leading-relaxed font-light mb-7">
                  A more structured space for community announcements, parent
                  resources, and long-form story sharing within our curated
                  groups. Great for staying updated.
                </p>

                {/* .plat-btn.fb */}
                <Link
                  href="#"
                  className="text-[0.85rem] font-medium px-6 py-2.75 rounded-(--rf) inline-flex items-center gap-2 transition-all duration-220 border border-bd2 text-text bg-transparent hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]"
                >
                  Visit Group →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
