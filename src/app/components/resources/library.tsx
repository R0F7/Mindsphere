"use client";

import React, { useState, useMemo } from "react";

// --- Types ---
interface Resource {
  id: number;
  type: "book" | "article" | "video" | "research";
  title: string;
  desc: string;
  author: string;
  em: string;
  bg: string;
  dl: boolean;
}

const PER_PAGE = 8;

const RESOURCES: Resource[] = [
  {
    id: 1,
    type: "book",
    title: "The Anxiety and Worry Workbook",
    desc: "A proven cognitive-behavioral workbook packed with practical exercises to manage anxiety and reduce worry in everyday life.",
    author: "Clark & Beck",
    em: "📘",
    bg: "bg1",
    dl: true,
  },
  {
    id: 2,
    type: "article",
    title: "Understanding Teen Mental Health: A Complete Guide",
    desc: "An evidence-based guide covering the most common mental health challenges teens face and how to navigate them effectively.",
    author: "Mindsphere Team",
    em: "📄",
    bg: "bg2",
    dl: false,
  },
  {
    id: 3,
    type: "video",
    title: "Guided Breathing for Anxiety Relief — 10 Minutes",
    desc: "A calm, guided breathing exercise designed specifically for teenagers experiencing anxiety or panic. No experience needed.",
    author: "Dr. Priya Nair",
    em: "🎥",
    bg: "bg3",
    dl: false,
  },
  {
    id: 4,
    type: "research",
    title: "Adolescent Mental Health in the Digital Age",
    desc: "Peer-reviewed research examining the relationship between social media use, screen time, and teen mental health outcomes.",
    author: "Journal of Adolescence",
    em: "🔬",
    bg: "bg4",
    dl: true,
  },
  {
    id: 5,
    type: "book",
    title: "Lost Connections: Uncovering the Real Causes of Depression",
    desc: "A paradigm-shifting book exploring the social and environmental roots of depression and anxiety beyond just brain chemistry.",
    author: "Johann Hari",
    em: "📗",
    bg: "bg5",
    dl: true,
  },
  {
    id: 6,
    type: "article",
    title: "How to Talk to a Friend About Mental Health",
    desc: "Practical, compassionate guidance on how to start the conversation with a friend who might be struggling — without making it worse.",
    author: "Mindsphere Team",
    em: "💬",
    bg: "bg2",
    dl: false,
  },
  {
    id: 7,
    type: "video",
    title: "Introduction to Mindfulness for Beginners",
    desc: "A 15-minute video introducing mindfulness techniques adapted for teenagers, including breath awareness and body scan practices.",
    author: "Sam Torres",
    em: "🧘",
    bg: "bg3",
    dl: false,
  },
  {
    id: 8,
    type: "research",
    title: "Effectiveness of Peer Support Programs for Teen Mental Health",
    desc: "Systematic review of peer support interventions in adolescent mental health settings, examining outcomes and best practices.",
    author: "BMC Psychiatry",
    em: "📊",
    bg: "bg1",
    dl: true,
  },
  {
    id: 9,
    type: "book",
    title: "The Body Keeps the Score",
    desc: "A groundbreaking exploration of how trauma reshapes the body and brain — and the innovative treatments that can heal both.",
    author: "Bessel van der Kolk",
    em: "📙",
    bg: "bg4",
    dl: true,
  },
  {
    id: 10,
    type: "article",
    title: "Building a Mental Wellness Routine That Actually Works",
    desc: "Stop setting routines you never follow. This guide helps you build sustainable, realistic habits around your actual life as a teen.",
    author: "Riya Patel",
    em: "✍️",
    bg: "bg2",
    dl: false,
  },
  {
    id: 11,
    type: "video",
    title: "Sleep & Mental Health — Why Rest Is Non-Negotiable",
    desc: "Science-backed video on how sleep deprivation affects teenage mental health and practical strategies to improve your sleep.",
    author: "Dr. Priya Nair",
    em: "🌙",
    bg: "bg3",
    dl: false,
  },
  {
    id: 12,
    type: "research",
    title: "The Link Between Physical Exercise and Teen Mental Wellbeing",
    desc: "Analysis of research data from 40+ studies examining how regular exercise impacts anxiety, depression, and self-esteem in adolescents.",
    author: "Lancet Psychiatry",
    em: "🏃",
    bg: "bg5",
    dl: true,
  },
  {
    id: 13,
    type: "book",
    title: "Untamed",
    desc: "A memoir and guide to breaking free from societal expectations — deeply relevant for teenagers navigating identity and self-worth.",
    author: "Glennon Doyle",
    em: "📕",
    bg: "bg1",
    dl: true,
  },
  {
    id: 14,
    type: "article",
    title: "What is Cognitive Behavioral Therapy? A Teen-Friendly Guide",
    desc: "A clear, accessible introduction to CBT and how its techniques can help teenagers manage difficult thoughts and emotions.",
    author: "Mindsphere Team",
    em: "🧠",
    bg: "bg2",
    dl: false,
  },
  {
    id: 15,
    type: "book",
    title: "Reasons to Stay Alive",
    desc: "A raw and honest memoir about depression and anxiety — and how, against all odds, it is possible to come back from the darkest places.",
    author: "Matt Haig",
    em: "📖",
    bg: "bg4",
    dl: true,
  },
  {
    id: 16,
    type: "article",
    title: "Grounding Techniques for Anxiety: The 5-4-3-2-1 Method",
    desc: "A simple, evidence-based sensory grounding technique you can use anywhere to bring yourself back to the present during anxiety.",
    author: "Anika Sharma",
    em: "🌿",
    bg: "bg2",
    dl: false,
  },
  {
    id: 17,
    type: "video",
    title: "Understanding Your Emotions — A Teen Guide",
    desc: "An engaging animated explainer on how emotions work in the teenage brain and why they can feel so overwhelming.",
    author: "MindEd Series",
    em: "💡",
    bg: "bg3",
    dl: false,
  },
  {
    id: 18,
    type: "research",
    title: "Social Connection as a Protective Factor in Teen Mental Health",
    desc: "Longitudinal study examining how quality of peer relationships mediates the impact of stress and adversity on adolescent wellbeing.",
    author: "Child Development",
    em: "🤝",
    bg: "bg4",
    dl: true,
  },
  {
    id: 19,
    type: "book",
    title: "First, We Make the Beast Beautiful",
    desc: "A deeply personal exploration of anxiety — equal parts memoir, science, and philosophy — that reframes the condition entirely.",
    author: "Sarah Wilson",
    em: "📚",
    bg: "bg5",
    dl: true,
  },
  {
    id: 20,
    type: "article",
    title: "Journaling for Mental Health: A Practical Starter Guide",
    desc: "How to use journaling as a therapeutic tool — with specific prompts, techniques, and formats proven to support mental wellbeing.",
    author: "Sam Torres",
    em: "📓",
    bg: "bg2",
    dl: false,
  },
];

