
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { projects, type Project } from "../data/project";

const categories = ["All", "Full-Stack", "SaaS", "E-Commerce"];

function getCategoryLabel(category: string) {
    if (category === "Full-Stack Application") return "Full-Stack";
    if (category === "E-Commerce") return "E-Commerce";

    return "SaaS";
}

function getStatusStyles(status: Project["status"]) {
    if (status === "Live") {
        return {
            dot: "bg-emerald-400",
            text: "Live",
        };
    }

    if (status === "Completed") {
        return {
            dot: "bg-violet-400",
            text: "Completed",
        };
    }

    return {
        dot: "bg-blue-400",
        text: "In Development",
    };
}

/*
  Project-specific image positioning.

  This prevents important UI content from being cropped
  when the thumbnail uses object-cover.
*/
function getImagePosition(title: string) {
    if (title === "Restaurant Ordering System") {
        return "center center";
    }

    if (title === "TeamFlow") {
        return "center center";
    }

    if (title === "E-Commerce Platform") {
        return "center center";
    }

    return "center center";
}


type ProjectGalleryProps = {
    onProjectSelect: (project: Project) => void;
};

export default function ProjectGallery({
    onProjectSelect,
}: ProjectGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter(
                (project) =>
                    getCategoryLabel(project.category) === activeCategory
            );

    const selectedProject = filteredProjects[selectedIndex];

    if (!selectedProject || filteredProjects.length === 0) {
        return null;
    }

    const changeProject = (direction: number) => {
        const nextIndex =
            (selectedIndex + direction + filteredProjects.length) %
            filteredProjects.length;

        // Only move the carousel.
        // Do not open the project case study.
        setSelectedIndex(nextIndex);
    };

    const selectCategory = (category: string) => {
        setActiveCategory(category);
        setSelectedIndex(0);
    };

    const getProjectAtOffset = (offset: number) => {
        const index =
            (selectedIndex + offset + filteredProjects.length) %
            filteredProjects.length;

        return filteredProjects[index];
    };

    const previousProject = getProjectAtOffset(-1);
    const nextProject = getProjectAtOffset(1);

    return (
        <div className="relative bg-black px-4 text-white sm:px-6 lg:px-8">
            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-[48%] h-[650px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.08] blur-[170px]" />

            <div className="relative z-10 mx-auto max-w-[1650px]">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-xs uppercase tracking-[0.35em] text-violet-300/80">
                        Real Projects
                    </p>

                    <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                        Projects that solve{" "}
                        <span className="text-violet-300">real problems.</span>
                    </h2>

                    <p className="mt-6 text-sm leading-7 text-white/45 sm:text-base">
                        A collection of projects built with a focus on functionality,
                        user experience and real-world problem solving.
                    </p>
                </div>

                {/* Category filters */}
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                    {categories.map((category) => {
                        const isActive = activeCategory === category;

                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => selectCategory(category)}
                                className={`rounded-full border px-5 py-2.5 text-sm transition-all duration-300 ${isActive
                                    ? "border-violet-300 bg-violet-500 text-white shadow-lg shadow-violet-500/20"
                                    : "border-white/10 bg-white/[0.03] text-white/50 hover:border-violet-300/40 hover:text-white"
                                    }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                {/* Project carousel */}
                <div className="relative mt-16">
                    {/* Desktop navigation arrows */}
                    <button
                        type="button"
                        onClick={() => changeProject(-1)}
                        aria-label="Previous project"
                        className="absolute left-1 top-1/2 z-40 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/90 text-xl text-white transition-all hover:border-violet-300/60 hover:bg-violet-500/20 lg:flex"
                    >
                        ←
                    </button>

                    <button
                        type="button"
                        onClick={() => changeProject(1)}
                        aria-label="Next project"
                        className="absolute right-1 top-1/2 z-40 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/90 text-xl text-white transition-all hover:border-violet-300/60 hover:bg-violet-500/20 lg:flex"
                    >
                        →
                    </button>

                    {/*
            Important:
            - overflow-visible prevents side cards from being cut.
            - Side cards are tilted outward.
            - Center card remains straight.
          */}
                    <div className="grid items-center gap-4 overflow-visible lg:grid-cols-[0.9fr_1.35fr_0.9fr] lg:gap-6 xl:gap-8">
                        {/* Previous project */}
                        <SideProjectCard
                            project={previousProject}
                            side="left"
                            onClick={() => changeProject(-1)}
                        />

                        {/* Selected project - STRAIGHT */}
                        <AnimatePresence mode="wait">
                            <motion.article
                                key={`${activeCategory}-${selectedProject.number}`}
                                onClick={() => onProjectSelect(selectedProject)}
                                initial={{ opacity: 0, scale: 0.97, y: 14 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.97, y: -14 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="relative z-20 cursor-pointer overflow-hidden rounded-[26px] border border-violet-400/70 bg-[#11111c] shadow-[0_0_90px_rgba(139,92,246,0.2)]"
                            >
                                <div className="group relative aspect-[16/11] overflow-hidden bg-[#15151f]">
                                    <img
                                        src={selectedProject.image}
                                        alt={`${selectedProject.title} project preview`}
                                        style={{
                                            objectPosition: getImagePosition(
                                                selectedProject.title
                                            ),
                                        }}
                                        className="h-full w-full object-contain bg-[#15151f] transition-transform duration-700 group-hover:scale-[1.015]"
                                    />

                                    {/* Image gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080e] via-[#08080e]/25 to-black/5" />

                                    {/* Status badge */}
                                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-xs text-white backdrop-blur-xl">
                                        <span
                                            className={`h-2 w-2 rounded-full ${getStatusStyles(selectedProject.status).dot
                                                }`}
                                        />

                                        {getStatusStyles(selectedProject.status).text}
                                    </div>

                                    {/* Project number */}
                                    <span className="absolute right-5 top-5 text-sm tracking-[0.25em] text-white/70">
                                        {selectedProject.number}
                                    </span>

                                    {/* Main project content */}
                                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
                                        <p className="text-[10px] uppercase tracking-[0.3em] text-violet-200/90 sm:text-xs">
                                            {selectedProject.category}
                                        </p>

                                        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[clamp(1.5rem,2.2vw,2.2rem)]">
                                            {selectedProject.title}
                                        </h3>

                                        <p className="mt-3 max-w-2xl text-xs leading-6 text-white/75 sm:text-sm">
                                            {selectedProject.description}
                                        </p>

                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((technology) => (
                                                <span
                                                    key={technology}
                                                    className="rounded-lg border border-white/10 bg-black/55 px-3 py-1.5 text-[10px] text-white/90 backdrop-blur-md sm:text-xs"
                                                >
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>

                                        <button
                                            type="button"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                onProjectSelect(selectedProject);
                                            }}
                                            className="mt-5 inline-flex items-center gap-2 rounded-full border border-violet-300/50 bg-violet-500/20 px-4 py-2.5 text-xs font-medium text-violet-100 transition-all duration-300 hover:border-violet-300 hover:bg-violet-500 hover:text-white"
                                        >
                                            View Case Study
                                            <span>↗</span>
                                        </button>
                                    </div>

                                    {/* Bottom-right arrow */}
                                    <div className="absolute bottom-5 right-5 hidden h-11 w-11 items-center justify-center rounded-full border border-violet-300/70 bg-black/45 text-xl text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110 sm:flex">
                                        ↗
                                    </div>
                                </div>
                            </motion.article>
                        </AnimatePresence>

                        {/* Next project */}
                        <SideProjectCard
                            project={nextProject}
                            side="right"
                            onClick={() => changeProject(1)}
                        />
                    </div>

                    {/* Mobile controls */}
                    <div className="mt-7 flex justify-center gap-4 lg:hidden">
                        <button
                            type="button"
                            onClick={() => changeProject(-1)}
                            aria-label="Previous project"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-violet-300/50"
                        >
                            ←
                        </button>

                        <button
                            type="button"
                            onClick={() => changeProject(1)}
                            aria-label="Next project"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-violet-300/50"
                        >
                            →
                        </button>
                    </div>
                </div>

                {/* Pagination */}
                <div className="mt-10 flex justify-center gap-2">
                    {filteredProjects.map((project, index) => (
                        <button
                            key={project.number}
                            type="button"
                            onClick={() => {
                                setSelectedIndex(index);
                            }}
                            aria-label={`Select ${project.title}`}
                            className={`h-2 rounded-full transition-all duration-300 ${index === selectedIndex
                                ? "w-8 bg-violet-400"
                                : "w-2 bg-white/20 hover:bg-white/40"
                                }`}
                        />
                    ))}
                </div>

                <p className="mt-5 text-center text-xs text-white/25">
                    Select a project or use the arrows to explore
                </p>
            </div>
        </div>
    );
}

type SideProjectCardProps = {
    project: Project;
    side: "left" | "right";
    onClick: () => void;
};




function SideProjectCard({
    project,
    side,
    onClick,
}: SideProjectCardProps) {
    const statusStyles = getStatusStyles(project.status);

    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={`Select ${project.title}`}
            style={{
                transform:
                    side === "left"
                        ? "rotate(-4deg)"
                        : "rotate(4deg)",
                transformOrigin: "center center",
            }}
            className="group relative hidden min-w-0 text-left lg:block"
        >
            <div
                className="
                    relative aspect-[4/3]
                    overflow-hidden rounded-[24px]
                    border border-white/15
                    bg-[#0c0c14]
                    opacity-75
                    transition-all duration-300
                    group-hover:opacity-100
                    group-hover:border-violet-300/50
                "
            >
                <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    style={{
                        objectPosition: getImagePosition(project.title),
                    }}
                    className="
                        h-full w-full object-cover
                        transition-transform duration-300
                        group-hover:scale-[1.02]
                    "
                />

                {/* Simple flat overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080e] via-black/30 to-transparent" />

                {/* Status badge */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/75 px-3 py-1.5 text-[10px] text-white backdrop-blur-md">
                    <span
                        className={`h-1.5 w-1.5 rounded-full ${statusStyles.dot}`}
                    />
                    {statusStyles.text}
                </div>

                {/* Project number */}
                <span className="absolute right-4 top-4 text-xs tracking-[0.2em] text-white/70">
                    {project.number}
                </span>

                {/* Project content */}
                <div className="absolute inset-x-5 bottom-5">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-violet-200/80">
                        {project.category}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold leading-tight text-white sm:text-xl">
                        {project.title}
                    </h3>
                </div>
            </div>
        </button>
    );
}