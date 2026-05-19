"use client";

import { useState, FormEvent, MouseEvent } from "react";

export default function Newsletter() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
    setIsSubmitted(false);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const closeModalOutside = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "modal") {
      handleCloseModal();
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Newsletter Section */}
      <section className="newsletter bg-off-white py-25 px-[5%]">
        <div className="s-inner container mx-auto">
          <div className="newsletter-inner reveal max-w-140 mx-auto text-center">
            <div
              data-aos="fade-up"
              className="s-label text-[0.78rem] font-medium text-accent tracking-widest uppercase"
            >
              Stay connected
            </div>
            <h2
              data-aos="fade-up"
              className="s-title font-fraunces text-[clamp(1.8rem,4vw,2.8rem)] font-light tracking-[-0.03em] text-primary mb-3"
            >
              Stay in the <em className="italic text-accent">loop</em>
            </h2>
            <p
              data-aos="fade-up"
              className="newsletter-body text-[1rem] text-secondary font-light leading-[1.7] mb-9"
            >
              Get weekly mental health tips, Mindsphere updates, community
              highlights, and event announcements — delivered to your inbox. No
              spam, ever.
            </p>
            <button
              data-aos="fade-up"
              type="button"
              className="newsletter-btn text-[0.95rem] font-medium p-[15px_36px] bg-navy text-white rounded-full transition-all duration-250 inline-flex items-center gap-2.5 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(13,31,60,0.2)]"
              onClick={handleOpenModal}
            >
              <svg
                className="w-4 h-4 stroke-white fill-none stroke-2 stroke-round stroke-linejoin"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Subscribe to newsletter
            </button>
            <div data-aos="fade-up" className="newsletter-note text-[0.75rem] text-muted mt-3.5 font-light">
              No spam. Unsubscribe anytime.
            </div>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      <div
        id="modal"
        onClick={closeModalOutside}
        className={`modal-overlay fixed inset-0 z-2000 bg-[rgba(0,0,0,0.45)] backdrop-blur-sm flex items-center justify-center padding-[20px] transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Modal Window */}
        <div
          className={`modal bg-white rounded-xl p-7 md:p-11 mx-6 md:mx-0 max-w-105 w-full relative transition-transform duration-300 shadow-lg border border-border ${
            isOpen ? "translate-y-0 scale-100" : "translate-y-6 scale-[0.97]"
          }`}
        >
          {/* Close Button */}
          <button
            type="button"
            className="modal-close absolute top-4 right-4 w-8 h-8 rounded-full border border-border flex items-center justify-center color-[var(--text-muted)] text-[1.1rem] transition-all duration-200 bg-transparent cursor-pointer hover:bg-soft-grey"
            onClick={handleCloseModal}
          >
            ×
          </button>

          {!isSubmitted ? (
            /* Modal Form Content */
            <div id="modal-content">
              <div className="modal-title font-fraunces text-[1.6rem] font-light text-primary mb-1.5 tracking-[-0.02em]">
                Stay connected 🌱
              </div>
              <div className="modal-sub text-[0.875rem] text-secondary mb-7 font-light leading-[1.6]">
                Get mental health tips, Mindsphere updates, and community news —
                once a week, never more.
              </div>
              <form
                onSubmit={handleSubmit}
                className="modal-form flex flex-col gap-3"
              >
                <input
                  type="text"
                  className="modal-input w-full p-[13px_16px] border border-strong rounded-md font-['DM_Sans',sans-serif] text-[0.9rem] bg-white text-primary outline-none transition-[border-color] duration-200 focus:border-accent placeholder:text-muted"
                  id="nl-name"
                  placeholder="Your first name"
                  autoComplete="given-name"
                  required
                />
                <input
                  type="email"
                  className="modal-input w-full p-[13px_16px] border border-strong rounded-md font-['DM_Sans',sans-serif] text-[0.9rem] bg-white text-primary outline-none transition-[border-color] duration-200 focus:border-accent placeholder:text-muted"
                  id="nl-email"
                  placeholder="Your email address"
                  autoComplete="email"
                  required
                />
                <button
                  type="submit"
                  className="modal-submit w-full p-3.5 bg-navy text-white rounded-md font-['DM_Sans',sans-serif] text-[0.95rem] font-medium transition-all duration-200 mt-1 cursor-pointer border-none hover:opacity-[0.88]"
                >
                  Subscribe →
                </button>
              </form>
            </div>
          ) : (
            /* Success State */
            <div
              className="modal-success block text-center p-5"
              id="modal-success"
            >
              <div className="modal-success-icon text-[2.5rem] mb-3">✦</div>
              <div className="modal-success-title font-fraunces text-[1.3rem] font-light text-primary mb-2">
                You're in!
              </div>
              <div className="modal-success-body text-[0.875rem] text-secondary font-light leading-[1.6]">
                Welcome to Mindsphere. Your first newsletter is on its way soon.
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
