import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      label: "Platform",
      links: [
        { label: "Support Tools", href: "/support" },
        { label: "Mood Tracker", href: "/support#mood" },
        { label: "Initial Screening", href: "/support#screening" },
        { label: "Helpline", href: "/support#helpline" },
        { label: "Resources", href: "/resources" },
      ],
    },
    {
      label: "Community",
      links: [
        { label: "Community Hub", href: "/community" },
        { label: "Blog", href: "/blog" },
        { label: "Events", href: "/events" },
        { label: "Discord", href: "/community#discord" },
        { label: "Facebook Group", href: "/community#facebook" },
      ],
    },
    {
      label: "Organization",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/about#team" },
        { label: "Get Involved", href: "/get-involved" },
        { label: "Verify Certificate", href: "/get-involved#cert" },
        { label: "Contact", href: "/get-involved#contact" },
      ],
    },
  ];

  const socialLinks = [
    { label: "ig", title: "Instagram", href: "#" },
    { label: "tw", title: "Twitter", href: "#" },
    { label: "in", title: "LinkedIn", href: "#" },
    { label: "dc", title: "Discord", href: "#" },
    { label: "fb", title: "Facebook", href: "#" },
  ];

  return (
    <footer className="bg-footer pt-18 pb-8 px-[5%] transition-colors duration-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12 mb-14">
          <div className="flex flex-col">
            <div className="font-['Fraunces',serif] text-[1.2rem] font-semibold text-white tracking-[-0.02em] mb-3">
              Mind<span className="text-accent">sphere</span>
            </div>
            <p className="text-[0.82rem] text-[rgba(255,255,255,0.45)] font-light leading-[1.65] max-w-55 mb-6">
              Teens for teens — you are not alone. A mental wellness platform
              built with genuine care.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  title={social.title}
                  className="w-8.5 h-8.5 rounded-full border border-[rgba(255,255,255,0.12)] flex items-center justify-center text-[rgba(255,255,255,0.5)] text-[0.75rem] transition-all duration-200 hover:border-[rgba(255,255,255,0.4)] hover:text-white hover:bg-[rgba(255,255,255,0.07)]"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {sections.map((section, idx) => (
            <div key={idx}>
              <div className="text-[0.7rem] font-medium tracking-[0.12em] uppercase text-[rgba(255,255,255,0.35)] mb-4">
                {section.label}
              </div>
              <div className="flex flex-col gap-2">
                {section.links.map((link, linkIdx) => (
                  <Link
                    key={linkIdx}
                    href={link.href}
                    className="text-[0.83rem] text-[rgba(255,255,255,0.55)] font-light transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-7 border-t border-[rgba(255,255,255,0.07)] flex-wrap gap-3">
          <div className="text-[0.78rem] text-[rgba(255,255,255,0.3)] font-light order-2 sm:order-1">
            © {currentYear} Mindsphere. All rights reserved.
          </div>
          <div className="flex gap-5 order-1 sm:order-2">
            <Link
              href="/privacy"
              className="text-[0.78rem] text-[rgba(255,255,255,0.3)] transition-colors duration-200 hover:text-[rgba(255,255,255,0.6)]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[0.78rem] text-[rgba(255,255,255,0.3)] transition-colors duration-200 hover:text-[rgba(255,255,255,0.6)]"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-[0.78rem] text-[rgba(255,255,255,0.3)] transition-colors duration-200 hover:text-[rgba(255,255,255,0.6)]"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
