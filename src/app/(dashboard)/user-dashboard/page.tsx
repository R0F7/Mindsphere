// "use client";

// import React, { useState, useMemo } from "react";

// export default function DashboardLayout() {
//   const [activeTab, setActiveTab] = useState("profile");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleTabChange = (tab: string) => {
//     setActiveTab(tab);
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <div className="bg-[#F8F9FB] dark:bg-[#080E1A] min-h-screen transition-colors duration-500 font-sans relative">
//       <button
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         className="lg:hidden fixed bottom-6 right-6 z-[70] flex flex-col justify-center items-center w-[56px] h-[56px] bg-[#0D1F3C] dark:bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-[3px] border-white dark:border-[#0D1F3C] focus:outline-none transition-transform active:scale-95"
//         aria-label="Toggle navigation"
//       >
//         <span
//           className={`block w-[22px] h-[2px] rounded-full bg-white dark:bg-[#0D1F3C] transition-transform duration-300 ease-in-out ${
//             isMobileMenuOpen
//               ? "rotate-45 translate-y-[6px]"
//               : "-translate-y-[5px]"
//           }`}
//         ></span>
//         <span
//           className={`block w-[22px] h-[2px] rounded-full bg-white dark:bg-[#0D1F3C] transition-opacity duration-300 ease-in-out ${
//             isMobileMenuOpen ? "opacity-0" : "opacity-100"
//           }`}
//         ></span>
//         <span
//           className={`block w-[22px] h-[2px] rounded-full bg-white dark:bg-[#0D1F3C] transition-transform duration-300 ease-in-out ${
//             isMobileMenuOpen
//               ? "-rotate-45 -translate-y-[6px]"
//               : "translate-y-[5px]"
//           }`}
//         ></span>
//       </button>

//       <div
//         className={`fixed inset-0 bg-[#0D1F3C]/40 dark:bg-black/60 backdrop-blur-sm z-[60] lg:hidden transition-all duration-300 ${
//           isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//         onClick={() => setIsMobileMenuOpen(false)}
//       ></div>

//       {/* ─── MAIN DASHBOARD WRAPPER ─── */}
//       <div className="flex w-full container min-h-screen lg:pt-[80px]">
//         <div
//           className={`
//             fixed inset-y-0 left-0 z-[65] h-full
//             transform lg:transform-none transition-transform duration-300 ease-in-out
//             ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
//             lg:static lg:translate-x-0 lg:block lg:w-[280px] lg:flex-shrink-0 lg:bg-transparent
//           `}
//         >
//           {/* Inner Sidebar Box */}
//           <aside className="w-[280px] sticky h-full bg-white dark:bg-[#0c1322] border-r lg:border border-gray-200 dark:border-white/10 flex flex-col gap-1 overflow-y-auto scrollbar-none shadow-2xl lg:shadow-[0_10px_40px_rgba(0,0,0,0.04)] lg:rounded-[30px_30px_0px_0px] px-4 py-10 lg:pt-[100px] lg:pb-[15px] lg:sticky lg:top-[25px] lg:h-[calc(100vh-120px)]">
//             {/* User card at top */}
//             <div className="flex flex-col items-center px-3 pt-5 pb-6 mb-2 border-b border-gray-100 dark:border-white/5">
//               <div className="w-16 h-16 rounded-full bg-[#0D1F3C] dark:bg-[#3B82C4] flex items-center justify-center text-[1.3rem] font-light border-[3px] border-white dark:border-[#0D1F3C] shadow-[0_0_0_2px_#e5e7eb] dark:shadow-[0_0_0_2px_rgba(255,255,255,0.1)] font-serif overflow-hidden relative text-white">
//                 JS
//               </div>
//               <div className="text-[0.97rem] font-medium text-navy dark:text-white mt-2.5 mb-0.5 text-center">
//                 Jiya Sharma
//               </div>
//               <div className="text-[0.76rem] text-gray-400 dark:text-gray-500 font-light text-center">
//                 Joined April 2025
//               </div>
//             </div>

//             <div className="text-[0.62rem] font-semibold tracking-[0.12em] uppercase text-gray-400 dark:text-gray-500 px-3 mt-4 mb-1.5">
//               My Account
//             </div>

//             {/* Nav Items */}
//             <nav className="flex flex-col gap-1">
//               <button
//                 onClick={() => handleTabChange("profile")}
//                 className={`flex items-center gap-2.5 px-3 py-[11px] rounded-[12px] text-[0.92rem] transition-all relative group ${
//                   activeTab === "profile"
//                     ? "bg-[#3B82C4]/10 text-[#0D1F3C] dark:text-[#3B82C4] font-medium"
//                     : "text-gray-500 dark:text-gray-400 hover:bg-[#F8F9FB] dark:hover:bg-secondary/10 hover:text-[#0D1F3C] hover:dark:text-[#3B82C4]"
//                 }`}
//               >
//                 {activeTab === "profile" && (
//                   <div className="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-[#3B82C4] rounded-r-[2px]" />
//                 )}
//                 <div className="w-5 h-5 flex items-center justify-center shrink-0">
//                   <svg
//                     className="w-4 h-4 stroke-current fill-none stroke-[1.8]"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
//                     <circle cx="12" cy="7" r="4" />
//                   </svg>
//                 </div>
//                 Profile & Settings
//               </button>

//               <button
//                 onClick={() => handleTabChange("history")}
//                 className={`flex items-center gap-2.5 px-3 py-[11px] rounded-[12px] text-[0.92rem] transition-all relative group ${
//                   activeTab === "history"
//                     ? "bg-[#3B82C4]/10 text-[#0D1F3C] dark:text-[#3B82C4] font-medium"
//                     : "text-gray-500 dark:text-gray-400 hover:bg-[#F8F9FB] dark:hover:bg-secondary/10 hover:text-[#0D1F3C] hover:dark:text-[#3B82C4]"
//                 }`}
//               >
//                 {activeTab === "history" && (
//                   <div className="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-[#3B82C4] rounded-r-[2px]" />
//                 )}
//                 <div className="w-5 h-5 flex items-center justify-center shrink-0">
//                   <svg
//                     className="w-4 h-4 stroke-current fill-none stroke-[1.8]"
//                     viewBox="0 0 24 24"
//                   >
//                     <rect x="3" y="4" width="18" height="18" rx="2" />
//                     <line x1="16" y1="2" x2="16" y2="6" />
//                     <line x1="8" y1="2" x2="8" y2="6" />
//                     <line x1="3" y1="10" x2="21" y2="10" />
//                   </svg>
//                 </div>
//                 Mental Health History
//               </button>

