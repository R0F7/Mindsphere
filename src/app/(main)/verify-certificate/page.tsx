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

        <h1 className="text-4xl md:text-5xl font-serif font-light text-navy mb-4">
          Verify a{" "}
          <em className="italic text-[#3B82C4] not-italic">Certificate</em>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 font-light text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
          Enter details exactly as they appear on the official document.
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
            <div className="bg-emerald-50 border border-emerald-100 p-5 rounded-2xl flex items-center gap-4">
              <div className="text-2xl">✅</div>
              <div className="flex-1 text-left">
                <h4 className="text-emerald-900 font-medium text-sm md:text-base">
                  Verification Successful
                </h4>
                <p className="text-emerald-700/70 text-xs font-light">
                  This certificate is authentic and currently recorded as valid.
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[0.65rem] uppercase font-bold tracking-widest">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Valid
              </div>
            </div>

            {/* Visual Certificate */}
            <div className="relative group shadow-2xl rounded-xl overflow-hidden bg-white aspect-[1.414/1] w-full border-[12px] border-white ring-1 ring-gray-200">
              {/* Certificate Internal Frame */}
              <div className="absolute inset-4 border border-[#3b82c422] rounded-lg pointer-events-none">
                <div className="absolute inset-1.5 border-[0.5px] border-[#3b82c411] rounded-[4px]" />
              </div>

              {/* Decorative Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#0D1F3C] via-[#3B82C4] to-[#0D1F3C]" />

              <div className="relative h-full flex flex-col p-8 md:p-12 items-center text-center">
                {/* Header */}
                <div className="w-full flex justify-between items-center mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#0D1F3C] rounded-lg flex items-center justify-center text-white font-serif text-xs">
                      M
                    </div>
                    <span className="font-serif text-sm font-semibold text-[#0D1F3C]">
                      Mind<span className="text-[#3B82C4]">sphere</span>
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-[0.5rem] uppercase tracking-widest text-gray-400">
                      Certificate ID
                    </p>
                    <p className="text-[0.7rem] font-mono text-gray-600 font-semibold">
                      {result.id}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center w-full">
                  <p className="text-[0.6rem] uppercase tracking-[0.3em] text-gray-400 mb-4">
                    This is to certify that
                  </p>
                  <h2 className="text-2xl md:text-4xl font-serif text-[#0D1F3C] mb-4 relative inline-block">
                    {result.name}
                    <div className="absolute -left-12 top-1/2 w-8 h-[1px] bg-gradient-to-r from-transparent to-gray-300 hidden md:block" />
                    <div className="absolute -right-12 top-1/2 w-8 h-[1px] bg-gradient-to-l from-transparent to-gray-300 hidden md:block" />
                  </h2>
                  <p className="text-sm md:text-lg font-serif text-gray-600 mb-4">
                    has successfully completed{" "}
                    <span className="italic text-[#3B82C4]">{result.type}</span>
                  </p>
                  <p className="text-[0.65rem] md:text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                    {result.desc}
                  </p>
                </div>

                {/* Footer */}
                <div className="w-full grid grid-cols-3 items-end mt-6">
                  <div className="text-left">
                    <div className="w-24 h-[1px] bg-gray-200 mb-2" />
                    <p className="text-[0.6rem] font-bold text-[#0D1F3C]">
                      Mindsphere Team
                    </p>
                    <p className="text-[0.5rem] text-gray-400">
                      Programme Director
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#3b82c422] flex items-center justify-center bg-[#F4F9FF] relative">
                      <span className="text-xl md:text-2xl">🏅</span>
                      <div className="absolute inset-1 rounded-full border border-dashed border-[#3b82c444]" />
                    </div>
                    <span className="text-[0.4rem] uppercase font-bold tracking-widest text-[#3B82C4] mt-1">
                      Verified
                    </span>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="inline-block px-2 py-0.5 bg-blue-50 text-[#1E4D8C] rounded-full text-[0.55rem] font-medium border border-blue-100">
                      Issued: {result.issue}
                    </div>
                    <div className="text-[0.55rem] text-gray-400 block">
                      Expires: {result.expiry}
                    </div>
                  </div>
                </div>
              </div>

              {/* Watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-serif font-bold text-gray-500/[0.03] select-none pointer-events-none">
                MS
              </div>
            </div>

            <button
              onClick={() => window.print()}
              className="px-6 py-2.5 bg-white border border-gray-200 text-gray-600 rounded-full text-xs font-medium hover:bg-gray-50 transition-all shadow-sm flex items-center gap-2 mx-auto"
            >
              🖨 Print or Download Certificate
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
