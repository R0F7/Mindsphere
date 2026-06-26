import React from "react";
import ServiceCard from "./service-card";

interface ServiceCard {
  tag: string;
  title: string;
  body: string;
  link: string;
}

const SERVICES: ServiceCard[] = [
  {
    tag: "Community",
    title: "Peer Support Space",
    body: "A moderated, safe community where teens talk to teens. No judgment. No clinical language. Just honest, human connection with people who actually understand.",
    link: "/community",
  },
  {
    tag: "Tools",
    title: "Self-help Tools",
    body: "Mood trackers, daily check-ins, breathing exercises, journaling prompts — tools designed around how teens actually think and feel, not how textbooks say they should.",
    link: "/support",
  },
  {
    tag: "Resources",
    title: "Resource Library",
    body: "Curated articles, guides, worksheets, and videos — all vetted for accuracy and written in a language that teenagers actually understand and connect with.",
    link: "/resources",
  },
  {
    tag: "Support",
    title: "Volunteer Helpline",
    body: "Trained teen volunteers available to listen — not diagnose, not lecture. Just be there. Plus connections to professional services for those who need more support.",
    link: "/support",
  },
  {
    tag: "Growth",
    title: "Certification Program",
    body: "We train and certify teen peer supporters, giving young people real skills and recognized credentials to support others in their communities.",
    link: "/get-involved",
  },
  {
    tag: "Awareness",
    title: "Global Campaigns",
    body: "Campaigns, events, and collaborations that push teen mental health into the conversation — locally and internationally — breaking the stigma one story at a time.",
    link: "/community",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-white py-20" id="whatwedo">
      <div className="container px-[5%] lg:px-0">
        {/* --- HEADER --- */}
        <div className="text-center max-w-155 mx-auto mb-18" data-aos="fade-up">
          <div className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent mb-2">
            What we do
          </div>
          <h2 className="font-fraunces text-[clamp(1.6rem,3vw,2.4rem)] font-light tracking-tight text-text leading-[1.15] mb-4">
            More than a platform —<br />a{" "}
            <em className="italic text-accent">support system</em>
          </h2>
          <p className="text-[0.875rem] text-t2 leading-[1.7] font-light max-w-125 mx-auto">
            We built Mindsphere around one simple idea: teens need real tools,
            not corporate fluff.
          </p>
        </div>

        {/* --- GRID ROWS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 relative">
          {SERVICES.map((item, i) => (
            <ServiceCard key={i} i={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
