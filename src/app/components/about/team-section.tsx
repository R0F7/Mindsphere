"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Member {
  name: string;
  role: string;
  dept: string;
  bg: string;
}

const MEMBERS: Member[] = [
  { name: "Arjun Singh", role: "Founder & CEO", dept: "core", bg: "#0D1F3C" },
  { name: "Riya Patel", role: "Co-founder & COO", dept: "core", bg: "#1A3560" },
  { name: "Lena Marcus", role: "Head of Design", dept: "core", bg: "#1E4D8C" },
  { name: "Sam Torres", role: "Head of Content", dept: "core", bg: "#2B6CB8" },
  {
    name: "Priya Nair",
    role: "Chief Advisor",
    dept: "administration",
    bg: "#0D1F3C",
  },
  {
    name: "Omar Bakr",
    role: "Operations Manager",
    dept: "administration",
    bg: "#1E4D8C",
  },
  { name: "Anika Sharma", role: "HR Lead", dept: "hr", bg: "#1A3560" },
  { name: "Jin Park", role: "People Partner", dept: "hr", bg: "#2B6CB8" },
  { name: "Mia Chen", role: "Lead Writer", dept: "writing", bg: "#0D1F3C" },
  { name: "Leo Rivera", role: "Blog Editor", dept: "writing", bg: "#1E4D8C" },
  {
    name: "Zara Ahmed",
    role: "Community Manager",
    dept: "communication",
    bg: "#1A3560",
  },
  {
    name: "Eli Johnson",
    role: "Outreach Lead",
    dept: "communication",
    bg: "#2B6CB8",
  },
  { name: "Tara Singh", role: "Video Creator", dept: "content", bg: "#0D1F3C" },
  {
    name: "Noa Kim",
    role: "Content Strategist",
    dept: "content",
    bg: "#1E4D8C",
  },
  { name: "Isla Davis", role: "UI Designer", dept: "design", bg: "#1A3560" },
  {
    name: "Marco Rossi",
    role: "Brand Designer",
    dept: "design",
    bg: "#2B6CB8",
  },
  { name: "Jess Wu", role: "Marketing Lead", dept: "marketing", bg: "#0D1F3C" },
  {
    name: "Dani Cruz",
    role: "Growth Analyst",
    dept: "marketing",
    bg: "#1E4D8C",
  },
  { name: "Ray Okonkwo", role: "Media Producer", dept: "media", bg: "#1A3560" },
  { name: "Sofia Molina", role: "Photographer", dept: "media", bg: "#2B6CB8" },
  { name: "Kai Tanaka", role: "Events Manager", dept: "events", bg: "#0D1F3C" },
  {
    name: "Nia Osei",
    role: "Event Coordinator",
    dept: "events",
    bg: "#1E4D8C",
  },
  { name: "Dev Sharma", role: "Lead Developer", dept: "it", bg: "#1A3560" },
  { name: "Alex Petrov", role: "Backend Engineer", dept: "it", bg: "#2B6CB8" },
];

const DEPARTMENTS = [
  { id: "core", label: "Core" },
  { id: "administration", label: "Administration" },
  { id: "hr", label: "HR" },
  { id: "writing", label: "Writing" },
  { id: "communication", label: "Communication" },
  { id: "content", label: "Content Creation" },
  { id: "design", label: "Visual Design" },
  { id: "marketing", label: "Marketing" },
  { id: "media", label: "Media" },
  { id: "events", label: "Events" },
  { id: "it", label: "IT" },
];

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState("core");
  const filteredMembers = MEMBERS.filter((m) => m.dept === activeTab);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2);
  };

  return (
    <section className="bg-white py-20" id="team">
      <div className="container px-[5%] lg:px-0">
        {/* --- HEADER --- */}
        <div
          className="flex flex-wrap items-end justify-between gap-5 mb-9"
          data-aos="fade-up"
        >
          <div>
            <div className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent mb-2">
              The people
            </div>
            <h2 className="font-fraunces text-[clamp(1.8rem,3vw,2.5rem)] font-light text-text tracking-[-0.02em] leading-[1.2] m-0">
              Built by teens,{" "}
              <em className="italic opacity-60">for every teen</em>
            </h2>
          </div>
          <Link
            href="/get-involved"
            className="inline-flex items-center px-6 py-3 rounded-full border border-bd2 text-[0.85rem] font-medium text-text transition-all hover:bg-navy hover:text-white"
          >
            Join our team →
          </Link>
        </div>

        {/* --- TABS BAR --- */}
        <div
          className="flex flex-wrap gap-1 p-1.5 bg-soft-grey rounded-md lg:rounded-full mb-12 overflow-x-auto scrollbar-hide"
          data-aos="fade-up"
        >
          {DEPARTMENTS.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveTab(dept.id)}
              className={`text-[0.78rem] px-4 py-2 rounded-full transition-all duration-220 whitespace-nowrap
                ${
                  activeTab === dept.id
                    ? "bg-white text-text font-medium shadow-sh1"
                    : "text-t2 hover:text-text"
                }`}
            >
              {dept.label}
            </button>
          ))}
        </div>

        {/* --- TEAM GRID --- */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          data-aos="fade-up"
        >
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group bg-white border border-border rounded-xl overflow-hidden shadow-sh1 transition-all duration-300 hover:-translate-y-1.25 hover:shadow-sh3"
              >
                {/* Photo Area */}
                <div className="aspect-3/4 bg-linear-to-br from-soft-grey to-accent-light relative flex items-center justify-center overflow-hidden">
                  <div className="font-fraunces text-[3rem] font-light text-blue opacity-[0.25] select-none uppercase">
                    {getInitials(member.name)}
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-[18px_18px_20px] text-center border-t border-border">
                  <div className="font-fraunces text-[1rem] font-normal text-text mb-1">
                    {member.name}
                  </div>
                  <div className="text-[0.78rem] text-t3 font-light uppercase tracking-wider">
                    {member.role}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-15 font-fraunces text-[1.2rem] font-light italic text-t3">
              No members in this department yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
