"use client";

import React, { useState, useEffect } from "react";

export default function Newsletter() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: false, email: false });

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    // মডাল ক্লোজ হওয়ার পর ডাটা রিসেট করার জন্য কিছুটা ডিলে
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", email: "" });
      setErrors({ name: false, email: false });
    }, 300);
    document.body.style.overflow = "";
  };

  // Escape key support
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameValid = formData.name.trim() !== "";
    const emailValid = formData.email.trim() !== "";

    setErrors({ name: !nameValid, email: !emailValid });

    if (nameValid && emailValid) {
      setIsSuccess(true);
      setTimeout(() => {
        closeModal();
      }, 2800);
    }
  };

  return (
    <>
      <section className="bg-[var(--off-white)] py-[100px] px-[5%] text-center">
        <div className="max-w-[560px] mx-auto" data-aos="fade-up">
          <div className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-[var(--t3)] mb-[10px] block">
            Stay connected
          </div>
          <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.6rem)] font-light text-[var(--text)] tracking-[-0.025em] mb-[12px]">
            Stay in the <em className="italic text-[var(--accent)]">loop</em>
          </h2>
          <p className="text-[1rem] text-[var(--t2)] font-light leading-[1.7] mb-[36px]">
            Get event announcements, weekly mental health tips, and Mindsphere updates delivered to your inbox — no spam, ever.
          </p>
          <button
            onClick={openModal}
            className="font-dm-sans text-[0.95rem] font-medium px-[36px] py-[15px] bg-[var(--navy)] dark:bg-[var(--accent)] text-white rounded-full inline-flex items-center gap-[10px] transition-all duration-250 hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(13,31,60,0.2)]"
          >
            <svg className="w-[16px] h-[16px] stroke-white fill-none stroke-[2px] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Subscribe to newsletter
          </button>
          <div className="text-[0.75rem] text-[var(--t3)] mt-[14px] font-light">
            No spam. Unsubscribe anytime.
          </div>
        </div>
      </section>

      {/* --- MODAL --- */}
      <div 
        className={`fixed inset-0 z-[2000] flex items-center justify-center p-[20px] transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/45 backdrop-blur-[8px]" 
          onClick={closeModal}
        />

        {/* Modal Card */}
        <div 
          className={`bg-[var(--white)] border border-[var(--border)] rounded-[var(--radius-xl)] p-[44px] max-w-[420px] w-full relative z-[1] shadow-[var(--shadow-lg)] transition-all duration-300 ${
            isOpen ? "translate-y-0 scale-100" : "translate-y-[24px] scale-[0.97]"
          }`}
        >
          <button
            onClick={closeModal}
            className="absolute top-[16px] right-[16px] w-[32px] h-[32px] rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--t3)] text-[1.1rem] transition-all hover:bg-[var(--soft-grey)]"
          >
            ×
          </button>

          {!isSuccess ? (
            <div id="modal-content">
              <div className="font-fraunces text-[1.6rem] font-light text-[var(--text)] mb-[6px] tracking-[-0.02em]">
                Stay connected 🌱
              </div>
              <div className="text-[0.875rem] text-[var(--t2)] mb-[28px] font-light leading-[1.6]">
                Get event alerts, mental health tips, and Mindsphere updates — once a week, never more.
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-[12px]">
                <input
                  type="text"
                  placeholder="Your first name"
                  className={`w-full p-[13px_16px] border rounded-[var(--radius-md)] font-dm-sans text-[0.9rem] bg-[var(--white)] text-[var(--text)] outline-none transition-colors ${
                    errors.name ? "border-red-500" : "border-[var(--strong)] focus:border-[var(--accent)]"
                  }`}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Your email address"
                  className={`w-full p-[13px_16px] border rounded-[var(--radius-md)] font-dm-sans text-[0.9rem] bg-[var(--white)] text-[var(--text)] outline-none transition-colors ${
                    errors.email ? "border-red-500" : "border-[var(--strong)] focus:border-[var(--accent)]"
                  }`}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <button
                  type="submit"
                  className="w-full p-[14px] bg-[var(--navy)] dark:bg-[var(--accent)] text-white rounded-[var(--radius-md)] font-dm-sans text-[0.95rem] font-medium transition-opacity hover:opacity-88 mt-[4px]"
                >
                  Subscribe →
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-[20px] animate-in fade-in zoom-in duration-300">
              <div className="text-[2.5rem] mb-[12px]">✦</div>
              <div className="font-fraunces text-[1.3rem] font-light text-[var(--text)] mb-[8px]">
                You're in!
              </div>
              <div className="text-[0.875rem] text-[var(--t2)] font-light leading-[1.6]">
                Welcome to Mindsphere. You'll hear from us soon.
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}