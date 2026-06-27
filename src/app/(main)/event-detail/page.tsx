"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function EventDetails() {
  // Countdown State
  const [timeLeft, setTimeLeft] = useState({
    days: 18,
    hrs: 7,
    min: 42,
    sec: 5,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.sec > 0) return { ...prev, sec: prev.sec - 1 };
        if (prev.min > 0) return { ...prev, min: 59, sec: 59, hrs: prev.hrs };
        return prev; // Simplified for demo
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-off min-h-screen">
      {/* ─── BREADCRUMB ─── */}
      <nav className="pt-[100px] px-[5%]">
        <div className="container flex items-center gap-[8px] text-[0.78rem] text-t3 font-light pb-[24px] border-b border-bd">
          <Link
            href="/"
            className="text-t2 hover:text-accent transition-colors"
          >
            Home
          </Link>
          <span className="text-[0.7rem] opacity-50">›</span>
          <Link
            href="/events"
            className="text-t2 hover:text-accent transition-colors"
          >
            Events
          </Link>
          <span className="text-[0.7rem] opacity-50">›</span>
          <span className="text-text font-normal">
            Anxiety First Aid Workshop
          </span>
        </div>
      </nav>

      {/* ─── COVER BANNER ─── */}
      <section className="px-[5%] pt-[28px]">
        <div className="container">
          <div className="w-full h-[340px] rounded-[var(--rx)] overflow-hidden relative group">
            <div className="w-full h-full flex items-center justify-center text-[6rem] relative bg-gradient-to-br from-[#b8d0e8] via-[#d8eaf8] to-[#a8c4de] after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-[rgba(13,31,60,0.3)]">
              🌿
              <div className="absolute top-[20px] left-[20px] z-[1] flex gap-[8px]">
                <span className="text-[0.68rem] font-semibold tracking-wider uppercase px-[12px] py-[5px] rounded-full backdrop-blur-md border border-white/25 bg-[#0d1f3c]/70 text-white">
                  Online Workshop
                </span>
                <span className="text-[0.68rem] font-semibold tracking-wider uppercase px-[12px] py-[5px] rounded-full backdrop-blur-md border border-white/25 bg-[#10b981]/80 text-white">
                  Open for Registration
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAIN LAYOUT ─── */}
      <main className="px-[5%] pb-14 md:pb-[80px] pt-[28px]">
        <div className="container grid grid-cols-1 lg:grid-cols-[1fr_340px] pb-14 md:pb-[80px] gap-[28px] items-start">
          {/* LEFT: MAIN CONTENT */}
          <div
            data-aos="fade-up"
            className="bg-white border border-bd rounded-[var(--rx)] p-[36px_20px] sm:p-[36px_40px] shadow-sh1"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-[8px] mb-[16px]">
              <span className="text-[0.68rem] font-semibold uppercase tracking-wider px-[11px] py-[4px] rounded-full bg-amber-500/10 text-amber-700 border border-amber-500/25 dark:text-amber-300">
                Workshop
              </span>
              <span className="text-[0.68rem] font-semibold uppercase tracking-wider px-[11px] py-[4px] rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 dark:text-emerald-400">
                ● Open for Registration
              </span>
            </div>

            <h1 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.6rem)] font-light tracking-tight leading-[1.15] text-text mb-[28px]">
              Anxiety First Aid — <br />
              <em className="italic text-accent">A Peer Support Workshop</em>
            </h1>

            {/* Quick Meta Strip */}
            <div className="flex flex-wrap gap-[16px] p-[18px_20px] bg-off border border-[var(--bd)] rounded-[var(--rl)] mb-[36px]">
              <MetaItem icon="📅" label="Date" value="May 8, 2026" />
              <div className="hidden md:block w-[1px] h-[32px] bg-[var(--bd2)]" />
              <MetaItem icon="🕙" label="Time" value="10:00 AM – 12:00 PM" />
              <div className="hidden md:block w-[1px] h-[32px] bg-[var(--bd2)]" />
              <MetaItem icon="📍" label="Location" value="Online · Zoom" />
              <div className="hidden md:block w-[1px] h-[32px] bg-[var(--bd2)]" />
              <MetaItem icon="🎟" label="Spots" value="18 left" />
            </div>

            {/* Attendance Stack */}
            <div className="flex items-center gap-[10px] mb-[32px]">
              <div className="flex shrink-0">
                {["R", "A", "N", "T", "M"].map((initial, i) => (
                  <div
                    key={i}
                    className={`w-[28px] h-[28px] rounded-full border-2 border-white flex items-center justify-center text-[0.6rem] bg-accent text-white font-bold -ml-[8px] first:ml-0 av-c${i + 1}`}
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <p className="text-[0.82rem] text-t2 font-light">
                <strong>67 people</strong> are registered for this event
              </p>
            </div>

            <hr className="border-[var(--bd)] my-[32px]" />

            {/* Prose Content */}
            <div className="space-y-[36px]">
              <ProseSection title="Overview">
                <p>
                  Anxiety doesn't wait for the right moment. It shows up in
                  classrooms, before exams, and sometimes for no clear reason at
                  all. In this two-hour peer-led session, we walk you through
                  evidence-based techniques drawn from CBT and mindfulness
                  research.
                </p>
              </ProseSection>

              <hr className="border-[var(--bd)]" />

              <ProseSection title="Why Attend?">
                <ul className="space-y-[10px]">
                  <WhyItem text="Learn the 5-4-3-2-1 grounding technique in real time." />
                  <WhyItem text="Understand and interrupt the anxiety spiral." />
                  <WhyItem text="Connect with other teens — you're not alone." />
                </ul>
              </ProseSection>

              <hr className="border-bd" />

              {/* Organiser */}
              <div className="flex items-center gap-[14px] p-[16px_20px] bg-off border border-bd rounded-[var(--rl)]">
                <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--navy-mid)] flex items-center justify-center text-white font-bold text-[0.82rem]">
                  MS
                </div>
                <div>
                  <div className="text-[0.68rem] font-medium uppercase tracking-wider text-t3">
                    Organised by
                  </div>
                  <div className="text-[0.88rem] font-bold text-[var(--text)]">
                    Mindsphere Events Team
                  </div>
                  <div className="text-[0.75rem] text-t2 font-light">
                    Peer Support Programme
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: SIDEBAR */}
          <aside className="lg:sticky lg:top-[90px] flex flex-col gap-[16px]">
            {/* Info Card */}
            <div
              data-aos="fade-up"
              className="bg-white border border-bd rounded-[var(--rx)] shadow-sh1 overflow-hidden"
            >
              <SidebarRow icon="📅" label="Date" value="May 8, 2026" />
              <SidebarRow icon="🕙" label="Time" value="10:00 AM – 12:00 PM" />
              <SidebarRow
                icon="👥"
                label="Spots"
                value={
                  <div className="flex items-center gap-1.5">
                    18 left <br />
                    <span className="inline-flex items-center gap-1 text-[0.72rem] font-medium text-amber-700 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                      ⚠ Filling up fast
                    </span>
                  </div>
                }
              />
            </div>

            {/* Registration Card */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-white border border-bd rounded-[var(--rx)] shadow-sh1 p-[24px]"
            >
              <div className="text-[0.68rem] font-medium uppercase tracking-widest text-t3 mb-[4px]">
                Registration
              </div>
              <div className="flex items-baseline gap-1 mb-[14px]">
                <span className="font-fraunces text-[2rem] text-emerald-700 dark:text-emerald-400">
                  Free
                </span>
                <span className="text-[0.82rem] text-t3">
                  — open to all teens
                </span>
              </div>

              {/* Countdown */}
              <div className="bg-off border border-bd rounded-[var(--rm)] p-[12px_16px] mb-[14px]">
                <div className="text-[0.65rem] font-medium uppercase tracking-widest text-t3 mb-[8px]">
                  Starting in
                </div>
                <div className="flex items-center gap-1">
                  <CDUnit val={timeLeft.days} unit="Days" />
                  <span className="font-fraunces text-[1.3rem] text-t3 px-1 mt-[-6px]">
                    :
                  </span>
                  <CDUnit val={timeLeft.hrs} unit="Hrs" />
                  <span className="font-fraunces text-[1.3rem] text-t3 px-1 mt-[-6px]">
                    :
                  </span>
                  <CDUnit val={timeLeft.min} unit="Min" />
                  <span className="font-fraunces text-[1.3rem] text-t3 px-1 mt-[-6px]">
                    :
                  </span>
                  <CDUnit val={timeLeft.sec} unit="Sec" />
                </div>
              </div>

              <button className="w-full py-[14px] bg-[var(--navy)] dark:bg-[var(--accent)] text-white rounded-[var(--rm)] font-medium flex items-center justify-center gap-2 transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg group cursor-pointer">
                Register Now
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </button>
              <div className="text-center text-[0.7rem] text-[var(--t3)] mt-[10px]">
                🔒 Safe & free registration
              </div>
            </div>

            {/* Support card */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-white border border-bd rounded-[var(--rx)] shadow-sh1 p-[24px]"
            >
              <div className="">
                {/* Header */}
                <div className="support-header flex items-center gap-[10px] mb-[10px]">
                  <div className="support-icon-wrap w-[36px] h-[36px] rounded-full bg-[var(--accent-l)] flex items-center justify-center text-[0.9rem]">
                    💬
                  </div>
                  <div className="support-card-label text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-[var(--accent)]">
                    Support
                  </div>
                </div>

                {/* Content */}
                <div className="support-card-title font-fraunces text-lg font-normal text-[var(--text)] mb-[4px]">
                  Need assistance?
                </div>
                <div className="support-card-sub text-[0.78rem] text-[var(--t2)] font-light leading-[1.55] mb-[16px]">
                  Have questions about the event or registration? Our team is
                  here to help guide you.
                </div>

                {/* Buttons */}
                <div className="support-btns flex gap-[8px]">
                  <button className="support-btn flex-1 px-[12px] py-[9px] border border-[var(--bd2)] rounded-sm text-[0.90rem] font-medium text-[var(--text)] bg-[var(--white)] flex items-center justify-center gap-[6px] transition-all duration-200 hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)] cursor-pointer">
                    ✉ Email
                  </button>
                  <button className="support-btn flex-1 px-[12px] py-[9px] border border-[var(--bd2)] rounded-sm text-[0.90rem] font-medium text-[var(--text)] bg-[var(--white)] flex items-center justify-center gap-[6px] transition-all duration-200 hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)] cursor-pointer">
                    💬 Chat
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <PastEvents />
      </main>
    </div>
  );
}

