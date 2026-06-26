import React from "react";

export default function AuthSection() {
  return (
    <section
      id="auth"
      className="relative bg-[var(--off-white)] py-[110px] px-[5%] border-y border-[var(--border)] overflow-hidden"
    >
      {/* Decorative Radial Tints */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_80%_at_100%_50%,rgba(59,130,196,0.05)_0%,transparent_70%),radial-gradient(ellipse_50%_70%_at_0%_50%,rgba(13,31,60,0.03)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_60%_80%_at_100%_50%,rgba(91,155,213,0.07)_0%,transparent_70%)]" />

      <div className="relative z-[1] container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side: Pitch */}
        <div className="reveal left">
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.1em] uppercase text-[var(--accent)] bg-[var(--accent-light)] border border-[rgba(59,130,196,0.2)] rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              Member Portal
            </div>

            <h2 className="font-fraunces text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)] mb-5">
              Your journey
              <br />
              starts{" "}
              <em className="italic text-[var(--accent)] not-italic">here</em>
            </h2>

            <p className="text-[0.98rem] text-[var(--text-secondary)] font-light leading-[1.75] mb-9">
              Create your Mindsphere account to access exclusive resources,
              track your mental wellness journey, and connect with a community
              that truly understands.
            </p>
          </div>
          <ul className="flex flex-col gap-5 list-none p-0">
            {[
              {
                icon: "🌱",
                title: "Personal Wellness Dashboard",
                desc: "Track your mood, progress, and goals over time.",
              },
              {
                icon: "💬",
                title: "Safe Community Access",
                desc: "Join moderated spaces built for real connection.",
              },
              {
                icon: "📚",
                title: "Full Resource Library",
                desc: "Unlock all articles, guides, and tools, completely free.",
              },
            ].map((perk, i) => (
              <li
                data-aos="fade-up"
                data-aos-delay={200 + i * 50}
                key={i}
                className="flex items-start gap-4"
              >
                <div className="w-[42px] h-[42px] rounded-[var(--radius-md)] bg-white border border-[var(--border)] flex items-center justify-center text-[1.1rem] shrink-0 shadow-[var(--shadow-sm)]">
                  {perk.icon}
                </div>
                <div>
                  <div className="text-[0.88rem] font-medium text-[var(--text-primary)] mb-0.5">
                    {perk.title}
                  </div>
                  <div className="text-[0.8rem] text-[var(--text-muted)] font-light">
                    {perk.desc}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Auth Card */}
        <div data-aos="fade-left" className="reveal right w-full max-w-[500px] lg:max-w-none mx-auto">
          <div className="bg-white border border-[var(--border)] rounded-[var(--radius-xl)] p-8 lg:p-10 shadow-[var(--shadow-md)]">
            {/* Login Block */}
            <div className="p-6 rounded-[var(--radius-lg)] bg-[var(--off-white)] border border-[var(--border)]">
              <div className="text-[1.5rem] mb-1.5">👋</div>
              <div className="text-[0.7rem] font-medium tracking-[0.12em] uppercase text-[var(--text-muted)] mb-2">
                Welcome back
              </div>
              <h3 className="font-fraunces text-[1.4rem] font-light leading-[1.15] tracking-[-0.025em] text-[var(--text-primary)] mb-2.5">
                Already have an
                <br />
                <em className="italic text-[var(--accent)] not-italic">
                  account?
                </em>
              </h3>
              <p className="text-[0.82rem] text-[var(--text-secondary)] font-light leading-[1.65] mb-4.5">
                Log in to your Mindsphere account to access your dashboard,
                resources, and community spaces.
              </p>
              <a
                href="/login"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[var(--navy)] dark:bg-[var(--accent)] text-white text-[0.9rem] font-medium rounded-full no-underline transition-all hover:opacity-88 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(13,31,60,0.2)]"
              >
                Log In to Your Account
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5 text-[0.75rem] text-[var(--text-muted)] before:content-[''] before:flex-1 before:h-[1px] before:bg-[var(--border)] after:content-[''] after:flex-1 after:h-[1px] after:bg-[var(--border)]">
              or
            </div>

            {/* Signup Block */}
            <div className="p-6 rounded-[var(--radius-lg)] bg-[var(--off-white)] border border-[var(--border)]">
              <div className="text-[1.5rem] mb-1.5">✨</div>
              <div className="text-[0.7rem] font-medium tracking-[0.12em] uppercase text-[var(--text-muted)] mb-2">
                New here?
              </div>
              <h3 className="font-fraunces text-[1.4rem] font-light leading-[1.15] tracking-[-0.025em] text-[var(--text-primary)] mb-2.5">
                Create your free
                <br />
                <em className="italic text-[var(--accent)] not-italic">
                  account
                </em>
              </h3>
              <p className="text-[0.82rem] text-[var(--text-secondary)] font-light leading-[1.65] mb-4.5">
                Join thousands of teens. Get your wellness dashboard, full
                resource library access, and community membership — free,
                always.
              </p>
              <a
                href="/signup"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[var(--accent)] text-white text-[0.9rem] font-medium rounded-full no-underline transition-all hover:opacity-88 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(59,130,196,0.2)]"
              >
                Create a Free Account
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <div className="mt-3 text-[0.72rem] text-[var(--text-muted)] font-light text-center">
                No credit card. No spam. Cancel anytime.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
