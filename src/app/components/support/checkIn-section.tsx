"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SectionHeader from "./section-header";
import OutlineButton from "../outline-button";
import PrimaryButton from "../primary-button";

interface MentalTest {
  id: string;
  name: string;
  type?: "screening" | "general";
}

export default function CheckInSection() {
  const mentalTests: MentalTest[] = [
    { id: "depression", name: "Depression Test" },
    { id: "adhd", name: "ADHD Test" },
    { id: "anxiety", name: "Anxiety Test" },
    { id: "ocd", name: "OCD Test" },
    { id: "bipolar", name: "Bipolar Test" },
    { id: "psychosis", name: "Psychosis & Schizophrenia Test" },
    { id: "eating", name: "Eating Disorder Test" },
    { id: "ptsd", name: "PTSD Test" },
    { id: "addiction", name: "Addiction Test" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({
    icon: "🧠",
    title: "Login required",
    sub: "",
    testName: "",
  });

  const openLoginModal = (
    testName: string,
    type: "screening" | "general" = "general",
  ) => {
    const icon = type === "screening" ? "📋" : "🧠";
    const sub =
      type === "screening"
        ? "You need a free account to access the initial screening and save your results."
        : `You need a free account to take the ${testName.toLowerCase()} and see your results.`;

    setModalData({
      icon,
      title: "Login required",
      sub,
      testName: `✦ ${testName}`,
    });
    setIsOpen(true);
  };

  const closeLoginModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <section
      className="bg-white dark:bg-dark-bg w-full px-4 md:px-[5%] py-20 overflow-hidden"
      id="checkin"
    >
      <div className="mx-auto container w-full">
        {/* ── SECTION HEADER ── */}
        <SectionHeader
          label="Reflect & assess"
          title="Mental Health"
          accentText="Check-ins"
          description="Choose a test to assess your current mental health. Log in first to save your results and track your history."
        />

        {/* ── TESTS GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 w-full">
          {mentalTests.map((test, i) => (
            <div key={test.id} data-aos="fade-up" data-aos-delay={100 + i * 50}>
              <button
                onClick={() =>
                  openLoginModal(test.name, test.type || "general")
                }
                className="group relative flex items-center justify-between p-[18px_22px] bg-navy text-white rounded-full overflow-hidden cursor-pointer text-left w-full border-none outline-none select-none transition-all duration-280 hover:bg-blue hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(13,31,60,0.25)] before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent)] before:pointer-events-none"
              >
                {/* Test Name */}
                <span className="text-[0.8rem] font-medium tracking-widest uppercase text-white leading-[1.3] z-10">
                  {test.name}
                </span>

                {/* Action Icon Container */}
                <div className="w-7 h-7 rounded-full border-[1.5px] border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white/80 text-base shrink-0 z-10 transition-all duration-220 group-hover:bg-[rgba(255,255,255,0.15)] group-hover:border-[rgba(255,255,255,0.5)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ── Dynamic Login Overlay Modal ── */}
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
          <div className="bg-[linear-gradient(135deg,var(--navy)_0%,#1E4D8C_100%)] p-[32px_36px_28px] text-center relative overflow-hidden before:absolute before:w-50 before:h-50 before:rounded-full before:border before:border-white/6 before:-top-15 before:-right-15 after:absolute after:w-35 after:after:h-35 after:rounded-full after:border after:border-white/4 after:-bottom-10 after:-left-10">
            <div className="text-[2.4rem] mb-2.5 relative z-10">
              {modalData.icon}
            </div>
            <div className="font-fraunces text-[1.3rem] font-light text-white tracking-tight mb-1.5 relative z-10">
              {modalData.title}
            </div>
            <div className="text-[0.82rem] text-white/55 font-light浏览 leading-[1.55] relative z-10">
              {modalData.sub}
            </div>
            <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full p-[4px_12px] text-[0.75rem] font-medium text-white/85 mt-2.5 relative z-10">
              {modalData.testName}
            </div>
          </div>

          {/* Modal body */}
          <div className="p-[28px_36px_32px]">
            <div className="flex flex-col gap-2.5 mb-4.5">
              <PrimaryButton href="/login" className="rounded-md text-center">
                Log in to continue →
              </PrimaryButton>

              {/* OR Divider */}
              <div className="flex items-center gap-3 my-1">
                <div className="flex-1 h-px bg-bd" />
                <div className="text-[0.75rem] text-t3 font-light">
                  Don't have an account?
                </div>
                <div className="flex-1 h-px bg-bd" />
              </div>
              <OutlineButton href="/signup" className="rounded-md text-center">
                Create a free account
              </OutlineButton>
            </div>
            <div className="text-[0.72rem] text-t3 text-center leading-normal font-light">
              It's completely free and takes less than a minute. Your data is
              always private.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
