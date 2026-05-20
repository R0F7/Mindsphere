import Hero from "../components/about/hero";
import ImpactSection from "../components/about/impactSection";
import JoinCTA from "../components/about/join-cta";
import OurVision from "../components/about/our-vision";
import Story from "../components/about/story";
import TeamSection from "../components/about/team-section";
import WhatWeDo from "../components/about/what-we-do";

export default function About() {
  return (
    <>
      <Hero />
      <Story />
      <WhatWeDo />
      <ImpactSection />
      <OurVision />
      <TeamSection />
      <JoinCTA />
    </>
  );
}
