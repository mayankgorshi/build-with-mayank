"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type ProjectCardProps = {
    number: string;
    category: string;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    liveUrl?: string;
    detailsUrl?: string;

    overview: string;
    features: string[];
    challenges: string[];
    learning: string;
};

export default function ProjectCard({
    number,
    category,
    title,
    description,
    technologies,
    image,
    liveUrl,
    detailsUrl,
    overview,
    features,
    challenges,
    learning,
}: ProjectCardProps) {
    const [showDetails, setShowDetails] = useState(false);

    /*
     * Open the live project.
     */
    const openProject = () => {
        if (!liveUrl) return;

        window.open(liveUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <>
            {/* =====================================================
          PROJECT CARD
      ===================================================== */}

            <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut",
                }}
                onClick={liveUrl ? openProject : undefined}
                onKeyDown={(event) => {
                    if (!liveUrl) return;

                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openProject();
                    }
                }}
                tabIndex={liveUrl ? 0 : undefined}
                role={liveUrl ? "link" : undefined}
                className={`group ${liveUrl
                        ? "cursor-pointer rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50"
                        : ""
                    }`}
            >
                {/* =====================================================
            PROJECT IMAGE
        ===================================================== */}

                <div className="relative mb-7 aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">
                    <img
                        src={image}
                        alt={`${title} project preview`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    {/* Project Number */}

                    <span className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs tracking-[0.25em] text-white/50 backdrop-blur-md">
                        {number}
                    </span>

                    {/* View Project Hint */}

                    {liveUrl && (
                        <div className="absolute bottom-6 right-6 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs text-white/60 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                            Open Project ↗
                        </div>
                    )}
                </div>

                {/* =====================================================
            PROJECT INFORMATION
        ===================================================== */}

                <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
                    {/* Left Content */}

                    <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                            {category}
                        </p>

                        <h3 className="mt-3 text-3xl font-medium tracking-tight text-white sm:text-4xl">
                            {title}
                        </h3>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
                            {description}
                        </p>

                        {/* Technologies */}

                        <div className="mt-6 flex flex-wrap gap-2">
                            {technologies.map((technology) => (
                                <span
                                    key={technology}
                                    onClick={(event) => event.stopPropagation()}
                                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-white/40 transition-all duration-300 group-hover:border-white/15 group-hover:text-white/60"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* =====================================================
              ACTION BUTTONS
          ===================================================== */}

                    <div
                        className="flex flex-wrap items-center gap-3 md:pt-8"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* View Project */}

                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
                            >
                                View Project ↗
                            </a>
                        )}

                        {/* More Details */}

                        <button
                            type="button"
                            onClick={() => setShowDetails(true)}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-white/60 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-400/[0.06] hover:text-white"
                        >
                            More Details +
                        </button>
                    </div>
                </div>
            </motion.article>

            {/* =====================================================
          DETAILS MODAL
      ===================================================== */}

            <AnimatePresence>
                {showDetails && (
                    <motion.div
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md sm:p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowDetails(false)}
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${title} project details`}
                        tabIndex={-1}
                        onKeyDown={(event) => {
                            if (event.key === "Escape") {
                                setShowDetails(false);
                            }
                        }}
                    >
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 80,
                                scale: 0.98,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: 80,
                                scale: 0.98,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut",
                            }}
                            onClick={(event) => event.stopPropagation()}
                            className="relative max-h-[78vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0b0b0d] p-7 shadow-2xl sm:p-10">
                            {/* =====================================================
                  CLOSE BUTTON
              ===================================================== */}

                            <button
                                type="button"
                                onClick={() => setShowDetails(false)}
                                className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-xl text-white/40 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                                aria-label="Close project details"
                            >
                                ×
                            </button>

                            {/* =====================================================
                  MODAL HEADER
              ===================================================== */}

                            <div className="pr-12">
                                <p className="text-xs uppercase tracking-[0.3em] text-violet-300/60">
                                    {category}
                                </p>

                                <h2 className="mt-4 text-4xl font-medium tracking-tight text-white sm:text-5xl">
                                    {title}
                                </h2>

                                <p className="mt-5 max-w-2xl text-base leading-7 text-white/40">
                                    {description}
                                </p>
                            </div>

                            {/* =====================================================
                  DETAILS
              ===================================================== */}

                            <div className="mt-12 space-y-12">
                                {/* The Idea */}

                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                                        The Idea
                                    </p>

                                    <p className="mt-4 max-w-3xl text-sm leading-8 text-white/50 sm:text-base">
                                        {overview}
                                    </p>
                                </div>

                                {/* Key Features */}

                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                                        Key Features
                                    </p>

                                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                        {features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/50 transition-colors hover:border-violet-400/20 hover:bg-violet-400/[0.03]"
                                            >
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Challenges */}

                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                                        Challenges
                                    </p>

                                    <ul className="mt-5 space-y-3">
                                        {challenges.map((challenge) => (
                                            <li
                                                key={challenge}
                                                className="flex gap-3 text-sm leading-7 text-white/50"
                                            >
                                                <span className="text-violet-400">✦</span>

                                                <span>{challenge}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* What I Learned */}

                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                                        What I Learned
                                    </p>

                                    <p className="mt-4 max-w-3xl text-sm leading-8 text-white/50 sm:text-base">
                                        {learning}
                                    </p>
                                </div>

                                {/* Built With */}

                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                                        Built With
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/50"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* =====================================================
                  MODAL ACTIONS
              ===================================================== */}

                            <div className="mt-12 flex flex-wrap gap-3 border-t border-white/10 pt-8">
                                {liveUrl && (
                                    <a
                                        href={liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
                                    >
                                        Visit Live Project ↗
                                    </a>
                                )}

                                {detailsUrl && (
                                    <a
                                        href={detailsUrl}
                                        onClick={(event) => event.stopPropagation()}
                                        className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white/60 transition-colors hover:border-white/20 hover:text-white"
                                    >
                                        Full Project Page →
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}