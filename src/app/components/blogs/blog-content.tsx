"use client";

import Link from "next/link";
import React, { useState, useMemo, useEffect, useRef } from "react";

// --- Types ---
interface Article {
  id: number;
  cat: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  ini: string;
  bg: string;
  date: string;
  rt: string;
  cov: string;
  em: string;
  l: number;
  c: number;
  // New Data Fields
  emoji?: string;
  category?: string;
  views?: string;
  comments?: number;
  gradient?: string;
  authorColor?: string;
}

// --- Constants ---
const PER_PAGE = 5;
const TOPICS = [
  "all",
  "mental-health",
  "self-care",
  "community",
  "mindfulness",
  "awareness",
  "stories",
  "support",
];
const TOPIC_LABELS: Record<string, string> = {
  all: "All",
  "mental-health": "Mental Health",
  "self-care": "Self-care",
  community: "Community",
  mindfulness: "Mindfulness",
  awareness: "Awareness",
  stories: "Stories",
  support: "Support",
};

// --- Full Dataset ---
const ARTICLES: Article[] = [
  {
    id: 1,
    cat: "Mental Health",
    slug: "mental-health",
    title: "Why talking about anxiety is the first step toward healing",
    excerpt:
      "Anxiety is something most teens experience but few talk about openly.",
    author: "Anika Sharma",
    ini: "AS",
    bg: "#0D1F3C",
    date: "Apr 3, 2025",
    rt: "5 min read",
    cov: "cov2",
    em: "🧠",
    l: 142,
    c: 38,
    views: "2.4k",
    gradient: "linear-gradient(135deg, #e0eafc, #cfdef3)",
    authorColor: "#0D1F3C",
  },
  {
    id: 2,
    cat: "Community",
    slug: "community",
    title: "Finding your people — how peer support changed everything",
    excerpt: "I spent two years thinking I was the only one who felt this way.",
    author: "Lena Marcus",
    ini: "LM",
    bg: "#2B6CB8",
    date: "Mar 28, 2025",
    rt: "6 min read",
    cov: "cov3",
    em: "💬",
    l: 203,
    c: 57,
    views: "1.9k",
    gradient: "linear-gradient(135deg, #e0f2f1, #b2dfdb)",
    authorColor: "#2B6CB8",
  },
  {
    id: 3,
    cat: "Self-care",
    slug: "self-care",
    title: "5 daily habits that genuinely helped my mental wellbeing",
    excerpt:
      "Not the generic advice. These are the five specific small habits.",
    author: "Riya Patel",
    ini: "RP",
    bg: "#1E4D8C",
    date: "Apr 1, 2025",
    rt: "4 min read",
    cov: "cov5",
    em: "🌿",
    l: 98,
    c: 21,
    views: "1.8k",
    gradient: "linear-gradient(135deg, #f1f8e9, #dcedc8)",
    authorColor: "#1E4D8C",
  },
  {
    id: 4,
    cat: "Mindfulness",
    slug: "mindfulness",
    title: "Breathing through the hard moments",
    excerpt:
      "Every mindfulness article online sounds the same. This one doesn't.",
    author: "Sam Torres",
    ini: "ST",
    bg: "#3B82C4",
    date: "Mar 22, 2025",
    rt: "3 min read",
    cov: "cov1",
    em: "🌬️",
    l: 76,
    c: 14,
    views: "940",
    gradient: "linear-gradient(135deg, #e1f5fe, #b3e5fc)",
    authorColor: "#3B82C4",
  },
  {
    id: 5,
    cat: "Awareness",
    slug: "awareness",
    title: "Understanding teen burnout",
    excerpt:
      "Burnout isn't just for adults. Teens are experiencing it at record rates.",
    author: "Dr. Priya Nair",
    ini: "PN",
    bg: "#0D1F3C",
    date: "Mar 15, 2025",
    rt: "7 min read",
    cov: "cov4",
    em: "🔥",
    l: 189,
    c: 44,
    views: "1.5k",
    gradient: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
    authorColor: "#0D1F3C",
  },
  {
    id: 6,
    cat: "Stories",
    slug: "stories",
    title: "From feeling invisible to finding a voice",
    excerpt:
      "For the first year of high school I said nothing. Then things changed.",
    author: "Anonymous",
    ini: "AN",
    bg: "#5A6B84",
    date: "Mar 8, 2025",
    rt: "8 min read",
    cov: "cov6",
    em: "✨",
    l: 317,
    c: 82,
    views: "3.1k",
    gradient: "linear-gradient(135deg, #f3e5f5, #e1bee7)",
    authorColor: "#5A6B84",
  },
  {
    id: 7,
    cat: "Support",
    slug: "support",
    title: "How to support a friend who's struggling",
    excerpt: "Good support isn't about fixing — it's about showing up.",
    author: "Jiya K.",
    ini: "JK",
    bg: "#1A3560",
    date: "Feb 28, 2025",
    rt: "5 min read",
    cov: "cov7",
    em: "🤝",
    l: 156,
    c: 39,
    views: "1.1k",
    gradient: "linear-gradient(135deg, #efebe9, #d7ccc8)",
    authorColor: "#1A3560",
  },
  {
    id: 8,
    cat: "Mental Health",
    slug: "mental-health",
    title: "Sadness vs Depression",
    excerpt:
      "Understanding this difference could be the most important thing you read.",
    author: "Sam Torres",
    ini: "ST",
    bg: "#3B82C4",
    date: "Feb 20, 2025",
    rt: "6 min read",
    cov: "cov8",
    em: "💙",
    l: 241,
    c: 63,
    views: "2.8k",
    gradient: "linear-gradient(135deg, #e8eaf6, #c5cae9)",
    authorColor: "#3B82C4",
  },
];

