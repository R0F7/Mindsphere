import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      className="bg-off-white w-full px-4 md:px-[5%] py-25 overflow-hidden"
      id="about"
    >
      <div className="mx-auto container w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* ── LEFT SIDE: IMAGE & FLOATING BADGE ── */}
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            className="relative w-full"
          >
            <div className="relative w-full aspect-4/3 bg-[linear-gradient(135deg,var(--soft-grey),var(--accent-light))] rounded-xl overflow-hidden border border-border">
              <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-muted">
                <svg
                  viewBox="0 0 24 24"
                  className="w-12 h-12 stroke-accent opacity-40 fill-none stroke-[1.5] stroke-linecap-round stroke-linejoin-round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="text-[0.8rem] font-light">
                  Team photo — about.png
                </span>
              </div>
            </div>

            <div className="absolute -bottom-5 right-2 md:-right-5 bg-white border border-border rounded-lg p-[16px_20px] shadow-md flex items-center gap-3 backdrop-blur-md">
              <div className="w-10 h-10 rounded-sm bg-accent-light flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 stroke-accent fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <div className="font-['Fraunces',serif] text-[1.4rem] font-normal text-primary leading-none mb-0.5">
                  500+
                </div>
                <div className="text-[0.75rem] text-secondary font-light">
                  Active members
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT SIDE: CONTENT & FEATURE CARDS ── */}
          <div className="flex flex-col items-start w-full min-w-0 mt-6 md:mt-0">
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              className="w-full"
            >
              <div className="inline-flex items-center gap-1.5 bg-accent-light text-accent text-[0.75rem] font-medium tracking-[0.06em] px-3.5 py-1.25 rounded-full mb-5">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
                About our organization
              </div>

              <div className="mb-3.5 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-accent">
                Who we are
              </div>
              <h2 className="font-['Fraunces',serif] text-[clamp(2rem,4vw,3rem)] font-light tracking-tight leading-[1.1] text-primary mb-4">
                Teens For <em className="text-accent italic">Teens</em>
              </h2>
              <p className="max-w-135 text-base font-light leading-[1.75] text-secondary mb-7">
                Mindsphere was built by teenagers who understood that mental
                health needed a different kind of space — one without clinical
                jargon, without judgment, and without adults speaking for the
                people who actually live this experience every day. We are that
                space.
              </p>
            </div>

            {/* FEATURE CARDS LIST */}
            <div className="w-full flex flex-col gap-2.5 mb-8">
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                className="group flex items-start gap-3.5 p-[16px_20px] bg-white border border-border rounded-md transition-all duration-250 cursor-default hover:shadow-sm"
              >
                <div className="w-9 h-9 rounded-sm bg-accent-light flex items-center justify-center shrink-0 text-base">
                  🧑‍🤝‍🧑
                </div>
                <div>
                  <div className="text-[0.9rem] font-medium text-primary mb-0.5">
                    Community Driven
                  </div>
                  <div className="text-[0.8rem] text-secondary font-light leading-5">
                    Every feature, tool, and decision is shaped by the teens who
                    use it — not a boardroom.
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="670"
                className="group flex items-start gap-3.5 p-[16px_20px] bg-white border border-border rounded-md transition-all duration-250 cursor-default hover:shadow-sm"
              >
                <div className="w-9 h-9 rounded-sm bg-accent-light flex items-center justify-center shrink-0 text-base">
                  🎯
                </div>
                <div>
                  <div className="text-[0.9rem] font-medium text-primary mb-0.5">
                    Goal Oriented
                  </div>
                  <div className="text-[0.8rem] text-secondary font-light leading-5">
                    We build with purpose — every resource, check-in, and tool
                    is designed to create real impact.
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="740"
                className="group flex items-start gap-3.5 p-[16px_20px] bg-white border border-border rounded-md transition-all duration-250 cursor-default hover:shadow-sm"
              >
                <div className="w-9 h-9 rounded-sm bg-accent-light flex items-center justify-center shrink-0 text-base">
                  💡
                </div>
                <div>
                  <div className="text-[0.9rem] font-medium text-primary mb-0.5">
                    Innovation Hub
                  </div>
                  <div className="text-[0.8rem] text-secondary font-light leading-5">
                    Peer support meets modern technology — we're redefining what
                    mental wellness looks like for Gen Z.
                  </div>
                </div>
              </div>
            </div>

            <Link
              data-aos="fade-up-left"
              data-aos-duration="500"
              href="/about"
              className="inline-flex items-center gap-2 text-[0.9rem] font-medium rounded-full bg-navy px-7 py-3.25 text-white transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(13,31,60,0.22)]"
            >
              Know More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
