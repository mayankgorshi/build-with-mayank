"use client";

import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28 md:py-40"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.06] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-white/30">
            Get In Touch
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="max-w-5xl text-5xl font-medium leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Have an idea?
            <br />

            <span className="text-white/30">
              Let&apos;s build something.
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/40 md:text-xl">
            Whether it&apos;s a product idea, a collaboration, or just a
            conversation about technology — I&apos;d love to hear from you.
          </p>
        </ScrollReveal>

        {/* Status */}

        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-50" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-400" />
            </span>

            <span className="text-sm text-white/40">
              Open to opportunities
            </span>
          </div>
        </ScrollReveal>

        {/* Contact buttons */}

        <ScrollReveal delay={0.4}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:your-email@example.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
            >
              Email Me ↗
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white/60 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white/60 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              LinkedIn ↗
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}