export default function BlogContent() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [currentSearch, setCurrentSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isNewsletterOpen, setNewsletterOpen] = useState(false);
  const [isSubmitOpen, setSubmitOpen] = useState(false);
  const feedRef = useRef<HTMLDivElement>(null);

  // --- Search & Filter Logic ---
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((a) => {
      const matchesTopic = currentFilter === "all" || a.slug === currentFilter;
      const q = currentSearch.toLowerCase();
      const matchesSearch =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.author.toLowerCase().includes(q) ||
        a.cat.toLowerCase().includes(q);
      return matchesTopic && matchesSearch;
    });
  }, [currentFilter, currentSearch]);

  // --- Pagination Data ---
  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / PER_PAGE));
  const currentItems = filteredArticles.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [currentFilter, currentSearch]);

  const handlePageChange = (p: number) => {
    setCurrentPage(p);
    feedRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // --- Pagination Dots Logic ---
  const getPages = () => {
    const pages: (number | string)[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1)
        pages.push(i);
      else if (Math.abs(i - currentPage) === 2) {
        if (!pages.includes("...")) pages.push("...");
      }
    }
    return pages.filter((p, i) => !(p === "..." && pages[i - 1] === "..."));
  };

  return (
    <div className="bg-[var(--white)] min-h-screen">
      {/* ─── SEARCH SECTION ─── */}
      <div className="border-b border-[var(--bd)] py-10 px-[5%] bg-white">
        <div className="max-w-[600px] mx-auto relative">
          <input
            type="text"
            placeholder="Search articles, authors, or topics..."
            className="w-full py-4 pl-12 pr-6 bg-[var(--off)] border border-[var(--bd2)] rounded-full outline-none focus:border-[var(--accent)] transition-all"
            value={currentSearch}
            onChange={(e) => setCurrentSearch(e.target.value)}
          />
          <svg
            className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--t3)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div
        ref={feedRef}
        className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 py-10 px-[5%] items-start"
      >
        {/* ─── LEFT: ARTICLE FEED ─── */}
        <main className="min-w-0">
          <div className="flex flex-col gap-8 mb-10">
            {currentItems.length > 0 ? (
              currentItems.map((art, i) => (
                <ArticleCard key={art.id} article={art} index={i} />
              ))
            ) : (
              <div className="text-center py-20 font-fraunces italic text-[var(--t3)]">
                No articles found.
              </div>
            )}
          </div>

          {/* ─── PAGINATION (Active) ─── */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-lg border border-[var(--bd2)] disabled:opacity-30"
              >
                ←
              </button>
              {getPages().map((p, i) =>
                p === "..." ? (
                  <span key={i} className="px-2">
                    ...
                  </span>
                ) : (
                  <button
                    key={i}
                    onClick={() => handlePageChange(p as number)}
                    className={`w-10 h-10 rounded-lg border text-sm font-medium ${currentPage === p ? "bg-[var(--navy)] text-white" : "border-[var(--bd2)] hover:bg-[var(--soft)]"}`}
                  >
                    {p}
                  </button>
                ),
              )}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-lg border border-[var(--bd2)] disabled:opacity-30"
              >
                →
              </button>
            </div>
          )}
        </main>

        {/* ─── RIGHT: SIDEBAR (All 4 Parts) ─── */}
        <aside className="hidden lg:block sticky top-8 space-y-6">
          {/* 1. Trending Now */}
          <div className="bg-white border border-[var(--bd)] rounded-[var(--rl)] p-6 shadow-[var(--sh1)]">
            <div className="flex items-center gap-2 text-[0.85rem] font-bold mb-4 uppercase tracking-wider">
              <svg
                className="w-4 h-4 stroke-[var(--accent)] fill-none"
                viewBox="0 0 24 24"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
              Trending Now
            </div>
            <div className="space-y-4">
              {ARTICLES.slice(0, 3).map((art) => (
                <TrendItem
                  key={art.id}
                  emoji={art.em}
                  title={art.title}
                  views={art.views || "0"}
                />
              ))}
            </div>
          </div>

          {/* 2. Popular Topics */}
          <div className="bg-white border border-[var(--bd)] rounded-[var(--rl)] p-6 shadow-[var(--sh1)]">
            <div className="text-[0.85rem] font-bold mb-4 uppercase tracking-wider">
              Popular Topics
            </div>
            <div className="flex flex-wrap gap-2">
              {TOPICS.map((slug) => (
                <button
                  key={slug}
                  onClick={() => setCurrentFilter(slug)}
                  className={`text-xs px-4 py-2 rounded-full border transition-all ${currentFilter === slug ? "bg-[var(--navy)] text-white border-[var(--navy)]" : "border-[var(--bd2)] text-[var(--t2)] hover:bg-[var(--soft)]"}`}
                >
                  {TOPIC_LABELS[slug]}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Submit Widget */}
          <div className="bg-gradient-to-br from-[var(--accent-l)] to-[rgba(59,130,196,0.04)] border border-[rgba(59,130,196,0.18)] rounded-[var(--rl)] p-6 text-center">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm text-[var(--accent)]">
              <svg
                className="w-6 h-6 stroke-current fill-none"
                viewBox="0 0 24 24"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <div className="font-medium text-[var(--text)] mb-2">
              Have something to share?
            </div>
            <button
              onClick={() => setSubmitOpen(true)}
              className="w-full py-3 bg-[var(--navy)] text-white rounded-xl text-sm font-medium hover:translate-y-[-2px] transition-all"
            >
              Submit Article
            </button>
          </div>

          {/* 4. Newsletter */}
          <div className="bg-white border border-[var(--bd)] rounded-[var(--rl)] p-6 shadow-[var(--sh1)]">
            <div className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[var(--t3)] mb-2">
              Newsletter
            </div>
            <p className="text-xs text-t2 leading-relaxed mb-4">
              Weekly stories and tips delivered to your inbox.
            </p>
            <button
              onClick={() => setNewsletterOpen(true)}
              className="w-full py-3 bg-[var(--navy)] text-white rounded-xl text-sm font-medium flex items-center justify-center gap-2"
            >
              <svg
                className="w-4 h-4 stroke-white fill-none"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Subscribe
            </button>
          </div>
        </aside>
      </div>

      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={() => setNewsletterOpen(false)}
      />
      <SubmitModal isOpen={isSubmitOpen} onClose={() => setSubmitOpen(false)} />
    </div>
  );
}

