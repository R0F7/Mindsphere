import Link from "next/link";

export default function Hero() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scrollLine {
          0%, 100% { transform: scaleY(1); opacity: 1; }
          50% { transform: scaleY(0.5); opacity: .4; }
        }
      `,
        }}
      />
      <section
        id="home"
        className="relative flex min-h-screen items-center bg-white px-[5%] pt-30 pb-20 overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-60 z-0
            bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] 
            bg-size-[72px_72px]
            after:absolute after:inset-0 after:content-['']
            after:bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,var(--white)_100%)]"
        />

        <div className="absolute pointer-events-none rounded-full filter blur-[100px] w-150 h-150 -top-37.5 -right-25 bg-[rgba(59,130,196,0.07)] dark:bg-[rgba(91,155,213,0.1)]" />

        <div className="absolute pointer-events-none rounded-full filter blur-[100px] w-100 h-100 bottom-0 -left-25 bg-[rgba(13,31,60,0.05)] dark:bg-[rgba(30,77,140,0.12)]" />

        <div className="relative z-10 mx-auto w-full container">
          <div className="mb-6 inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.14em] text-muted before:content-[''] before:w-10 before:h-px before:bg-strong after:content-[''] after:w-10 after:h-px after:bg-strong">
            <span>Mental wellness platform</span>
            <span className="w-1 h-1 rounded-full bg-muted opacity-50" />
            <span>Teens for teens</span>
          </div>

          <div className="relative mb-0">
            <h1 className="font-fraunces text-[clamp(3.5rem,10vw,9rem)] font-thin leading-none tracking-[-0.04em] text-primary mb-0">
              You Are
              <br />
              <em className="italic text-accent">Not Alone.</em>
            </h1>
          </div>

          <div className="my-4 flex flex-wrap flex-col md:flex-row items-center justify-between gap-3 border-t border-b border-border py-5">
            <span className="text-[0.82rem] font-light tracking-[0.04em] text-muted">
              Safe space for every teen
            </span>
            <div className="h-px max-w-30 min-w-7.5 flex-1 bg-border hidden md:block" />

            <span className="text-[0.82rem] font-light tracking-[0.04em] text-muted">
              Peer-led support
            </span>
            <div className="h-px max-w-30 min-w-7.5 flex-1 bg-border hidden md:block" />

            <span className="text-[0.82rem] font-light tracking-[0.04em] text-muted">
              Built with care
            </span>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-100">
              <p className="font-['Fraunces',serif] text-[clamp(1rem,2vw,1.3rem)] font-light italic leading-normal text-secondary mb-7">
                A platform where teenagers find tools, community, and support —
                built by teens who truly get it.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/get-involved"
                  className="font-sans text-[0.9rem] font-medium inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.25 text-white transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(13,31,60,0.22)]"
                >
                  Join the community →
                </Link>
                <Link
                  href="/about"
                  className="font-sans text-[0.9rem] font-normal inline-flex items-center gap-2 rounded-full border border-strong bg-transparent px-7 py-3.25 text-primary transition-all duration-250 hover:bg-navy hover:text-white hover:border-navy"
                >
                  Learn more
                </Link>
              </div>
            </div>

            <div
              data-aos="fade-left"
              // data-aos-duration="500"
              className="min-w-50 rounded-lg border border-border bg-glass-strong p-[24px_28px] shadow-md backdrop-blur-lg -webkit-backdrop-blur-[16px]"
            >
              <div className="font-['Fraunces',serif] text-[2.8rem] font-light leading-none tracking-[-0.04em] text-primary">
                2.4k+
              </div>
              <div className="text-[0.78rem] font-light leading-4 text-secondary my-4">
                teens in our community report feeling less alone after joining
                Mindsphere
              </div>
              <div className="border-t border-border pt-3 text-[0.8rem] font-medium text-primary">
                Teen community · Est. 2024
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[0.72rem] uppercase tracking-widest text-muted z-10">
          <div
            className="w-px h-10 bg-[linear-gradient(to_bottom,var(--accent),transparent)]"
            style={{ animation: "scrollLine 1.8s ease-in-out infinite" }}
          />
          <span>Scroll</span>
        </div>
      </section>
    </>
  );
}
