"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeDot, setActiveDot] = useState(0);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getStrength = () => {
    if (!password) return 0;
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password) && /[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
  };

  return (
    <main className="min-h-screen bg-[#F8F9FB] flex items-center justify-center p-5 md:p-8 relative overflow-hidden font-sans">
      {/* Background Orbs */}
      <div className="fixed w-[500px] h-[500px] bg-[#3b82c41f] -top-[120px] -left-[80px] rounded-full blur-[90px] pointer-events-none z-0" />
      <div className="fixed w-[400px] h-[400px] bg-[#0d1f3c07] -bottom-[80px] -right-[100px] rounded-full blur-[90px] pointer-events-none z-0" />
      <div className="fixed w-[300px] h-[300px] bg-[#93c5fd1a] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] pointer-events-none z-0" />

      {/* Auth Card */}
      <div className="relative z-10 w-full max-w-[980px] bg-white rounded-[24px] shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden animate-in fade-in slide-in-from-bottom-7 duration-600">
        
        {/* LEFT: Visual Panel */}
        <aside className="hidden md:flex flex-col items-center justify-center relative p-11 bg-[#0D1F3C] overflow-hidden">
          {/* Pattern & Hex Shapes */}
          <div className="absolute inset-0 opacity-[0.022] pointer-events-none" 
               style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 30px, #fff 30px, #fff 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, #fff 30px, #fff 31px)' }} />
          <div className="absolute -bottom-10 -left-10 w-52 h-52 border border-white/5 rounded-[30px] -rotate-[15deg]" />
          <div className="absolute bottom-2 left-2 w-32 h-32 border border-white/[0.04] rounded-[20px] -rotate-[15deg]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.10)_0%,rgba(59,130,196,0.06)_50%,transparent_70%)]" />

          {/* 1. Purple Gem - Animated */}
          <div className="absolute top-14 right-[48%] w-7 h-7 bg-gradient-to-br from-[#a78bfa] to-[#60a5fa] rounded-[5px] -rotate-12 opacity-85 animate-bounce duration-[4000ms]" />
          
          {/* 2. Yellow Triangle - Animated (Fixed) */}
          <div className="absolute bottom-32 right-10 w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-b-[16px] border-b-[#fbbf24b3] animate-pulse duration-[5000ms]" />
          
          {/* 3. Green Circle - Animated */}
          <div className="absolute bottom-28 left-10 w-8 h-8 rounded-full bg-gradient-to-br from-[#10b981] to-[#34d399] flex items-center justify-center animate-bounce duration-[3500ms]">
            <svg className="w-[15px] h-[15px] stroke-white fill-none stroke-2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          </div>

          {/* Illustration Fallback (Matches your SVG layout) */}
          <div className="relative z-10 mb-2 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-pulse duration-[6000ms]">
            <svg width="130" height="130" viewBox="0 0 130 130" fill="none">
              <ellipse cx="65" cy="65" rx="55" ry="55" fill="rgba(59,130,196,0.08)" stroke="rgba(59,130,196,0.18)" strokeWidth="1.5"/>
              <rect x="30" y="50" width="70" height="46" rx="6" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
              <rect x="38" y="58" width="54" height="30" rx="3" fill="rgba(59,130,196,0.15)"/>
              <circle cx="65" cy="32" r="15" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
            </svg>
          </div>

          <div className="relative z-10 text-center max-w-[280px]">
            <h2 className="font-serif text-[1.3rem] text-white dark:text-primary tracking-tight leading-tight mb-2">Join Mindsphere Today</h2>
            <p className="text-[0.8rem] text-white/60 dark:text-primary font-light leading-relaxed">A safe space built by teens, for teens.<br/>You are never alone on this journey.</p>
          </div>

          {/* Carousel Dots */}
          <div className="flex gap-[7px] mt-5 relative z-10">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`h-[7px] transition-all duration-300 rounded-full dark:bg-primary/80 ${activeDot === i ? "w-5 bg-white/85 " : "w-[7px] bg-white/25 "}`} />
            ))}
          </div>
        </aside>

        {/* RIGHT: Form Section */}
        <section className="p-11 flex flex-col">
          {/* Logo Row */}
          <div className="flex items-center gap-2.5 mb-7">
            <div className="w-[34px] h-[34px] bg-[#0D1F3C] rounded-full flex items-center justify-center">
              <svg className="w-[18px] h-[18px] stroke-white fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path strokeLinecap="round" d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>
            </div>
            <span className="font-serif text-[1.05rem] text-[#1A1C1E] dark:text-primary">Mind<span className="text-[#3B82C4]">sphere</span></span>
          </div>

          <h1 className="font-serif text-[1.85rem] leading-tight text-[#1A1C1E] dark:text-primary tracking-tight mb-1.5">Create Account</h1>
          <p className="text-[0.875rem] text-[#6C7278] dark:text-primary font-light mb-6 dark:text-primary">Fill in the details below to get started</p>

          <form className="flex flex-col gap-[10px]" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.72rem] font-medium tracking-wide text-[#6C7278] dark:text-primary pl-0.5">Full Name</label>
                <input type="text" placeholder="Your full name" className="w-full p-[13px_18px] bg-soft-grey border-[1.5px] border-transparent rounded-md outline-none focus:bg-white focus:border-[#3B82C4] transition-all text-[0.88rem]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.72rem] font-medium tracking-wide text-[#6C7278] dark:text-primary pl-0.5">Date of Birth</label>
                <input type="date" className="w-full p-[13px_18px] bg-soft-grey border-[1.5px] border-transparent rounded-md outline-none focus:bg-white focus:border-[#3B82C4] transition-all text-[0.88rem]" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[0.72rem] font-medium tracking-wide text-[#6C7278] dark:text-primary pl-0.5">Email Address</label>
              <input type="email" placeholder="you@example.com" className="w-full p-[13px_18px] bg-soft-grey border-[1.5px] border-transparent rounded-md outline-none focus:bg-white focus:border-[#3B82C4] transition-all text-[0.88rem]" />
            </div>

            <div className="flex flex-col gap-1.5 relative">
              <label className="text-[0.72rem] font-medium tracking-wide text-[#6C7278] dark:text-primary pl-0.5">Password</label>
              <input 
                type={showPassword ? "text" : "password"} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password" 
                className="w-full p-[13px_18px] bg-soft-grey border-[1.5px] border-transparent rounded-md outline-none focus:bg-white focus:border-[#3B82C4] transition-all text-[0.88rem] pr-12" 
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[38px] text-[#6C7278] dark:text-primary hover:text-[#1A1C1E]"
              >
                <svg className="w-[18px] h-[18px] fill-none stroke-current stroke-[1.6]" viewBox="0 0 24 24">
                  {showPassword ? (
                    <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></>
                  ) : (
                    <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
                  )}
                </svg>
              </button>
              
              {/* Strength Meter */}
              <div className="flex gap-1 mt-1.5">
                {[1, 2, 3].map((s) => (
                  <div key={s} className={`flex-1 h-[3px] rounded-full transition-colors ${getStrength() >= s ? (getStrength() === 1 ? 'bg-red-500' : getStrength() === 2 ? 'bg-amber-500' : 'bg-emerald-500') : 'bg-gray-200'}`} />
                ))}
              </div>
            </div>

            <label className="flex items-start gap-2.5 text-[0.78rem] text-[#6C7278] dark:text-primary leading-relaxed cursor-pointer mt-0.5">
              <input type="checkbox" className="w-4 h-4 mt-0.5 rounded border-gray-300 accent-[#0D1F3C]" />
              <span>I agree to the <Link href="#" className="text-[#3B82C4]">Terms of Service</Link> and <Link href="#" className="text-[#3B82C4]">Privacy Policy</Link></span>
            </label>

            <button type="submit" className="w-full p-[15px] bg-[#0D1F3C] text-white dark:text-primary rounded-md text-[0.95rem] font-medium mt-2 hover:bg-[#1A3560] hover:-translate-y-0.5 transition-all shadow-lg active:scale-[0.98]">
              Create Account
            </button>

            <div className="flex items-center gap-3.5 my-1">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-[0.78rem] text-[#9EA3AE]">or continue</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <button type="button" className="w-full p-[13px_18px] border-[1.5px] border-gray-200 bg-white rounded-md text-[0.88rem] flex items-center justify-center gap-2.5 hover:bg-gray-50 transition-all active:scale-[0.99]">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Sign up with Google
            </button>
          </form>

          <p className="mt-auto pt-5 text-center text-[0.82rem] text-[#6C7278] dark:text-primary">
            Already have an account? <Link href="/login" className="text-[#0D1F3C] dark:text-primary font-medium hover:text-[#3B82C4]">Sign In</Link>
          </p>
        </section>
      </div>
    </main>
  );
}