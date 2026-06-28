import Link from "next/link";
import PrimaryButton from "./primary-button";
import OutlineButton from "./outline-button";

export default function EventsSection() {
  // Empty state check korar jonno
  //  const eventRows = [];
  const eventRows = [
    {
      iconType: "user",
      title: "Open Mic: Mental Health Stories",
      desc: "Teens shared their personal journeys in a safe, supportive environment.",
      date: "March 2025",
      location: "Virtual",
    },
    {
      iconType: "shield",
      title: "Mindfulness Workshop Series",
      desc: "4-week online workshop on breathing, journaling, and daily routines.",
      date: "January 2025",
      location: "Online",
    },
    {
      iconType: "star",
      title: "Peer Support Certification Drive",
      desc: "Training program for teens who want to become certified peer supporters.",
      date: "Nov 2024",
      location: "Online",
    },
  ];

  const hasEvents = eventRows.length > 0;

  return (
    <section
      className="bg-off-white w-full px-4 md:px-[5%] py-20 overflow-hidden"
      id="events"
    >
      <div className="mx-auto container w-full">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="text-xs uppercase tracking-widest text-accent mb-2 font-medium">
            What's happening
          </div>

          <h2 className="font-['Fraunces',serif] text-[clamp(2rem,4vw,3rem)] font-light tracking-tight leading-[1.1] text-primary mb-4">
            Events & <em className="text-accent italic">Gatherings</em>
          </h2>
        </div>

        {hasEvents ? (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6 w-full">
            {/* 1. Featured event (left) */}
            <div data-aos="fade-right">
              <div className="group bg-white border border-border rounded-xl overflow-hidden flex flex-col transition-all hover:shadow-md hover:-translate-y-1 duration-300 w-full">
                <div className="w-full aspect-video bg-[linear-gradient(135deg,var(--navy),var(--blue))] relative overflow-hidden shrink-0">
                  <div className="w-full h-full flex items-center justify-center opacity-30">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-16 h-16 stroke-white fill-none stroke-1 stroke-linecap-round stroke-linejoin-round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>

                  <div className="absolute top-4 left-4 bg-accent text-white text-[0.68rem] font-medium tracking-[0.08em] uppercase edit-badge px-3 py-1.5 rounded-full">
                    Upcoming
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col">
                  <h3 className="font-['Fraunces',serif] text-2xl font-normal text-primary mb-2.5 leading-tight">
                    Teen Wellness Summit 2025
                  </h3>
                  <p className="text-[0.875rem] text-secondary leading-relaxed font-light mb-6 pb-5 border-b border-border flex-1">
                    Our flagship annual event bringing together teens,
                    counselors, and mental health advocates for a full day of
                    connection, workshops, and honest conversations about what
                    it means to be a teenager today.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="flex items-center gap-1.5 text-[0.8rem] text-muted font-light">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3.5 h-3.5 stroke-muted fill-none stroke-[1.8] stroke-linecap-round"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      Date TBA, 2025
                    </div>

                    <div className="flex items-center gap-1.5 text-[0.8rem] text-muted font-light">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3.5 h-3.5 stroke-muted fill-none stroke-[1.8] stroke-linecap-round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Virtual + In-person
                    </div>
                  </div>

                  <Link
                    href="/events"
                    className="inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-primary transition-all duration-200 hover:gap-2.5"
                  >
                    Learn more ↗
                  </Link>
                </div>
              </div>
            </div>

            {/* 2. Events list (right) */}
            <div
              className="flex flex-col gap-2 w-full min-w-0"
              data-aos="fade-left"
            >
              {eventRows.map((row, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-4 p-4 md:p-[22px_24px] bg-white border border-border rounded-lg transition-all duration-250 cursor-pointer relative hover:bg-soft-grey hover:translate-x-1 w-full min-w-0"
                >
                  <div className="w-14 h-14 md:w-18 md:h-15 rounded-sm bg-[linear-gradient(135deg,var(--soft-grey),var(--accent-light))] shrink-0 overflow-hidden flex items-center justify-center">
                    {row.iconType === "user" && (
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 stroke-accent fill-none stroke-[1.5] stroke-linecap-round opacity-50"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                    )}
                    {row.iconType === "shield" && (
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 stroke-accent fill-none stroke-[1.5] stroke-linecap-round opacity-50"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    )}
                    {row.iconType === "star" && (
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 stroke-accent fill-none stroke-[1.5] stroke-linecap-round opacity-50"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-['Fraunces',serif] text-[0.95rem] font-normal text-primary mb-1 truncate">
                      {row.title}
                    </h4>

                    <p className="text-[0.78rem] text-secondary leading-normal font-light mb-2 line-clamp-1">
                      {row.desc}
                    </p>

                    <div className="flex flex-wrap items-center gap-3.5">
                      <span className="flex items-center gap-1 text-[0.72rem] text-muted">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-2.75 h-2.75 stroke-muted fill-none stroke-2 stroke-linecap-round"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        {row.date}
                      </span>
                      <span className="flex items-center gap-1 text-[0.72rem] text-muted">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-2.75 h-2.75 stroke-muted fill-none stroke-2 stroke-linecap-round"
                        >
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                        {row.location}
                      </span>
                    </div>
                  </div>

                  <div className="w-7 h-7 rounded-full border border-border flex items-center justify-center shrink-0 mt-0.5 text-[0.7rem] text-muted transition-all duration-200 group-hover:bg-navy group-hover:text-white group-hover:border-navy">
                    ↗
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className="text-center p-12 bg-white border border-border rounded-xl max-w-xl mx-auto shadow-sm"
            data-aos="fade-up"
          >
            <div className="w-12 h-12 bg-soft-grey rounded-full flex items-center justify-center mx-auto mb-4 opacity-70">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 stroke-accent fill-none stroke-[1.5]"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <path d="M9 14l2 2 4-4" className="opacity-40" />
              </svg>
            </div>
            <h3 className="font-['Fraunces',serif] text-xl font-normal text-primary mb-2">
              No Upcoming Events Right Now
            </h3>
            <p className="text-[0.875rem] text-secondary font-light max-w-sm mx-auto mb-2">
              We are currently planning our next gatherings. Check back soon or
              follow our updates!
            </p>
          </div>
        )}

        <div className="text-center mt-9" data-aos="fade-up">
          <OutlineButton href="/events">See all past events →</OutlineButton>
        </div>
      </div>
    </section>
  );
}
