"use client";

import React, { useEffect, useState } from "react";

export default function BlogDetail() {
  const [activeSection, setActiveSection] = useState("s1");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const headings = document.querySelectorAll("h2");
    headings.forEach((h) => observer.observe(h));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-25 px-[5%] lg:px-0">
      <div className="container">
        <ArticleHero />
      </div>

      <div className="bg-off-white border-t border-border">
        <div className="container py-12 px-[5%] lg:px-0 flex flex-col lg:grid lg:grid-cols-[52px_1fr_280px] gap-10 items-start ">
          <div className="w-full lg:w-auto flex justify-center lg:block">
            <ArticleActionBar />
          </div>

          <ArticleBody />

          <div className="hidden lg:block sticky top-8">
            <ArticleSidebar activeSection={activeSection} />
          </div>
        </div>
      </div>

      <ArticleDiscussion />
      <ReadNext />
    </section>
  );
}

function ArticleHero() {
  return (
    <section className="bg-[var(--white)] py-14 border-b border-[var(--bd)]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-center">
        {/* Left Content */}
        <div>
          {/* Breadcrumb tags */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            {["Mental Health", "Self-care", "Community"].map((tag, index) => (
              <React.Fragment key={tag}>
                <a
                  href="/blog"
                  className="text-[0.7rem] font-medium tracking-[0.06em] px-3 py-1 rounded-[var(--rf)] bg-[var(--accent-l)] color-[var(--accent)] border border-[rgba(59,130,196,0.18)] hover:bg-[var(--accent)] hover:text-white transition-all duration-200 cursor-pointer"
                >
                  {tag}
                </a>
                {index < 2 && (
                  <span className="text-[0.75rem] text-[var(--t3)]">›</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Title */}
          <h1 className="font-fraunces text-[clamp(1.8rem,4vw,3rem)] font-normal tracking-[-0.03em] leading-[1.15] text-[var(--text)] mb-6">
            Why talking about anxiety is
            <br className="hidden md:block" /> the first step toward healing
          </h1>

          {/* Author row */}
          <div className="flex flex-wrap items-center gap-3 md:gap-[14px] pt-5 border-t border-[var(--bd)]">
            <div className="w-10 h-10 rounded-full bg-[#0D1F3C] flex items-center justify-center text-[0.78rem] font-medium text-white shrink-0">
              AS
            </div>

            <div className="art-author-info">
              <div className="text-[0.9rem] font-medium text-[var(--text)]">
                Anika Sharma
              </div>
              <div className="text-[0.78rem] text-[var(--t3)] font-light">
                Community member & writer
              </div>
            </div>

            <div className="hidden md:block w-[1px] h-8 bg-[var(--bd)] shrink-0"></div>

            <div className="text-[0.8rem] text-[var(--t3)] font-light leading-[1.4]">
              <strong className="block text-[0.82rem] font-medium text-[var(--t2)]">
                Apr 3, 2025
              </strong>
              Published
            </div>

            <div className="hidden md:block w-[1px] h-8 bg-[var(--bd)] shrink-0"></div>

            <div className="text-[0.8rem] text-[var(--t3)] font-light leading-[1.4]">
              <strong className="block text-[0.82rem] font-medium text-[var(--t2)]">
                5 min read
              </strong>
              Reading time
            </div>

            {/* Read badge */}
            <div className="ml-auto flex items-center gap-2 px-3.5 py-2 bg-[var(--off)] border border-[var(--bd)] rounded-[var(--rf)] shrink-0">
              <div className="flex">
                {[
                  { initial: "JK", color: "#0D1F3C" },
                  { initial: "RS", color: "#1E4D8C" },
                  { initial: "AM", color: "#3B82C4" },
                ].map((av, i) => (
                  <div
                    key={i}
                    style={{ background: av.color }}
                    className={`w-[22px] h-[22px] rounded-full border-2 border-[var(--white)] text-[0.55rem] font-medium text-white flex items-center justify-center ${i !== 0 ? "-ml-1.5" : ""}`}
                  >
                    {av.initial}
                  </div>
                ))}
              </div>
              <div className="text-[0.75rem] font-medium text-[var(--t2)]">
                142+ Read this
              </div>
            </div>
          </div>
        </div>

        {/* Cover image */}
        <div className="relative aspect-[4/3] rounded-[var(--rx)] overflow-hidden bg-gradient-to-br from-[#0D1F3C] to-[#1E4D8C] flex items-center justify-center text-[5rem] shadow-[var(--sh3)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(13,31,60,0.4)] to-transparent"></div>
          <span className="relative z-10">🧠</span>
        </div>
      </div>
    </section>
  );
}

function ArticleActionBar() {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const initialLikes = 142;

  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({ title: document.title, url: window.location.href });
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert("Link copied!");
    }
  };

  return (
    <aside className="sticky top-8 flex lg:flex-col items-center gap-2 w-full lg:w-[52px]">
      {/* Like Button */}
      <div className="flex lg:flex-col items-center gap-1">
        <button
          onClick={() => setLiked(!liked)}
          title="Like"
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-[250ms] cursor-pointer shadow-[var(--sh1)]
            ${
              liked
                ? "bg-[#FEE2E2] border-[#FECACA] text-[#DC2626]"
                : "bg-[var(--white)] border-[var(--bd2)] text-[var(--t3)] hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)] hover:shadow-[var(--sh2)]"
            }`}
        >
          <svg
            className="w-4 h-4 stroke-current fill-none stroke-[1.8] stroke-round"
            viewBox="0 0 24 24"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <span className="text-[0.68rem] font-medium text-[var(--t3)]">
          {liked ? initialLikes + 1 : initialLikes}
        </span>
      </div>

      {/* Share Button */}
      <button
        onClick={shareArticle}
        title="Share"
        className="w-10 h-10 rounded-full border border-[var(--bd2)] bg-[var(--white)] flex items-center justify-center text-[var(--t3)] hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)] transition-all duration-[250ms] cursor-pointer shadow-[var(--sh1)] hover:shadow-[var(--sh2)]"
      >
        <svg
          className="w-4 h-4 stroke-current fill-none stroke-[1.8] stroke-round"
          viewBox="0 0 24 24"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      </button>

      {/* Bookmark Button */}
      <button
        onClick={() => setBookmarked(!bookmarked)}
        title="Bookmark"
        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-[250ms] cursor-pointer shadow-[var(--sh1)]
          ${
            bookmarked
              ? "bg-[var(--navy)] border-[var(--navy)] text-white shadow-[var(--sh2)]"
              : "bg-[var(--white)] border-[var(--bd2)] text-[var(--t3)] hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)]"
          }`}
      >
        <svg
          className="w-4 h-4 stroke-current fill-none stroke-[1.8] stroke-round"
          viewBox="0 0 24 24"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {/* Divider & Vertical Label */}
      <div className="w-[1px] h-5 bg-[var(--bd2)] mt-1 mb-1 hidden lg:block" />
      <div className="text-[0.6rem] font-normal text-[var(--t3)] tracking-[0.08em] uppercase [writing-mode:vertical-rl] py-2 hidden lg:block">
        Actions
      </div>
    </aside>
  );
}

function ArticleBody() {
  const dropCapStyle =
    "first-letter:font-fraunces first-letter:float-left first-letter:text-[4rem] first-letter:leading-[0.8] first-letter:font-light first-letter:text-[var(--navy)] dark:first-letter:text-[var(--accent)] first-letter:mr-2 first-letter:mt-1.5 first-letter:tracking-[-0.02em]";

  return (
    <article className="art-body min-w-0">
      {/* Prose Content Area */}
      <div
        className="text-lg text-[var(--t2)] leading-[1.75] font-
        [&>p]:mb-[1.4em]
        [&>h2]:font-fraunces [&>h2]:text-[1.5rem] [&>h2]:font-normal [&>h2]:text-[var(--text)] [&>h2]:tracking-[-0.02em] [&>h2]:mt-[2em] [&>h2]:mb-[0.75em] [&>h2]:leading-[1.25]
        [&>h3]:font-fraunces [&>h3]:text-[1.15rem] [&>h3]:font-normal [&>h3]:text-[var(--text)] [&>h3]:mt-[1.75em] [&>h3]:mb-[0.6em]
        [&>blockquote]:border-l-[3px] [&>blockquote]:border-[var(--accent)] [&>blockquote]:px-6 [&>blockquote]:py-4 [&>blockquote]:my-[2em] [&>blockquote]:bg-[var(--accent-l)] [&>blockquote]:rounded-r-[var(--rm)]
        [&>blockquote_p]:font-fraunces [&>blockquote_p]:italic [&>blockquote_p]:text-[var(--navy)] dark:[&>blockquote_p]:text-[var(--text)] [&>blockquote_p]:m-0 [&>blockquote_p]:leading-[1.65]"
      >
        <p className={dropCapStyle}>
          Anxiety is something most teenagers experience — the racing heart
          before a test, the spiral of "what ifs" at 3am, the constant low-level
          hum of worry that follows you into every room. But despite how common
          it is, talking about it openly remains one of the hardest things a
          young person can do. We've built a culture that rewards composure and
          punishes vulnerability, and nowhere is that more true than in the
          lives of teenagers.
        </p>

        <p>
          In this piece, we explore why breaking that silence — even just once,
          even just to one person — is often the single most powerful thing you
          can do for your mental health. Not therapy (though therapy helps). Not
          medication (though that can help too). Just language. Just words.
        </p>

        <h2 id="s1">The Weight of Unsaid Things</h2>

        <p>
          There's a specific kind of exhaustion that comes from carrying an
          emotion you've never named out loud. When anxiety lives only in your
          head, it grows unchecked — there's nothing to compare it against, no
          reality check, no perspective. It becomes the whole world.
        </p>

        <p>
          Psychologists call this "cognitive fusion" — the state of being so
          merged with your thoughts that you can't separate them from reality.
          The thought "I'm going to fail" becomes indistinguishable from the
          truth "I will fail." Naming that thought — saying it out loud, writing
          it down, texting it to a friend — creates distance. The thought is
          still there, but now it's a thought, not a fact.
        </p>

        <blockquote className="reveal">
          <p className={dropCapStyle}>
            "The bravest thing I ever did was tell my best friend I was anxious
            all the time. Not because she fixed it — she didn't. But because
            saying it out loud made it real, and real things can be dealt with."
          </p>
        </blockquote>

        <p>
          This isn't just anecdote. Research consistently shows that labeling
          emotions — what neuroscientists call "affect labeling" — reduces
          activity in the amygdala, the brain's alarm system. Literally, naming
          how you feel calms your nervous system. Language is not just
          expression. It is regulation.
        </p>

        <h2 id="s2">Why It's So Hard Anyway</h2>

        <p>
          Knowing something is good for you and actually doing it are two very
          different things. Most teenagers who struggle with anxiety know, on
          some level, that talking about it would help. So why don't they?
        </p>
      </div>

      {/* Inline Image Section */}
      <div className="my-8">
        <div className="w-full rounded-[var(--rl)] overflow-hidden bg-gradient-to-br from-[var(--soft)] to-[var(--accent-l)] aspect-[16/8] flex items-center justify-center text-[4rem] border border-[var(--bd)] shadow-[var(--sh1)]">
          🫂
        </div>
        <div className="text-[0.78rem] text-[var(--t3)] text-center mt-3 mb-8 italic font-lora">
          Talking to someone — even once — can shift the entire weight of
          anxiety.
        </div>
      </div>

      <div
        className="font-lora text-lg text-[var(--t2)] leading-[1.85] 
        [&>p]:mb-[1.4em] 
        [&>h2]:font-fraunces [&>h2]:text-[1.5rem] [&>h2]:text-[var(--text)] [&>h2]:mt-[2em] [&>h2]:mb-[0.75em]"
      >
        <p className={dropCapStyle}>
          The answers are layered: fear of being a burden, fear of being seen as
          weak, fear that verbalizing something will make it more real. There's
          also the very specific teenage fear of being misunderstood — of trying
          to explain the unexplainable and having someone respond with "just
          stop worrying so much."
        </p>

        <h2 id="s3">Starting Small</h2>

        <p>
          The good news is that you don't have to start with a full disclosure.
          You don't have to sit someone down and deliver a prepared speech about
          everything you've been carrying. You can start with a sentence.
        </p>

        <p>
          "I've been stressed lately." "I've been feeling weird." "Things have
          been hard." These are sentences that open doors without requiring you
          to walk through them entirely. They give the other person — a friend,
          a parent, a school counselor — the chance to respond, and you the
          chance to go as far as feels safe.
        </p>

        <h2 id="s4">You Don't Have to Have the Words</h2>

        <p>
          One of the most paralysing misconceptions about talking about mental
          health is that you need to be articulate about it. That you need to
          explain yourself clearly, describe your symptoms accurately, give
          people enough to work with.
        </p>

        <p>
          You don't. "I don't really know how to explain it, but things have
          been really hard lately" is a complete and valid communication. The
          goal isn't precision — the goal is connection. And connection doesn't
          require the right words. It requires the willingness to try.
        </p>
      </div>

      {/* Footer: Tags & Share */}
      <footer className="mt-10 py-6 border-t border-[var(--bd)] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[0.78rem] text-[var(--t3)] font-light">
            Tags:
          </span>
          {["Anxiety", "MentalHealth", "TeenWellness", "SpeakUp"].map((tag) => (
            <span
              key={tag}
              className="text-[0.78rem] text-[var(--accent)] font-normal px-3 py-1 border border-[rgba(59,130,196,0.25)] rounded-[var(--rf)] bg-[var(--accent-l)] cursor-pointer hover:bg-[var(--accent)] hover:text-white transition-all duration-200"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <span className="text-[0.78rem] text-[var(--t3)] font-light">
            Share this:
          </span>
          {[
            { icon: "🔗", title: "Copy link" },
            { icon: "𝕏", title: "Twitter/X" },
            { icon: "in", title: "LinkedIn" },
            { icon: "f", title: "Facebook" },
          ].map((item, i) => (
            <button
              key={i}
              title={item.title}
              className="w-8 h-8 rounded-full border border-[var(--bd2)] bg-[var(--white)] flex items-center justify-center text-[0.72rem] text-[var(--t2)] hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)] transition-all shadow-[var(--sh1)]"
            >
              {item.icon}
            </button>
          ))}
        </div>
      </footer>
    </article>
  );
}

function ArticleSidebar({ activeSection }: { activeSection: string }) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className="flex flex-col gap-4 w-[280px]">
      {/* Newsletter Widget */}
      <div className="bg-[var(--white)] border border-[var(--bd)] rounded-[var(--rl)] p-5 shadow-[var(--sh1)] transition-all">
        <div className="w-10 h-10 rounded-[var(--rm)] bg-[var(--accent-l)] flex items-center justify-center mb-3">
          <svg
            className="w-[18px] h-[18px] stroke-[var(--accent)] fill-none stroke-[1.6] stroke-round"
            viewBox="0 0 24 24"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>
        <div className="text-[0.9rem] font-medium text-[var(--text)] mb-1.5">
          Weekly Insights
        </div>
        <div className="text-[0.78rem] text-[var(--t2)] font-light leading-[1.55] mb-3.5">
          Get the best articles delivered to your inbox every Friday. No spam,
          we promise.
        </div>
        <button
          onClick={() => (window as any).openModal?.()}
          className="w-full py-2.5 bg-[var(--navy)] text-white rounded-[var(--rm)] text-[0.82rem] font-medium flex items-center justify-center gap-1.5 transition-all duration-220 hover:opacity-[0.85] hover:-translate-y-[1px]"
        >
          <svg
            className="w-3.5 h-3.5 stroke-white fill-none stroke-[2] stroke-round"
            viewBox="0 0 24 24"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          Subscribe
        </button>
      </div>

      {/* Table of Contents */}
      <div className="bg-[var(--white)] border border-[var(--bd)] rounded-[var(--rl)] p-5 shadow-[var(--sh1)]">
        <div className="text-[0.78rem] font-medium tracking-[0.1em] uppercase text-[var(--t3)] mb-3.5">
          In this article
        </div>
        <div className="flex flex-col gap-0.5">
          {[
            { id: "s1", label: "The Weight of Unsaid Things" },
            { id: "s2", label: "Why It's So Hard Anyway" },
            { id: "s3", label: "Starting Small" },
            { id: "s4", label: "You Don't Have to Have the Words" },
          ].map((item, index) => (
            <div
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-[0.8rem] font-light px-2.5 py-1.5 rounded-[var(--r)] cursor-pointer transition-all border-l-2 
                ${
                  activeSection === item.id
                    ? "text-[var(--accent)] bg-[var(--accent-l)] border-l-[var(--accent)]"
                    : "text-[var(--t2)] border-l-transparent hover:text-[var(--accent)] hover:bg-[var(--accent-l)] hover:border-l-[var(--accent)]"
                }`}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Related Tags */}
      <div className="bg-[var(--white)] border border-[var(--bd)] rounded-[var(--rl)] p-5 shadow-[var(--sh1)]">
        <div className="text-[0.78rem] font-medium tracking-[0.1em] uppercase text-[var(--t3)] mb-3.5">
          Explore more
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            "Anxiety",
            "Teen wellness",
            "Self-care",
            "Mindfulness",
            "Community",
            "Mental health",
          ].map((tag) => (
            <span
              key={tag}
              className="text-[0.75rem] px-3 py-1.5 border border-[var(--bd2)] rounded-[var(--rf)] text-[var(--t2)] cursor-pointer transition-all hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}

function ArticleDiscussion() {
  const [comment, setComment] = useState("");

  return (
    <section className="max-w-[1100px] mx-auto px-[5%] pb-[60px]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-7 pt-12 border-t border-[var(--bd)]">
        <h3 className="font-fraunces text-[1.4rem] font-normal text-[var(--text)]">
          Discussion
        </h3>
        <span className="text-[0.78rem] font-medium bg-[var(--soft)] text-[var(--t2)] px-2.5 py-0.5 rounded-[var(--rf)]">
          12 comments
        </span>
      </div>

      {/* Comment Input Row */}
      <div className="flex gap-3.5 items-start mb-9">
        <div className="w-[38px] h-[38px] rounded-full bg-[var(--blue)] flex items-center justify-center text-[0.72rem] font-medium text-white flex-shrink-0 mt-0.5">
          You
        </div>
        <div className="flex-1">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="What are your thoughts?"
            className="w-full p-[14px_18px] border border-[var(--bd2)] rounded-[var(--rl)] font-sans text-[0.9rem] text-[var(--text)] bg-[var(--white)] outline-none resize-none min-h-[80px] leading-[1.6] transition-all duration-200 placeholder:text-[var(--t3)] focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(59,130,196,0.08)]"
          />
          <button className="mt-2.5 float-right px-6 py-2.5 bg-[var(--navy)] text-white text-[0.85rem] font-medium rounded-[var(--rm)] transition-all duration-220 shadow-[0_4px_14px_rgba(13,31,60,0.18)] hover:opacity-[0.85] hover:-translate-y-[1px]">
            Post Comment
          </button>
          <div className="clear-both"></div>
        </div>
      </div>

      {/* Comments List */}
      <div className="flex flex-col gap-7">
        {[
          {
            name: "Jessica M.",
            initials: "JM",
            color: "#0D1F3C",
            time: "3 hours ago",
            likes: 8,
            text: "Great insights on the anxiety communication shift. I've found that video updates (Loom, etc.) bridge the gap between text and meetings perfectly. The point about cognitive fusion really resonated with me.",
          },
          {
            name: "David K.",
            initials: "DK",
            color: "#1E4D8C",
            time: "5 hours ago",
            likes: 14,
            text: "I agree with the point about starting small. \"I've been stressed lately\" is genuinely a door-opener. You don't need a full prepared speech — those three words have started some of the most important conversations in my life.",
          },
          {
            name: "Aliya M.",
            initials: "AM",
            color: "#2B6CB8",
            time: "1 day ago",
            likes: 22,
            text: "The research about affect labeling reducing amygdala activity is something I wish more people knew. It's literally scientific proof that talking about your feelings isn't just 'venting' — it's actually calming your nervous system.",
          },
        ].map((item, index) => (
          <div key={index} className="flex gap-3.5">
            <div
              style={{ backgroundColor: item.color }}
              className="w-9 h-9 rounded-full flex items-center justify-center text-[0.7rem] font-medium text-white flex-shrink-0 mt-0.5"
            >
              {item.initials}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-[0.88rem] font-medium text-[var(--text)]">
                  {item.name}
                </span>
                <span className="text-[0.75rem] text-[var(--t3)] font-light ml-auto">
                  {item.time}
                </span>
              </div>
              <p className="text-[0.875rem] text-[var(--t2)] leading-[1.7] font-light mb-2.5">
                {item.text}
              </p>
              <div className="flex gap-3.5">
                <button className="text-[0.75rem] text-[var(--t3)] font-normal flex items-center gap-1 transition-colors hover:text-[var(--accent)] group">
                  <svg
                    className="w-3 h-3 stroke-current fill-none stroke-[2] stroke-round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
                  </svg>
                  Like · {item.likes}
                </button>
                <button className="text-[0.75rem] text-[var(--t3)] font-normal hover:text-[var(--accent)] transition-colors">
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReadNext() {
  const nextPosts = [
    {
      id: 2,
      emoji: "🌿",
      gradient: "linear-gradient(135deg, var(--soft), #D6E4F0)",
      category: "Self-care",
      title: "5 daily habits that genuinely helped my mental wellbeing",
      excerpt:
        "Not the generic advice. These are the habits that actually made a difference over six months.",
    },
    {
      id: 3,
      emoji: "💬",
      gradient: "linear-gradient(135deg, #EEF2F7, var(--accent-l))",
      category: "Community",
      title: "Finding your people — how peer support changed everything",
      excerpt:
        "Two years of feeling alone. Then one conversation changed my relationship with my own mental health.",
    },
    {
      id: 4,
      emoji: "🌬️",
      gradient: "linear-gradient(135deg, var(--soft), #C4D4EC)",
      category: "Mindfulness",
      title: "Breathing through the hard moments — a beginner's honest guide",
      excerpt:
        "What actually worked during a panic attack at 2am — and what I wish someone had told me earlier.",
    },
  ];

  return (
    <section className="bg-[var(--white)] border-t border-[var(--bd)] py-14 px-[5%]">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-fraunces text-[1.5rem] font-normal text-[var(--text)]">
            Read Next
          </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {nextPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => (window.location.href = `/blog/${post.id}`)}
              className="bg-[var(--off)] border border-[var(--bd)] rounded-[var(--rl)] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--sh3)]"
            >
              {/* Cover */}
              <div
                style={{ background: post.gradient }}
                className="aspect-video flex items-center justify-center text-[2.5rem]"
              >
                {post.emoji}
              </div>

              {/* Body */}
              <div className="p-4">
                <div className="text-[0.65rem] font-medium tracking-[0.1em] uppercase text-[var(--accent)] mb-2">
                  {post.category}
                </div>
                <h4 className="font-fraunces text-[0.95rem] font-normal text-[var(--text)] leading-[1.4] mb-2">
                  {post.title}
                </h4>
                <p className="text-[0.78rem] text-[var(--t2)] leading-[1.55] font-light line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
