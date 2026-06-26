"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 12);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!mounted) return null;

  const isDarkMode = resolvedTheme === "dark";

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-1000 px-6 transition-all duration-400 ease-in-out ${
          hidden ? "translate-y-[-110%]" : "translate-y-0"
        }`}
      >
        <div
          className={`mx-auto flex container items-center justify-between  w-full transition-all duration-400 ease-in-out ${
            scrolled
              ? "translate-y-2.5 rounded-full bg-primary md:bg-[rgba(13,31,60,0.88)] px-6 py-3 shadow-[0_8px_32px_rgba(13,31,60,0.25)] backdrop-blur-xl"
              : "px-7 py-4.5"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`font-['Fraunces',serif] text-[1.2rem] font-semibold tracking-[-0.02em] transition-colors duration-300 ${
              scrolled
                ? "text-white md:text-[#fff]"
                : menuOpen
                  ? "text-white md:text-primary"
                  : "text-primary"
            }`}
          >
            Mind<span className="text-accent">sphere</span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-8 list-none md:flex flex-1 justify-center">
            {["Home", "Support", "Community", "Resources", "About"].map(
              (item) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                const isActive = pathname === path;

                return (
                  <li key={item}>
                    <Link
                      href={path}
                      className={`relative text-[0.875rem] font-normal transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-250 hover:after:scale-x-1 ${
                        scrolled
                          ? `${isActive ? "text-[rgba(255,255,255)] after:scale-x-1 font-semibold" : "text-[rgba(255,255,255,0.7)]"} hover:text-white`
                          : `hover:text-primary ${isActive ? "text-primary after:scale-x-1 font-semibold" : "text-secondary"}`
                      }`}
                    >
                      {item}
                    </Link>
                  </li>
                );
              },
            )}
          </ul>

          {/* Right Controls (Theme + CTA Button) */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border bg-transparent text-[0.95rem] transition-all duration-200 ${
                scrolled
                  ? "border-[rgba(255,255,255,0.2)] text-[rgba(255,255,255,0.7)] hover:bg-white/10 hover:text-white"
                  : "border-strong text-secondary hover:bg-soft-grey hover:text-text-primary"
              }`}
              onClick={() => setTheme(isDarkMode ? "light" : "dark")}
              title="Toggle theme"
            >
              {isDarkMode ? "☾" : "☀"}
            </button>

            <Link
              href="/get-involved"
              className={`rounded-full px-5.5 py-2.5 text-[0.85rem] font-medium transition-all duration-200 hover:-translate-y-px hover:opacity-85 ${
                scrolled ? "bg-accent text-white" : "bg-navy text-white"
              }`}
            >
              Get Involved
            </Link>
          </div>

          <div className="relative">
            <button
              className={`absolute  flex top-1 right-11 h-8 w-8 items-center justify-center rounded-full border border-navy/20 bg-transparent text-xl text-navy/80 md:hidden ${(menuOpen || scrolled) && "text-white border-white"}`}
              onClick={() => setTheme(isDarkMode ? "light" : "dark")}
            >
              {isDarkMode ? "☾" : "☀"}
            </button>

            {/* Hamburger Menu Toggle Button */}
            <button
              className="flex h-9 w-9 cursor-pointer flex-col items-center justify-center gap-1.25 border-none bg-transparent p-1 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span
                className={`block h-0.5 w-5.5 rounded-xs transition-all duration-300 origin-center ${
                  scrolled ? "bg-white" : "bg-primary"
                } ${menuOpen ? "bg-white translate-y-1.75 rotate-45" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-5.5 rounded-xs transition-all duration-300 ${
                  scrolled ? "bg-white" : "bg-primary"
                } ${menuOpen ? "bg-white scale-x-0 opacity-0" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-5.5 rounded-xs transition-all duration-300 origin-center ${
                  scrolled ? "bg-white" : "bg-primary"
                } ${menuOpen ? "bg-white -translate-y-1.75 -rotate-45" : ""}`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed md:hidden inset-0 z-999 flex flex-col items-center justify-center gap-2 bg-primary backdrop-blur-[20px] transition-all duration-350 ease-in-out ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {["Home", "Support", "Community", "Resources", "About"].map((item) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
          const isActive = pathname === path;

          return (
            <Link
              key={item}
              href={path}
              className={`font-['Fraunces',serif] text-2xl font-light ${isActive ? "text-white font-medium after:scale-x-1" : "text-white/80"}  py-3 transition-colors duration-200 hover:text-white`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          );
        })}

        <Link
          href="/get-involved"
          className="mt-6 rounded-full bg-accent px-10 py-3.5 text-base font-medium text-white transition-all duration-200"
          onClick={() => setMenuOpen(false)}
        >
          Get Involved
        </Link>
      </div>
    </>
  );
}
