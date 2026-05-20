import Link from "next/link";

const EVENTS = [
  {
    id: 1,
    month: "May",
    day: "08",
    type: "Workshop",
    typeClass: "pill-workshop",
    time: "10:00 AM – 12:00 PM",
    title: "Anxiety First Aid — Peer Support Workshop",
    location: "Online · Zoom",
    going: "+67",
    cta: "Register Free",
    btnClass: "btn-free",
    avatars: [
      { label: "R", bg: "bg-[#3B82C4]" },
      { label: "A", bg: "bg-[#1A3560]" },
      { label: "N", bg: "bg-[#10B981]" },
      { label: "T", bg: "bg-[#F59E0B]" },
    ],
  },
  {
    id: 2,
    month: "May",
    day: "14",
    type: "Session",
    typeClass: "pill-session",
    time: "06:00 PM – 08:00 PM",
    title: "Open Mic for Mental Health — Share Your Story",
    location: "Dhaka Community Hub",
    going: "+38",
    cta: "Get Tickets →",
    btnClass: "btn-filled",
    avatars: [
      { label: "M", bg: "bg-[#10B981]" },
      { label: "K", bg: "bg-[#3B82C4]" },
      { label: "S", bg: "bg-[#1A3560]" },
    ],
  },
  {
    id: 3,
    month: "May",
    day: "21",
    type: "Talk",
    typeClass: "pill-talk",
    time: "04:00 PM – 05:30 PM",
    title: "Breaking the Stigma — A Candid Conversation on Teen Depression",
    location: "Online · Google Meet",
    going: "+112",
    cta: "Register Free",
    btnClass: "btn-free",
    avatars: [
      { label: "J", bg: "bg-[#F59E0B]" },
      { label: "L", bg: "bg-[#3B82C4]" },
      { label: "P", bg: "bg-[#10B981]" },
      { label: "F", bg: "bg-[#1A3560]" },
    ],
  },
];

// Helper functions for styles
function getTypeStyles(type: string) {
  switch (type) {
    case "Workshop":
      return "bg-[rgba(245,158,11,0.12)] text-[#B45309] border border-[rgba(245,158,11,0.25)] dark:text-[#FCD34D]";
    case "Session":
      return "bg-[rgba(16,185,129,0.12)] text-[#047857] border border-[rgba(16,185,129,0.25)] dark:text-[#34D399]";
    case "Talk":
      return "bg-accent-light text-[#1E4D8C] border border-[rgba(59,130,196,0.25)] dark:text-accent";
    default:
      return "bg-gray-100 text-gray-600";
  }
}

function getBtnStyles(btnClass: string) {
  if (btnClass === "btn-filled") {
    return "bg---navy dark:bg---accent text-white hover:opacity-88 hover:-translate-y-[1px]";
  }
  return "bg-[rgba(16,185,129,0.1)] text-[#047857] border border-[rgba(16,185,129,0.3)] hover:bg-[#047857] hover:text-white dark:text-[#34D399]";
}

export default function UpcomingEvents() {
  return (
    <section className="py-[100px] px-[5%] bg-white" id="upcoming">
      <div className="container">
        {/* --- HEADER --- */}
        <div
          className="flex flex-wrap items-end justify-between gap-[20px] mb-[40px]"
          data-aos="fade-up"
        >
          <div className="section-header-left">
            <div className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-muted mb-[8px]">
              What's On
            </div>
            <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.6rem)] font-light text-primary tracking-[-0.025em] mb-[6px]">
              Upcoming <em className="italic text-accent">Events</em>
            </h2>
            <p className="text-[0.9rem] text-secondary font-light max-w-[440px] line-height-[1.6]">
              Workshops, talks, and sessions happening soon. All free, all
              designed for teens.
            </p>
          </div>
        </div>

        {/* --- EVENT LIST --- */}
        <div className="flex flex-col gap-[15px]">
          {EVENTS.map((event, i) => (
            <Link
              href="/event-detail"
              key={event.id}
              className="group relative grid grid-cols-1 md:grid-cols-[80px_1fr_auto] items-center gap-[28px] p-[28px_32px] bg-off-white border border-border rounded-xl transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-[3px] hover:shadow-md hover:bg-white hover:border-strong"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Left Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-transparent transition-colors duration-200 group-hover:bg-accent rounded-[3px_0_0_3px]" />

              {/* Date Block */}
              <div className="text-center flex-shrink-0">
                <div className="text-[0.68rem] font-semibold tracking-[0.1em] uppercase text-accent leading-none mb-[2px]">
                  {event.month}
                </div>
                <div className="font-fraunces text-[2.4rem] font-light text-primary tracking-[-0.04em] leading-none">
                  {event.day}
                </div>
              </div>

              {/* Event Body */}
              <div className="min-w-0">
                <div className="flex items-center gap-[8px] mb-[8px] flex-wrap">
                  <span
                    className={`text-[0.65rem] font-bold tracking-[0.08em] uppercase px-[11px] py-[4px] rounded-full ${getTypeStyles(event.type)}`}
                  >
                    {event.type}
                  </span>
                  <span className="flex items-center gap-[5px] text-[0.75rem] text-muted font-light">
                    <svg
                      className="w-[11px] h-[11px]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {event.time}
                  </span>
                </div>
                <h3 className="font-fraunces text-[1.15rem] font-normal text-primary mb-[10px] tracking-[-0.01em] leading-[1.3]">
                  {event.title}
                </h3>
                <div className="flex items-center gap-[16px] flex-wrap">
                  <div className="flex items-center gap-[5px] text-[0.77rem] text-muted font-light">
                    <svg
                      className="w-[12px] h-[12px] opacity-70"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {event.location}
                  </div>
                  {/* Avatar Stack */}
                  <div className="flex items-center gap-[6px]">
                    <div className="flex">
                      {event.avatars.map((av, idx) => (
                        <div
                          key={idx}
                          className={`w-[22px] h-[22px] rounded-full border-[1.5px] border-off-white flex items-center justify-center text-[0.52rem] text-white font-semibold -ml-[7px] first:ml-0 ${av.bg}`}
                        >
                          {av.label}
                        </div>
                      ))}
                    </div>
                    <span className="text-[0.75rem] text-muted font-light">
                      {event.going} going
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex-shrink-0">
                <button
                  className={`px-[22px] py-[10px] rounded-full font-dm-sans text-[0.82rem] font-medium transition-all duration-200 whitespace-nowrap inline-flex items-center gap-[6px] border-none ${getBtnStyles(event.btnClass)}`}
                >
                  {event.cta}
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
