import Link from "next/link";
import React from "react";

export default function JoinSection() {
  return (
    <section
      id="join"
      className="relative bg-[var(--white)] py-[110px] px-[5%] text-center overflow-hidden"
    >
      {/* Soft radial tint overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_90%_at_50%_0%,rgba(59,130,196,0.05)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_70%_90%_at_50%_0%,rgba(91,155,213,0.07)_0%,transparent_70%)]" />

      <div className="relative z-[1] max-w-[760px] mx-auto">
        {/* Recruitment Badge */}
        <div className="inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.1em] uppercase text-[var(--accent)] bg-[var(--accent-light)] border border-[rgba(59,130,196,0.2)] rounded-full px-4 py-1.5 mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-[pulse_2s_ease_infinite]" />
          Now welcoming new members
        </div>

        {/* Title */}
        <h2 className="font-fraunces text-[clamp(2rem,5vw,3.6rem)] font-light leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] mb-5">
          Your Voice
          <br />
          Belongs{" "}
          <em className="italic text-[var(--accent)] not-italic">Here</em>
        </h2>

        {/* Body Text */}
        <p className="text-[1.05rem] text-[var(--text-secondary)] font-light leading-[1.75] max-w-[560px] mx-auto mb-9">
          Mindsphere is built by teenagers, for teenagers. Whether you want to
          volunteer, create content, support peers, or simply be part of a
          community that truly understands — there is a place here for you.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
          <Link
            href="/waitlist"
            className="btn-p"
          >
            Join the Waitlist
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          <Link
            href="/about"
            className="btn-outline"
          >
            Learn About Us
          </Link>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap items-center justify-center gap-0 px-9 py-7 bg-[var(--off-white)] border border-[var(--border)] rounded-[var(--radius-xl)] max-w-[560px] mx-auto shadow-[var(--shadow-sm)]">
          {[
            { num: "2.4k+", label: "Community members" },
            { num: "18+", label: "Countries reached" },
            { num: "120+", label: "Volunteers" },
          ].map((stat, i, arr) => (
            <React.Fragment key={i}>
              <div className="flex-1 min-w-[120px] text-center">
                <div className="font-fraunces text-[2rem] font-light text-[var(--text-primary)] tracking-[-0.04em] leading-none mb-1">
                  {stat.num}
                </div>
                <div className="text-[0.75rem] text-[var(--text-muted)] font-light uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
              {i < arr.length - 1 && (
                <div className="hidden sm:block w-px h-10 bg-[var(--border-strong)] shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
