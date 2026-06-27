"use client";

import React, { useState } from "react";

const PAST_EVENTS = [
  {
    id: 1,
    emoji: "🧠",
    gradient: "linear-gradient(135deg, #c7d9ee, #e4eef9)",
    month: "Apr",
    day: "20",
    cat: "Workshop",
    title: "Mindfulness for Busy Teens",
    desc: "A hands-on session introducing simple mindfulness techniques that fit into a student's daily routine.",
  },
  {
    id: 2,
    emoji: "🤝",
    gradient: "linear-gradient(135deg, #cde4d0, #e4f5e6)",
    month: "Apr",
    day: "12",
    cat: "Session",
    title: "Peer Support Training Day",
    desc: "Teen volunteers trained in active listening and peer-led support strategies.",
  },
  {
    id: 3,
    emoji: "💬",
    gradient: "linear-gradient(135deg, #d4c8e8, #ece6f5)",
    month: "Mar",
    day: "28",
    cat: "Talk",
    title: "Talking About Anxiety — A Panel Discussion",
    desc: "Five teens and one counsellor in an honest, unscripted conversation about living with anxiety.",
  },
  {
    id: 4,
    emoji: "☀️",
    gradient: "linear-gradient(135deg, #f5e8cc, #fdf3e2)",
    month: "Mar",
    day: "14",
    cat: "Community",
    title: "Spring Wellness Social",
    desc: "An informal meetup for the Mindsphere community — good vibes, new faces, and honest conversations.",
  },
  {
    id: 5,
    emoji: "🎨",
    gradient: "linear-gradient(135deg, #c7d9ee, #e4eef9)",
    month: "Feb",
    day: "20",
    cat: "Workshop",
    title: "Art Therapy",
    desc: "Creative expression for better mental health and relaxation.",
  },
];

export default function PastEvents() {
  const [visibleCount, setVisibleCount] = useState(4);
  const hasMore = visibleCount < PAST_EVENTS.length;

  return (
    <section className="pb-[100px] px-[5%] bg-[var(--white)]" id="past">
      <div className="max-w-[1100px] mx-auto">
        {/* --- HEADER --- */}
        <div
          className="mb-[32px] pt-[60px] border-t border-[var(--border)]"
          data-aos="fade-up"
        >
          <div className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-[var(--t3)] mb-[8px]">
            Archive
          </div>
          <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.6rem)] font-light text-[var(--text)] tracking-[-0.025em]">
            Past <em className="italic text-[var(--accent)]">Events</em>
          </h2>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {PAST_EVENTS.slice(0, visibleCount).map((event, i) => (
            <div
              key={event.id}
              data-aos="fade-up"
              data-aos-delay={100 + i * 50}
              className="h-full"
            >
              <div className="h-full group bg-[var(--off-white)] border border-[var(--border)] rounded-[var(--radius-lg)] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[var(--shadow-md)]">
                <div className="aspect-[4/3] overflow-hidden relative bg-[var(--soft-grey)]">
                  <div
                    className="w-full h-full flex items-center justify-center text-[3rem] transition-transform duration-500 group-hover:scale-[1.06]"
                    style={{ background: event.gradient }}
                  >
                    {event.emoji}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,31,60,0.45)] to-transparent pointer-events-none" />
                  <div className="absolute top-[12px] right-[12px] z-[1] bg-[rgba(13,31,60,0.75)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.15)] rounded-[var(--radius-md)] p-[5px_10px] text-center">
                    <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.08em] text-[rgba(255,255,255,0.75)]">
                      {event.month}
                    </span>
                    <span className="font-fraunces text-[1.1rem] font-light text-white leading-none">
                      {event.day}
                    </span>
                  </div>
                </div>

                <div className="p-[16px]">
                  <div className="text-[0.65rem] font-semibold tracking-[0.08em] uppercase text-[var(--accent)] mb-[6px]">
                    {event.cat}
                  </div>
                  <h3 className="font-fraunces text-[0.95rem] font-normal text-[var(--text)] leading-[1.35] mb-[6px]">
                    {event.title}
                  </h3>
                  <p className="text-[0.77rem] text-[var(--t2)] font-light leading-[1.55] mb-[14px] line-clamp-2">
                    {event.desc}
                  </p>
                  <div className="text-[0.78rem] font-medium text-[var(--text)] inline-flex items-center gap-[5px] transition-[gap] duration-200 group-hover:gap-[8px]">
                    View Recap{" "}
                    <span className="text-[1.1rem] leading-none">›</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- LOAD MORE --- */}
        {hasMore && (
          <div className="text-center pt-[48px]" data-aos="fade-up">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="inline-flex items-center gap-[10px] px-[32px] py-[13px] border border-[var(--strong)] rounded-full font-sans text-[0.88rem] font-normal text-[var(--t2)] bg-[var(--white)] transition-all duration-250 cursor-pointer shadow-[var(--shadow-sm)] hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)] hover:shadow-[var(--shadow-md)] group/btn"
            >
              <svg
                className="w-[15px] h-[15px] transition-transform duration-300 group-hover/btn:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M23 4v6h-6" />
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
              </svg>
              Load More Events
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
