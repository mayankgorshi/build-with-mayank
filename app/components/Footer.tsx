
"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          {/* Brand */}
          <div>
            <p className="text-lg font-medium text-white">
              Build<span className="text-white/30">With</span>Mayank.
            </p>

            <p className="mt-2 text-sm text-white/30">
              Full-Stack Developer
            </p>

            <p className="mt-3 text-sm text-white/20">
              Building digital experiences with code and creativity.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-4 text-sm text-white/40">
            {/* GitHub */}
            <a
              href="https://github.com/mayankgorshi"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub ↗
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/search/results/people/?keywords=Mayank%20Gorshi"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              LinkedIn ↗
            </a>

            {/* Email */}
            <a
              href="mailto:gorshimayank@gmail.com"
              className="transition-colors hover:text-white"
            >
              Email ↗
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="transition-colors hover:text-white"
            >
              Contact ↗
            </a>

            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="transition-colors hover:text-white"
            >
              Back to top ↑
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-10 border-t border-white/5 pt-6">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/20">
            Connect With Me
          </p>

          <div className="flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
            {/* Email Address */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-white/30">Email:</span>

              <a
                href="mailto:gorshimayank@gmail.com"
                className="text-white/60 transition-colors hover:text-white"
              >
                gorshimayank@gmail.com
              </a>
            </div>

            {/* GitHub Profile */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-white/30">GitHub:</span>

              <a
                href="https://github.com/mayankgorshi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition-colors hover:text-white"
              >
                github.com/mayankgorshi ↗
              </a>
            </div>

            {/* LinkedIn Profile */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-white/30">LinkedIn:</span>

              <a
                href="https://www.linkedin.com/in/mayank-gorshi-071803376"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition-colors hover:text-white"
              >
                Mayank Gorshi ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-white/20 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Mayank. All rights reserved.</p>

          <p>Built with Next.js &amp; Motion.</p>
        </div>
      </div>
    </footer>
  );
}