const badgeConfig: Record<string, string> = {
  book: "bg-[rgba(13,31,60,0.82)]",
  article: "bg-[rgba(59,130,196,0.9)]",
  video: "bg-[rgba(239,68,68,0.85)]",
  research: "bg-[rgba(124,58,237,0.85)]",
};

export default function ResourceLibrary() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredResources = useMemo(() => {
    return activeCategory === "all"
      ? RESOURCES
      : RESOURCES.filter((r) => r.type === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredResources.length / PER_PAGE),
  );
  const paginatedData = filteredResources.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  return (
    <section className="py-[60px] px-[5%] pb-20 bg-white" id="library">
      <div className="max-w-[1200px] mx-auto">
        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent mb-3.5"
          >
            Library
          </div>
          <h2
            data-aos="fade-up"
            data-aos-delay="150"
            className="font-fraunces text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-text mb-4"
          >
            {activeCategory === "all" ? "All" : activeCategory}{" "}
            <em className="italic text-accent">Resources</em>
          </h2>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[0.82rem] text-t3 font-light"
          >
            Showing {Math.min(paginatedData.length, PER_PAGE)} of{" "}
            {filteredResources.length} resources
          </div>
        </div>

        {/* --- CATEGORY BAR --- */}
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          className="flex justify-center mb-9"
        >
          <div className="flex items-center gap-1 px-[5%] overflow-x-auto no-scrollbar whitespace-nowrap">
            {["all", "book", "article", "video", "research"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                }}
                className={`cat-tab text-[0.875rem] px-6 py-4 transition-all duration-200 border-b-2 flex items-center ${
                  activeCategory === cat
                    ? "text-navy border-navy font-medium dark:text-accent dark:border-accent"
                    : "text-t2 border-transparent hover:text-text"
                }`}
              >
                {cat === "all"
                  ? "All Resources"
                  : cat.charAt(0).toUpperCase() + cat.slice(1)}
                <span
                  className={`cat-tab-count ml-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[0.65rem] font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-navy text-white dark:bg-accent"
                      : "bg-soft text-t3"
                  }`}
                >
                  {cat === "all"
                    ? RESOURCES.length
                    : RESOURCES.filter((r) => r.type === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {paginatedData.map((r, i) => (
            <div
              key={r.id}
              data-aos="fade-up"
              data-aos-delay={i * 50}
              className="rc group flex flex-col bg-white border border-bd rounded-(--rl) overflow-hidden transition-all duration-300 hover:-translate-y-[5px] hover:scale-[1.01] hover:shadow-sh3 hover:border-[rgba(59,130,196,0.2)] cursor-pointer"
            >
              {/* Thumbnail */}
              <div
                className={`rc-thumb aspect-3/2 relative flex items-center justify-center text-[2.8rem] shrink-0 ${r.bg}`}
              >
                <span className="relative z-1">{r.em}</span>
                <div
                  className={`absolute top-2.5 left-2.5 z-1 text-[0.62rem] font-medium tracking-[0.08em] uppercase px-2.5 py-1 rounded-(--rf) backdrop-blur-sm text-[#fff] ${badgeConfig[r.type] || "bg-blue-500"}`}
                >
                  {r.type}
                </div>
                {r.dl && (
                  <div className="absolute top-2.5 right-2.5 z-1 w-7 h-7 rounded-full bg-[rgba(255,255,255,0.9)] backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sh1">
                    <svg
                      className="w-[13px] h-[13px] stroke-navy fill-none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[rgba(13,31,60,0.08)] group-hover:opacity-0 transition-opacity" />
              </div>

              {/* Body */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-fraunces text-[0.95rem] font-normal text-text leading-[1.4] mb-[7px]">
                  {r.title}
                </h3>
                <p className="text-[0.78rem] text-t2 leading-[1.6] font-light mb-3 line-clamp-2">
                  {r.desc}
                </p>
                <div className="mt-auto pt-2.5 border-t border-bd flex items-center justify-between">
                  <div className="flex items-center gap-[5px] text-[0.72rem] text-t3 font-light">
                    <svg
                      className="w-[11px] h-[11px] stroke-t3 fill-none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    {r.author}
                  </div>
                  <div className="text-[0.72rem] font-medium text-accent flex items-center gap-[3px] group-hover:gap-1.5 transition-all">
                    {r.dl ? "Download" : "Read"} →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- PAGINATION --- */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-1.5">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="w-9 h-9 rounded-(--rm) border border-bd2 flex items-center justify-center text-[0.82rem] disabled:opacity-30 transition-all hover:bg-soft"
            >
              ←
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-9 h-9 rounded-(--rm) text-[0.82rem] transition-all border ${
                  currentPage === i + 1
                    ? "bg-navy text-white border-navy font-medium"
                    : "bg-white border-bd2 text-t2 hover:bg-soft hover:text-text"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="w-9 h-9 rounded-(--rm) border border-bd2 flex items-center justify-center text-[0.82rem] disabled:opacity-30 transition-all hover:bg-soft"
            >
              →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
