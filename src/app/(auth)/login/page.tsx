"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeDot, setActiveDot] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

   if (!mounted) return <div className="min-h-screen bg-[#F8F9FB]" />;

  return (
    <section className="min-h-screen bg-off-white flex items-center justify-center p-5 md:p-8 relative overflow-hidden font-sans">
      {/* Background Orbs */}
      <div className="fixed w-[500px] h-[500px] bg-[rgba(59,130,196,0.12)] top-[-120px] right-[-80px] rounded-full blur-[90px] pointer-events-none z-0" />
      <div className="fixed w-[400px] h-[400px] bg-[rgba(13,31,60,0.07)] bottom-[-80px] left-[-100px] rounded-full blur-[90px] pointer-events-none z-0" />

      {/* Auth Card */}
      <div className="relative z-10 w-full max-w-[880px] min-h-[580px] bg-[var(--white)] rounded-[var(--radius-xl)] shadow-[var(--shadow-lg)] grid grid-cols-1 md:grid-cols-2 overflow-hidden animate-[cardEntry_0.6s_cubic-bezier(0.22,1,0.36,1)_both]">
        {/* LEFT SECTION */}
        <section className="p-10 md:p-12 flex flex-col">
          <div className="flex items-center gap-2.5 mb-9">
            <div className="w-[34px] h-[34px] bg-[var(--navy)] rounded-full flex items-center justify-center">
              <svg
                className="w-[18px] h-[18px] stroke-white fill-none stroke-2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
              </svg>
            </div>
            <span className="font-fraunces text-[1.05rem] text-[var(--text-primary)]">
              Mind<span className="text-[var(--accent)]">sphere</span>
            </span>
          </div>

          <h1 className="font-fraunces text-[2rem] leading-[1.15] text-[var(--text-primary)] mb-2">
            Welcome Back!
          </h1>
          <p className="text-[0.875rem] text-[var(--text-muted)] font-light mb-8">
            Please enter log in details below
          </p>

          <form
            className="flex flex-col gap-3.5"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3.5 bg-soft-grey border-[1.5px] border-transparent rounded-[var(--radius-md)] outline-none focus:bg-white focus:border-[var(--accent)] transition-all text-sm"
              required
            />
            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-3.5 pr-12 bg-[var(--soft-grey)] border-[1.5px] border-transparent rounded-[var(--radius-md)] outline-none focus:bg-white focus:border-[var(--accent)] transition-all text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] p-1"
                >
                  {showPassword ? (
                    <svg
                      className="w-[18px] h-[18px] fill-none stroke-current stroke-[1.6]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      className="w-[18px] h-[18px] fill-none stroke-current stroke-[1.6]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="text-right mt-1.5">
                <button className="text-sm text-muted">Forget password?</button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full p-[15px] bg-[var(--navy)] text-white rounded-[var(--radius-md)] text-[0.95rem] font-medium mt-2 hover:bg-[#1A3560] transition-all active:scale-[0.98]"
            >
              Sign in
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3.5 my-1">
              <div className="flex-1 h-px bg-[var(--border)]"></div>
              <span className="text-[0.78rem] text-[var(--text-muted)] font-sans">
                or continue
              </span>
              <div className="flex-1 h-px bg-[var(--border)]"></div>
            </div>

            {/* Google Login */}
            <button
              type="button"
              className="w-full p-[13px] bg-white border-[1.5px] border-[var(--border)] rounded-[var(--radius-md)] text-[0.9rem] flex items-center justify-center gap-2.5 transition-all hover:bg-[var(--soft-grey)] hover:-translate-y-0.5 shadow-sm active:scale-[0.99] font-sans text-[var(--text-primary)]"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Log in with Google
            </button>
          </form>
          <p className="mt-auto pt-6 text-center text-[0.82rem] text-[var(--text-muted)] font-sans">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-[var(--navy)] font-medium hover:text-[var(--accent)]"
            >
              Sign Up
            </Link>
          </p>
        </section>

        {/* RIGHT SECTION (Visual Panel) */}
        <aside className="hidden md:flex flex-col items-center justify-center relative p-10 bg-[#0D1F3C] overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.4]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,0.022) 30px, rgba(255,255,255,0.022) 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(255,255,255,0.022) 30px, rgba(255,255,255,0.022) 31px)",
            }}
          />

          {/* Top-Right Purple Gem */}
          <div className="absolute top-[52px] left-[46%] w-8 h-8 bg-gradient-to-br from-[#a78bfa] to-[#60a5fa] rounded-md rotate-12 opacity-85 animate-[floatGem_4s_ease-in-out_infinite]" />

          {/* --- PANEL-DOT-YELLOW (Fixed Triangle SVG) --- */}
          <div className="absolute bottom-[140px] left-[15%] opacity-80 animate-[floatGem_5s_ease-in-out_infinite_reverse]">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
              <path d="M11 0L21.3923 18H0.607696L11 0Z" fill="#FBBF24" />
            </svg>
          </div>

          {/* Bottom-Right Green Orb */}
          <div className="absolute bottom-[118px] right-11 w-9 h-9 rounded-full bg-gradient-to-br from-[#10b981] to-[#34d399] flex items-center justify-center animate-[floatGem_3.5s_ease-in-out_infinite]">
            <svg
              className="w-4 h-4 stroke-white fill-none stroke-2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a10 10 0 0 1 0 20c-3 0-5.5-1.3-7.3-3.3" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>

          {/* SVG Illustration */}
          <div className="relative z-10 mb-8 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-[illustFloat_6s_ease-in-out_infinite]">
            <svg width="180" height="180" viewBox="0 0 140 140" fill="none">
              <ellipse
                cx="70"
                cy="70"
                rx="60"
                ry="60"
                fill="rgba(59,130,196,0.08)"
                stroke="rgba(59,130,196,0.2)"
                strokeWidth="1.5"
              ></ellipse>
              <rect
                x="35"
                y="55"
                width="70"
                height="46"
                rx="6"
                fill="rgba(255,255,255,0.08)"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.5"
              ></rect>
              <rect
                x="42"
                y="63"
                width="56"
                height="30"
                rx="3"
                fill="rgba(59,130,196,0.15)"
              ></rect>
              <circle
                cx="70"
                cy="36"
                r="16"
                fill="rgba(255,255,255,0.12)"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.5"
              ></circle>
              <path
                d="M60 50 Q70 60 80 50"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>

          <div className="relative z-10 text-center max-w-[300px]">
            <h2 className="font-fraunces text-[1.35rem] text-panel-text leading-tight mb-2.5">
              Manage your Money Anywhere
            </h2>
            <p className="text-[0.82rem] text-panel-sub font-light font-sans">
              You can Manage your Money on the go with Mindsphere on the web.
            </p>
          </div>

          {/* Carousel Dots */}
          <div className="flex gap-[7px] mt-[22px] relative z-10">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-[7px] transition-all duration-300 rounded-full ${activeDot === i ? "w-5 bg-white/85" : "w-[7px] bg-white/25"}`}
              />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
