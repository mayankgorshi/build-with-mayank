"use client";

import ScrollReveal from "./ScrollReveal";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Building interfaces that feel fast, responsive and intentional.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    number: "02",
    title: "Backend",
    description:
      "Designing APIs and server-side systems that power real products.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    number: "03",
    title: "Workflow",
    description:
      "The tools and practices I use to turn ideas into shipped products.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "Figma",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-24 md:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.025] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <ScrollReveal>
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-white/30">
            What I work with
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Tools are just tools.
            <br />
            <span className="text-white/30">
              Knowing how to use them is the skill.
            </span>
          </h2>
        </ScrollReveal>

        {/* Skills */}
        <div className="mt-20">
          {skillGroups.map((group, index) => (
            <ScrollReveal
              key={group.title}
              delay={index * 0.1}
            >
              <div className="group border-t border-white/10 py-10 transition-colors duration-500 hover:border-violet-400/30 md:py-12">
                
                <div className="grid gap-8 md:grid-cols-[80px_1fr_1.5fr] md:items-start">

                  {/* Number */}
                  <span className="text-xs tracking-[0.25em] text-white/25">
                    {group.number}
                  </span>

                  {/* Title */}
                  <div>
                    <h3 className="text-3xl font-medium tracking-tight text-white transition-colors duration-500 group-hover:text-violet-200 md:text-4xl">
                      {group.title}
                    </h3>

                    <p className="mt-3 max-w-xs text-sm leading-6 text-white/35">
                      {group.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-x-3 gap-y-3 md:justify-end">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-white/45 transition-all duration-300 group-hover:border-white/15 group-hover:text-white/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Bottom border */}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}