// ─── HELPER COMPONENTS ───

const MetaItem = ({ icon, label, value }: any) => (
  <div className="flex items-center gap-[9px]">
    <div className="w-[34px] h-[34px] rounded-[var(--r)] bg-[var(--accent-l)] flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <div className="text-[0.68rem] font-medium uppercase tracking-wider text-[var(--t3)]">
        {label}
      </div>
      <div className="text-[0.85rem] font-semibold text-[var(--text)]">
        {value}
      </div>
    </div>
  </div>
);

const ProseSection = ({ title, children }: any) => (
  <div>
    <h3 className="font-fraunces text-[1.2rem] font-normal text-[var(--text)] mb-[12px]">
      {title}
    </h3>
    <div className="text-[0.9rem] text-[var(--t2)] leading-[1.75] font-light space-y-4">
      {children}
    </div>
  </div>
);

const WhyItem = ({ text }: { text: string }) => (
  <li className="flex gap-[12px] text-[0.875rem] text-[var(--t2)] font-light">
    <div className="w-[20px] h-[20px] rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0 mt-0.5 text-[0.6rem] text-emerald-700 font-bold">
      ✓
    </div>
    {text}
  </li>
);

const SidebarRow = ({ icon, label, value }: any) => (
  <div className="flex items-center gap-[14px] p-[18px_22px] border-b border-[var(--bd)] last:border-0">
    <div className="w-[36px] h-[36px] rounded-[var(--r)] bg-accent-l flex items-center justify-center shrink-0 text-[0.9rem]">
      {icon}
    </div>
    <div>
      <div className="text-[0.68rem] font-medium uppercase tracking-wider text-t3">
        {label}
      </div>
      <div className="text-[0.92rem] font-semibold text-[var(--text)] leading-tight">
        {value}
      </div>
    </div>
  </div>
);

