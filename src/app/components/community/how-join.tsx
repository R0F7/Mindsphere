"use client";

import React from "react";

export default function HowToJoin() {
  return (
    <section className="bg-white dark:bg-dark-bg py-25 px-[5%] overflow-x-hidden">
      <div className="container w-full">
        {/* ── HEADER ── */}
        <div
          className="text-center max-w-115 mx-auto mb-16"
          data-aos="fade-up"
        >
          <div className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent mb-3.5">
            Getting started
          </div>
          <h2 className="font-fraunces font-light text-[clamp(2rem,4vw,3rem)] tracking-tight leading-[1.1] text-text mb-3.5 text-nowrap">
            Three steps to <em className="text-accent">belonging</em>
          </h2>
          <p className="text-[0.875rem] text-t2 leading-relaxed font-light">
            Joining is simple. Being part of the community is even simpler.
          </p>
        </div>

        {/* ── STEPS GRID WITH CONNECTOR LINE ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative after:hidden md:after:block after:content-[''] after:absolute after:top-7 after:left-[calc(16.67%+24px)] after:right-[calc(16.67%+24px)] after:h-px after:bg-bd2 after:pointer-events-none after:z-0">
          {/* Step 1 */}
          <div
            className="group relative z-10 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Step Number Circle */}
            <div className="w-14 h-14 rounded-full bg-navy text-white font-fraunces text-[1.1rem] font-light flex items-center justify-center mx-auto mb-5 shadow-[0_4px_16px_rgba(13,31,60,0.2)] relative transition-all duration-300 group-hover:bg-accent group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(59,130,196,0.3)]">
              1{/* Spinning Ring Safeguard */}
              <div className="absolute -inset-1.25 rounded-full border-[1.5px] border-dashed border-bd2 animate-[spin_20s_linear_infinite] pointer-events-none" />
            </div>
            <h3 className="font-fraunces text-[1.15rem] font-normal text-text mb-2.5">
              Join the community
            </h3>
            <p className="text-[0.82rem] text-t2 leading-[1.65] font-light">
              Click the join button and verify your teen status to ensure the
              safety of our team. Takes less than 60 seconds.
            </p>
          </div>

          {/* Step 2 */}
          <div
            className="group relative z-10 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-14 h-14 rounded-full bg-navy text-white font-fraunces text-[1.1rem] font-light flex items-center justify-center mx-auto mb-5 shadow-[0_4px_16px_rgba(13,31,60,0.2)] relative transition-all duration-300 group-hover:bg-accent group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(59,130,196,0.3)]">
              2
              <div className="absolute -inset-1.25 rounded-full border-[1.5px] border-dashed border-bd2 animate-[spin_20s_linear_infinite] pointer-events-none" />
            </div>
            <h3 className="font-fraunces text-[1.15rem] font-normal text-text mb-2.5">
              Introduce yourself
            </h3>
            <p className="text-[0.82rem] text-t2 leading-[1.65] font-light">
              Share as much or as little as you like in our #welcome channel.
              Everyone is here to listen — no judgment, ever.
            </p>
          </div>

          {/* Step 3 */}
          <div
            className="group relative z-10 text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-14 h-14 rounded-full bg-navy text-white font-fraunces text-[1.1rem] font-light flex items-center justify-center mx-auto mb-5 shadow-[0_4px_16px_rgba(13,31,60,0.2)] relative transition-all duration-300 group-hover:bg-accent group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(59,130,196,0.3)]">
              3
              <div className="absolute -inset-1.25 rounded-full border-[1.5px] border-dashed border-bd2 animate-[spin_20s_linear_infinite] pointer-events-none" />
            </div>
            <h3 className="font-fraunces text-[1.15rem] font-normal text-text mb-2.5">
              Start talking & exploring
            </h3>
            <p className="text-[0.82rem] text-t2 leading-[1.65] font-light">
              Jump into voice chats, participate in weekly events, or browse
              resources at your own pace. This is your space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
