import PrimaryButton from "../primary-button";
import OutlineButton from "../outline-button";

export default function GuestMoodSection() {
  const previewMoods = [
    { emoji: "😊", label: "Happy" },
    { emoji: "😌", label: "Calm" },
    { emoji: "😰", label: "Anxious" },
    { emoji: "😢", label: "Sad" },
    { emoji: "😤", label: "Angry" },
    { emoji: "😴", label: "Tired" },
    { emoji: "🤩", label: "Excited" },
    { emoji: "😕", label: "Confused" },
    { emoji: "😐", label: "Okay" },
    { emoji: "🥰", label: "Grateful" },
  ];

  return (
    <section
      className="bg-off w-full px-4 md:px-[5%] py-20 overflow-hidden"
      id="mood"
    >
      {/* ── SECTION INNER CONTAINER ── */}
      <div className="mx-auto container w-full">
        {/* Section Header */}
        <div className="max-w-155 mb-14" data-aos="fade-up">
          <div className="text-[0.75rem] font- tracking-widest text-accent uppercase mb-2">
            Daily ritual
          </div>
          <h2 className="font-fraunces text-[clamp(2rem,4vw,2.5rem)] font-light text-text leading-tight mb-3">
            Mood{" "}
            <em className="italic font-light text-accent font-fraunces">
              Tracker
            </em>
          </h2>
          <p className="text-t2 text-[0.95rem] font-light leading-relaxed">
            Track your daily mood to discover patterns, build self-awareness,
            and watch your emotional wellbeing grow over time.
          </p>
        </div>

        {/* ── GUEST LAYOUT GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full">
          {/* ── LEFT: LOCKED PREVIEW CARD ── */}
          <div
            className="relative bg-white border border-bd rounded-2xl p-8 shadow-sm flex flex-col overflow-hidden"
            data-aos="fade-up"
          >
            {/* Faded Non-interactive Mood Options */}
            <div className="grid grid-cols-5 gap-2 mb-4 pointer-events-none blur-[1px] opacity-40">
              {previewMoods.map((mood, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-1.5 py-3 px-1.5 bg-off border-2 border-bd rounded-xl"
                >
                  <span className="text-2xl">{mood.emoji}</span>
                  <span className="text-[0.62rem] font-medium text-t3 text-center">
                    {mood.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Faded Note and Button Placeholders */}
            <div className="w-full h-17.5 bg-off border border-bd rounded-xl pointer-events-none opacity-30" />
            <div className="w-35 h-10.5 bg-soft rounded-full opacity-30 mt-3" />

            {/* Frosted Lock Overlay (Adapts dynamically to light/dark themes) */}
            <div className="absolute inset-0 bg-[rgba(247,249,252,0.82)] dark:bg-[rgba(10,15,26,0.82)] backdrop-blur-xs rounded-2xl flex flex-col items-center justify-center gap-3 z-20 p-6">
              <div className="text-3xl mb-1">🔒</div>
              <h3 className="font-fraunces text-[1.1rem] font-light text-text text-center mb-1">
                Log in to track your mood
              </h3>
              <p className="text-[0.82rem] text-t2 font-light text-center leading-relaxed max-w-60">
                Create a free account to start logging your mood daily and see
                your trends over time.
              </p>

              <div className="flex items-center gap-2 flex-wrap justify-center mt-1">
                <PrimaryButton
                  href="/login"
                  className="text-[0.82rem] px-4.5 py-2"
                >
                  Log in
                </PrimaryButton>
                <OutlineButton
                  href="/signup"
                  className="text-[0.82rem] px-4.5 py-2"
                >
                  Sign up free
                </OutlineButton>
              </div>
            </div>
          </div>

          {/* ── RIGHT: BENEFITS CARD ── */}
          <div
            className="bg-white border border-bd rounded-2xl p-8 shadow-sm flex flex-col justify-between"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="mb-6">
              <h3 className="font-fraunces text-[1.1rem] font-light text-text mb-1.5">
                What you get with Mood Tracker
              </h3>
              <p className="text-[0.82rem] text-t2 font-light leading-relaxed">
                Log in to unlock your personal mental wellness dashboard.
              </p>
            </div>

            {/* Sample Faded Analytics Chart */}
            <div className="mb-5 opacity-55 pointer-events-none w-full">
              <div className="flex items-end gap-1.5 h-12 mb-1">
                <div className="flex-1 rounded-t bg-accent h-[70%] opacity-60" />
                <div className="flex-1 rounded-t bg-warning h-[45%] opacity-40" />
                <div className="flex-1 rounded-t bg-[#6366F1] h-[30%] opacity-35" />
                <div className="flex-1 rounded-t bg-accent h-[55%] opacity-50" />
                <div className="flex-1 rounded-t bg-success h-[85%] opacity-70" />
                <div className="flex-1 rounded-t bg-accent h-[75%] opacity-65" />
                <div className="flex-1 rounded-t bg-success h-[90%] opacity-75" />
              </div>
              <div className="flex gap-1.5">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                  (day) => (
                    <div
                      key={day}
                      className="flex-1 text-[0.6rem] text-t3 text-center"
                    >
                      {day}
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-4 mb-7">
              {/* Feature 1 */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center text-[1.1rem] shrink-0">
                  📊
                </div>
                <div>
                  <h4 className="text-[0.88rem] font-medium text-text mb-0.5">
                    7-day mood trends
                  </h4>
                  <p className="text-[0.78rem] text-t2 font-light leading-normal">
                    See how your mood fluctuates over the week with a visual
                    chart you can actually understand.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center text-[1.1rem] shrink-0">
                  🔥
                </div>
                <div>
                  <h4 className="text-[0.88rem] font-medium text-text mb-0.5">
                    Daily streak tracker
                  </h4>
                  <p className="text-[0.78rem] text-t2 font-light leading-normal">
                    Build the habit of daily check-ins and watch your streak
                    grow — consistency is everything.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center text-[1.1rem] shrink-0">
                  📝
                </div>
                <div>
                  <h4 className="text-[0.88rem] font-medium text-text mb-0.5">
                    Personal mood notes
                  </h4>
                  <p className="text-[0.78rem] text-t2 font-light leading-normal">
                    Add a daily note alongside your mood to capture what's
                    really going on beneath the surface.
                  </p>
                </div>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="flex gap-2.5 flex-wrap">
              <PrimaryButton
                href="/signup"
                className="text-[0.88rem] px-5 py-2.5"
              >
                Create free account →
              </PrimaryButton>
              <OutlineButton
                href="/login"
                className="text-[0.88rem] px-5 py-2.5"
              >
                Already have an account
              </OutlineButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
