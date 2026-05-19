"use client";

interface Helpline {
  name: string;
  desc: string;
  avail: string;
  avClass: "av24" | "avday";
  phone: string;
  chat: boolean;
}

export default function HelplineSection() {
  const HELPLINES: Helpline[] = [
    { name: "Crisis Text Line", desc: "Text-based crisis support available 24/7. Connect with a trained crisis counselor by sending a text message. Free, confidential, available any time.", avail: "24/7", avClass: "av24", phone: "Text HOME to 741741", chat: true },
    { name: "Teen Line", desc: "A peer support helpline staffed by specially trained teenagers for teenagers. Talk to someone who truly understands — because they've been there.", avail: "6PM–10PM daily", avClass: "avday", phone: "+1 800 852 8336", chat: true },
    { name: "Samaritans", desc: "Confidential emotional support for anyone struggling to cope. Available any time by phone or email. No judgment — just a calm voice ready to listen.", avail: "24/7", avClass: "av24", phone: "116 123", chat: false },
    { name: "iCall", desc: "Psychosocial helpline offering counselling and mental health support to individuals experiencing emotional distress, anxiety, depression, and other challenges.", avail: "Mon–Sat 8AM–10PM", avClass: "avday", phone: "+91 9152987821", chat: true },
    { name: "Childline", desc: "Free, confidential helpline for children and young people in distress or danger. Trained counselors available 24/7. Calls are free and do not show on phone bills.", avail: "24/7", avClass: "av24", phone: "0800 1111", chat: true },
    { name: "Mind Infoline", desc: "Information and signposting to local and national mental health services for anyone experiencing a mental health problem or supporting someone who is.", avail: "Mon–Fri 9AM–6PM", avClass: "avday", phone: "0300 123 3393", chat: false },
  ];

  const handleCall = (phoneStr: string) => {
    if (phoneStr.includes("HOME")) {
      window.location.href = "sms:741741?body=HOME";
      return;
    }
    const cleanNumber = phoneStr.replace(/[^+\d]/g, "");
    window.location.href = `tel:${cleanNumber}`;
  };

  return (
    <section className="bg-navy dark:bg-soft w-full px-4 md:px-[5%] py-20 relative overflow-hidden" id="helpline">
      {/* ── BACKGROUND ORB BLUR ── */}
      <div className="absolute rounded-full pointer-events-none filter blur-[80px] w-100 h-100 bg-[rgba(59,130,196,0.12)] -top-25 -right-25" />

      <div className="max-w-275 mx-auto container relative z-10">
        
        {/* ── SECTION HEADER ── */}
        <div className="mb-10" data-aos="fade-up">
          <div className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-white/40 dark:text-accent mb-2.5">
            Get help now
          </div>
          <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.6rem)] font-light text-white dark:text-text tracking-tight leading-[1.15] mb-2.5">
            You don't have to face this <em className="not-italic opacity-60">alone.</em>
          </h2>
          <p className="text-[0.95rem] text-white/50 dark:text-t2 font-light leading-relaxed max-w-125">
            If you're in crisis or need to talk to someone right now, these services are here for you. All free, all confidential. No account needed.
          </p>
        </div>

        {/* ── HELPLINES GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {HELPLINES.map((hl, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 0.07}s` }}
              className="bg-white/6 dark:bg-white border border-white/10 dark:border-bd rounded-2xl p-6 flex flex-col gap-3.5 transition-all duration-300 select-none hover:bg-white/10 dark:hover:bg-white hover:-translate-y-0.5"
              data-aos="fade-up"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="font-fraunces text-[1.05rem] font-normal text-white dark:text-text leading-tight">
                    {hl.name}
                  </h3>
                  <p className="text-[0.8rem] text-white/55 dark:text-t2 font-light leading-relaxed">
                    {hl.desc}
                  </p>
                </div>

                {/* Availability Badge */}
                <span
                  className={`text-[0.68rem] font-medium tracking-wide uppercase p-[4px_10px] rounded-full whitespace-nowrap shrink-0 ${
                    hl.avClass === "av24"
                      ? "bg-[rgba(16,185,129,0.2)] text-[#4ADE80]"
                      : "bg-[rgba(245,158,11,0.15)] text-[#FCD34D]"
                  }`}
                >
                  {hl.avail}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 flex-wrap mt-auto pt-2">
                <button
                  onClick={() => handleCall(hl.phone)}
                  className="inline-flex items-center gap-1.5 p-[10px_18px] rounded-full text-[0.82rem] font-medium bg-white text-navy transition-all duration-220 cursor-pointer select-none hover:bg-success hover:text-white"
                >
                  <svg className="w-3.5 h-3.5 stroke-current fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.61 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z" />
                  </svg>
                  {hl.phone.includes("HOME") ? "Text Now" : `Call ${hl.phone}`}
                </button>

                {hl.chat && (
                  <button className="inline-flex items-center gap-1.5 p-[10px_18px] rounded-full text-[0.82rem] font-medium border border-white/25 text-white/85 bg-transparent transition-all duration-220 cursor-pointer select-none hover:bg-white/15 hover:text-white dark:border-bd2 dark:text-t2 dark:hover:bg-soft">
                    <svg className="w-3.5 h-3.5 stroke-current fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    Chat / Message
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── DISCLAIMER NOTE ── */}
        <div className="mt-8 p-[16px_20px] bg-white/5 border border-white/8 border-l-[3px] border-l-[rgba(59,130,196,0.5)] rounded-r-md" data-aos="fade-up">
          <p className="text-[0.8rem] text-white/45 dark:text-t2 font-light leading-relaxed">
            <strong className="text-white/70 dark:text-t2 font-medium">Important:</strong> Mindsphere is a supportive space, not a clinical service. If you or someone you know is in immediate danger, please call your local emergency number (911, 999, 112) immediately.
          </p>
        </div>

      </div>
    </section>
  );
}