
"use client";

import { useState } from "react";
import type { Project } from "../data/project";

type ProjectShowcaseProps = {
    project: Project;
    onBack: () => void;
};

export default function ProjectShowcase({
    project,
    onBack,
}: ProjectShowcaseProps) {
    const [showAllScreenshots, setShowAllScreenshots] = useState(false);
    const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(
        null
    );
    const [showVideo, setShowVideo] = useState(false);

    const screenshots = project.screenshots?.length
        ? project.screenshots
        : [project.image];

    const visibleScreenshots = showAllScreenshots
        ? screenshots
        : screenshots.slice(0, 4);

    const hasLiveUrl = Boolean(project.liveUrl);
    const hasGithubUrl = Boolean(project.githubUrl);

    return (
        <section className="relative overflow-hidden pb-8 pt-2 sm:pb-12 sm:pt-4">
            {/* Background Glow */}
            <div className="pointer-events-none absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-violet-600/[0.07] blur-[150px]" />

            {/* Main Content */}
            <div className="relative z-10">
                {/* Back Link */}
                <button
                    type="button"
                    onClick={onBack}
                    className="mb-10 flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                >
                    <span>←</span>
                    Back to projects
                </button>

                {/* Hero Section */}
                <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
                    {/* Project Information */}
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-300">
                            {project.category}
                        </p>

                        <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
                            {project.title}
                        </h2>

                        <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                            {project.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            {hasLiveUrl ? (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-violet-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-400"
                                >
                                    View Live Project ↗
                                </a>
                            ) : (
                                <span className="cursor-not-allowed rounded-full border border-violet-400/30 px-5 py-3 text-sm font-medium text-violet-200/50">
                                    Live Project Soon
                                </span>
                            )}

                            {hasGithubUrl ? (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition-colors hover:border-violet-300/60 hover:text-white"
                                >
                                    GitHub ↗
                                </a>
                            ) : (
                                <span className="cursor-not-allowed rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/35">
                                    GitHub Soon
                                </span>
                            )}

                            <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 px-4 py-3 text-xs text-emerald-300">
                                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                {project.status}
                            </span>
                        </div>
                    </div>

                    {/* Demo Preview */}
                    <div className="group relative overflow-hidden rounded-2xl border border-violet-300/25 bg-[#10101a] shadow-[0_0_70px_rgba(139,92,246,0.10)]">
                        <div className="relative aspect-video overflow-hidden">
                            {project.demoVideo ? (
                                <>
                                    <video
                                        className="h-full w-full object-cover"
                                        controls
                                        playsInline
                                        preload="metadata"
                                        poster={project.image}
                                    >
                                        <source
                                            src={project.demoVideo}
                                            type="video/mp4"
                                        />

                                        Your browser does not support the video tag.
                                    </video>

                                    {/* Expand Video Button */}
                                    <button
                                        type="button"
                                        onClick={() => setShowVideo(true)}
                                        className="absolute right-3 top-3 rounded-lg border border-white/20 bg-black/60 px-3 py-2 text-xs font-medium text-white backdrop-blur-md transition-colors hover:bg-violet-500"
                                        aria-label="Open video in fullscreen"
                                    >
                                        ⛶ Expand
                                    </button>
                                </>
                            ) : (
                                <img
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                    className="h-full w-full object-cover"
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* Feature Cards */}
                {project.showcaseFeatures &&
                    project.showcaseFeatures.length > 0 && (
                        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {project.showcaseFeatures.map((feature) => (
                                <div
                                    key={feature.title}
                                    className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-violet-300/30"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-lg text-violet-300">
                                        {feature.icon}
                                    </div>

                                    <h3 className="mt-5 text-sm font-semibold text-white">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-white/45">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                {/* Main Details Area */}
                <div className="mt-16 grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-[1fr_1.05fr_0.7fr]">
                    {/* Left Column */}
                    <div>
                        <h3 className="text-xl font-semibold text-white">
                            The Idea
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-white/55">
                            {project.idea || "Project idea not specified."}
                        </p>

                        <h3 className="mt-10 text-xl font-semibold text-white">
                            Key Features
                        </h3>

                        <ul className="mt-5 space-y-4">
                            {project.features?.map((feature) => (
                                <li
                                    key={feature}
                                    className="flex items-start gap-3 text-sm leading-6 text-white/65"
                                >
                                    <span className="mt-1 text-violet-300">
                                        ✓
                                    </span>

                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Middle Column - Screenshots */}
                    <div>
                        <div className="flex items-center justify-between gap-4">
                            <h3 className="text-xl font-semibold text-white">
                                Screenshots
                            </h3>

                            <div className="flex items-center gap-3">
                                <span className="text-xs text-white/35">
                                    {screenshots.length} images
                                </span>

                                {screenshots.length > 4 && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowAllScreenshots(
                                                (current) => !current
                                            )
                                        }
                                        className="text-xs font-medium text-violet-300 transition-colors hover:text-violet-200"
                                    >
                                        {showAllScreenshots
                                            ? "Show Less ↑"
                                            : "View All →"}
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-3">
                            {visibleScreenshots.map((screenshot, index) => (
                                <button
                                    key={`${screenshot}-${index}`}
                                    type="button"
                                    onClick={() =>
                                        setSelectedScreenshot(screenshot)
                                    }
                                    className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] text-left"
                                    aria-label={`Open screenshot ${
                                        index + 1
                                    } in fullscreen`}
                                >
                                    <img
                                        src={screenshot}
                                        alt={`${project.title} screenshot ${
                                            index + 1
                                        }`}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                                        <span className="rounded-full bg-black/60 px-3 py-2 text-xs text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                                            ⛶ View
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        <h3 className="text-xl font-semibold text-white">
                            Built With
                        </h3>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/70"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>

                        <h3 className="mt-10 text-xl font-semibold text-white">
                            Challenges
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {project.challenges?.map((challenge) => (
                                <li
                                    key={challenge}
                                    className="flex items-start gap-3 text-sm leading-6 text-white/55"
                                >
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                                    {challenge}
                                </li>
                            ))}
                        </ul>

                        <h3 className="mt-10 text-xl font-semibold text-white">
                            What I Learned
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-white/55">
                            {project.learning ||
                                "Learning details not specified."}
                        </p>

                        {/* Project Information */}
                        <div className="mt-10 border-t border-white/10 pt-6">
                            <h3 className="text-xl font-semibold text-white">
                                Project Info
                            </h3>

                            <div className="mt-5 space-y-5">
                                <InfoItem
                                    label="Category"
                                    value={project.category}
                                />

                                <InfoItem
                                    label="Status"
                                    value={project.status}
                                />

                                <InfoItem
                                    label="Timeline"
                                    value={
                                        project.timeline || "Not specified"
                                    }
                                />

                                <InfoItem
                                    label="Role"
                                    value={project.role || "Developer"}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Back Button */}
                <div className="mt-16 border-t border-white/10 pt-8">
                    <button
                        type="button"
                        onClick={onBack}
                        className="text-sm font-medium text-white/50 transition-colors hover:text-white"
                    >
                        ← Back to all projects
                    </button>
                </div>
            </div>

            {/* Fullscreen Screenshot Modal */}
            {selectedScreenshot && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
                    onClick={() => setSelectedScreenshot(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Fullscreen screenshot preview"
                >
                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={() => setSelectedScreenshot(null)}
                        className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white transition-colors hover:bg-white/20"
                        aria-label="Close screenshot preview"
                    >
                        ✕
                    </button>

                    {/* Fullscreen Screenshot */}
                    <img
                        src={selectedScreenshot}
                        alt={`${project.title} fullscreen screenshot`}
                        onClick={(event) => event.stopPropagation()}
                        className="max-h-[90vh] max-w-full rounded-xl object-contain shadow-2xl"
                    />
                </div>
            )}

            {/* Fullscreen Video Modal */}
            {showVideo && project.demoVideo && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
                    onClick={() => setShowVideo(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Fullscreen project video"
                >
                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={() => setShowVideo(false)}
                        className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white transition-colors hover:bg-white/20"
                        aria-label="Close video preview"
                    >
                        ✕
                    </button>

                    {/* Fullscreen Video */}
                    <video
                        className="max-h-[90vh] max-w-full rounded-xl shadow-2xl"
                        controls
                        autoPlay
                        playsInline
                        preload="metadata"
                        poster={project.image}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <source
                            src={project.demoVideo}
                            type="video/mp4"
                        />

                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
        </section>
    );
}

type InfoItemProps = {
    label: string;
    value: string;
};

function InfoItem({ label, value }: InfoItemProps) {
    return (
        <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                {label}
            </p>

            <p className="mt-1 text-sm leading-6 text-white/70">
                {value}
            </p>
        </div>
    );
}