import Link from "next/link";

export default function JoinCTA() {
  return (
    <section className="bg-navy dark:bg-soft-grey py-25 px-[5%] relative overflow-hidden transition-colors duration-300">
      
      {/* --- CENTER GLOWING ORB --- */}
      <div className="absolute w-125 h-125 rounded-full pointer-events-none filter blur-[90px] bg-[rgba(59,130,196,0.15)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-175 mx-auto text-center relative z-1">
        
        {/* --- LABEL --- */}
        <div 
          className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-[rgba(255,255,255,0.4)] dark:text-accent mb-5"
          data-aos="fade-up"
        >
          ✦ Get involved
        </div>

        {/* --- TITLE --- */}
        <h2 
          className="font-fraunces text-[clamp(2rem,5vw,3.5rem)] font-light text-white dark:text-text tracking-tight leading-[1.1] mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          This is your space <em className="italic opacity-60">too.</em>
        </h2>

        {/* --- BODY --- */}
        <p 
          className="text-[1rem] text-[rgba(255,255,255,0.55)] dark:text-(--text-2) leading-[1.75] font-light max-w-125 mx-auto mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Whether you want support, want to volunteer, want to write for the blog, or just
          want to belong somewhere real — Mindsphere has a place for you.
        </p>

        {/* --- BUTTONS --- */}
        <div 
          className="flex flex-wrap gap-3.5 justify-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Link 
            href="/get-involved" 
            className="bg-white dark:bg-accent text-navy dark:text-white px-8 py-3.5 rounded-full font-dm-sans text-[0.95rem] font-medium inline-flex items-center gap-2 transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(255,255,255,0.15)]"
          >
            Join the waitlist →
          </Link>
          
          <Link 
            href="/get-involved#contact" 
            className="border border-[rgba(255,255,255,0.2)] dark:border-border text-[rgba(255,255,255,0.65)] dark:text-t2 px-7 py-3.5 rounded-full font-dm-sans text-[0.95rem] font-normal transition-all duration-250 hover:border-[rgba(255,255,255,0.5)] dark:hover:border-(--text-3) hover:text-white dark:hover:text-text"
          >
            Contact us
          </Link>
        </div>

      </div>
    </section>
  );
}