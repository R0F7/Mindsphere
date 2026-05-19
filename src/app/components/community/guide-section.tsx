"use client";

import React, { useState } from "react";

type Platform = "discord" | "facebook";

export default function GuideSection() {
  const [activeTab, setActiveTab] = useState<Platform>("discord");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const guideLabels: Record<Platform, string> = {
    discord: "▶ How to join our Discord server",
    facebook: "▶ How to join our Facebook group",
  };

  const handlePlayVideo = () => {
    setIsPlaying(true);

    setTimeout(() => {
      setIsPlaying(false);
    }, 300);
  };

  const handleTabChange = (platform: Platform) => {
    setActiveTab(platform);
    setIsPlaying(false);
  };

  return (
    <section className="bg-off py-25 px-[5%] overflow-x-hidden">
      <div className="container w-full">
        {/* ── HEADER & TABS ── */}
        <div className="text-center mb-10" data-aos="fade-up">
          <div className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent mb-2.5">
            Getting oriented
          </div>
          <h2 className="font-fraunces font-light text-[clamp(2rem,4vw,3rem)] tracking-tight leading-[1.1] text-text mb-3.5">
            New here? <em className="italic text-accent">Watch this first.</em>
          </h2>
          <p className="text-[0.875rem] text-t2 leading-relaxed font-light max-w-115 mx-auto mb-8">
            A quick guide to finding your feet in the Mindsphere community. Pick
            your platform.
          </p>

          {/* Platform Switcher Tabs */}
          <div className="inline-flex gap-1 p-1.5 bg-soft rounded-(--rf) mx-auto">
            <button
              onClick={() => handleTabChange("discord")}
              className={`text-[0.82rem] px-5 py-2 rounded-(--rf) transition-all duration-220 cursor-pointer ${
                activeTab === "discord"
                  ? "bg-white text-text font-medium shadow-[0_2px_8px_rgba(13,31,60,0.08)]"
                  : "bg-transparent text-t2 font-normal hover:text-text"
              }`}
            >
              Discord Guide
            </button>
            <button
              onClick={() => handleTabChange("facebook")}
              className={`text-[0.82rem] px-5 py-2 rounded-(--rf) transition-all duration-220 cursor-pointer ${
                activeTab === "facebook"
                  ? "bg-white text-text font-medium shadow-[0_2px_8px_rgba(13,31,60,0.08)]"
                  : "bg-transparent text-t2 font-normal hover:text-text"
              }`}
            >
              Facebook Group
            </button>
          </div>
        </div>

        {/* ── VIDEO WRAPPER PLAYBOX ── */}
        <div
          onClick={handlePlayVideo}
          className="max-w-180 mx-auto rounded-(--rx) overflow-hidden border border-bd shadow-sh3 relative cursor-pointer bg-navy group"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {/* Simulated Video Thumbnail / Player */}
          <div
            className={`w-full aspect-video bg-linear-to-br from-[#0D1F3C] via-[#1E4D8C] to-[#2B6CB8] flex items-center justify-center relative overflow-hidden transition-opacity duration-300 ${
              isPlaying ? "opacity-70" : "opacity-100"
            }`}
          >
            {/* Visual Soft Glow Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(59,130,196,0.15)_0%,transparent_70%)] pointer-events-none" />

            {/* Animated Pulsing Rings */}
            <div className="absolute w-30 h-30 rounded-full border border-[rgba(255,255,255,0.1)] animate-[ping_2.5s_ease-in-out_infinite] opacity-60 pointer-events-none" />
            <div className="absolute w-40 h-40 rounded-full border border-[rgba(255,255,255,0.07)] animate-[ping_2.5s_ease-in-out_infinite] [animation-delay:0.5s] opacity-40 pointer-events-none" />
            <div className="absolute w-50 h-50 rounded-full border border-[rgba(255,255,255,0.04)] animate-[ping_2.5s_ease-in-out_infinite] [animation-delay:1s] opacity-20 pointer-events-none" />

            {/* Play/Pause Button */}
            <div className="w-18 h-18 rounded-full bg-white flex items-center justify-center relative z-10 shadow-[0_8px_32px_rgba(13,31,60,0.3)] transition-all duration-250 group-hover:scale-108 group-hover:bg-white">
              {isPlaying ? (
                /* Pause Icon Symbol */
                <svg className="w-6 h-6 fill-navy" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                /* Play Icon Symbol */
                <svg className="w-6 h-6 fill-navy  ml-1" viewBox="0 0 24 24">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </div>

            {/* Floating Dynamic Video Label */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[rgba(13,31,60,0.8)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-(--rf) padding px-4 py-2 text-[0.78rem] text-[rgba(255,255,255,0.8)] whitespace-nowrap select-none transition-all duration-200">
              {guideLabels[activeTab]}
            </div>
          </div>
        </div>

        {/* ── FOOTER NOTE ── */}
        <p
          className="text-center mt-5 text-[0.82rem] text-t3 font-light"
          data-aos="fade-up"
          data-aos-delay="160"
        >
          Watch time: ~2 minutes · No account required to watch
        </p>
      </div>
    </section>
  );
}
