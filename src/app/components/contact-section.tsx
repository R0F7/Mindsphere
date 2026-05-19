"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-y border-border bg-off-white px-[5%] py-17.5"
    >
      {/* Blur Circle */}
      <div className="pointer-events-none absolute -right-30 -top-30 h-100 w-100 rounded-full bg-[rgba(59,130,196,0.04)] blur-[60px]" />

      <div className="mx-auto container">
        {/* Header */}
        <div  data-aos="fade-up" className="mb-14">
          <div className="mb-3 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-accent">
            Contact Us
          </div>

          <h2 className="mb-2.5 text-[clamp(1.8rem,4vw,2.8rem)] font-light tracking-[-0.03em] text-primary font-fraunces">
            Let's <em className="italic text-accent">Talk</em>
          </h2>

          <p className="text-[0.92rem] font-light text-secondary">
            Have a question, idea, or just want to say hello? We read every
            message.
          </p>
        </div>

        {/* Grid */}
        <div className="grid items-start gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div  data-aos="fade-right" className="rounded-xl border border-border bg-white p-10 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div id="contact-form-content">
                  {/* Row */}
                  <div className="grid gap-4 md:grid-cols-2">
                    {/* Name */}
                    <div className="mb-[18px] flex flex-col gap-[7px]">
                      <label className="text-[0.78rem] font-medium tracking-[0.02em] text-secondary">
                        Your Name
                      </label>

                      <input
                        type="text"
                        id="cf-name"
                        placeholder="e.g. Rania Islam"
                        autoComplete="given-name"
                        className="w-full rounded-[var(--radius-md)] border border-strong bg-off-white px-4 py-3 text-[0.9rem] text-primary outline-none transition-all duration-200 placeholder:text-muted focus:border-accent focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,196,0.08)]"
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-[18px] flex flex-col gap-[7px]">
                      <label className="text-[0.78rem] font-medium tracking-[0.02em] text-secondary">
                        Email Address
                      </label>

                      <input
                        type="email"
                        id="cf-email"
                        placeholder="your@email.com"
                        autoComplete="email"
                        className="w-full rounded-[var(--radius-md)] border border-strong bg-off-white px-4 py-3 text-[0.9rem] text-primary outline-none transition-all duration-200 placeholder:text-muted focus:border-accent focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,196,0.08)]"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-[18px] flex flex-col gap-[7px]">
                    <label className="text-[0.78rem] font-medium tracking-[0.02em] text-secondary">
                      Subject
                    </label>

                    <input
                      type="text"
                      id="cf-subject"
                      placeholder="What's this about?"
                      className="w-full rounded-[var(--radius-md)] border border-strong bg-off-white px-4 py-3 text-[0.9rem] text-primary outline-none transition-all duration-200 placeholder:text-muted focus:border-accent focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,196,0.08)]"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-[18px] flex flex-col gap-[7px]">
                    <label className="text-[0.78rem] font-medium tracking-[0.02em] text-secondary">
                      Message
                    </label>

                    <textarea
                      id="cf-message"
                      placeholder="Share your thoughts, questions, or feedback…"
                      className="min-h-[130px] w-full resize-y rounded-[var(--radius-md)] border border-strong bg-off-white px-4 py-3 text-[0.9rem] leading-[1.6] text-primary outline-none transition-all duration-200 placeholder:text-muted focus:border-accent focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,196,0.08)]"
                    />
                  </div>

                  {/* Button */}
                  <button className="group flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-navy px-4 py-[14px] text-[0.92rem] font-medium text-white transition-all duration-200 hover:-translate-y-[1px] hover:opacity-90 hover:shadow-md dark:bg-accent">
                    Send Message
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-transform duration-200 group-hover:translate-x-[3px]"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </div>

                {/* Success */}
                <div className="hidden px-0 pb-4 pt-8 text-center">
                  <div className="mb-[14px] text-[2.4rem]">✦</div>

                  <div className="mb-2 font-[var(--font-fraunces)] text-[1.3rem] font-light text-primary">
                    Message sent!
                  </div>

                  <div className="text-[0.88rem] font-light leading-[1.6] text-secondary">
                    Thank you for reaching out. We'll get back to you within 48
                    hours. In the meantime, feel free to explore the Mindsphere
                    community.
                  </div>
                </div>
              </form>
            ) : (
              <div className="px-0 pb-4 pt-8 text-center">
                <div className="mb-3.5 text-[2.4rem]">✦</div>

                <div className="mb-2 font-fraunces text-[1.3rem] font-light text-primary">
                  Message sent!
                </div>

                <p className="text-[0.88rem] font-light leading-[1.6] text-secondary">
                  Thank you for reaching out. We'll get back to you within 48
                  hours. In the meantime, feel free to explore the Mindsphere
                  community.
                </p>
              </div>
            )}
          </div>

          {/* Right Side */}
          <div  data-aos="fade-left" className="flex flex-col gap-5 pt-2">
            {/* Intro */}
            <div>
              <div className="mb-3 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-accent">
                Find Us Online
              </div>

              <div className="mb-3 font-fraunces text-[1.4rem] font-light italic leading-[1.35] text-primary">
                "Every great conversation starts with a single message."
              </div>
            </div>

            <div className="h-px w-10 bg-strong" />

            {/* Social */}
            <div>
              <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-muted">
                Social Channels
              </div>

              <div className="flex flex-col gap-2.5">
                {/* Instagram */}
                <a
                  href="#"
                  className="group flex items-center gap-3.5 rounded-md border border-border bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:translate-x-1 hover:border-strong hover:shadow-md"
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)] text-[0.85rem] font-semibold"
                    style={{ color: "white" }}
                  >
                    ig
                  </div>

                  <div>
                    <div className="text-[0.85rem] font-medium text-primary">
                      Instagram
                    </div>

                    <div className="text-[0.75rem] font-light text-muted">
                      @mindsphere.org
                    </div>
                  </div>

                  <span className="ml-auto text-[0.8rem] text-muted transition-transform duration-200 group-hover:translate-x-0.75">
                    →
                  </span>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  className="group flex items-center gap-3.5 rounded-md border border-border bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:translate-x-1 hover:border-strong hover:shadow-md"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[#1877F2] text-[0.85rem] font-semibold text-white">
                    f
                  </div>

                  <div>
                    <div className="text-[0.85rem] font-medium text-primary">
                      Facebook
                    </div>

                    <div className="text-[0.75rem] font-light text-muted">
                      Mindsphere Community
                    </div>
                  </div>

                  <span className="ml-auto text-[0.8rem] text-muted transition-transform duration-200 group-hover:translate-x-0.75">
                    →
                  </span>
                </a>

                {/* Linkedin */}
                <a
                  href="#"
                  className="group flex items-center gap-3.5 rounded-md border border-border bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:translate-x-1 hover:border-strong hover:shadow-md"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[#0A66C2] text-[0.85rem] font-semibold text-white">
                    in
                  </div>

                  <div>
                    <div className="text-[0.85rem] font-medium text-primary">
                      LinkedIn
                    </div>

                    <div className="text-[0.75rem] font-light text-muted">
                      Mindsphere Organization
                    </div>
                  </div>

                  <span className="ml-auto text-[0.8rem] text-muted transition-transform duration-200 group-hover:translate-x-0.75">
                    →
                  </span>
                </a>

                {/* Discord */}
                <a
                  href="#"
                  className="group flex items-center gap-3.5 rounded-md border border-border bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:translate-x-1 hover:border-strong hover:shadow-md"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[#5865F2] text-[0.85rem] font-semibold text-white">
                    dc
                  </div>

                  <div>
                    <div className="text-[0.85rem] font-medium text-primary">
                      Discord
                    </div>

                    <div className="text-[0.75rem] font-light text-muted">
                      Join the server
                    </div>
                  </div>

                  <span className="ml-auto text-[0.8rem] text-muted transition-transform duration-200 group-hover:translate-x-0.75">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Direct Email */}
            <div className="rounded-md border border-[rgba(59,130,196,0.18)] bg-accent-light p-5">
              <div className="mb-2 text-[0.7rem] font-medium uppercase tracking-widest text-accent">
                Direct Email
              </div>

              <div className="font-fraunces text-[0.95rem] font-light text-primary">
                hello@mindsphere.org
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
