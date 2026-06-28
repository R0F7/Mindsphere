"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

const CERT_DB: any = {
  "ayesha khan|||ms-2025-00142": {
    name: "Ayesha Khan",
    id: "MS-2025-00142",
    type: "Peer Support Training",
    issue: "April 2, 2025",
    expiry: "April 2, 2026",
    status: "valid",
    desc: "Peer Support Training — issued by the Mindsphere Peer Support Programme in recognition of dedication, effort, and commitment to mental health awareness among teenagers.",
  },
  "tahsin hossain|||ms-2025-00089": {
    name: "Tahsin Hossain",
    id: "MS-2025-00089",
    type: "Mental Health Awareness",
    issue: "January 15, 2025",
    expiry: "No expiry",
    status: "valid",
    desc: "Mental Health Awareness — awarded in recognition of completing the Mindsphere awareness programme and commitment to reducing stigma within the community.",
  },
  "nadia rahman|||ms-2024-00031": {
    name: "Nadia Rahman",
    id: "MS-2024-00031",
    type: "Community Leadership",
    issue: "November 8, 2024",
    expiry: "November 8, 2025",
    status: "expired",
    desc: "Community Leadership — issued in recognition of leading community initiatives and peer support activities. This certificate has since expired.",
  },
};

export default function CertificateVerify() {
  const [name, setName] = useState("");
  const [certId, setCertId] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleVerify = () => {
    if (!name || !certId) return;
    setLoading(true);
    setResult(null);
    setNotFound(false);

    setTimeout(() => {
      const key = `${name.toLowerCase().trim()}|||${certId.toLowerCase().trim()}`;
      const data = CERT_DB[key];
      if (data) {
        setResult(data);
      } else {
        setNotFound(true);
      }
      setLoading(false);

      setTimeout(() => {
        resultRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#F8F9FB] dark:bg-[#0D1F3C] pt-28 pb-20 px-5 relative overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#3b82c40a] dark:bg-[#3b82c41a] rounded-full blur-[100px] pointer-events-none" />

      <div
        className="max-w-2xl mx-auto text-center relative z-10"
        data-aos="fade-up"
      >
        {/* Breadcrumb */}
        <nav className="flex justify-center gap-2 text-[0.75rem] text-gray-400 dark:text-gray-500 mb-8 font-light">
          <Link href="/" className="hover:text-[#3B82C4]">
            Home
          </Link>
          <span>›</span>
          <span className="text-gray-600 dark:text-gray-300">
            Verify Certificate
          </span>
        </nav>

        <div className="w-16 h-16 bg-[#EBF3FB] dark:bg-[#1A3560] border border-[#3b82c433] rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 shadow-sm">
          🎓
        </div>
        <h1 className="font-fraunces text-4xl md:text-5xl font-light text-navy leading-tight tracking-[-0.025em] mb-1.5">
          Verify a <em className="italic text-[#3B82C4]">Certificate</em>
        </h1>

        <p className="text-gray-500 dark:text-gray-400 font-light text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
          Enter the certificate holder's full name and certificate ID exactly as
          they appear on the document. Both fields must match our records.
        </p>

        {/* Form Card */}
        <div
          className="bg-white dark:bg-[#162a4d] p-7 md:p-8 rounded-[24px] shadow-xl border border-gray-100 dark:border-[#ffffff10] text-left mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.7rem] uppercase tracking-wider font-semibold text-gray-400 dark:text-gray-500 pl-1">
                Holder's Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ayesha Khan"
                className="w-full p-3.5 bg-[#F9FAFB] dark:bg-[#0D1F3C] border border-gray-200 dark:border-[#ffffff10] rounded-md outline-none focus:border-[#3B82C4] text-sm dark:text-primary"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.7rem] uppercase tracking-wider font-semibold text-gray-400 dark:text-gray-500 pl-1">
                Certificate ID
              </label>
              <input
                type="text"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                placeholder="e.g. MS-2025-00142"
                className="w-full p-3.5 bg-[#F9FAFB] dark:bg-[#0D1F3C] border border-gray-200 dark:border-[#ffffff10] rounded-md outline-none focus:border-[#3B82C4] text-sm dark:text-primary"
              />
            </div>
          </div>
          <button
            onClick={handleVerify}
            className="w-full p-4 bg-[#0D1F3C] dark:bg-[#3B82C4] text-white rounded-md font-medium transition-all shadow-lg flex items-center justify-center gap-3 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Verify Certificate"
            )}
          </button>
        </div>
        <p className="text-xs text-navy/70">
          Certificate IDs are printed on the official document issued by
          Mindsphere. Both name and ID are required.
        </p>
      </div>

      {/* Results Section */}
      <div ref={resultRef} className="max-w-3xl mx-auto mt-12 relative z-10">
        {/* Not Found State */}
        {notFound && (
          <div className="bg-red-50/50 border border-red-100 p-10 rounded-[24px] text-center animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="text-3xl mb-4">🔎</div>
            <h3 className="text-lg font-serif text-red-900 mb-2">
              Certificate not found
            </h3>
            <p className="text-sm text-red-700/70 font-light mb-4">
              No record matches the provided Name & ID. Please double-check for
              typos.
            </p>
            <div className="inline-block px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-xs font-mono">
              {name} • {certId}
            </div>
          </div>
        )}

        {/* Found State */}
        {result && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
            {/* Status Banner */}
            <div
              className={`border p-5 rounded-2xl flex items-center gap-4 ${
                result.status === "valid"
                  ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-800 dark:text-emerald-300"
                  : "bg-amber-500/10 border-amber-500/20 text-amber-800 dark:text-amber-300"
              }`}
            >
              <div className="text-2xl">
                {result.status === "valid" ? "✅" : "⚠️"}
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-medium text-sm md:text-base">
                  Verification Successful
                </h4>
                <p className="opacity-90 text-sm font-light">
                  This certificate is authentic and recorded as{" "}
                  <span className="font-semibold">{result.status}</span>.
                </p>
              </div>
              <div
                className={`hidden md:flex items-center gap-2 px-3 py-1 border rounded-full text-[0.65rem] uppercase font-bold tracking-widest ${
                  result.status === "valid"
                    ? "bg-emerald-500/10 border-emerald-500 text-emerald-600"
                    : "bg-amber-500/10 border-amber-500 text-amber-600"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${result.status === "valid" ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`}
                />
                {result.status}
              </div>
            </div>

            <div
              id="certResultCard"
              className={`cert-result-card show w-full max-w-3xl mx-auto rounded-xl p-8 text-left shadow-md relative overflow-hidden mb-6 border bg-[#F8F9FB] dark:bg-[#0F1826] border-gray-200 dark:border-white/10 animate-[slideDown_0.4s_ease] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:height-[3px] ${
                result.status === "expired"
                  ? "expired before:bg-gradient-to-r before:from-[#EF4444] before:to-[#B91C1C]"
                  : "before:bg-gradient-to-r before:from-[#3B82C4] before:to-[#0D1F3C]"
              }`}
            ><div className="absolute top-0 left-0 right-0 h-1 rounded-t-(--rx) bg-gradient-to-r from-accent to-navy-mid" />
              {/* Card Header */}
              <div className="cert-result-header flex items-start gap-4 mb-6">
                {/* Seal */}
                <div
                  id="certSeal"
                  className={`cert-result-seal w-[52px] h-[52px] rounded-lg flex items-center justify-center text-[1.3rem] shrink-0 text-white ${
                    result.status === "expired"
                      ? "expired bg-gradient-to-br from-gray-400 to-gray-600"
                      : "bg-gradient-to-br from-[#3B82C4] to-[#0D1F3C]"
                  }`}
                >
                  🏅
                </div>

                {/* Name and ID */}
                <div className="text-left">
                  <div
                    id="rName"
                    className="cert-result-name font-['Fraunces'] text-[1.2rem] font-normal text-gray-900 dark:text-gray-100 mb-1"
                  >
                    {result.name}
                  </div>
                  <div
                    id="rId"
                    className="cert-result-id text-[0.72rem] font-medium tracking-widest text-gray-400 uppercase"
                  >
                    {result.id}
                  </div>
                </div>

                {/* Status Pill Badge */}
               <div
                className={`hidden md:flex ml-auto shrink-0 items-center gap-2 px-3 py-1 border rounded-full text-[0.65rem] uppercase font-bold tracking-widest ${
                  result.status === "valid"
                    ? "bg-emerald-500/10 border-emerald-500 text-emerald-600"
                    : "bg-amber-500/10 border-amber-500 text-amber-600"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${result.status === "valid" ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`}
                />
                {result.status}
              </div>
              </div>

              {/* Details Grid */}
              <div className="cert-details  grid grid-cols-1 md:grid-cols-2 gap-3"> 
                {/* Type */}
                <div className="cert-detail bg-white dark:bg-[#162a4d] border border-gray-200 dark:border-white/10 rounded-lg p-3.5 px-4 text-left">
                  <div className="cert-detail-label text-[0.68rem] font-medium tracking-widest uppercase text-gray-400 mb-1">
                    Certificate Type
                  </div>
                  <div
                    id="rType"
                    className="cert-detail-value text-[0.88rem] font-medium text-gray-900 dark:text-gray-200"
                  >
                    {result.type}
                  </div>
                </div>

                {/* Issue Date */}
                <div className="cert-detail bg-white dark:bg-[#162a4d] border border-gray-200 dark:border-white/10 rounded-lg p-3.5 px-4 text-left">
                  <div className="cert-detail-label text-[0.68rem] font-medium tracking-widest uppercase text-gray-400 mb-1">
                    Issue Date
                  </div>
                  <div
                    id="rIssue"
                    className="cert-detail-value text-[0.88rem] font-medium text-gray-900 dark:text-gray-200"
                  >
                    {result.issue}
                  </div>
                </div>

                {/* Expiry Date */}
                <div className="cert-detail bg-white dark:bg-[#162a4d] border border-gray-200 dark:border-white/10 rounded-lg p-3.5 px-4 text-left">
                  <div className="cert-detail-label text-[0.68rem] font-medium tracking-widest uppercase text-gray-400 mb-1">
                    Expiry Date
                  </div>
                  <div
                    id="rExpiry"
                    className="cert-detail-value text-[0.88rem] font-medium text-gray-900 dark:text-gray-200"
                  >
                    {result.expiry}
                  </div>
                </div>

                {/* Issued By */}
                <div className="cert-detail bg-white dark:bg-[#162a4d] border border-gray-200 dark:border-white/10 rounded-lg p-3.5 px-4 text-left">
                  <div className="cert-detail-label text-[0.68rem] font-medium tracking-widest uppercase text-gray-400 mb-1">
                    Issued By
                  </div>
                  <div className="cert-detail-value text-[0.88rem] font-medium text-gray-900 dark:text-gray-200">
                    Mindsphere
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Certificate */}
            <div className="w-full max-w-4xl mx-auto" id="certVisualWrap">
              {/* Buttons */}
              <div className="flex justify-end gap-3 mb-6">
                <button
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full  text-sm font-medium flex items-center gap-2 transition cursor-pointer"
                  onClick={() => window.print()}
                >
                  🖨 Print
                </button>
                <button
                  className="px-4 py-2 bg-accent text-white rounded-full text-sm font-medium flex items-center gap-2 transition cursor-pointer"
                  onClick={() => alert("Download logic here")}
                >
                  ⬇ Download
                </button>
              </div>

              {/* The actual certificate */}
              <div
                id="certificateEl"
                className="bg-must-white rounded-2xl shadow-xl ring-1 ring-[#0D1F3C]/5 overflow-hidden relative aspect-[1.414/1] flex flex-col w-full"
              >
                {/* Decorative elements */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#0D1F3C] via-[#3B82C4] to-[#0D1F3C] z-10"></div>

                {/* Frames */}
                <div className="absolute inset-4 border-[1.5px] border-[#3B82C4]/20 rounded-xl pointer-events-none z-20 before:absolute before:inset-[6px] before:border-[0.5px] before:border-[#3B82C4]/10 before:rounded-lg"></div>

                {/* Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Fraunces'] text-[9rem] font-semibold text-[#0D1F3C]/[0.025] tracking-tighter pointer-events-none whitespace-nowrap z-0 select-none">
                  MS
                </div>

                {/* Corner ornaments */}
                <div className="absolute w-8 h-8 z-30 top-5 left-5">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2 L14 2 L14 4 L4 4 L4 14 L2 14 Z"
                      fill="rgba(59,130,196,0.25)"
                    />
                    <path
                      d="M2 2 L8 2 L8 3.5 L3.5 3.5 L3.5 8 L2 8 Z"
                      fill="rgba(59,130,196,0.5)"
                    />
                    <circle cx="6" cy="6" r="1.5" fill="rgba(59,130,196,0.4)" />
                  </svg>
                </div>
                <div className="absolute w-8 h-8 z-30 top-5 right-5 rotate-90">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2 L14 2 L14 4 L4 4 L4 14 L2 14 Z"
                      fill="rgba(59,130,196,0.25)"
                    />
                    <path
                      d="M2 2 L8 2 L8 3.5 L3.5 3.5 L3.5 8 L2 8 Z"
                      fill="rgba(59,130,196,0.5)"
                    />
                    <circle cx="6" cy="6" r="1.5" fill="rgba(59,130,196,0.4)" />
                  </svg>
                </div>
                <div className="absolute w-8 h-8 z-30 bottom-5 left-5 -rotate-90">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2 L14 2 L14 4 L4 4 L4 14 L2 14 Z"
                      fill="rgba(59,130,196,0.25)"
                    />
                    <path
                      d="M2 2 L8 2 L8 3.5 L3.5 3.5 L3.5 8 L2 8 Z"
                      fill="rgba(59,130,196,0.5)"
                    />
                    <circle cx="6" cy="6" r="1.5" fill="rgba(59,130,196,0.4)" />
                  </svg>
                </div>
                <div className="absolute w-8 h-8 z-30 bottom-5 right-5 rotate-180">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2 L14 2 L14 4 L4 4 L4 14 L2 14 Z"
                      fill="rgba(59,130,196,0.25)"
                    />
                    <path
                      d="M2 2 L8 2 L8 3.5 L3.5 3.5 L3.5 8 L2 8 Z"
                      fill="rgba(59,130,196,0.5)"
                    />
                    <circle cx="6" cy="6" r="1.5" fill="rgba(59,130,196,0.4)" />
                  </svg>
                </div>

                {/* Certificate content */}
                <div className="relative z-10 flex flex-col h-full pt-10 pr-14 pb-9 pl-16">
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1A3560] to-[#3B82C4] flex items-center justify-center font-['Fraunces'] text-base font-semibold text-white">
                        M
                      </div>
                      <div className="font-['Fraunces'] text-base font-semibold text-[#0D1F3C] tracking-tight">
                        Mind<span className="text-[#3B82C4]">sphere</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[0.58rem] font-medium tracking-[0.12em] uppercase text-[#8A99AE] mb-0.5">
                        Certificate ID
                      </div>
                      <div className="text-[0.75rem] font-medium text-[#5A6B84] tracking-[0.04em]">
                        {result.id}
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-[#3B82C4]/25 to-transparent mb-4"></div>

                  {/* Centre */}
                  <div className="flex-1 flex flex-col justify-center text-center">
                    <div className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-[#8A99AE] mb-2">
                      This is to certify that
                    </div>

                    {/* Name with side lines */}
                    <div className="relative mb-3 px-10">
                      <div className="absolute top-1/2 left-10 w-[90px] h-[1px] bg-gradient-to-r from-transparent to-[#3B82C4]/40 origin-right"></div>
                      <div className="font-['Fraunces'] text-[clamp(1.2rem,3.5vw,2.2rem)] font-normal tracking-[-0.02em] text-[#0D1F3C] leading-none">
                        {result.name}
                      </div>
                      <div className="absolute top-1/2 right-10 w-[90px] h-[1px] bg-gradient-to-r from-[#3B82C4]/40 to-transparent"></div>
                    </div>

                    <div className="font-['Fraunces'] text-[clamp(0.9rem,2.5vw,1.6rem)] font-light tracking-[-0.02em] text-[#0D1F3C] mb-4 leading-tight">
                      has successfully completed{" "}
                      <em className="italic text-[#3B82C4]">{result.type}</em>
                    </div>
                    <div className="text-[clamp(0.6rem,1.2vw,0.78rem)] text-[#5A6B84] font-light leading-relaxed max-w-[440px] mx-auto">
                      {result.desc}
                    </div>
                  </div>

                  {/* Bottom row */}
                  <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-4 mt-4">
                    {/* Signature */}
                    <div className="text-center">
                      <div className="w-[120px] h-[1px] bg-[#0D1F3C]/20 mx-auto mb-1"></div>
                      <div className="text-[0.68rem] font-medium text-[#0D1F3C]">
                        Mindsphere Team
                      </div>
                      <div className="text-[0.58rem] text-[#8A99AE] font-light tracking-[0.04em]">
                        Programme Director
                      </div>
                    </div>

                    {/* Seal */}
                    <div className="w-[72px] h-[72px] rounded-full border-[3px] border-[#3B82C4]/25 bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.9),rgba(235,243,251,0.5))] flex flex-col items-center justify-center shadow-[0_0_0_1px_rgba(59,130,196,0.1),inset_0_0_12px_rgba(59,130,196,0.06)] relative before:content-[''] before:absolute before:inset-1 before:rounded-full before:border-[0.75px] before:border-dashed before:border-[#3B82C4]/20">
                      <div className="text-[1.4rem] leading-none">🏅</div>
                      <div className="text-[0.38rem] font-bold tracking-[0.12em] uppercase text-[#3B82C4] mt-0.5">
                        {result.status === "valid" ? "Verified" : "Expired"}
                      </div>
                    </div>

                    {/* Meta Tags */}
                    <div className="flex gap-2 justify-end flex-wrap">
                      <span className="text-[0.6rem] font-medium tracking-[0.06em] px-2.5 py-1 rounded-full bg-[#3B82C4]/[0.08] text-[#1E4D8C] border-[0.75px] border-[#3B82C4]/20 whitespace-nowrap">
                        Issued: {result.issue}
                      </span>
                      <span className="text-[0.6rem] font-medium tracking-[0.06em] px-2.5 py-1 rounded-full bg-[#3B82C4]/[0.08] text-[#1E4D8C] border-[0.75px] border-[#3B82C4]/20 whitespace-nowrap">
                        {result.status === "valid" ? "Valid until" : "Expired"}:{" "}
                        {result.expiry}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
      </div>
    </main>
  );
}