//               <button
//                 onClick={() => handleTabChange("saved")}
//                 className={`flex items-center gap-2.5 px-3 py-[11px] rounded-[12px] text-[0.92rem] transition-all relative group ${
//                   activeTab === "saved"
//                     ? "bg-[#3B82C4]/10 text-[#0D1F3C] dark:text-[#3B82C4] font-medium"
//                     : "text-gray-500 dark:text-gray-400 hover:bg-[#F8F9FB] dark:hover:bg-secondary/10 hover:text-[#0D1F3C] hover:dark:text-[#3B82C4]"
//                 }`}
//               >
//                 {activeTab === "saved" && (
//                   <div className="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-[#3B82C4] rounded-r-[2px]" />
//                 )}
//                 <div className="w-5 h-5 flex items-center justify-center shrink-0">
//                   <svg
//                     className="w-4 h-4 stroke-current fill-none stroke-[1.8]"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
//                   </svg>
//                 </div>
//                 Saved & Activity
//               </button>
//             </nav>

//             {/* Logout */}
//             <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
//               <button className="flex items-center gap-2.5 px-3 py-2.5 rounded-[12px] text-[0.875rem] text-[#ef4444] hover:bg-red-50 dark:hover:bg-red-500/10 transition-all w-full">
//                 <svg
//                   className="w-4 h-4 stroke-current fill-none stroke-[1.8]"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
//                   <polyline points="16 17 21 12 16 7" />
//                   <line x1="21" y1="12" x2="9" y2="12" />
//                 </svg>
//                 Log out
//               </button>
//             </div>
//           </aside>
//         </div>

//         <div className="flex-1 w-full min-w-0 pt-[80px] lg:pt-0 p-4 sm:p-6 lg:pl-10 pb-[100px]">
//           {activeTab === "profile" && <DashboardProfile />}{" "}
//           {activeTab === "history" && <MentalHealthHistory />}{" "}
//           {activeTab === "saved" && <SavedAndActivityPanel />}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useMemo, useState } from "react";

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#F8F9FB] dark:bg-[#080E1A] min-h-screen transition-colors duration-500 font-sans relative">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-[70] flex flex-col justify-center items-center w-[56px] h-[56px] bg-navy rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-[3px] border-white dark:border-[#0D1F3C] focus:outline-none transition-transform active:scale-95"
        aria-label="Toggle navigation"
      >
        {/* Top Line */}
        <span
          className={`block w-[22px] h-[2px] rounded-full bg-white dark:bg-[#0D1F3C] transition-all duration-300 ease-in-out origin-center ${
            isMobileMenuOpen
              ? "rotate-45 translate-y-[2px]"
              : "-translate-y-[6px]"
          }`}
        ></span>

        {/* Middle Line */}
        <span
          className={`block w-[22px] h-[2px] rounded-full bg-white dark:bg-[#0D1F3C] transition-opacity duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>

        {/* Bottom Line */}
        <span
          className={`block w-[22px] h-[2px] rounded-full bg-white dark:bg-[#0D1F3C] transition-all duration-300 ease-in-out origin-center ${
            isMobileMenuOpen
              ? "-rotate-45 -translate-y-[2px]"
              : "translate-y-[6px]"
          }`}
        ></span>
      </button>

      <div
        className={`fixed inset-0 bg-[#0D1F3C]/40 dark:bg-black/60 backdrop-blur-sm z-[60] lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* ─── MAIN DASHBOARD WRAPPER  ─── */}
      <div className="flex items-start w-full container mx-auto min-h-screen lg:pt-[80px]">
        <aside
          className={`
            fixed inset-y-0 left-0 z-65 lg:z-0 w-[280px] h-full lg:!h-[669px]
            transform transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
            lg:sticky lg:top-[100px] lg:h-[calc(100vh-120px)] lg:translate-x-0 lg:transform-none lg:flex-shrink-0
            bg-white dark:bg-[#0c1322] border-r lg:border border-gray-200 dark:border-white/10 
            flex flex-col gap-1 overflow-y-auto scrollbar-none shadow-2xl lg:shadow-[0_10px_40px_rgba(0,0,0,0.04)] 
            lg:rounded-[30px_30px_0px_0px] px-4 py-10 lg:pt-[30px] lg:pb-[15px]
          `}
        >
          {/* User card at top */}
          <div className="flex flex-col items-center px-3 pt-5 pb-6 mb-2 border-b border-gray-100 dark:border-white/5">
            <div className="w-16 h-16 rounded-full bg-[#0D1F3C] dark:bg-[#3B82C4] flex items-center justify-center text-[1.3rem] font-light border-[3px] border-white dark:border-[#0D1F3C] shadow-[0_0_0_2px_#e5e7eb] dark:shadow-[0_0_0_2px_rgba(255,255,255,0.1)] font-serif overflow-hidden relative text-white">
              JS
            </div>
            <div className="text-[0.97rem] font-medium text-navy dark:text-white mt-2.5 mb-0.5 text-center">
              Jiya Sharma
            </div>
            <div className="text-[0.76rem] text-gray-400 dark:text-gray-500 font-light text-center">
              Joined April 2025
            </div>
          </div>

          <div className="text-[0.62rem] font-semibold tracking-[0.12em] uppercase text-gray-400 dark:text-gray-500 px-3 mt-4 mb-1.5">
            My Account
          </div>

          {/* Nav Items */}
          <nav className="flex flex-col gap-1">
            <button
              onClick={() => handleTabChange("profile")}
              className={`flex items-center gap-2.5 px-3 py-[11px] rounded-[12px] text-[0.92rem] transition-all relative group ${
                activeTab === "profile"
                  ? "bg-[#3B82C4]/10 text-[#0D1F3C] dark:text-[#3B82C4] font-medium"
                  : "text-gray-500 dark:text-gray-400 hover:bg-[#F8F9FB] dark:hover:bg-secondary/10 hover:text-[#0D1F3C] hover:dark:text-[#3B82C4]"
              }`}
            >
              {activeTab === "profile" && (
                <div className="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-[#3B82C4] rounded-r-[2px]" />
              )}
              <div className="w-5 h-5 flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 stroke-current fill-none stroke-[1.8]"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              Profile & Settings
            </button>

            <button
              onClick={() => handleTabChange("history")}
              className={`flex items-center gap-2.5 px-3 py-[11px] rounded-[12px] text-[0.92rem] transition-all relative group ${
                activeTab === "history"
                  ? "bg-[#3B82C4]/10 text-[#0D1F3C] dark:text-[#3B82C4] font-medium"
                  : "text-gray-500 dark:text-gray-400 hover:bg-[#F8F9FB] dark:hover:bg-secondary/10 hover:text-[#0D1F3C] hover:dark:text-[#3B82C4]"
              }`}
            >
              {activeTab === "history" && (
                <div className="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-[#3B82C4] rounded-r-[2px]" />
              )}
              <div className="w-5 h-5 flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 stroke-current fill-none stroke-[1.8]"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              Mental Health History
            </button>

            <button
              onClick={() => handleTabChange("saved")}
              className={`flex items-center gap-2.5 px-3 py-[11px] rounded-[12px] text-[0.92rem] transition-all relative group ${
                activeTab === "saved"
                  ? "bg-[#3B82C4]/10 text-[#0D1F3C] dark:text-[#3B82C4] font-medium"
                  : "text-gray-500 dark:text-gray-400 hover:bg-[#F8F9FB] dark:hover:bg-secondary/10 hover:text-[#0D1F3C] hover:dark:text-[#3B82C4]"
              }`}
            >
              {activeTab === "saved" && (
                <div className="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-[#3B82C4] rounded-r-[2px]" />
              )}
              <div className="w-5 h-5 flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 stroke-current fill-none stroke-[1.8]"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              Saved & Activity
            </button>
          </nav>

          {/* Logout */}
          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
            <button className="flex items-center gap-2.5 px-3 py-2.5 rounded-[12px] text-[0.875rem] text-[#ef4444] hover:bg-red-50 dark:hover:bg-red-500/10 transition-all w-full">
              <svg
                className="w-4 h-4 stroke-current fill-none stroke-[1.8]"
                viewBox="0 0 24 24"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Log out
            </button>
          </div>
        </aside>

        {/* --- CONTENT AREA --- */}
        <div className="flex-1 w-full min-w-0 pt-[80px]  p-4 sm:p-6 lg:pl-10 pb-[100px]">
          {activeTab === "profile" && <DashboardProfile />}{" "}
          {activeTab === "history" && <MentalHealthHistory />}{" "}
          {activeTab === "saved" && <SavedAndActivityPanel />}
        </div>
      </div>
    </div>
  );
}

