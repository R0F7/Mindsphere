import AboutSection from "../components/about-section";
import BlogSection from "../components/blog-section";
import CollabMarquee from "../components/collab-marquee";
import Contact from "../components/contact-section";
import EventsSection from "../components/events-section";
import FAQ from "../components/faq";
import Hero from "../components/hero";
import JoinCTA from "../components/join-cta";
import Newsletter from "../components/newsletter";
import Testimonials from "../components/testimonials";

export default function Home() {
  const blogs = [
    {
      emoji: "🧠",
      likes: 142,
      comments: 38,
      category: "Mental Health",
      title: "Why talking about anxiety is the first step toward healing",
      avatar: "AS",
      avatarBg: "bg-blue",
      author: "Anika Sharma",
      readTime: "5 min read",
      delay: "0",
    },
    {
      emoji: "🌿",
      likes: 98,
      comments: 21,
      category: "Self-care",
      title: "5 daily habits that genuinely helped my mental wellbeing",
      avatar: "RP",
      avatarBg: "bg-blue",
      author: "Riya Patel",
      readTime: "4 min read",
      delay: "100",
    },
    {
      emoji: "💬",
      likes: 203,
      comments: 57,
      category: "Community",
      title: "Finding your people: how peer support changed everything for me",
      avatar: "LM",
      avatarBg: "bg-[#2b6cb8]",
      author: "Lena Marcus",
      readTime: "6 min read",
      delay: "200",
    },
    {
      emoji: "🌬️",
      likes: 76,
      comments: 14,
      category: "Mindfulness",
      title: "Breathing through the hard moments — a beginner's guide",
      avatar: "ST",
      avatarBg: "bg-accent",
      author: "Sam Torres",
      readTime: "3 min read",
      delay: "0",
    },
    {
      emoji: "🔥",
      likes: 189,
      comments: 44,
      category: "Awareness",
      title: "Understanding teen burnout and what we can actually do about it",
      avatar: "PN",
      avatarBg: "bg-navy",
      author: "Dr. Priya Nair",
      readTime: "7 min read",
      delay: "100",
    },
    {
      emoji: "✨",
      likes: 317,
      comments: 82,
      category: "Stories",
      title: "From feeling invisible to finding a voice — my Mindsphere story",
      avatar: "AN",
      avatarBg: "bg-secondary",
      author: "Anonymous",
      readTime: "8 min read",
      delay: "200",
    },
  ];

  return (
    <>
      <Hero />
      <AboutSection />
      <BlogSection title="Our Blogs" blogs={blogs}/>
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
