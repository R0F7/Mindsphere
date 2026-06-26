import React from "react";
import Link from "next/link";

export default function Event() {
  return (
    <section className="bg-off py-25 px-[5%] overflow-x-hidden">
      <div className="max-w-275 mx-auto w-full">
        {/* ── SECTION HEADER ── */}
        <div
          className="flex items-end justify-between mb-10 flex-wrap gap-4"
          data-aos="fade-up"
        >
          <div>
            <div className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent mb-2.5">
              Calendar
            </div>
            <h2 className="font-fraunces font-light text-[clamp(2rem,4vw,3rem)] tracking-tight leading-[1.1] text-text m-0">
              Events & <em className="italic text-accent">Gatherings</em>
            </h2>
          </div>
          <Link
            href="/events"
            className="text-[0.85rem] font-medium text-text hover:text-accent transition-colors duration-200"
          >
            See More →
          </Link>
        </div>

        {/* ── EVENTS LAYOUT GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-5">
          {/* Featured Event Card */}
          <div data-aos="fade-right" data-aos-delay="80">
            <div className="bg-white dark:bg-dark-card border border-bd rounded-(--rx) overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-0.75 hover:shadow-sh3">
              {/* Event Image / Placeholder Graphic */}
              <div className="aspect-video bg-linear-to-br from-navy to-[#1E4D8C] flex items-center justify-center relative overflow-hidden">
                <svg
                  className="w-14 h-14 stroke-[rgba(255,255,255,0.2)] fill-none stroke-[0.8] stroke-linecap-round"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <div className="absolute top-3.5 left-3.5 text-[0.65rem] font-medium tracking-[0.08em] uppercase城乡 px-3 py-1.5 rounded-(--rf) bg-accent text-white">
                  Upcoming
                </div>
              </div>

              {/* Event Details Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-fraunces text-[1.35rem] font-normal text-text mb-2 leading-tight">
                  Monthly Open Mic: Sharing Our Truths
                </h3>
                <p className="text-[0.82rem] text-t2 leading-[1.65] font-light mb-auto pb-4">
                  An intimate space where teens share their stories, poems, and
                  experiences. No performance pressure — just real voices and
                  real connection.
                </p>

                {/* Event Meta Data */}
                <div className="flex gap-4 pt-3.5 border-t border-bd mb-3.5 flex-wrap">
                  <div className="flex items-center gap-1.5 text-[0.75rem] text-t3">
                    <svg
                      className="w-3 h-3 stroke-current fill-none stroke-2 stroke-linecap-round"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Nov 26, 7:00 PM
                  </div>
                  <div className="flex items-center gap-1.5 text-[0.75rem] text-t3">
                    <svg
                      className="w-3 h-3 stroke-current fill-none stroke-2 stroke-linecap-round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Discord Voice Hub
                  </div>
                </div>

                <Link
                  href="/events"
                  className="group/lnk text-[0.82rem] font-medium text-text inline-flex items-center gap-1 transition-all duration-200"
                >
                  Learn more{" "}
                  <span className="transition-all duration-200 group-hover/lnk:translate-x-1">
                    ↗
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* ── SUB-EVENTS LIST ── */}
          <div
            className="flex flex-col gap-2.5"
            data-aos="fade-left"
            data-aos-delay="80"
          >
            {/* Row 1 */}
            <div className="group/row flex gap-3.5 p-4 sm:p-[16px_18px] bg-white dark:bg-dark-card border border-bd rounded-(--rl) transition-all duration-250 cursor-pointer hover:translate-x-1.5 hover:-translate-y-0.5 hover:shadow-sh2">
              <div className="w-16 h-13.5 rounded-(--r) bg-linear-to-br from-soft to-(--accent-l) flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 stroke-accent fill-none stroke-[1.5] stroke-linecap-round opacity-60"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-fraunces text-[0.9rem] font-normal text-text mb-1">
                  Mindful Journaling Workshop
                </h4>
                <div className="text-[0.75rem] text-t2 mb-1.5 font-light truncate">
                  A guided session on using journaling as a mental health tool.
                </div>
                <div className="flex gap-3">
                  <span className="flex items-center gap-1 text-[0.68rem] text-t3">
                    <svg
                      className="w-2.5 h-2.5 stroke-current fill-none stroke-2 stroke-linecap-round"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Today 5:00 PM
                  </span>
                  <span className="flex items-center gap-1 text-[0.68rem] text-t3">
                    Virtual
                  </span>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full border border-bd2 flex items-center justify-center text-[0.65rem] text-t3 shrink-0 transition-all duration-200 align-top group-hover/row:bg-navy group-hover/row:text-white group-hover/row:border-navy">
                ↗
              </div>
            </div>

            {/* Row 2 */}
            <div className="group/row flex gap-3.5 p-4 sm:p-[16px_18px] bg-white dark:bg-dark-card border border-bd rounded-(--rl) transition-all duration-250 cursor-pointer hover:translate-x-1.5 hover:-translate-y-0.5 hover:shadow-sh2">
              <div className="w-16 h-13.5 rounded-(--r) bg-linear-to-br from-soft to-(--accent-l) flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 stroke-accent fill-none stroke-[1.5] stroke-linecap-round opacity-60"
                  viewBox="0 0 24 24"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-fraunces text-[0.9rem] font-normal text-text mb-1">
                  Gaming for Good: Minecraft Night
                </h4>
                <div className="text-[0.75rem] text-t2 mb-1.5 font-light truncate">
                  Community gaming night — decompress and connect.
                </div>
                <div className="flex gap-3">
                  <span className="flex items-center gap-1 text-[0.68rem] text-t3">
                    <svg
                      className="w-2.5 h-2.5 stroke-current fill-none stroke-2 stroke-linecap-round"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Today 8:00 PM
                  </span>
                  <span className="flex items-center gap-1 text-[0.68rem] text-t3">
                    Discord
                  </span>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full border border-bd2 flex items-center justify-center text-[0.65rem] text-t3 shrink-0 transition-all duration-200 align-top group-hover/row:bg-navy group-hover/row:text-white group-hover/row:border-navy">
                ↗
              </div>
            </div>

            {/* Row 3 */}
            <div className="group/row flex gap-3.5 p-4 sm:p-[16px_18px] bg-white dark:bg-dark-card border border-bd rounded-(--rl) transition-all duration-250 cursor-pointer hover:translate-x-1.5 hover:-translate-y-0.5 hover:shadow-sh2">
              <div className="w-16 h-13.5 rounded-(--r) bg-linear-to-br from-soft to-(--accent-l) flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 stroke-accent fill-none stroke-[1.5] stroke-linecap-round opacity-60"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-fraunces text-[0.9rem] font-normal text-text mb-1">
                  Peer Support Circle — Weekly
                </h4>
                <div className="text-[0.75rem] text-t2 mb-1.5 font-light truncate">
                  A recurring open space for sharing and listening.
                </div>
                <div className="flex gap-3">
                  <span className="flex items-center gap-1 text-[0.68rem] text-t3">
                    <svg
                      className="w-2.5 h-2.5 stroke-current fill-none stroke-2 stroke-linecap-round"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Every Sunday
                  </span>
                  <span className="flex items-center gap-1 text-[0.68rem] text-t3">
                    Discord
                  </span>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full border border-bd2 flex items-center justify-center text-[0.65rem] text-t3 shrink-0 transition-all duration-200 align-top group-hover/row:bg-navy group-hover/row:text-white group-hover/row:border-navy">
                ↗
              </div>
            </div>
          </div>
        </div>

        {/* ── FOOTER BUTTON ── */}
        <div className="text-center mt-7">
          <Link
            href="/events"
            className="inline-block text-[0.85rem] font-medium px-6 py-2.5 border border-bd2 rounded-(--rf) text-text bg-transparent transition-all duration-200 hover:bg-navy hover:text-white hover:border-navy"
          >
            See all events →
          </Link>
        </div>
      </div>
    </section>
  );
}
