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
    dept: "core",
    bg: "#0D1F3C",
  },
  {
    name: "Omar Bakr",
    role: "Operations Manager",
    dept: "core",
    bg: "#1E4D8C",
  },
  { name: "Anika Sharma", role: "HR Lead", dept: "authorities", bg: "#1A3560" },
  { name: "Jin Park", role: "People Partner", dept: "authorities", bg: "#2B6CB8" },
  { name: "Mia Chen", role: "Lead Writer", dept: "authorities", bg: "#0D1F3C" },
  { name: "Leo Rivera", role: "Blog Editor", dept: "authorities", bg: "#1E4D8C" },
  {
    name: "Zara Ahmed",
    role: "Community Manager",
    dept: "authorities",
    bg: "#1A3560",
  },
  {
    name: "Eli Johnson",
    role: "Outreach Lead",
    dept: "authorities",
    bg: "#2B6CB8",
  },
  { name: "Tara Singh", role: "Video Creator", dept: "authorities", bg: "#0D1F3C" },
  {
    name: "Noa Kim",
    role: "Content Strategist",
    dept: "content",
    bg: "#1E4D8C",
  },
  { name: "Isla Davis", role: "UI Designer", dept: "authorities", bg: "#1A3560" },
  {
    name: "Marco Rossi",
    role: "Brand Designer",
    dept: "design",
    bg: "#2B6CB8",
  },
  { name: "Jess Wu", role: "Marketing Lead", dept: "authorities", bg: "#0D1F3C" },
  {
    name: "Dani Cruz",
    role: "Growth Analyst",
    dept: "authorities",
    bg: "#1E4D8C",
  },
  { name: "Ray Okonkwo", role: "Media Producer", dept: "executive", bg: "#1A3560" },
  { name: "Sofia Molina", role: "Photographer", dept: "executive", bg: "#2B6CB8" },
  { name: "Kai Tanaka", role: "Events Manager", dept: "executive", bg: "#0D1F3C" },
  {
    name: "Nia Osei",
    role: "Event Coordinator",
    dept: "executive",
    bg: "#1E4D8C",
  },
  { name: "Dev Sharma", role: "Lead Developer", dept: "executive", bg: "#1A3560" },
  { name: "Alex Petrov", role: "Backend Engineer", dept: "executive", bg: "#2B6CB8" },
];

const DEPARTMENTS = [
  { id: "core", label: "Core" },
  { id: "authorities", label: "Authorities" },
  { id: "executive", label: "Executive" },
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
              <div key={i} data-aos="fade-up" data-aos-delay={200 + i * 50}>
                <div className="border border-border p-1.5 rounded-4xl shadow-[0_8px_30px_rgb(13,31,60,0.04)]">
                  <div className="h-60 border border-border rounded-4xl flex items-center justify-center">
                    <div className="font-fraunces text-[3rem] font-light text-blue opacity-[0.25] select-none uppercase">
                      {getInitials(member.name)}
                    </div>
                  </div>
                  <div className="ml-3.5 mt-3 mb-4">
                    <h4 className="font-fraunces text-[1rem] font-normal text-text">
                      {member.name}
                    </h4>
                    <p className="text-[0.78rem] text-t2 font-light uppercase tracking-wider">
                      {member.role}
                    </p>
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