// part:1
function DashboardProfile() {
  const [isDirty, setIsDirty] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      {/* ── PROFILE & SETTINGS HEADER ── */}
      <div data-aos="fade-down" className="mb-9 animate-[fadeIn_0.35s_ease]">
        <h1 className="font-fraunces text-[clamp(1.8rem,3vw,2.4rem)] font-light text-navy leading-tight tracking-[-0.025em] mb-1.5">
          Profile & <em className="italic text-[#3B82C4]">Settings</em>
        </h1>
        <p className="text-[0.95rem] text-gray-500 dark:text-gray-400 font-light">
          Manage your account information and preferences
        </p>
      </div>

      {/* ── PROFILE HERO CARD ── */}
      <div
        data-aos="fade-up"
        className="bg-white border border-strong rounded-xl p-9 shadow-[0_10px_40px_rgba(0,0,0,0.04)] mb-6 transition-all"
      >
        <div className="flex flex-col lg:flex-row items-start gap-7 flex-wrap">
          {/* Avatar Wrap */}
          <div className="relative shrink-0">
            <div className="w-[88px] h-[88px] rounded-full bg-gradient-to-br from-[#0D1F3C] to-[#3B82C4] text-white flex items-center justify-center font-serif text-[2rem] font-light border-[3px] border-white dark:border-[#0D1F3C] shadow-[0_0_0_2px_#e5e7eb] dark:shadow-[0_0_0_2px_rgba(255,255,255,0.1)] overflow-hidden">
              JS
            </div>
            <label
              htmlFor="avatarUpload"
              className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#0D1F3C] dark:bg-[#3B82C4] text-white flex items-center justify-center border-2 border-white dark:border-[#0D1F3C] cursor-pointer hover:scale-110 transition-transform"
            >
              <svg
                className="w-[13px] h-[13px] stroke-current fill-none stroke-[2]"
                viewBox="0 0 24 24"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </label>
            <input
              type="file"
              id="avatarUpload"
              className="hidden"
              accept="image/*"
            />
          </div>

          {/* Meta Info */}
          <div className="flex-1 min-w-0">
            <h2 className="font-serif text-[1.6rem] font-normal text-navy tracking-[-0.02em] mb-1">
              Jiya Sharma
            </h2>
            <div className="flex items-center gap-1.5 text-[0.84rem] text-gray-400 dark:text-gray-500 font-light mb-2.5">
              <svg
                className="w-3 h-3 stroke-current fill-none stroke-[2]"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Member since April 2025
            </div>
            <p className="text-[0.94rem] text-gray-500 dark:text-gray-400 font-light leading-[1.68] max-w-[480px]">
              A teen trying to understand myself better, one day at a time. This
              platform has genuinely helped.
            </p>

            {/* Stats Area */}
            <div className="flex gap-6 mt-3.5 pt-3.5 border-t border-gray-100 dark:border-white/5">
              {[
                { n: "23", l: "Mood logs" },
                { n: "7", l: "Check-ins" },
                { n: "5", l: "Saved" },
                { n: "3", l: "🔥 Streak" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="font-serif text-[1.2rem] font-light text-navy tracking-[-0.02em] leading-none">
                    {stat.n}
                  </div>
                  <div className="text-[0.68rem] text-gray-400 dark:text-gray-500 font-light mt-0.5 uppercase tracking-wider">
                    {stat.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── PERSONAL INFORMATION CARD ── */}
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        className="bg-white border border-strong rounded-xl p-9 shadow-[0_10px_40px_rgba(0,0,0,0.04)] mb-6 transition-all"
      >
        <h3 className="font-serif text-[1.2rem] font-normal text-navy mb-1.5">
          Personal Information
        </h3>
        <p className="text-[0.88rem] text-gray-400 dark:text-gray-500 font-light mb-6">
          Update your name, bio, and contact details
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.83rem] font-medium text-gray-500 dark:text-gray-400">
              Full name
            </label>
            <input
              className="w-full p-[13px_16px] border-[1.5px] border-gray-200 dark:border-white/10 rounded-[12px] text-[0.95rem] bg-white dark:bg-secondary/20 outline-none focus:border-[#3B82C4] focus:ring-4 focus:ring-[#3B82C4]/5 transition-all"
              defaultValue="Jiya Sharma"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.83rem] font-medium text-gray-500 dark:text-gray-400">
              Email address
            </label>
            <input
              className="w-full p-[13px_16px] border-[1.5px] border-gray-200 dark:border-white/10 rounded-[12px] text-[0.95rem] bg-white dark:bg-secondary/20 outline-none focus:border-[#3B82C4] transition-all"
              defaultValue="jiya@email.com"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5 mb-6">
          <label className="text-[0.83rem] font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
            Short bio{" "}
            <span className="font-light text-gray-400">(optional)</span>
          </label>
          <input
            className="w-full p-[13px_16px] border-[1.5px] border-gray-200 dark:border-white/10 rounded-[12px] text-[0.95rem] bg-white dark:bg-secondary/20 outline-none focus:border-[#3B82C4] transition-all"
            defaultValue="A teen trying to understand myself better, one day at a time."
          />
          <p className="text-[0.78rem] text-gray-400 font-light">
            Shown on your profile. Max 120 characters.
          </p>
        </div>

        <div className="flex gap-2.5 flex-wrap">
          <button className="p-[12px_26px] bg-[#0D1F3C] dark:bg-[#3B82C4] text-white rounded-full text-[0.92rem] font-medium hover:-translate-y-px hover:shadow-lg transition-all active:scale-95 cursor-pointer">
            Save changes
          </button>
          <button className="p-[12px_26px] border border-strong bg-soft-grey b g-gray-100 text-navy rounded-full text-[0.92rem] font-light hover:bg-gray-50 dark:hover:bg-white/5 transition-all cursor-pointer">
            Discard
          </button>
        </div>
      </div>

      {/* CHANGE PASSWORD */}
      <div
        data-aos="fade-up"
        data-aos-duration="650"
        className="bg-white border border-strong rounded-xl p-9 shadow-[0_10px_40px_rgba(0,0,0,0.04)] mb-6 transition-all"
      >
        <h3 className="font-serif text-[1.2rem] font-normal text-navy dark:text-white mb-1.5">
          Change Password
        </h3>
        <p className="text-[0.88rem] text-gray-400 dark:text-gray-500 font-light mb-6">
          Choose a strong password to keep your account secure
        </p>

        <div className="space-y-5">
          {/* Current Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.83rem] font-medium text-gray-500 dark:text-gray-400">
              Current password
            </label>
            <div className="relative">
              <input
                type={showCurrent ? "text" : "password"}
                className="w-full p-[13px_16px] border-[1.5px] border-gray-200 dark:border-white/10 rounded-[12px] text-[0.95rem] bg-white dark:bg-secondary/20 outline-none focus:border-[#3B82C4] focus:ring-4 focus:ring-[#3B82C4]/5 transition-all pr-12"
                placeholder="Enter current password"
              />
              <div
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                onClick={() => setShowCurrent(!showCurrent)}
              >
                <svg
                  className="w-5 h-5 stroke-current fill-none stroke-[1.5]"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>
          </div>

          {/* New & Confirm Password Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* New Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.83rem] font-medium text-gray-500 dark:text-gray-400">
                New password
              </label>
              <div className="relative">
                <input
                  type={showNew ? "text" : "password"}
                  className="w-full p-[13px_16px] border-[1.5px] border-gray-200 dark:border-white/10 rounded-[12px] text-[0.95rem] bg-white dark:bg-secondary/20 outline-none focus:border-[#3B82C4] focus:ring-4 focus:ring-[#3B82C4]/5 transition-all pr-12"
                  placeholder="Min 8 characters"
                />
                <div
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  onClick={() => setShowNew(!showNew)}
                >
                  <svg
                    className="w-5 h-5 stroke-current fill-none stroke-[1.5]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.83rem] font-medium text-gray-500 dark:text-gray-400">
                Confirm new password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  className="w-full p-[13px_16px] border-[1.5px] border-gray-200 dark:border-white/10 rounded-[12px] text-[0.95rem] bg-white dark:bg-secondary/20 outline-none focus:border-[#3B82C4] focus:ring-4 focus:ring-[#3B82C4]/5 transition-all pr-12"
                  placeholder="Repeat new password"
                />
                <div
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  <svg
                    className="w-5 h-5 stroke-current fill-none stroke-[1.5]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button className="p-[12px_26px] bg-[#0D1F3C] dark:bg-[#3B82C4] text-white rounded-full text-[0.92rem] font-medium hover:-translate-y-px hover:shadow-lg transition-all active:scale-95 cursor-pointer">
            Update password
          </button>
        </div>
      </div>

      {/* ── PREFERENCES CARD (Toggle Switches) ── */}
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="bg-white border border-strong rounded-xl p-9 shadow-[0_10px_40px_rgba(0,0,0,0.04)] mb-6 transition-all"
      >
        <h3 className="font-serif text-[1.2rem] font-normal text-navy mb-1.5">
          Preferences
        </h3>
        <p className="text-[0.88rem] text-gray-400 dark:text-gray-500 font-light mb-6">
          Control how Mindsphere communicates with you
        </p>

        {[
          {
            label: "Weekly newsletter",
            desc: "Receive our weekly mental health tips and community highlights",
            checked: true,
          },
          {
            label: "Mood reminder notifications",
            desc: "Get a gentle daily reminder to log your mood",
            checked: true,
          },
          {
            label: "Community digest",
            desc: "Weekly summary of top posts and events from the community",
            checked: false,
          },
        ].map((toggle, idx) => (
          <React.Fragment key={idx}>
            <div className="flex items-center justify-between py-3.5">
              <div>
                <div className="text-[0.95rem] font-medium text-navy mb-0.5">
                  {toggle.label}
                </div>
                <div className="text-[0.82rem] text-gray-400 dark:text-gray-500 font-light">
                  {toggle.desc}
                </div>
              </div>
              <label className="relative w-11 h-6 cursor-pointer shrink-0">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked={toggle.checked}
                />
                <div className="w-full h-full bg-gray-100 dark:bg-navy border border-gray-200 dark:border-white/10 rounded-full peer peer-checked:bg-[#0D1F3C] dark:peer-checked:bg-[#3B82C4] peer-checked:border-transparent transition-all after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:rounded-full after:h-[18px] after:w-[18px] after:transition-all peer-checked:after:translate-x-[20px] after:shadow-sm"></div>
              </label>
            </div>
            {idx !== 2 && (
              <div className="h-px bg-gray-100 dark:border-white/5 my-1" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* ── DANGER ZONE ── */}
      <div
        data-aos="fade-up"
        data-aos-duration="750"
        className="bg-white border border-red-500/40 rounded-xl p-9 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all"
      >
        <h3 className="font-serif text-[1.2rem] font-normal text-[#ef4444] mb-1.5">
          Danger Zone
        </h3>
        <p className="text-[0.88rem] text-gray-400 dark:text-gray-500 font-light mb-6">
          Irreversible actions — please read carefully before proceeding
        </p>

        <div className="flex items-center justify-between flex-wrap gap-3 p-4 bg-red-50 dark:bg-red-500/10 rounded-[16px] border border-red-500/15">
          <div>
            <div className="text-[0.88rem] font-medium text-[#ef4444] mb-1">
              Delete account
            </div>
            <div className="text-[0.78rem] text-gray-500 dark:text-gray-400 font-light">
              This will permanently delete your account, all mood history, and
              saved content.
            </div>
          </div>
          <button className="p-[9px_20px] border border-red-500/25 text-[#ef4444] rounded-full text-[0.84rem] hover:bg-red-500 hover:text-white transition-all">
            Delete account
          </button>
        </div>
      </div>
    </>
  );
}

/* ─── CONSTANTS ─── */
const MOOD_MAP: Record<
  string,
  { emoji: string; label: string; color: string }
> = {
  happy: { emoji: "😊", label: "Happy", color: "#10B981" },
  calm: { emoji: "😌", label: "Calm", color: "#3B82C4" },
  anxious: { emoji: "😰", label: "Anxious", color: "#F59E0B" },
  sad: { emoji: "😢", label: "Sad", color: "#6366F1" },
  angry: { emoji: "😤", label: "Angry", color: "#EF4444" },
  tired: { emoji: "😴", label: "Tired", color: "#8B5CF6" },
  excited: { emoji: "🤩", label: "Excited", color: "#F97316" },
  okay: { emoji: "😐", label: "Okay", color: "#8A99AE" },
  grateful: { emoji: "🥰", label: "Grateful", color: "#10B981" },
};

const MOOD_ENTRIES: Record<string, { mood: string; note: string | null }> = {
  "2025-04-01": {
    mood: "okay",
    note: "First day of the month. Feeling a bit uncertain about school.",
  },
  "2025-04-02": {
    mood: "anxious",
    note: "Had a presentation today. Nerves got the better of me.",
  },
  "2025-04-04": {
    mood: "calm",
    note: "Took a long walk in the evening. Really helped clear my head.",
  },
  "2025-04-05": { mood: "happy", note: "Caught up with a friend." },
};

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/* ─── DATA & CONSTANTS ─── */
const CI_QUESTIONS_LIST = [
  "How would you rate your overall mood today?",
  "How well did you sleep last night?",
  "How much is anxiety or worry affecting your day?",
  "How connected do you feel to the people around you?",
  "How are you managing your thoughts today?",
];

const CI_ANSWER_OPTS = [
  [
    "Very low — I'm really struggling",
    "Low — things feel heavy",
    "Neutral — just getting by",
    "Good — feeling okay",
    "Great — I'm doing well",
  ],
  [
    "Barely at all",
    "Not well, kept waking up",
    "Okay, but not great",
    "Fairly well",
    "Really well — felt rested",
  ],
  [
    "It's overwhelming me",
    "A lot — hard to focus",
    "Somewhat — it's there",
    "A little — manageable",
    "Not at all today",
  ],
  [
    "Very alone and isolated",
    "Mostly disconnected",
    "Somewhat connected",
    "Pretty connected",
    "Very connected and supported",
  ],
  [
    "Completely overwhelmed",
    "Struggling to cope",
    "Getting by",
    "Managing fairly well",
    "Feeling clear and in control",
  ],
];

const CI_HISTORY = [
  {
    id: "ci1",
    date: "2025-04-17",
    day: "17",
    mon: "Apr",
    answers: [3, 3, 2, 3, 3],
    level: "low",
    feedback:
      "You seem to be doing well overall. Things appear manageable right now — keep up the habits that are working.",
  },
  {
    id: "ci2",
    date: "2025-04-12",
    day: "12",
    mon: "Apr",
    answers: [2, 2, 1, 2, 2],
    level: "moderate",
    feedback:
      "You're carrying some weight lately. A few small steps like trying a grounding tool or reaching out to someone you trust could help.",
  },
  {
    id: "ci3",
    date: "2025-04-08",
    day: "08",
    mon: "Apr",
    answers: [1, 1, 1, 1, 1],
    level: "high",
    feedback:
      "It sounds like things have been genuinely difficult. You don't have to face this alone — please consider reaching out to one of our helplines or a trusted adult.",
  },
  {
    id: "ci4",
    date: "2025-04-04",
    day: "04",
    mon: "Apr",
    answers: [3, 4, 3, 4, 4],
    level: "low",
    feedback:
      "You seem to be in a good place right now. Stay connected to the habits and people that are supporting you.",
  },
  {
    id: "ci5",
    date: "2025-03-28",
    day: "28",
    mon: "Mar",
    answers: [2, 3, 2, 2, 2],
    level: "moderate",
    feedback:
      "Things seem somewhat manageable but there's some stress present. Consider using one of the self-help tools to decompress.",
  },
];

const SCR_HISTORY = [
  {
    id: "scr1",
    date: "2025-04-15",
    day: "15",
    mon: "Apr",
    score: 4,
    max: 15,
    level: "low",
    title: "Low — you seem to be managing well",
    text: "Your responses suggest your mental health is in a relatively good place. Keep maintaining the habits that are working for you.",
    steps: [
      "Keep maintaining your current routines",
      "Explore self-help tools for ongoing support",
      "Check in again in a week to track over time",
    ],
  },
  {
    id: "scr2",
    date: "2025-04-05",
    day: "05",
    mon: "Apr",
    score: 9,
    max: 15,
    level: "moderate",
    title: "Moderate — some things need attention",
    text: "Your responses suggest you may be experiencing some stress or emotional difficulty. This is common and manageable.",
    steps: [
      "Try the anxiety or stress tools in the Support page",
      "Consider talking to someone you trust",
      "If things don't improve, speaking to a counselor could help",
    ],
  },
  {
    id: "scr3",
    date: "2025-03-22",
    day: "22",
    mon: "Mar",
    score: 12,
    max: 15,
    level: "high",
    title: "High — please consider reaching out for support",
    text: "Based on your responses, you may have been experiencing significant difficulty. Your feelings are valid and you deserve support.",
    steps: [
      "Please use the helpline section on the Support page",
      "Talk to a parent, teacher, or school counselor",
      "If you're in immediate distress, contact emergency services",
    ],
  },
];

const LEVEL_LABELS: any = {
  low: "Doing well",
  moderate: "Some stress",
  high: "Needs attention",
};
const LEVEL_PILL: any = {
  low: "bg-emerald-100 text-emerald-700",
  moderate: "bg-amber-100 text-amber-700",
  high: "bg-rose-100 text-rose-700",
};
const SCR_COLORS: any = {
  low: "#10B981",
  moderate: "#F59E0B",
  high: "#EF4444",
};

/* ─── UTILS ─── */
const ciSummaryText = (answers: number[]) => {
  const avg = answers.reduce((a, b) => a + b, 0) / answers.length;
  if (avg >= 3.5) return "Mood good · Sleep well · Low anxiety";
  if (avg >= 2.5) return "Neutral mood · Some stress present";
  if (avg >= 1.5) return "Low mood · Sleep disrupted · High anxiety";
  return "Very low mood · Overwhelmed · High anxiety";
};

// part:2
const MentalHealthHistory: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 3, 1));
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const calendarDays = useMemo(() => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const days = [];
    for (let i = firstDay - 1; i >= 0; i--)
      days.push({ day: daysInPrevMonth - i, current: false });
    for (let i = 1; i <= daysInMonth; i++) days.push({ day: i, current: true });
    return days;
  }, [year, month]);

  const topMoods = useMemo(() => {
    const counts: Record<string, number> = {};
    Object.values(MOOD_ENTRIES).forEach((e) => {
      counts[e.mood] = (counts[e.mood] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  }, []);
  const [selectedCi, setSelectedCi] = useState<any>(null);
  const [selectedScr, setSelectedScr] = useState<any>(null);
  const [nullMode, setNullMode] = useState<any>("");

  useEffect(() => {
    if (selectedDate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedDate]);

  /* ─── RENDER SVG RING ─── */
  const renderRing = (
    score: number,
    max: number,
    level: string,
    size: number,
    strokeW: number,
  ) => {
    const r = (size - strokeW) / 2;
    const circ = 2 * Math.PI * r;
    const pct = score / max;
    return (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#F1F5F9"
          strokeWidth={strokeW}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={SCR_COLORS[level]}
          strokeWidth={strokeW}
          strokeDasharray={`${pct * circ} ${circ}`}
          strokeLinecap="round"
          className="transition-all duration-1000"
        />
      </svg>
    );
  };

  return (
    <div className="space-y-10 min-h-screen text-slate-800 font-sans">
      {/* ── PAGE HEADER ── */}
      <div className="space-y-1" data-aos="fade-down">
        <h1 className="font-fraunces text-[clamp(1.8rem,3vw,2.4rem)] font-light text-navy leading-tight tracking-[-0.025em] mb-1.5">
          Mental Health <em className="italic text-[#3B82C4]">History</em>
        </h1>
        <p className="text-slate-500 text-sm">
          Your mood logs — click any highlighted date to view your entry
        </p>
      </div>

      {/* ── CALENDAR CARD ── */}
      <div
        className="bg-white p-6 rounded-3xl border border-strong shadow-sm"
        data-aos="fade-up"
      >
        <div className="flex items-center justify-between mb-8">
          <div className="text-xl font-serif text-navy">
            {currentDate.toLocaleString("default", { month: "long" })} {year}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-strong text-navy hover:border-navy transition-all duration-300 shadow-sm"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-strong text-navy hover:border-navy transition-all duration-300 shadow-sm"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 mb-4">
          {DAYS.map((day) => (
            <div
              key={day}
              className="text-center text-[12px] font-semibold tracking-[0.1em] uppercase text-slate-400 py-2"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((item, idx) => {
            const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(item.day).padStart(2, "0")}`;
            const entry = item.current ? MOOD_ENTRIES[dateStr] : null;
            return (
              <div
                key={idx}
                onClick={() => {
                  if (entry) {
                    setSelectedDate(dateStr);
                  } else {
                    setNullMode(dateStr);
                  }
                }}
                className={`aspect-square flex flex-col items-center justify-center rounded-2xl relative transition-all group
                  ${!item.current ? "opacity-20 pointer-events-none" : "hover:bg-navy/5 cursor-pointer"}
                  ${entry ? "has-entry" : ""}`}
              >
                <div
                  className={`w-9 h-9 flex items-center justify-center text-lg rounded-full transition-all
                  ${entry ? "bg-blue/10 dark:bg-blue/30 text-accent font-semibold group-hover:bg-blue group-hover:text-must-white" : "text-navy/70"}`}
                >
                  {item.day}
                </div>
                {entry && (
                  <div className="text-[12px] mt-0.5">
                    {MOOD_MAP[entry.mood].emoji}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex gap-5 mt-6 pt-6 border-t border-slate-100">
          <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium uppercase tracking-wider">
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-50 border border-indigo-200"></div>{" "}
            Has mood entry
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium uppercase tracking-wider">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-50 border border-slate-200"></div>{" "}
            No entry
          </div>
        </div>
      </div>

      {/* ── MOOD BREAKDOWN ── */}
      <div
        className="space-y-4 bg-white p-8 rounded-3xl border border-border shadow-sm"
        data-aos="fade-up"
      >
        <div className="space-y-1">
          <h3 className="text-lg font-serif text-navy tracking-tight">
            This month — mood breakdown
          </h3>
          <p className="text-secondary text-sm tracking-wider font-thin">
            How your emotions distributed over April 2025
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {topMoods.map(([mood, count]) => (
            <div
              key={mood}
              className="p-5 rounded-3xl border border-border text-center"
            >
              <div className="text-3xl mb-3">{MOOD_MAP[mood].emoji}</div>
              <div className="text-[11px] font-thin text-primary uppercase tracking-widest mb-1">
                {MOOD_MAP[mood].label}
              </div>
              <div className="text-2xl font-serif text-navy">{count}×</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SELF CHECK-IN HISTORY ── */}
      <section
        className="space-y-6 bg-white p-8 rounded-3xl border border-border shadow-sm"
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row justify-between md:items-end">
          <div>
            <h2 className="text-xl font-serif text-navy">
              Self Check-in{" "}
              <span className="not-italic font-normal">History</span>
            </h2>
            <p className="text-secondary text-sm">
              Your past reflection sessions — click for detail
            </p>
          </div>
          <span className="text-xs font-bold text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-200 self-start mt-1.5 md:mt-0">
            {CI_HISTORY.length} sessions
          </span>
        </div>

        <div className="grid gap-3">
          {CI_HISTORY.map((e) => (
            <div
              key={e.id}
              onClick={() => setSelectedCi(e)}
              className={`group relative flex flex-col-reverse md:flex-row gap-2 md:gap-0 bg-white p-4 rounded-2xl border border-border hover:shadow-md hover:border-strong hover:translate-x-1.5 transition-all overflow-hidden`}
            >
              <div
                className={`absolute top-0 left-0 right-0 h-full w-1 rounded-t-(--rx) bg-[${SCR_COLORS[e.level]}] opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="flex-1 flex items-center">
                <div className="flex flex-col items-center justify-center bg-slate-100 dark:bg-navy/10 w-12 h-12 rounded-md mr-4 group-hover :bg-indigo-50 transition-colors">
                  <span className="text-lg font-bold text-navy/80 leading-none font-fraunces">
                    {e.day}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase leading-none mt-1">
                    {e.mon}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">
                    {LEVEL_LABELS[e.level]}
                  </div>
                  <div className="text-xs text-slate-400">
                    {ciSummaryText(e.answers)}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`text-[10px] font-bold uppercase px-2 py-1 rounded-md ${LEVEL_PILL[e.level]}`}
                >
                  {LEVEL_LABELS[e.level]}
                </span>
                <span className="text-slate-300 group-hover:text-indigo-500 transition-colors">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INITIAL SCREENING HISTORY ── */}
      <section
        className="space-y-6 bg-white p-8 rounded-3xl border border-border shadow-sm"
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-end">
          <div>
            <h2 className="text-xl font-serif text-navy">
              Initial Screening{" "}
              <span className="not-italic font-normal">History</span>
            </h2>
            <p className="text-secondary text-sm">
              Your assessment results over time
            </p>
          </div>
          <span className="text-xs font-bold text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-200 self-start mt-1.5 md:mt-0">
            {SCR_HISTORY.length} assessments
          </span>
        </div>

        <div className="grid gap-4">
          {SCR_HISTORY.map((e) => (
            <div
              key={e.id}
              onClick={() => setSelectedScr(e)}
              className="flex items-center bg-white p-5 rounded-2xl border border-border hover:shadow-md hover:border-strong hover:translate-x-1.5 transition-all cursor-pointer group"
            >
              <div className="relative mr-5">
                {renderRing(e.score, e.max, e.level, 56, 6)}
                <div className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-slate-700">
                  {Math.round((e.score / e.max) * 100)}%
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded ${LEVEL_PILL[e.level]}`}
                  >
                    {e.level}
                  </span>
                  <span className="text-[10px] font-bold text-slate-300 uppercase">
                    {e.day} {e.mon} 2025 · Score {e.score}/{e.max}
                  </span>
                </div>
                <div className="text-sm font-semibold text-primary mb-1 transition-colors">
                  {e.title}
                </div>
                <div className="text-xs text-slate-400 line-clamp-1">
                  {e.text}
                </div>
              </div>
              <span className="text-slate-300 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CALENDAR ENTRY MODAL ── */}
      {selectedDate && (
        <div
          onClick={() => setSelectedDate(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300"
        >
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full relative">
            <button
              type="button"
              className="modal-close absolute top-4 right-4 w-8 h-8 rounded-full border border-border flex items-center justify-center color-[var(--text-muted)] text-[1.1rem] transition-all duration-200 bg-transparent cursor-pointer hover:bg-soft-grey"
              onClick={() => setSelectedDate(null)}
            >
              ×
            </button>
            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              {selectedDate}
            </div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">
                {MOOD_MAP[MOOD_ENTRIES[selectedDate].mood].emoji}
              </span>
              <div>
                <p className="text-lg font-medium text-navy/80 font-fraunces">
                  {MOOD_MAP[MOOD_ENTRIES[selectedDate].mood].label}
                </p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  Logged Mood
                </p>
              </div>
            </div>
            <span className="inline-block mb-1 text-sm text-muted">NOTE</span>
            <p className="text-navy/60 leading-relaxed p-5 bg-slate-50 rounded-md border border-strong">
              {MOOD_ENTRIES[selectedDate].note}
            </p>
          </div>
        </div>
      )}

      {/* ── CALENDAR EMPTY MODAL ── */}
      {nullMode && (
        <div
          onClick={() => setNullMode(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300"
        >
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full relative">
            <button
              type="button"
              className="modal-close absolute top-4 right-4 w-8 h-8 rounded-full border border-border flex items-center justify-center color-[var(--text-muted)] text-[1.1rem] transition-all duration-200 bg-transparent cursor-pointer hover:bg-soft-grey"
              onClick={() => setNullMode(false)}
            >
              ×
            </button>
            <div className="text-center space-y-2">
              <div className="text-4xl">📭</div>
              <div className="text-xl text-navy">No mood entry</div>
              <div className="text-sm text-navy/70">
                No mood was logged for {nullMode}.<br />
                Head to the Support page to log today's mood.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── CI MODAL ── */}
      {selectedCi && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-off/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full relative duration-200 border border-strong">
            <div className="border-b border-strong pb-4 px-6 py-8">
              <button
                onClick={() => setSelectedCi(null)}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center bg-slate-50 rounded-full text-slate-400 hover:text-slate-800 transition-colors"
              >
                ×
              </button>

              <h4 className="text-secondary text-xs uppercase mb-3">
                Self Check-in
              </h4>
              <div className="text-xs font-bold text-navy/80 mb-2">
                {selectedCi.mon} {selectedCi.day}, 2025
              </div>
              <span
                className={`text-[10px] font-bold uppercase px-2 py-1 rounded-md ${LEVEL_PILL[selectedCi.level]}`}
              >
                {LEVEL_LABELS[selectedCi.level]}
              </span>
            </div>

            <div className="space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar p-6">
              {selectedCi.answers.map((ans: number, i: number) => (
                <div
                  key={i}
                  className="p-4 bg-secondary/5 rounded-md border border-border"
                >
                  <div className="text-xs font-medium text-secondary mb-1">
                    Q{i + 1}. {CI_QUESTIONS_LIST[i]}
                  </div>
                  <div className="text-sm font-medium text-navy">
                    {CI_ANSWER_OPTS[i][ans]}
                  </div>
                </div>
              ))}
              <div
                className={`p-5 rounded-2xl border-l-4 ${selectedCi.level === "high" ? "bg-rose-50 border-rose-400" : selectedCi.level === "moderate" ? "bg-amber-50 border-amber-400" : "bg-emerald-50 border-emerald-400"}`}
              >
                <div className="text-[10px] font-bold uppercase text-green-500 mb-1">
                  Generated feedback
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  "{selectedCi.feedback}"
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── SCR MODAL ── */}
      {selectedScr && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-off/60  backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full relative border border-strong duration-200">
            <div className="border-b border-strong pb-4 px-6 py-8">
              <button
                onClick={() => setSelectedScr(null)}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center bg-slate-50 rounded-full text-slate-400 hover:text-slate-800 transition-colors"
              >
                ×
              </button>

              <h4 className="text-secondary text-xs uppercase mb-3">
                Initial Screening
              </h4>
              <div className="text-xs font-bold text-navy/80 mb-2">
                {selectedScr.mon} {selectedScr.day}, 2025
              </div>
              <span
                className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded ${LEVEL_PILL[selectedScr.level]}`}
              >
                {selectedScr.level}
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-6 mb-8 bg-secondary/5 p-6 rounded-md border border-strong">
                <div className="relative">
                  {renderRing(
                    selectedScr.score,
                    selectedScr.max,
                    selectedScr.level,
                    80,
                    8,
                  )}
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-navy">
                    {Math.round((selectedScr.score / selectedScr.max) * 100)}%
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Overall Score
                  </div>
                  <div className="text-3xl font-serif text-navy">
                    {selectedScr.score}{" "}
                    <span className="text-base">/ {selectedScr.max}</span>
                  </div>
                  <span
                    className={`inline-block mt-2 text-[10px] font-bold uppercase px-2 py-1 rounded ${LEVEL_PILL[selectedScr.level]}`}
                  >
                    {selectedScr.level} Concern
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-secondary leading-relaxed">
                    {selectedScr.text}
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-[10px] font-bold uppercase text-slate-400">
                    Recommended Steps
                  </div>
                  {selectedScr.steps.map((step: string, i: number) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-secondary bg-white p-3 border border-strong rounded-md"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-indigo-500"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- MOCK DATA ---
const SAVED_RESOURCES = [
  {
    id: 1,
    title: "Understanding Next.js App Router",
    desc: "A comprehensive guide to routing, layouts, and loading states in the new Next.js App Router paradigm.",
    badge: "Article",
    author: "Sarah Drasner",
    thumbColor: "bg-indigo-50 text-indigo-500",
    icon: "📄",
  },
  {
    id: 2,
    title: "Advanced Tailwind CSS Patterns",
    desc: "Learn how to build complex, responsive layouts with modern utility classes and custom configuration.",
    badge: "Video",
    author: "Simon Vrachliotis",
    thumbColor: "bg-emerald-50 text-emerald-500",
    icon: "▶️",
  },
];

const BLOG_ACTIVITY = [
  {
    id: 1,
    blogTitle: "Building a Minimalist Dashboard",
    comment:
      "This is a great approach to keeping the UI clean! I especially love the way you handled the collapsible sidebar spacing.",
    time: "2 hours ago",
    likes: 4,
  },
  {
    id: 2,
    blogTitle: "Handling RTL Layouts in React",
    comment:
      "Very helpful! Animating Hebrew text was causing me issues, but the direction utilities mentioned here fixed it.",
    time: "1 day ago",
    likes: 12,
  },
];

// part:3
const SavedAndActivityPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"saved" | "activity">("saved");

  return (
    <div className="">
      {/* ── PAGE HEADER ── */}
      <div  data-aos="fade-down" className="mb-8">
        <h1 className="font-fraunces text-[clamp(1.8rem,3vw,2.4rem)] font-light text-navy leading-tight tracking-[-0.025em] mb-1.5">
          Saved <em className="italic text-[#3B82C4]">& Activity</em>
        </h1>
        <div className="text-sm text-slate-500 font-light">
          Your saved resources and blog comments
        </div>
      </div>

      {/* ── INNER TABS ── */}
      <div  data-aos="fade-down" className="flex gap-1 p-[5px] bg-slate-100 rounded-full mb-7 w-fit">
        <button
          onClick={() => setActiveTab("saved")}
          className={`text-[0.875rem] px-[22px] py-[9px] rounded-full transition-all duration-200 cursor-pointer ${
            activeTab === "saved"
              ? "bg-white text-navy font-medium shadow-sm"
              : "text-slate-500 hover:text-slate-800 font-normal bg-transparent"
          }`}
        >
          Saved Resources
        </button>
        <button
          onClick={() => setActiveTab("activity")}
          className={`text-[0.875rem] px-[22px] py-[9px] rounded-full transition-all duration-200 cursor-pointer ${
            activeTab === "activity"
              ? "bg-white text-navy font-medium shadow-sm"
              : "text-slate-500 hover:text-slate-800 font-normal bg-transparent"
          }`}
        >
          Blog Activity
        </button>
      </div>

      {/* ── TAB PANELS ── */}
      <div className="relative">
        {/* Panel: Saved Resources */}
        {activeTab === "saved" && (
          <div className="animate-in fade-in duration-300">
            {SAVED_RESOURCES.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-[18px]">
                {SAVED_RESOURCES.map((item, i) => (
                  <div
                    data-aos="fade-up"
                    data-aos-duration={400 + i * 100}
                    key={item.id}
                  >
                    <div className="bg-white border border-strong rounded-[1.25rem] overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:shadow-md cursor-pointer group">
                      {/* Thumbnail */}
                      <div
                        className={`aspect-video flex items-center justify-center text-4xl ${item.thumbColor}`}
                      >
                        {item.icon}
                      </div>

                      {/* Card Body */}
                      <div className="p-4">
                        <span className="text-[0.65rem] font-medium tracking-[0.07em] uppercase px-2.5 py-[3px] rounded-full mb-2 inline-block bg-slate-100 text-slate-600">
                          {item.badge}
                        </span>
                        <h4 className="font-serif text-[1rem] font-normal text-navy leading-snug mb-1.5">
                          {item.title}
                        </h4>
                        <p className="text-[0.82rem] text-slate-500 font-light leading-relaxed line-clamp-2">
                          {item.desc}
                        </p>

                        {/* Card Meta */}
                        <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 mt-2.5">
                          <span className="text-[0.75rem] text-slate-400 font-light">
                            {item.author}
                          </span>
                          <button className="text-[0.75rem] text-rose-500 hover:opacity-70 transition-opacity p-[2px]">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Empty State
              <div className="text-center py-14 px-5">
                <div className="text-4xl mb-3 opacity-50">📂</div>
                <div className="font-serif text-[1rem] font-normal text-slate-800 mb-1.5">
                  No saved resources
                </div>
                <div className="text-[0.82rem] text-slate-400 font-light max-w-[280px] mx-auto">
                  Resources you save will appear here for quick access later.
                </div>
              </div>
            )}
          </div>
        )}

        {/* Panel: Blog Activity */}
        {activeTab === "activity" && (
          <div className="animate-in fade-in duration-300">
            <div className="flex flex-col gap-3">
              {BLOG_ACTIVITY.map((activity, i) => (
                <div
                  data-aos="fade-up"
                  data-aos-duration={400 + i * 100}
                  key={activity.id}
                >
                  <div className="bg-white border border-slate-200 rounded-[1.25rem] px-5 py-[18px] transition-all duration-200 hover:border-slate-300 hover:shadow-sm cursor-pointer">
                    <div className="text-[0.72rem] font-medium tracking-[0.07em] uppercase text-accent mb-1.5 flex items-center gap-1.5">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-[11px] h-[11px] stroke-accent fill-none stroke-2 stroke-linecap-round stroke-linejoin-round"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                      {activity.blogTitle}
                    </div>

                    <p className="text-[0.94rem] text-navy font-light leading-relaxed mb-2 line-clamp-2">
                      "{activity.comment}"
                    </p>

                    <div className="flex items-center gap-3">
                      <span className="text-[0.78rem] text-slate-400 font-light">
                        {activity.time}
                      </span>
                      <div className="flex items-center gap-1 text-[0.78rem] text-slate-400 font-light">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-[11px] h-[11px] stroke-current fill-none stroke-2 stroke-linecap-round"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        {activity.likes}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
