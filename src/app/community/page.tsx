import BlogSection from "../components/blog-section";
import Event from "../components/community/event";
import FindUs from "../components/community/find-us";
import GuideSection from "../components/community/guide-section";
import Hero from "../components/community/hero";
import HowToJoin from "../components/community/how-join";
import JoinCTA from "../components/community/join-cta";

export default function Community() {
  const blogs = [
    {
      emoji: "🌱",
      likes: 94,
      comments: 22,
      category: "Mental Health",
      title: `The Power of Saying "I'm Not Okay"`,
      avatar: "SJ",
      avatarBg: "bg-navy",
      author: "Sarah J.",
      readTime: "3 min read",
      delay: "0",
    },

    {
      emoji: "🎵",
      likes: 67,
      comments: 15,
      category: "Community",
      title: "Finding Peace in the Noise",
      avatar: "ME",
      avatarBg: "bg-blue",
      author: "Marcus E.",
      readTime: "4 min read",
      delay: "100",
    },

    {
      emoji: "🤝",
      likes: 118,
      comments: 31,
      category: "Support",
      title: "Building Your Support System from Scratch",
      avatar: "LY",
      avatarBg: "bg-[#2B6CB8]",
      author: "Lily Y.",
      readTime: "5 min read",
      delay: "200",
    },
  ];

  return (
    <>
      <Hero />
      <FindUs />
      <HowToJoin />
      <Event />
      <BlogSection title="Voices from the Community" blogs={blogs} />
      <GuideSection/>
      <JoinCTA/>
    </>
  );
}
