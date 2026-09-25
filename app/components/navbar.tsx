
"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-24px)] max-w-5xl -translate-x-1/2 sm:top-6 sm:w-[calc(100%-32px)]">
      <div
        className={`rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-500 sm:rounded-full sm:px-5 ${
          scrolled
            ? "border-white/15 bg-black/60 shadow-2xl shadow-black/20"
            : "border-white/10 bg-white/5"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={closeMenu}
            className="text-sm font-semibold tracking-tight text-white"
          >
            Build<span className="text-white/40">With</span>Mayank
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a
              href="#about"
              className="transition-colors duration-300 hover:text-white"
            >
              About
            </a>

            <a
              href="#projects"
              className="transition-colors duration-300 hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition-colors duration-300 hover:text-white"
            >
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/resume.pdf"
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              Resume ↗
            </a>

            <a
              href="mailto:gorshimayank@gmail.com"
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-colors hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className="text-lg leading-none">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`grid transition-all duration-300 md:hidden ${
            menuOpen
              ? "mt-4 grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-white/10 pt-4">
              <div className="flex flex-col gap-1">
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-3 text-sm text-white/60 transition-colors hover:bg-white/[0.04] hover:text-white"
                >
                  About
                </a>

                <a
                  href="#projects"
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-3 text-sm text-white/60 transition-colors hover:bg-white/[0.04] hover:text-white"
                >
                  Projects
                </a>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-3 text-sm text-white/60 transition-colors hover:bg-white/[0.04] hover:text-white"
                >
                  Contact
                </a>

                <a
                  href="mailto:gorshimayank@gmail.com"
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-3 text-sm text-white/60 transition-colors hover:bg-white/[0.04] hover:text-white"
                >
                  gorshimayank@gmail.com
                </a>

                <a
                  href="/resume.pdf"
                  onClick={closeMenu}
                  className="mt-2 rounded-xl border border-white/10 px-3 py-3 text-sm text-white/60 transition-colors hover:border-white/20 hover:text-white"
                >
                  Resume ↗
                </a>

                <a
                  href="mailto:gorshimayank@gmail.com"
                  onClick={closeMenu}
                  className="rounded-xl bg-white px-3 py-3 text-center text-sm font-medium text-black"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}