// --- SUB-COMPONENTS ---
function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <Link
      href="/blog-detail"
      className="group bg-white border border-[var(--bd)] rounded-[var(--rx)] overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div
        className="aspect-[16/7] relative overflow-hidden flex items-center justify-center text-6xl"
        style={{ background: article.gradient }}
      >
        <span className="transition-transform duration-500 group-hover:scale-110">
          {article.em}
        </span>
        <div className="absolute top-4 left-4 text-[0.6rem] font-bold tracking-widest uppercase px-3 py-2 rounded-full bg-[#153159] text-[#fff] backdrop-blur-md">
          {article.cat}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-[0.65rem] text-white font-bold"
            style={{ backgroundColor: article.authorColor }}
          >
            {article.ini}
          </div>
          <div className="text-[0.8rem]">
            <div className="font-bold text-[var(--text)]">{article.author}</div>
            <div className="text-[var(--t3)]">
              {article.date} • {article.rt}
            </div>
          </div>
        </div>
        <h3 className="font-fraunces text-2xl mb-3 group-hover:text-[var(--accent)] transition-colors leading-snug">
          {article.title}
        </h3>
        <p className="text-sm text-[var(--t2)] leading-relaxed font-light line-clamp-2 mb-6">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between border-t border-[var(--bd)] pt-4">
          <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-widest">
            Read Article →
          </span>
          <div className="flex gap-4 text-xs text-[var(--t3)]">
            <span className="flex items-center gap-1">👁️ {article.views}</span>
            <span className="flex items-center gap-1">💬 {article.c}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function TrendItem({
  emoji,
  title,
  views,
}: {
  emoji: string;
  title: string;
  views: string;
}) {
  return (
    <div className="flex gap-3 items-center group cursor-pointer">
      <div className="w-12 h-10 bg-[var(--off)] rounded-lg flex items-center justify-center text-xl shrink-0 group-hover:bg-[var(--soft)] transition-colors">
        {emoji}
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold text-[var(--text)] leading-snug line-clamp-2 group-hover:text-[var(--accent)] transition-colors">
          {title}
        </div>
        <div className="text-[10px] text-[var(--t3)] mt-1">{views} views</div>
      </div>
    </div>
  );
}