const CDUnit = ({ val, unit }: any) => (
  <div className="text-center">
    <span className="font-fraunces text-[1.5rem] font-light text-[var(--text)] block leading-none">
      {val.toString().padStart(2, "0")}
    </span>
    <span className="text-[0.6rem] font-medium text-[var(--t3)] uppercase tracking-wider">
      {unit}
    </span>
  </div>
);

const pastEvents = [
  {
    id: 1,
    emoji: "🧘",
    category: "Workshop",
    date: "Apr 20",
    duration: "2 Hours",
    title: "Mindfulness for Busy Teens",
    desc: "A hands-on session introducing simple mindfulness techniques that fit into a student's daily routine without adding more pressure.",
    gradient: "linear-gradient(135deg, #cde4d0, #e4f5e6)",
  },
  {
    id: 2,
    emoji: "🤝",
    category: "Session",
    date: "Apr 12",
    duration: "Full Day",
    title: "Peer Support Training Day",
    desc: "Teen volunteers trained in active listening and peer-led emotional support strategies. Certificate of completion issued.",
    gradient: "linear-gradient(135deg, #d4c8e8, #ece6f5)",
  },
  {
    id: 3,
    emoji: "💬",
    category: "Talk",
    date: "Mar 28",
    duration: "1.5 Hours",
    title: "Breaking the Stigma — A Teen Panel",
    desc: "Five teens and one counsellor in an honest, unscripted conversation about living with anxiety, depression, and asking for help.",
    gradient: "linear-gradient(135deg, #f5e8cc, #fdf3e2)",
  },
];

