"use client";

import React, { useState, useEffect, useRef } from "react";

// --- Types ---
interface PortfolioItem {
  title: string;
  cat: string;
  desc: string;
  year: string;
  reach: string;
  em: string;
  bg: string;
}

// --- Mock Data (Gradients merged directly for Tailwind arbitrary values) ---
const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "Teen Wellness Summit 2024",
    cat: "Event",
    desc: "Our flagship annual event brought together 200+ teens, counselors, and mental health advocates for workshops, panel discussions, and peer connection. A day that genuinely changed lives.",
    year: "2024",
    reach: "200+ attendees",
    em: "🎤",
    bg: "bg-[linear-gradient(135deg,#0D1F3C_0%,#1E4D8C_100%)]",
  },
  {
    title: "Mental Health Awareness Campaign",
    cat: "Campaign",
    desc: "A month-long digital campaign across social platforms raising awareness about teen mental health. Reached over 50,000 young people with resources and personal stories.",
    year: "2024",
    reach: "50k+ reach",
    em: "📢",
    bg: "bg-[linear-gradient(135deg,#1E4D8C_0%,#3B82C4_100%)]",
  },
  {
    title: "Peer Support Certification Program",
    cat: "Education",
    desc: "Our structured training program certified 47 teen peer supporters across 3 countries. Participants now actively support their school communities with professional-grade skills.",
    year: "2024",
    reach: "47 certified",
    em: "🎓",
    bg: "bg-[linear-gradient(135deg,#0F2D50_0%,#2B6CB8_100%)]",
  },
  {
    title: "Mindfulness in Schools Pilot",
    cat: "Research",
    desc: "A 12-week mindfulness intervention pilot in partnership with 3 secondary schools. Results showed significant reduction in self-reported anxiety scores among participants.",
    year: "2023",
    reach: "3 schools",
    em: "🏫",
    bg: "bg-[linear-gradient(135deg,#1A3560_0%,#5B9BD5_100%)]",
  },
  {
    title: "Community Safe Space Launch",
    cat: "Platform",
    desc: "The launch of our moderated online community space — a 24/7 peer support environment that has since supported over 1,200 active members with zero serious incidents.",
    year: "2023",
    reach: "1.2k members",
    em: "💬",
    bg: "bg-[linear-gradient(135deg,#0D1F3C_0%,#2B6CB8_60%,#5B9BD5_100%)]",
  },
  {
    title: "Annual Impact Report 2023",
    cat: "Report",
    desc: "Our comprehensive annual impact report documenting everything Mindsphere achieved in 2023 — from user outcomes to community growth, told through data and real stories.",
    year: "2023",
    reach: "Full report",
    em: "📊",
    bg: "bg-[linear-gradient(135deg,#2B6CB8_0%,#0D1F3C_100%)]",
  },
];

