export default function UserProfile() {
  return (
    <div className="bg-off">
      <section className="profile-hero relative pt-[120px] pb-[100px] px-[5%] text-center overflow-hidden bg-off border-bottom border-gray-200 dark:border-white/10 transition-colors duration-500">
        {/* ── Background Grid ── */}
        <div className="hero-grid absolute inset-0 pointer-events-none opacity-[0.35]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(var(--bd-color, #e5e7eb) 1px, transparent 1px), linear-gradient(90deg, var(--bd-color, #e5e7eb) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `linear-gradient(var(--bd-color, #e5e7eb) 1px, transparent 1px), linear-gradient(90deg, var(--bd-color, #e5e7eb) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />
          {/* Radial fade for the grid */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,#F8F9FB_100%)] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,#080E1A_100%)]" />
        </div>

        {/* ── Texture & Orbs ── */}
        <div
          className="hero-noise absolute inset-0 opacity-[0.018] dark:opacity-[0.04] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Blue Orb 1 */}
        <div
          className="hero-orb o1 absolute rounded-full blur-[100px] pointer-events-none w-[500px] h-[500px] -top-[200px] -right-[100px] animate-drift
        bg-[radial-gradient(circle,rgba(59,130,196,0.12)_0%,transparent_70%)] 
        dark:bg-[radial-gradient(circle,rgba(91,155,213,0.15)_0%,transparent_70%)]"
        />

        {/* Dark Orb 2 */}
        <div
          className="hero-orb o2 absolute rounded-full blur-[100px] pointer-events-none w-[350px] h-[350px] -bottom-[80px] -left-[80px] animate-drift-reverse
        bg-[radial-gradient(circle,rgba(13,31,60,0.06)_0%,transparent_70%)] 
        dark:bg-[radial-gradient(circle,rgba(30,77,140,0.18)_0%,transparent_70%)]"
        />

        {/* Orb 3 */}
        <div
          className="hero-orb o3 absolute rounded-full blur-[60px] pointer-events-none w-[250px] h-[250px] top-[20%] left-[15%]
        bg-[radial-gradient(circle,rgba(59,130,196,0.05)_0%,transparent_70%)]"
        />

        {/* ── Content ── */}
        <div className="hero-inner max-w-[720px] mx-auto relative z-10">
          <div
            className="hero-tag inline-flex items-center gap-2 border border-strong rounded-full px-4 py-1.5 text-[0.75rem] font-medium text-gray-500 dark:text-gray-400 bg-[#F8F9FB] dark:bg-[#080E1A] mb-6"
            data-aos="fade-down"
          >
            <div className="hero-dot w-1.5 h-1.5 rounded-full bg-[#3B82C4] animate-pulse-custom" />
            Member Profile
          </div>

          <h1
            className="font-serif text-[clamp(2.4rem,6vw,4rem)] font-light leading-[1.05] tracking-tight text-navy mb-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Anika <em className="italic text-[#3B82C4]">Sharma</em>
          </h1>
        </div>
      </section>

      <section className="profile-layout container px-[5%] pb-20 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 items-start">
        {/* ── LEFT SIDEBAR ── */}
        <aside className="profile-sidebar">
          {/* Avatar Card */}
          <div
            className="avatar-card bg-white border border-gray-200 dark:border-white/5 rounded-[24px] p-7 text-center shadow-sm -mt-[60px] relative z-20"
            data-aos="fade-up"
          >
            <div className="avatar-wrap relative inline-block mb-4">
              <div className="avatar w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[#0D1F3C] to-[#3B82C4] text-white flex items-center justify-center font-serif text-[2.2rem] font-light border-4 border-white dark:border-[#0D1F3C] shadow-[0_0_0_2px_#e5e7eb] dark:shadow-[0_0_0_2px_#ffffff10] overflow-hidden mx-auto">
                AS
              </div>
              {/* Online Badge */}
              <div
                className="online-badge absolute bottom-1 right-1 w-[18px] h-[18px] rounded-full bg-emerald-500 border-3 border-white dark:border-[#0D1F3C]"
                title="Active recently"
              />
            </div>

            <h2 className="profile-name font-serif text-[1.35rem] font-normal text-navy mb-1 tracking-tight">
              Anika Sharma
            </h2>
            <p className="profile-handle text-[0.82rem] text-gray-400 dark:text-gray-500 font-light mb-3">
              @anika.s · Member
            </p>

            <div className="profile-bio text-[0.875rem] text-gray-500 dark:text-gray-400 leading-relaxed font-light mb-5 pb-5 border-b border-gray-100 dark:border-white/5">
              A teen trying to understand myself better, one day at a time.
              Writing about anxiety, connection, and the small things that
              actually help.
            </div>

            <div className="profile-meta flex flex-col gap-2.5">
              <div className="pm-item flex items-center gap-2.5 text-[0.82rem] text-gray-500 dark:text-gray-400 font-light">
                <svg
                  className="w-3.5 h-3.5 stroke-current fill-none stroke-[1.8]"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Joined April 2025
              </div>
            </div>
          </div>
        </aside>

        {/* ── RIGHT MAIN ── */}
        <div className="profile-main pt-7">
          {/* Recent Activity Section */}
          <section
            className="prof-section bg-white border border-gray-200 dark:border-white/5 rounded-[24px] p-7 md:p-8 shadow-sm mb-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="section-hd flex items-center justify-between mb-6 gap-3 flex-wrap">
              <div className="section-title flex items-center gap-2.5 font-serif text-base font-normal text-navy">
                <div className="section-icon w-8 h-8 rounded-lg bg-[#0D1F3C] dark:bg-[#3B82C4] flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5 stroke-white fill-none stroke-[1.8]"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                Public Activity
              </div>
            </div>

            <div className="activity-list">
              {/* Empty State */}
              <div className="empty-activity py-12 px-6 text-center bg-[#F8F9FB] dark:bg-[#111C2D] border border-dashed border-gray-200 dark:border-white/10 rounded-[24px] flex flex-col items-center justify-center gap-4">
                <div className="empty-icon w-[52px] h-[52px] rounded-full bg-white dark:bg-[#0D1F3C] flex items-center justify-center text-gray-400 dark:text-gray-600 shadow-sm border border-gray-100 dark:border-white/5">
                  <svg
                    className="w-5.5 h-5.5 stroke-current fill-none stroke-[1.5]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <p className="empty-text text-[0.95rem] text-gray-500 dark:text-gray-400 font-light max-w-[240px] leading-relaxed">
                  This user has no public activity to show yet.
                </p>
              </div>
            </div>
          </section>

          {/* Report Link */}
          <div
            className="report-link inline-flex items-center gap-1.5 text-[0.75rem] text-gray-400 dark:text-gray-500 font-light cursor-pointer hover:text-red-500 transition-colors"
            //   onClick={() => alert('Report submitted. Our team will review this profile.')}
            data-aos="fade-in"
            data-aos-delay="400"
          >
            <svg
              className="w-3 h-3 stroke-current fill-none stroke-[2]"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            Report this profile
          </div>
        </div>
      </section>
    </div>
  );
}
