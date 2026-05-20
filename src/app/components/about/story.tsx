"use client";

import React from "react";
import Link from "next/link";

export default function Story() {
  // Smooth scroll handler replacing the inline `smoothTo` function
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-off-white py-20" id="story">
      {/* Assuming .inner has a standard max-width and padding like your other sections */}
      <div className="container px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          {/* --- LEFT: IMAGE SECTION --- */}
          <div 
            className="relative"
            data-aos="fade-right"
          >
            {/* Main Image Card */}
            <div className="w-full aspect-4/3 bg-[linear-gradient(135deg,var(--soft-grey),var(--accent-light))] rounded-xl overflow-hidden border border-border relative flex items-center justify-center">
              
              {/* Image Placeholder */}
              <div className="flex flex-col items-center gap-2.5 text-t3">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-11 h-11 stroke-accent fill-none stroke-[1.3] opacity-40"
                  strokeLinecap="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="text-[0.78rem]">Team photo — about.png</span>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-4.5 -right-4.5 bg-white border border-border rounded-lg py-3.5 px-4.5 shadow-sh3 flex items-center gap-3">
              <div className="w-9.5 h-9.5 rounded-sm bg-accent-light flex items-center justify-center shrink-0">
                <svg 
                  viewBox="0 0 24 24"
                  className="w-4.5 h-4.5 stroke-accent fill-none stroke-[1.6]"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <div className="font-fraunces text-[1.3rem] font-normal text-text leading-none mb-0.5">
                  500+
                </div>
                <div className="text-[0.7rem] text-t3 font-light">
                  Active members
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT: TEXT SECTION --- */}
          <div 
            data-aos="fade-left" 
            data-aos-delay="100"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-accent-light text-accent text-[0.72rem] font-medium py-1.25 px-3.25 rounded-full mb-4.5 border border-[rgba(59,130,196,0.2)]">
              ✦ About our organization
            </div>
            
            {/* Assuming .lbl and .ttl follow the global styles from your previous sections */}
            <div className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent mb-2">
              Our story
            </div>
            
            <h2 className="font-fraunces text-[clamp(1.6rem,3vw,2.4rem)] font-light tracking-tight text-text leading-[1.15] mb-4">
              Born from a<br />
              <em className="italic text-accent">real conversation</em>
            </h2>
            
            <p className="mb-4 text-t2 leading-[1.7]">
              It started simply — a few teens talking about the things nobody wanted to talk about.
              Anxiety before exams. Loneliness in crowded hallways. The weight of pretending everything was fine. We
              looked for a space that felt like us, and we couldn't find one.
            </p>
            
            <p className="mt-3 mb-4 text-t2 leading-[1.7]">
              So we built Mindsphere. Not as a product. As a promise — that no
              teenager should have to navigate their mental health alone, without tools, without community, without
              someone who genuinely gets it.
            </p>
            
            {/* Action Buttons */}
            <div className="flex gap-3 flex-wrap mt-8">
              {/* Preserved your global button classes (btn-p, btn-o) for consistent styling */}
              <Link 
                href="#vision" 
                className="btn-p" 
                onClick={(e) => handleScroll(e, 'vision')}
              >
                Our Vision ↓
              </Link>
              <Link 
                href="#team" 
                className="btn-outline" 
                onClick={(e) => handleScroll(e, 'team')}
              >
                Meet the team
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}