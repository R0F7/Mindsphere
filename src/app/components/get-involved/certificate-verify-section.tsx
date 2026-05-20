import Link from "next/link";
import React from "react";

export default function CertificateVerifySection() {
  return (
    <section
      id="verify"
      className="relative bg-[var(--white)] py-[110px] px-[5%] overflow-hidden"
    >
      {/* Subtle diagonal stripe texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(59, 130, 196, 0.015) 40px, rgba(59, 130, 196, 0.015) 41px)`,
        }}
        // Note: For dark theme, you can wrap this in a dark: class if using tailwind strategy
      />

      <div className="relative z-[1] max-w-[680px] mx-auto text-center">
        {/* Icon */}
        <div className="w-16 h-16 rounded-[var(--radius-lg)] bg-[var(--accent-light)] border border-[rgba(59,130,196,0.2)] flex items-center justify-center mx-auto mb-7 text-[1.6rem]">
          🎓
        </div>

        {/* Title */}
        <h2 className="font-fraunces text-[clamp(1.8rem,4vw,2.8rem)] font-light tracking-[-0.03em] text-[var(--text-primary)] mb-3.5">
          Verify a{" "}
          <em className="italic text-[var(--accent)] not-italic">
            Certificate
          </em>
        </h2>

        {/* Body */}
        <p className="text-[0.95rem] text-[var(--text-secondary)] font-light leading-[1.72] max-w-[480px] mx-auto mb-10">
          Every Mindsphere certificate carries a unique ID. Use our verification
          portal to instantly confirm its authenticity, view the holder's
          details, and check its current status.
        </p>

        {/* Verify Button */}
        <Link
          href="/verify-certificate"
          className="group inline-flex items-center gap-2.5 px-9 py-3.5 bg-[var(--navy)] dark:bg-[var(--accent)] text-white text-[0.95rem] font-medium rounded-full border-none cursor-pointer transition-all duration-250 shadow-[var(--shadow-md)] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(13,31,60,0.22)]"
        >
          Verify Certificate
          <svg
            className="w-[15px] h-[15px] transition-transform duration-250 group-hover:translate-x-[3px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