const PastEvents = () => {
  return (
    <section className="bg-[var(--off)]">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div
          className="flex items-center justify-between pt-[48px] border-t border-[var(--bd)] mb-[28px] flex-wrap gap-[12px]"
          data-aos="fade-up"
        >
          <h2 className="font-fraunces text-[1.6rem] font-light text-[var(--text)] tracking-[-0.02em]">
            Past Events
          </h2>
          {/* Navigation buttons if needed in future */}
          {/* <div className="flex gap-[8px]">
            <button className="w-[38px] h-[38px] rounded-full border border-[var(--bd2)] bg-[var(--white)] flex items-center justify-center text-t2 transition-all hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)] shadow-[var(--sh1)] cursor-pointer">
              ←
            </button>
            <button className="w-[38px] h-[38px] rounded-full border border-[var(--bd2)] bg-[var(--white)] flex items-center justify-center text-t2 transition-all hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)] shadow-[var(--sh1)] cursor-pointer">
              →
            </button>
          </div> */}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {pastEvents.map((event, index) => (
            <div
              key={event.id}
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
            >
              <div className="group bg-[var(--white)] border border-bd rounded-[var(--rl)] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-[5px] hover:shadow-sh3">
                {/* Image Area */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div
                    className="w-full h-full flex items-center justify-center text-[3rem] transition-transform duration-500 group-hover:scale-[1.06] relative"
                    style={{ background: event.gradient }}
                  >
                    {event.emoji}
                  </div>
                  {/* Overlay Texture */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,31,60,0.35)] to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-[12px] left-[12px] z-[1] text-[0.63rem] font-semibold tracking-wider uppercase px-[10px] py-[4px] rounded-full bg-[#0d1f3c]/70 text-white backdrop-blur-md border border-white/15">
                    {event.category}
                  </div>
                </div>

                {/* Body */}
                <div className="p-[18px]">
                  <div className="flex items-center gap-[6px] text-[0.72rem] text-t3 font-light mb-[8px]">
                    <span>{event.date}</span>
                    <span className="w-[3px] h-[3px] rounded-full bg-[var(--t3)]" />
                    <span>{event.duration}</span>
                  </div>
                  <h3 className="font-fraunces text-[0.95rem] font-normal text-text leading-[1.35] mb-[6px] tracking-tight">
                    {event.title}
                  </h3>
                  <p className="text-[0.78rem] text-t3 leading-[1.55] font-light line-clamp-2">
                    {event.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
