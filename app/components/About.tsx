"use client";

import ScrollReveal from "./ScrollReveal";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Git",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-20 md:py-28"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Label */}

        <ScrollReveal>
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-white/30">
            About Me
          </p>
        </ScrollReveal>

        {/* Main Statement */}

        <ScrollReveal>
          <h2 className="max-w-5xl text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            I don&apos;t just write code.
            <br />

            <span className="text-white/30">
              I build things people actually use.
            </span>
          </h2>
        </ScrollReveal>

        {/* Main Content */}

        <div className="mt-20 grid gap-16 md:grid-cols-[1.2fr_0.8fr] md:gap-20">
          {/* Story */}

          <ScrollReveal delay={0.15}>
            <div>
              <p className="text-lg leading-8 text-white/50 md:text-xl">
                I&apos;m Mayank, a full-stack developer who enjoys turning ideas
                into real digital products. I care about more than just making
                something work — I want it to feel good to use.
              </p>

              <p className="mt-6 text-lg leading-8 text-white/50 md:text-xl">
                I work across the entire stack, from designing interfaces and
                animations to building APIs, databases, authentication and
                everything that makes a product actually function.
              </p>

              <p className="mt-6 text-lg leading-8 text-white/50 md:text-xl">
                Right now, I&apos;m focused on becoming a better engineer by
                building real projects, learning new technologies and turning
                every idea I have into something people can actually interact
                with.
              </p>

              {/* Links */}

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-white/60 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-white/60 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side */}

          <ScrollReveal delay={0.3}>
            <div className="space-y-10">
              {/* Currently */}

              <div>
                <p className="mb-5 text-sm uppercase tracking-[0.2em] text-white/30">
                  Currently focused on
                </p>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-400/[0.02]">
                    <p className="text-sm text-white/30">Building</p>

                    <p className="mt-2 text-lg text-white/80">
                      Full-stack applications
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-400/[0.02]">
                    <p className="text-sm text-white/30">Learning</p>

                    <p className="mt-2 text-lg text-white/80">
                      Next.js · PostgreSQL · AI
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-400/[0.02]">
                    <p className="text-sm text-white/30">Goal</p>

                    <p className="mt-2 text-lg text-white/80">
                      Build better products
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills */}

              <div>
                <p className="mb-5 text-sm uppercase tracking-[0.2em] text-white/30">
                  Tools I use
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm text-white/50 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-400/[0.04] hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}