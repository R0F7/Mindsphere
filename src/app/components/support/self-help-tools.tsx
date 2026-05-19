"use client";

import { useState, useEffect } from "react";
import SectionHeader from "./section-header";

interface Tool {
  id: number;
  cat: string;
  icon: string;
  title: string;
  desc: string;
  steps: string[];
}

export default function SelfHelpTools() {
  const TOOL_CATS = [
    { id: "all", label: "All Tools" },
    { id: "anxiety", label: "Anxiety" },
    { id: "stress", label: "Stress" },
    { id: "sleep", label: "Sleep" },
    { id: "overthinking", label: "Overthinking" },
  ];

  const TOOLS: Tool[] = [
    {
      id: 1,
      cat: "anxiety",
      icon: "🌬️",
      title: "4-7-8 Breathing",
      desc: "A powerful breathing technique that activates your parasympathetic nervous system and calms anxiety in minutes.",
      steps: [
        "Find a comfortable position and close your eyes",
        "Breathe in quietly through your nose for 4 seconds",
        "Hold your breath for 7 seconds",
        "Exhale completely through your mouth for 8 seconds",
        "Repeat 3–4 times for best effect",
      ],
    },
    {
      id: 2,
      cat: "anxiety",
      icon: "🌿",
      title: "5-4-3-2-1 Grounding",
      desc: "A sensory grounding technique that pulls you out of anxious thoughts and back into the present moment instantly.",
      steps: [
        "Notice 5 things you can see around you",
        "Identify 4 things you can physically touch",
        "Listen for 3 sounds you can hear",
        "Find 2 things you can smell",
        "Identify 1 thing you can taste",
      ],
    },
    {
      id: 3,
      cat: "stress",
      icon: "💆",
      title: "Progressive Muscle Relaxation",
      desc: "Systematically tense and release muscle groups to release physical tension stored in the body from stress.",
      steps: [
        "Start with your feet — tense them tightly for 5 seconds",
        "Release and notice the sensation for 10 seconds",
        "Move up to calves, thighs, abdomen",
        "Continue through chest, hands, arms, shoulders, face",
        "End with a full body scan and deep breath",
      ],
    },
    {
      id: 4,
      cat: "stress",
      icon: "✍️",
      title: "Expressive Journaling",
      desc: "A structured writing practice that processes difficult emotions and reduces their intensity through externalisation.",
      steps: [
        "Set a timer for 10 minutes",
        "Write continuously about what's stressing you",
        "Don't edit or judge — just let it flow",
        "When done, notice how the emotion has changed",
        "Optional: close the journal or tear up the page",
      ],
    },
    {
      id: 5,
      cat: "sleep",
      icon: "🌙",
      title: "Sleep Wind-Down Routine",
      desc: "A 30-minute pre-sleep protocol that signals to your brain that it's time to rest.",
      steps: [
        "60 mins before bed: put your phone in another room",
        "30 mins: dim lights and do something calming",
        "15 mins: write down any worries or tomorrow's tasks",
        "5 mins: practise slow breathing (4 in, 6 out)",
        "Lie in bed and do a gentle body scan from toes to head",
      ],
    },
    {
      id: 6,
      cat: "sleep",
      icon: "🧘",
      title: "Body Scan Meditation",
      desc: "A guided mindfulness practice that relaxes the body and prepares the mind for deep, restful sleep.",
      steps: [
        "Lie down comfortably and close your eyes",
        "Take 3 deep breaths to settle in",
        "Bring awareness to your feet — notice any tension",
        "Slowly move attention up through each body part",
        "If your mind wanders, gently bring it back",
      ],
    },
    {
      id: 7,
      cat: "overthinking",
      icon: "🧠",
      title: "Cognitive Defusion",
      desc: "A CBT technique that creates distance between you and your thoughts, reducing their emotional power.",
      steps: [
        "Notice the thought that's looping",
        'Add "I\'m having the thought that..." to the front',
        'Then add "I notice I\'m having the thought that..."',
        "Observe the thought from a distance",
        "Remind yourself: you are not your thoughts",
      ],
    },
    {
      id: 8,
      cat: "overthinking",
      icon: "⏱️",
      title: "Worry Time Technique",
      desc: "Schedule a specific 15-minute window for worrying, which prevents anxious thoughts from taking over your day.",
      steps: [
        'Pick a specific 15-minute "worry time" each day',
        "When worries arise outside that time, note them down",
        "At your scheduled time, sit with those worries",
        "After 15 minutes, close the worry list and move on",
        "Over time, your brain learns worrying has a boundary",
      ],
    },
    {
      id: 9,
      cat: "anxiety",
      icon: "🖐️",
      title: "Cold Water Reset",
      desc: "A physiological technique that rapidly reduces anxiety by activating the dive reflex.",
      steps: [
        "Fill a bowl with cold water (or use cold tap water)",
        "Take a deep breath in",
        "Hold cold water on your wrists and back of neck",
        "Or submerge your face for 15–30 seconds if possible",
        "Notice how your heart rate slows and anxiety eases",
      ],
    },
  ];

  const [activeCat, setActiveCat] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  // ── FILTERED TOOLS ──
  const filteredTools =
    activeCat === "all" ? TOOLS : TOOLS.filter((t) => t.cat === activeCat);

  // ── ACTIONS ──
  const openTool = (tool: Tool) => {
    setSelectedTool(tool);
    setIsModalOpen(true);
  };

  const closeTool = () => {
    setIsModalOpen(false);
  };

  // Body scroll lock effect when modal opens
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <section
      className="bg-off dark:bg-dark-bg w-full px-4 md:px-[5%] py-20 overflow-hidden"
      id="tools"
    >
      <div className="mx-auto container w-full">
        {/* ── SECTION HEADER ── */}
        <SectionHeader
          label="Learn & practice"
          title="Self-help"
          accentText="Tools"
          description="Research-backed techniques and exercises — free for everyone, no account required."
        />

        {/* ── CATEGORY FILTER BUTTONS ── */}
        <div
          className="flex items-center gap-1.5 flex-wrap mb-9"
          data-aos="fade-up"
        >
          {TOOL_CATS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`text-[0.82rem] font-normal p-[8px_18px] border rounded-full cursor-pointer transition-all duration-220 select-none
                ${
                  activeCat === cat.id
                    ? "bg-navy text-white border-navy"
                    : "bg-white dark:bg-dark-card border-bd2 text-t2 hover:text-text"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── TOOLS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {filteredTools.map((tool, index) => (
            <div
              key={tool.id}
              onClick={() => openTool(tool)}
              style={
                {
                  transitionDelay: `${index * 0.05}s`,
                  borderColor: "var(--bd)",
                  "--gradient-bg":
                    "linear-gradient(90deg, var(--navy), var(--accent))",
                } as React.CSSProperties
              }
              className="group relative flex flex-col gap-3.5 p-6 bg-white dark:bg-dark-card border rounded-2xl cursor-pointer overflow-hidden select-none
       transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform
       hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(13,31,60,0.08)] dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]
      
       after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.75 
       after:bg-(image:--gradient-bg)
       after:scale-x-0 after:origin-left after:transition-transform after:duration-350 after:ease-in-out
       hover:after:scale-x-1"
              data-aos="fade-up"
            >
              {/* Tool Icon */}
              <div className="w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center text-[1.2rem] shrink-0">
                {tool.icon}
              </div>

              {/* Tool Title */}
              <h3 className="font-fraunces text-base font-normal text-text leading-tight">
                {tool.title}
              </h3>

              {/* Tool Description */}
              <p className="text-[0.82rem] text-t2 font-light leading-relaxed flex-1">
                {tool.desc}
              </p>

              {/* Tool Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-bd mt-1">
                <span className="text-[0.65rem] font-medium tracking-[0.07em] uppercase text-accent bg-accent-light p-[3px_10px] rounded-full">
                  {tool.cat}
                </span>
                <span className="text-[0.8rem] text-t3 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:text-text group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── DYNAMIC TOOL DETAIL MODAL OVERLAY ── */}
      {selectedTool && (
        <div
          onClick={(e) => e.target === e.currentTarget && closeTool()}
          className={`fixed inset-0 z-2000 bg-[rgba(0,0,0,0.5)] backdrop-blur-md flex items-center justify-center p-5 transition-all duration-300 ${
            isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div
            className={`bg-white data-[theme=dark]:bg-dark-card border border-bd rounded-2xl max-w-125 w-full relative overflow-hidden shadow-[0_16px_64px_rgba(13,31,60,0.2)] transition-transform duration-300 p-8 ${
              isModalOpen
                ? "translate-y-0 scale-100"
                : "translate-y-6 scale-[0.97]"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={closeTool}
              className="absolute top-4 right-4 w-7 h-7 rounded-full border border-bd bg-transparent cursor-pointer flex items-center justify-center text-[1.1rem] text-t3 transition-all duration-200 hover:bg-soft hover:text-text z-10"
            >
              ×
            </button>

            {/* Modal Head Info */}
            <div className="flex flex-col mb-6">
              <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center text-2xl mb-3">
                {selectedTool.icon}
              </div>
              <span className="text-[0.65rem] font-medium tracking-wider uppercase text-accent mb-1.5">
                {selectedTool.cat} technique
              </span>
              <h3 className="font-fraunces text-xl font-normal text-text leading-tight mb-2">
                {selectedTool.title}
              </h3>
              <p className="text-[0.88rem] text-t2 font-light leading-relaxed max-w-100">
                {selectedTool.desc}
              </p>
            </div>

            {/* Modal Steps Content */}
            <div className="flex flex-col gap-3 max-h-80 overflow-y-auto pr-1">
              {selectedTool.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-1.5 bg-off dark:bg-dark-bg border border-bd rounded-xl"
                >
                  <div className="w-6 h-6 rounded-full bg-navy text-white text-[0.75rem] font-medium flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-[0.85rem] text-text font-light leading-relaxed pt-0.5">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