export default function PortfolioSection() {
  const [carouselPos, setCarouselPos] = useState(0);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [visibleCards, setVisibleCards] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);

  // --- Carousel Responsive Logic ---
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) setVisibleCards(1);
      else if (window.innerWidth <= 960) setVisibleCards(2);
      else setVisibleCards(4);
      setCarouselPos(0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- Disable Body Scroll when Modal is Open ---
  useEffect(() => {
    if (selectedItem) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  const slide = (dir: number) => {
    const maxSlide = Math.max(0, PORTFOLIO_ITEMS.length - visibleCards);
    setCarouselPos((prev) => Math.max(0, Math.min(prev + dir, maxSlide)));
  };

  return (
    <section
      className="bg-white py-20 border-t border-bd overflow-hidden"
      id="portfolio"
    >
      <div className="max-w-[1200px] mx-auto px-[5%]">
        {/* --- HEADER --- */}
        <div
          className="flex items-end justify-between mb-11 flex-wrap gap-4"
          data-aos="fade-up"
        >
          <div className="port-header-l">
            <div className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent mb-2">
              Our work
            </div>
            <h2 className="font-fraunces text-[clamp(1.6rem,3vw,2.4rem)] font-light tracking-[-.025em] text-text leading-[1.15]">
              Projects & <em className="italic text-accent">impact</em>
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => slide(-1)}
              disabled={carouselPos === 0}
              className="w-10 h-10 rounded-full border border-bd2 bg-white flex items-center justify-center text-[0.85rem] text-t2 cursor-pointer transition-all duration-200 shadow-sh1 hover:bg-navy hover:text-white hover:border-navy disabled:opacity-30 disabled:pointer-events-none"
            >
              ←
            </button>
            <button
              onClick={() => slide(1)}
              disabled={carouselPos >= PORTFOLIO_ITEMS.length - visibleCards}
              className="w-10 h-10 rounded-full border border-bd2 bg-white flex items-center justify-center text-[0.85rem] text-t2 cursor-pointer transition-all duration-200 shadow-sh1 hover:bg-navy hover:text-white hover:border-navy disabled:opacity-30 disabled:pointer-events-none"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* --- CAROUSEL WRAPPER --- */}
      <div className="relative -mx-[5%] px-[5%] overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-5 transition-transform duration-500 ease-in-out will-change-transform"
          style={{
            transform: `translateX(calc(-${carouselPos * (100 / visibleCards)}% - ${carouselPos * (20 / visibleCards)}px))`,
          }}
        >
          {PORTFOLIO_ITEMS.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelectedItem(item)}
              data-aos="fade-up"
              data-aos-delay={i * 70}
              className={`group rc relative shrink-0 aspect-3/4 rounded-(--rl) overflow-hidden cursor-pointer
                         transition-property[box-shadow,transform] duration-300 shadow-sh2 
                         hover:shadow-(--sh4) hover:scale-[1.02] ${item.bg}`}
              style={{
                flex: `0 0 calc(${100 / visibleCards}% - ${(20 * (visibleCards - 1)) / visibleCards}px)`,
              }}
            >
              <div className="w-full h-full flex items-center justify-center text-[4rem] shrink-0 transition-transform duration-400 ease-[ease] group-hover:scale-[1.06]">
                {item.em}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(13,31,60,0.88)_0%,rgba(13,31,60,0.4)_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-[0.35s] flex flex-col justify-end p-5">
                <div className="font-fraunces text-[1rem] font-normal text-white leading-[1.3] mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-[0.35s]">
                  {item.title}
                </div>
                <div className="text-[0.75rem] text-[rgba(255,255,255,0.65)] font-light translate-y-2 group-hover:translate-y-0 transition-transform duration-[0.35s] delay-[0.05s]">
                  {item.cat} · {item.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL OVERLAY --- */}
      <div
        className={`fixed inset-0 z-2000 bg-[rgba(0,0,0,0.55)] backdrop-blur-md flex items-center justify-center p-5 transition-all duration-[0.35s] ${
          selectedItem ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {selectedItem && (
          <div
            className={`bg-white rounded-(--rx) max-w-[780px] w-full max-h-[90vh] overflow-hidden grid grid-cols-1 md:grid-cols-2 relative shadow-(--sh4) border border-bd transition-transform animate-in fade-in zoom-in-95 duration-300 ${
              selectedItem
                ? "translate-y-0 scale-100"
                : "translate-y-6 scale-[0.97]"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-bd2 bg-white flex items-center justify-center text-[1rem] text-t3 cursor-pointer hover:bg-soft transition-all duration-200 z-1 backdrop-blur-sm"
            >
              ✕
            </button>

            {/* Modal Image/Visual */}
            <div
              className={`aspect-[1/1.2] flex items-center justify-center text-[5rem] ${selectedItem.bg}`}
            >
              {selectedItem.em}
            </div>

            {/* Modal Body */}
            <div className="p-9 overflow-y-auto flex flex-col justify-center">
              <div className="pm-cat text-[0.7rem] font-medium tracking-widest uppercase text-accent mb-3">
                {selectedItem.cat}
              </div>
              <h3 className="pm-title font-fraunces text-[1.5rem] font-normal text-text tracking-[-0.02em] leading-[1.2] mb-3.5">
                {selectedItem.title}
              </h3>
              <p className="pm-desc text-[0.875rem] text-t2 leading-[1.7] font-light mb-6">
                {selectedItem.desc}
              </p>

              <div className="pm-meta flex flex-col gap-2 py-4 border-y border-bd mb-5">
                <div className="flex items-center gap-2 text-[0.8rem]">
                  <span className="text-t3 font-light min-w-[70px]">Year</span>
                  <span className="text-text font-normal">
                    {selectedItem.year}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[0.8rem]">
                  <span className="text-t3 font-light min-w-[70px]">Reach</span>
                  <span className="text-text font-normal">
                    {selectedItem.reach}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[0.8rem]">
                  <span className="text-t3 font-light min-w-[70px]">
                    Category
                  </span>
                  <span className="text-text font-normal">
                    {selectedItem.cat}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
