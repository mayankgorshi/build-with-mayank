
"use client";

import { motion } from "motion/react";

import MagneticButton from "./MagneticButton";

export default function Hero() {
    return (
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 pt-24">
            {/* Main Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#10081f] opacity-80 blur-[100px]" />

            {/* Secondary Fuchsia Glow */}
            <motion.div
                animate={{
                    x: [0, -150, 80, 0],
                    y: [0, 100, -60, 0],
                    scale: [1, 0.8, 1.2, 1],
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute left-1/3 top-1/3 h-[350px] w-[350px] rounded-full bg-fuchsia-500/10 blur-[120px]"
            />

            {/* Hero Content */}
            <div className="relative z-10 mx-auto max-w-5xl text-center">
                {/* Label */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40"
                >
                    Full-Stack Developer
                </motion.p>

                {/* Main Heading */}
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 40,
                        scale: 0.95,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                    }}
                    transition={{
                        duration: 2,
                        delay: 0.2,
                        ease: "easeOut",
                    }}
                    className="text-6xl font-semibold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
                >
                    Build
                    <span className="text-white/40"> With </span>

                    <motion.span
                        initial={{ backgroundPosition: "0% 50%" }}
                        animate={{
                            backgroundPosition: [
                                "0% 50%",
                                "100% 50%",
                                "0% 50%",
                            ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="bg-gradient-to-r from-white via-violet-300 to-pink-300 bg-[length:200%_auto] bg-clip-text text-transparent"
                    >
                        Mayank.
                    </motion.span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.45,
                        ease: "easeOut",
                    }}
                    className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/50 md:text-xl"
                >
                    I build modern digital products, full-stack applications,
                    and experiences that turn ideas into reality.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.65,
                        ease: "easeOut",
                    }}
                    className="mt-10 flex flex-wrap justify-center gap-4"
                >
                    <MagneticButton href="#projects">
                        Explore My Work
                    </MagneticButton>

                    

                    {/* Download Resume */}
                    <a
                        href="/resume.pdf"
                        download="Mayank-Gorshi-Resume.pdf"
                        className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                    >
                        Download Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
}