// --- MODALS (Simplified for logic) ---
function NewsletterModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handleClose = () => {
    onClose();
    setTimeout(() => setIsSubscribed(false), 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[2000] flex items-center justify-center p-5 transition-all duration-300 
      ${isOpen ? "opacity-100 visible bg-black/40 backdrop-blur-[10px]" : "opacity-0 invisible"}`}
      onClick={handleClose}
    >
      <div
        className={`bg-[var(--white)] rounded-[var(--rx)] p-[44px] max-w-[420px] w-full relative border border-[var(--bd)] shadow-[0_16px_64px_rgba(13,31,60,0.18)] transition-all duration-300
        ${isOpen ? "translate-y-0 scale-100" : "translate-y-[24px] scale-[.97]"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-[18px] right-[18px] text-[var(--t3)] hover:text-[var(--text)] text-xl transition-colors"
        >
          ×
        </button>

        {!isSubscribed ? (
          <div
            id="nlContent"
            className="animate-in fade-in slide-in-from-bottom-2 duration-500"
          >
            <div className="font-fraunces text-[1.55rem] font-light text-[var(--text)] tracking-[-.02em] mb-1.5">
              Stay connected 🌱
            </div>
            <div className="text-[0.875rem] text-[var(--t2)] font-light leading-[1.6] mb-8">
              Get mental health tips and Mindsphere updates — once a week, never
              more.
            </div>

            <div className="flex flex-col gap-3">
              <input
                className="w-full px-[15px] py-3.5 border border-[var(--bd2)] rounded-[var(--rm)] text-[0.88rem] bg-[var(--white)] text-[var(--text)] outline-none focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(59,130,196,0.08)] transition-all placeholder:text-[var(--t3)]"
                type="text"
                placeholder="Your first name"
                autoComplete="given-name"
              />
              <input
                className="w-full px-[15px] py-3.5 border border-[var(--bd2)] rounded-[var(--rm)] text-[0.88rem] bg-[var(--white)] text-[var(--text)] outline-none focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(59,130,196,0.08)] transition-all placeholder:text-[var(--t3)]"
                type="email"
                placeholder="Your email address"
                autoComplete="email"
              />
              <button
                onClick={() => setIsSubscribed(true)}
                className="w-full py-3.5 bg-[var(--navy)] text-white rounded-[var(--rm)] text-[0.9rem] font-medium mt-2 shadow-[0_4px_16px_rgba(13,31,60,0.18)] hover:opacity-[0.88] hover:-translate-y-[1px] transition-all"
              >
                Subscribe Now →
              </button>
            </div>
          </div>
        ) : (
          /* Success State */
          <div className="text-center py-4 animate-in zoom-in-95 fade-in duration-500">
            <div className="w-14 h-14 bg-[var(--soft)] text-[var(--accent)] rounded-full flex items-center justify-center text-2xl mx-auto mb-5">
              ✦
            </div>
            <div className="font-fraunces text-[1.55rem] text-[var(--text)] mb-2">
              You're in!
            </div>
            <div className="text-[0.875rem] text-[var(--t2)] font-light leading-[1.6]">
              Welcome to Mindsphere. Your first newsletter is on its way.
            </div>
            <button
              onClick={handleClose}
              className="mt-8 text-[0.82rem] font-medium text-[var(--accent)] hover:underline"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function SubmitModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[2000] flex items-center justify-center p-5 transition-all duration-300 
      ${isOpen ? "opacity-100 visible bg-black/40 backdrop-blur-[10px]" : "opacity-0 invisible"}`}
      onClick={onClose}
    >
      <div
        className={`bg-[var(--white)] rounded-[var(--rx)] p-[44px] max-w-[520px] w-full relative border border-[var(--bd)] shadow-[0_16px_64px_rgba(13,31,60,0.18)] max-h-[90vh] overflow-y-auto transition-transform duration-300
        ${isOpen ? "translate-y-0 scale-100" : "translate-y-[24px] scale-[.97]"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[14px] right-[14px] text-2xl text-[var(--t3)] hover:text-[var(--text)] transition-colors"
        >
          ×
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="font-fraunces text-[1.55rem] font-light text-[var(--text)] tracking-[-.02em] mb-1.5">
            Submit an Article ✍
          </h2>
          <p className="text-[0.875rem] text-[var(--t2)] font-light leading-[1.6]">
            Share your story, insight, or experience with the Mindsphere
            community. All submissions are reviewed before publishing.
          </p>
        </div>

        {/* Steps */}
        <div className="flex gap-2 mb-6">
          <div className="flex-1 h-[3px] rounded-full bg-[var(--accent)]"></div>
          <div className="flex-1 h-[3px] rounded-full bg-[var(--navy)]"></div>
          <div className="flex-1 h-[3px] rounded-full bg-[var(--soft)]"></div>
        </div>

        {/* Form */}
        <form
          className="flex flex-col gap-3.5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.78rem] font-medium text-[var(--text)]">
              Article Title *
            </label>
            <input
              type="text"
              placeholder="Give your article a compelling title"
              className="w-full px-[15px] py-3 border border-[var(--bd2)] rounded-[var(--rm)] text-[0.88rem] bg-[var(--white)] text-[var(--text)] outline-none focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(59,130,196,0.08)] transition-all placeholder:text-[var(--t3)]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[0.78rem] font-medium text-[var(--text)]">
              Category *
            </label>
            <select className="w-full px-[15px] py-3 border border-[var(--bd2)] rounded-[var(--rm)] text-[0.88rem] bg-[var(--white)] text-[var(--text)] outline-none focus:border-[var(--accent)] transition-all appearance-none cursor-pointer bg-[right_14px_center] bg-no-repeat bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%238A99AE%27 stroke-width=%272%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E')]">
              <option value="">Select a category</option>
              <option>Mental Health</option>
              <option>Self-care</option>
              <option>Community</option>
              <option>Mindfulness</option>
              <option>Awareness</option>
              <option>Stories</option>
              <option>Support</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[0.78rem] font-medium text-[var(--text)]">
              Your Name *
            </label>
            <input
              type="text"
              placeholder="How should we credit you? (can be anonymous)"
              className="w-full px-[15px] py-3 border border-[var(--bd2)] rounded-[var(--rm)] text-[0.88rem] bg-[var(--white)] outline-none focus:border-[var(--accent)] transition-all placeholder:text-[var(--t3)]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[0.78rem] font-medium text-[var(--text)]">
              Your Email *
            </label>
            <input
              type="email"
              placeholder="We'll contact you about your submission"
              className="w-full px-[15px] py-3 border border-[var(--bd2)] rounded-[var(--rm)] text-[0.88rem] bg-[var(--white)] outline-none focus:border-[var(--accent)] transition-all placeholder:text-[var(--t3)]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[0.78rem] font-medium text-[var(--text)]">
              Article Content *
            </label>
            <textarea
              placeholder="Write your article here, or paste it in. Minimum 300 words."
              className="w-full px-[15px] py-3 border border-[var(--bd2)] rounded-[var(--rm)] text-[0.88rem] bg-[var(--white)] outline-none focus:border-[var(--accent)] transition-all min-h-[100px] resize-y leading-[1.6] placeholder:text-[var(--t3)]"
            />
            <span className="text-[0.72rem] text-[var(--t3)] font-light">
              Minimum 300 words. We review all submissions within 3–5 days.
            </span>
          </div>

          <button
            type="submit"
            className="w-full p-[13px] bg-[var(--navy)] text-white rounded-[var(--rm)] text-[0.9rem] font-medium mt-1 shadow-[0_4px_16px_rgba(13,31,60,0.18)] hover:opacity-[0.88] hover:-translate-y-[1px] transition-all"
          >
            Submit for Review →
          </button>
        </form>
      </div>
    </div>
  );
}
