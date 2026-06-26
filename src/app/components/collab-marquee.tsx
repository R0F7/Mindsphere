export default function CollabMarquee() {
  const partners = [
    "Youth Mental Health Foundation",
    "Teen Minds Collective",
    "Wellbeing Alliance",
    "Safe Space Network",
    "MindBridge Initiative",
    "The Resilience Project",
    "OpenHeart NGO",
    "Global Youth Voices",
  ];

  return (
    <section className="bg-white border-t border-b border-border py-16 overflow-hidden">
      <div className="text-center text-[0.72rem] font-medium tracking-[0.14em] uppercase text-muted mb-9">
        Organizations & partners who believe in our mission
      </div>
      
      <div className="relative overflow-hidden mask-[linear-gradient(90deg,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex items-center w-max animate-[marquee_22s_linear_infinite]">
          {[...partners, ...partners].map((partner, idx) => (
            <span
              key={idx}
              className="flex items-center gap-3 px-9 font-['Fraunces',serif] text-[1.1rem] font-light italic text-muted whitespace-nowrap transition-colors duration-200 hover:text-primary cursor-pointer"
            >
              {partner}
              <span className="w-1.2 h-1.2 rounded-full bg-borderStrong shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}