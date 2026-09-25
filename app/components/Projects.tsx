
"use client";

import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import ProjectGallery from "./ProjectGallery";
import ProjectShowcase from "./ProjectShowcase";
import type { Project } from "../data/project";

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const closeShowcase = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeShowcase();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="relative overflow-visible bg-black px-0 pb-24 pt-8 md:pb-32 md:pt-12"
    >
      {/* Project Gallery */}
      <ScrollReveal>
        <ProjectGallery
          onProjectSelect={setSelectedProject}
        />
      </ScrollReveal>

      {/* Project Showcase Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-md sm:px-6 lg:px-10"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} case study`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeShowcase();
            }
          }}
        >
          <div className="relative flex h-[90vh] w-full max-w-[1450px] flex-col overflow-hidden rounded-3xl border border-white/15 bg-[#08080e] shadow-[0_0_100px_rgba(139,92,246,0.18)]">
            {/* Modal top bar */}
            <div className="flex shrink-0 items-center justify-between border-b border-white/10 bg-white/[0.025] px-5 py-4 sm:px-7">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-400" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                  Project Case Study
                </span>
              </div>

              <button
                type="button"
                onClick={closeShowcase}
                aria-label="Close project showcase"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg text-white/60 transition-all hover:border-violet-300/50 hover:bg-violet-500/10 hover:text-white"
              >
                ×
              </button>
            </div>

            {/* Scrollable showcase */}
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
              <div className="px-5 pb-8 sm:px-8 sm:pb-12 lg:px-12">
                <ProjectShowcase
                  project={selectedProject}
                  onBack={closeShowcase}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}