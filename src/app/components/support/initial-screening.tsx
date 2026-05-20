"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeader from "./section-header";

interface ModalData {
  icon: string;
  title: string;
  sub: string;
  testName: string;
}

export default function InitialScreening() {
  // ── STATES ──
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalData>({
    icon: "📋",
    title: "Create an account to start",
    sub: "To ensure your screening responses are safely saved and accessible only to you, please log in or create a free profile.",
    testName: "Initial Screening",
  });

  const infoItems = [
    "5 questions, takes under 2 minutes",
    "Completely anonymous and private",
    "Login required to save and view results",
    "Results suggest next steps, not diagnoses",
    "You can retake the screening anytime",
  ];

  // ── ACTIONS ──
  const openLoginModal = (testName: string, type: string) => {
    setModalData({
      icon: "📋",
      title: "Create an account to start",
      sub: "To ensure your screening responses are safely saved and accessible only to you, please log in or create a free profile.",
      testName: testName,
    });
    setIsOpen(true);
  };

  const closeLoginModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="bg-off dark:bg-dark-bg w-full px-4 md:px-[5%] py-20 overflow-hidden" id="screening">
      <div className="mx-auto container w-full">
        {/* ── SECTION HEADER ── */}
        <SectionHeader
          label="Assess"
          title="Initial"
          accentText="Screening"
          description="A brief assessment to help you understand where you might need more support. Log in to save your results and track progress over time."
        />

        {/* ── SCREENING LAYOUT GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start w-full">
          {/* ── START CARD (LEFT/TOP) ── */}
          <div
            className="bg-white dark:bg-dark-card border border-bd rounded-2xl p-10 md:p-[40px_32px] text-center flex flex-col items-center shadow-xs"
            data-aos="fade-up"
          >
            <div className="text-[3rem] mb-4 select-none">📋</div>
            <h3 className="font-fraunces text-lg font-normal text-text mb-2">
              Ready to check in with yourself?
            </h3>
            <p className="text-[0.875rem] text-t2 font-light leading-[1.65] max-w-75 mb-7">
              This 5-question screening takes under 2 minutes and gives you a
              personalised result with suggested next steps.
            </p>

            <button
              onClick={() => openLoginModal("Initial Screening", "screening")}
              className="px-6 py-3 bg-navy text-white font-medium rounded-xl text-[0.9rem] transition-all duration-220 cursor-pointer select-none mx-auto hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0"
            >
              Start Screening →
            </button>

            <p className="text-[0.72rem] text-t3 font-light leading-relaxed max-w-[280px] mt-3">
              This is a screening tool, not a clinical diagnosis. A free account
              is required to access your screening results and history.
            </p>
          </div>

          {/* ── INFO CARD (RIGHT/BOTTOM) ── */}
          <div
            className="bg-white dark:bg-dark-card border border-bd rounded-2xl p-7"
            data-aos="fade-up"
            style={{ transitionDelay: "0.1s" }}
          >
            <h3 className="font-fraunces text-base font-normal text-text mb-2">
              About this screening
            </h3>
            <p className="text-[0.82rem] text-t2 font-light leading-[1.65] mb-5">
              Based on standardised tools adapted for teenagers. Not a diagnosis
              — a starting point for self-awareness. Log in to save results to
              your profile.
            </p>

            {/* Info List */}
            <div className="flex flex-col gap-2.5">
              {infoItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 text-[0.82rem] text-t2 font-light"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── LOGIN OVERLAY MODAL ── */}
      {isOpen && (
        <div
          id="loginOverlay"
          onClick={(e) => e.target === e.currentTarget && closeLoginModal()}
          className={`fixed inset-0 z-2000 bg-[rgba(0,0,0,0.5)] backdrop-blur-md flex items-center justify-center p-5 transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div
            className={`bg-white data-[theme=dark]:bg-dark-bg border border-bd rounded-2xl max-w-105 w-full relative overflow-hidden shadow-[0_16px_64px_rgba(13,31,60,0.2)] transition-transform duration-300 ${
              isOpen ? "translate-y-0 scale-100" : "translate-y-6 scale-[0.97]"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={closeLoginModal}
              className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full border border-white/20 bg-transparent cursor-pointer flex items-center justify-center text-[0.9rem] text-white/60 z-30 transition-all duration-200 hover:bg-white/10 hover:text-white"
            >
              ×
            </button>

            {/* Modal top banner */}
            <div className="bg-[linear-gradient(135deg,var(--navy)_0%,#1E4D8C_100%)] p-[32px_36px_28px] text-center relative overflow-hidden before:absolute before:w-50 before:h-50 before:rounded-full before:border before:border-white/6 before:-top-15 before:-right-15 after:absolute after:w-35 after:h-35 after:rounded-full after:border after:border-white/4 after:-bottom-10 after:-left-10">
              <div className="text-[2.4rem] mb-2.5 relative z-10">{modalData.icon}</div>
              <div className="font-fraunces text-[1.3rem] font-light text-white tracking-tight mb-1.5 relative z-10">
                {modalData.title}
              </div>
              <div className="text-[0.82rem] text-white/55 font-light leading-[1.55] relative z-10">
                {modalData.sub}
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full p-[4px_12px] text-[0.75rem] font-medium text-white/85 mt-2.5 relative z-10">
                {modalData.testName}
              </div>
            </div>

            {/* Modal body */}
            <div className="p-[28px_36px_32px]">
              <div className="flex flex-col gap-2.5 mb-4.5">
                <Link
                  href="/login"
                  className="w-full p-3.5 text-center bg-navy text-white rounded-md text-[0.9rem] font-medium transition-all duration-220 shadow-[0_4px_14px_rgba(13,31,60,0.18)] hover:opacity-88 hover:-translate-y-px"
                >
                  Log in to continue →
                </Link>

                {/* OR Divider */}
                <div className="flex items-center gap-3 my-1">
                  <div className="flex-1 h-px bg-bd" />
                  <div className="text-[0.75rem] text-t3 font-light">Don't have an account?</div>
                  <div className="flex-1 h-px bg-bd" />
                </div>

                <Link
                  href="/signup"
                  className="w-full p-3.5 text-center border border-bd2 text-text rounded-md text-[0.9rem] font-normal bg-transparent transition-all duration-220 hover:bg-soft"
                >
                  Create a free account
                </Link>
              </div>
              <div className="text-[0.72rem] text-t3 text-center leading-normal font-light">
                It's completely free and takes less than a minute. Your data is always private.
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}