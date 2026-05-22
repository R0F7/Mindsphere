"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Custom404() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isEmojiPopping, setIsEmojiPopping] = useState(false);
  const [particles, setParticles] = useState<{ id: number; size: number; left: number; bottom: number; dur: number; delay: number }[]>([]);

  const msgs = ['🧠', '🌱', '💙', '✨', '🤝', '💬', '🧘', '🌿', '😌'];

  // Navbar scroll listener & Particles generator
  useEffect(() => {
    // Scroll Event
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Generate Particles
    const count = 22;
    const sizes = [3, 4, 5, 6, 8, 10];
    const generatedParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: sizes[Math.floor(Math.random() * sizes.length)],
      left: 5 + Math.random() * 90,
      bottom: Math.random() * 60,
      dur: 6 + Math.random() * 8,
      delay: Math.random() * 8,
    }));
    setParticles(generatedParticles);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Easter Egg Handler
  const handleEmojiClick = () => {
    setClickCount((prev) => prev + 1);
    setIsEmojiPopping(true);
    setTimeout(() => setIsEmojiPopping(false), 250);
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-800 font-sans overflow-x-hidden">
      
      {/* ── CUSTOM KEYFRAMES & COMPLEX CSS ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatUp {
          0% { opacity: 0; transform: translateY(0) scale(1); }
          10% { opacity: 0.35; }
          80% { opacity: 0.12; }
          100% { opacity: 0; transform: translateY(-220px) scale(0.4); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes numAppear {
          from { opacity: 0; letter-spacing: 0.1em; }
          to { opacity: 1; letter-spacing: -0.06em; }
        }
        @keyframes innerFloat {
          0%, 100% { transform: translate(-50%, -48%) translateY(0) rotate(-3deg); }
          50% { transform: translate(-50%, -48%) translateY(-10px) rotate(3deg); }
        }
        @keyframes lineSlide {
          from { width: 0%; opacity: 0; left: 50%; }
          to { width: 105%; opacity: 1; left: -2.5%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.5); }
        }
        .bg-grid {
          background-image: linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px);
          background-size: 64px 64px;
        }
        .bg-grid::after {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, #f8fafc 100%);
        }
        .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) both; }
        .animate-numAppear { animation: numAppear 1s cubic-bezier(0.4, 0, 0.2, 1) both; }
        .animate-lineSlide { animation: lineSlide 1.2s cubic-bezier(0.4, 0, 0.2, 1) both; }
        .animate-innerFloat { animation: innerFloat 4s ease-in-out infinite; }
        .animate-pulseDot { animation: pulse 2s ease-in-out infinite; }
      `}} />

      {/* ── NAVBAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isScrolled ? "bg-[#F7F9FC]/92 backdrop-blur-[12px] border-b border-[#0D1F3C]/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1100px] mx-auto flex items-center justify-between py-[18px]">
          <div className="font-serif text-[1.15rem] font-semibold text-slate-800 tracking-[-0.02em]">
            Mindsphere <span className="text-[#3B82C4]">.</span>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-[0.88rem] text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
            <Link href="/" className="text-[0.875rem] font-medium px-[22px] py-[9px] bg-[#0D1F3C] text-white rounded-full transition-all hover:opacity-85 hover:-translate-y-[1px]">
              Go Home
            </Link>
          </div>
        </div>
      </nav>

      {/* ── BACKGROUND LAYER ── */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-60">
        <div className="bg-grid absolute inset-0"></div>
        {/* Ambient Orbs */}
        <div className="absolute rounded-full blur-[100px] w-[560px] h-[560px] bg-[#3B82C4]/10 -top-[180px] -right-[120px]"></div>
        <div className="absolute rounded-full blur-[100px] w-[400px] h-[400px] bg-[#0D1F3C]/5 -bottom-[80px] -left-[100px]"></div>
        <div className="absolute rounded-full blur-[100px] w-[300px] h-[300px] bg-[#3B82C4]/5 bottom-[20%] right-[10%]"></div>
        
        {/* Particles */}
        <div className="absolute inset-0">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full bg-[#3B82C4] opacity-0"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                left: `${p.left}%`,
                bottom: `${p.bottom}%`,
                animation: `floatUp ${p.dur}s ${p.delay}s ease-in-out infinite`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 flex flex-col items-center justify-center px-[5%] pt-[100px] pb-[60px] relative z-10 min-h-screen">
        <div className="max-w-[680px] w-full flex flex-col items-center text-center animate-fadeUp">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-slate-200 rounded-full px-4 py-1.5 text-[0.75rem] font-medium text-slate-600 bg-white mb-5 shadow-sm animate-fadeUp" style={{ animationDelay: '0.3s' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82C4] animate-pulseDot"></span>
            Error 404 · Page not found
          </div>

          {/* Big 404 Number */}
          <div className="relative mb-6 flex items-center justify-center">
            <div className="font-serif text-[clamp(9rem,22vw,16rem)] font-light tracking-[-0.06em] leading-none text-transparent relative select-none animate-numAppear" style={{ WebkitTextStroke: '1.5px #e2e8f0', animationDelay: '0.1s' }}>
              4
              <span className="italic text-transparent relative" style={{ WebkitTextStroke: '1.5px #3B82C4' }}>
                0
                <span
                  onClick={handleEmojiClick}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(2rem,5vw,4rem)] not-italic text-[#3B82C4] cursor-pointer animate-innerFloat transition-transform duration-250 ease-out z-20 pointer-events-auto"
                  style={{
                    WebkitTextStroke: '0',
                    transform: isEmojiPopping ? 'translate(-50%, -48%) scale(1.4)' : '',
                  }}
                >
                  {msgs[clickCount % msgs.length]}
                </span>
              </span>
              4
            </div>
            <div className="absolute h-[2px] w-[105%] top-1/2 -left-[2.5%] animate-lineSlide" style={{ background: 'linear-gradient(90deg, transparent, #e2e8f0, #3B82C4, #e2e8f0, transparent)', animationDelay: '0.3s' }}></div>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-[clamp(1.6rem,4vw,2.8rem)] font-light tracking-[-0.03em] leading-[1.2] text-slate-800 mb-[14px] animate-fadeUp" style={{ animationDelay: '0.4s' }}>
            Looks like you've <em className="italic text-[#3B82C4]">wandered off</em><br />the beaten path.
          </h1>

          {/* Subtext */}
          <p className="text-[1rem] text-slate-600 font-light leading-[1.75] max-w-[460px] mx-auto mb-10 animate-fadeUp" style={{ animationDelay: '0.5s' }}>
            The page you're looking for doesn't exist — it may have been moved, deleted, or maybe it never existed in the first place. It happens to everyone.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fadeUp" style={{ animationDelay: '0.6s' }}>
            <Link href="/" className="inline-flex items-center gap-2 font-sans text-[0.95rem] font-medium px-8 py-[13px] bg-[#0D1F3C] text-white rounded-full shadow-[0_4px_16px_rgba(13,31,60,0.2)] hover:shadow-[0_10px_28px_rgba(13,31,60,0.26)] hover:-translate-y-0.5 transition-all duration-250">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Take me home
            </Link>
            <Link href="/support" className="inline-flex items-center gap-2 font-sans text-[0.95rem] font-normal px-7 py-[13px] border border-slate-200 text-slate-800 bg-transparent rounded-full hover:bg-[#0D1F3C] hover:text-white hover:border-[#0D1F3C] transition-all duration-250">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              Go to Support
            </Link>
          </div>

          {/* Quick Links */}
          <div className="text-[0.72rem] font-medium tracking-[0.12em] uppercase text-slate-500 mb-4 animate-fadeUp" style={{ animationDelay: '0.7s' }}>Or jump to</div>
          <div className="flex flex-wrap justify-center gap-2 animate-fadeUp" style={{ animationDelay: '0.75s' }}>
            
            <Link href="/support" className="group flex items-center gap-2 px-[18px] py-[10px] bg-white border border-slate-300 rounded-full text-[0.85rem] text-slate-600 shadow-sm hover:border-slate-400 hover:text-slate-800 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <div className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center group-hover:bg-[#0D1F3C] transition-colors duration-200">
                <svg className="w-[13px] h-[13px] stroke-slate-600 fill-none stroke-[1.8] group-hover:stroke-white transition-colors duration-200" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              Support
            </Link>

            <Link href="/community" className="group flex items-center gap-2 px-[18px] py-[10px] bg-white border border-slate-300 rounded-full text-[0.85rem] text-slate-600 shadow-sm hover:border-slate-400 hover:text-slate-800 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <div className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center group-hover:bg-[#0D1F3C] transition-colors duration-200">
                <svg className="w-[13px] h-[13px] stroke-slate-600 fill-none stroke-[1.8] group-hover:stroke-white transition-colors duration-200" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              Community
            </Link>

            <Link href="/resources" className="group flex items-center gap-2 px-[18px] py-[10px] bg-white border border-slate-300 rounded-full text-[0.85rem] text-slate-600 shadow-sm hover:border-slate-400 hover:text-slate-800 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <div className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center group-hover:bg-[#0D1F3C] transition-colors duration-200">
                <svg className="w-[13px] h-[13px] stroke-slate-600 fill-none stroke-[1.8] group-hover:stroke-white transition-colors duration-200" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </div>
              Resources
            </Link>

            <Link href="/blog" className="group flex items-center gap-2 px-[18px] py-[10px] bg-white border border-slate-300 rounded-full text-[0.85rem] text-slate-600 shadow-sm hover:border-slate-400 hover:text-slate-800 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <div className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center group-hover:bg-[#0D1F3C] transition-colors duration-200">
                <svg className="w-[13px] h-[13px] stroke-slate-600 fill-none stroke-[1.8] group-hover:stroke-white transition-colors duration-200" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              Blog
            </Link>

            <Link href="/about" className="group flex items-center gap-2 px-[18px] py-[10px] bg-white border border-slate-300 rounded-full text-[0.85rem] text-slate-600 shadow-sm hover:border-slate-400 hover:text-slate-800 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <div className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center group-hover:bg-[#0D1F3C] transition-colors duration-200">
                <svg className="w-[13px] h-[13px] stroke-slate-600 fill-none stroke-[1.8] group-hover:stroke-white transition-colors duration-200" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              About
            </Link>

            <Link href="/events" className="group flex items-center gap-2 px-[18px] py-[10px] bg-white border border-slate-300 rounded-full text-[0.85rem] text-slate-600 shadow-sm hover:border-slate-400 hover:text-slate-800 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <div className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center group-hover:bg-[#0D1F3C] transition-colors duration-200">
                <svg className="w-[13px] h-[13px] stroke-slate-600 fill-none stroke-[1.8] group-hover:stroke-white transition-colors duration-200" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              Events
            </Link>

          </div>
        </div>
      </main>
    </div>
  );
}