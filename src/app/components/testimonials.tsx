export default function Testimonials() {
  const row1Testimonials = [
    {
      quote:
        "I didn't think anyone would understand what I was going through. Mindsphere showed me I wasn't alone — and that changed everything.",
      name: "Jiya K.",
      role: "Community member, 16",
      avatar: "JK",
      bg: "bg-[#0D1F3C]",
    },
    {
      quote:
        "The mood tracker helped me see patterns I never noticed. Finally a tool that actually works for how teens think.",
      name: "Rahul S.",
      role: "Volunteer, 18",
      avatar: "RS",
      bg: "bg-[#1E4D8C]",
    },
    {
      quote:
        "What makes Mindsphere special is that it was made by someone who gets it. Not a corporation. Real teens who care.",
      name: "Aliya M.",
      role: "Member, 17",
      avatar: "AM",
      bg: "bg-[#2B6CB8]",
    },
    {
      quote:
        "The self check-in feature is something I do every morning now. It genuinely helps me start the day with more clarity.",
      name: "Karan P.",
      role: "Member, 15",
      avatar: "KP",
      bg: "bg-[#3B82C4]",
    },
    {
      quote:
        "I recommended Mindsphere to my whole friend group. It's the kind of space we didn't know we needed until we found it.",
      name: "Sara N.",
      role: "Member, 16",
      avatar: "SN",
      bg: "bg-[#1A3560]",
    },
  ];

  const row2Testimonials = [
    {
      quote:
        "The breathing exercises in the self-help section are genuinely calming. I use them before exams every time now.",
      name: "Maya T.",
      role: "Member, 17",
      avatar: "MT",
      bg: "bg-[#0D1F3C]",
    },
    {
      quote:
        "I finally did the initial screening and the results gave me the nudge I needed to talk to someone professional.",
      name: "Zaid A.",
      role: "Member, 18",
      avatar: "ZA",
      bg: "bg-[#1E4D8C]",
    },
    {
      quote:
        "The community space is like having a group of friends who always listen — no matter the time, no matter what you're going through.",
      name: "Priya L.",
      role: "Volunteer, 19",
      avatar: "PL",
      bg: "bg-[#2B6CB8]",
    },
    {
      quote:
        "As someone who struggled to open up, the anonymous options here made all the difference. I felt safe from day one.",
      name: "Anonymous",
      role: "Community member",
      avatar: "AN",
      bg: "bg-[#3B82C4]",
    },
    {
      quote:
        "Mindsphere's blog has some of the best mental health writing I've read — and it's all written by people my age.",
      name: "Oliver B.",
      role: "Member, 16",
      avatar: "OB",
      bg: "bg-[#1A3560]",
    },
  ];

  return (
    <section className="bg-white w-full py-20 overflow-hidden">
      <div className="mx-auto container px-[5%]">
        <div className="text-center mb-14" data-aos="fade-up">
          <div className="text-xs uppercase tracking-widest text-accent mb-2 font-medium">
            Community voices
          </div>
          {/* <h2 className="font-fraunces text-3xl md:text-4xl font-normal text-primary">
            What teens are{" "}
            <em className="italic font-light text-accent">saying</em>
          </h2> */}
          <h2 className="font-['Fraunces',serif] text-[clamp(2rem,4vw,3rem)] font-light tracking-tight leading-[1.1] text-primary mb-4">
            What teens are <em className="text-accent italic">saying</em>
          </h2>
        </div>
      </div>

      <div className="relative overflow-hidden mask-[linear-gradient(90deg,transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex gap-5 w-max animate-marquee hover:[animation-play-state:paused]">
          {[...row1Testimonials, ...row1Testimonials].map((item, idx) => (
            <div
              key={idx}
              className="w-[320px] shrink-0 bg-off-white border border-border rounded-lg p-6 transition-all duration-300 hover:bg-white hover:shadow-sm hover:-translate-y-0.5"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#F59E0B] text-[0.8rem]">
                    ★
                  </span>
                ))}
              </div>
              <p className="font-['Fraunces',serif] text-[0.95rem] font-light italic text-primary leading-relaxed mb-5">
                <span className="block text-3xl leading-[0.4] text-accent mb-1.5 not-italic font-normal">
                  &ldquo;
                </span>
                {item.quote}
              </p>
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-full ${item.bg} flex items-center justify-center text-[0.72rem] font-medium text-white shrink-0`}
                >
                  {item.avatar}
                </div>
                <div>
                  <div className="text-[0.85rem] font-medium text-primary">
                    {item.name}
                  </div>
                  <div className="text-[0.75rem] text-muted font-light">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden mask-[linear-gradient(90deg,transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)] mt-5">
        <div className="flex gap-5 w-max animate-[marquee_25s_linear_infinite_reverse] hover:[animation-play-state:paused]">
          {[...row2Testimonials, ...row2Testimonials].map((item, idx) => (
            <div
              key={idx}
              className="w-[320px] shrink-0 bg-off-white border border-border rounded-lg p-6 transition-all duration-300 hover:bg-white hover:shadow-sm hover:-translate-y-0.5"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#F59E0B] text-[0.8rem]">
                    ★
                  </span>
                ))}
              </div>
              <p className="font-['Fraunces',serif] text-[0.95rem] font-light italic text-primary leading-relaxed mb-5">
                <span className="block text-3xl leading-[0.4] text-accent mb-1.5 not-italic font-normal">
                  &ldquo;
                </span>
                {item.quote}
              </p>
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-full ${item.bg} flex items-center justify-center text-[0.72rem] font-medium text-white shrink-0`}
                >
                  {item.avatar}
                </div>
                <div>
                  <div className="text-[0.85rem] font-medium text-primary">
                    {item.name}
                  </div>
                  <div className="text-[0.75rem] text-muted font-light">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
