import AboutSection from "./components/about-section";
import BlogSection from "./components/blog-section";
import CollabMarquee from "./components/collab-marquee";
import Contact from "./components/contact-section";
import EventsSection from "./components/events-section";
import FAQ from "./components/faq";
import Hero from "./components/hero";
import JoinCTA from "./components/join-cta";
import Newsletter from "./components/newsletter";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <>
      <Hero/>
      <AboutSection/>
      <BlogSection />
      <EventsSection />
      <Testimonials />
      <JoinCTA />
      <FAQ />
      <CollabMarquee />
      <Contact />
      <Newsletter />
    </>
  );
}
