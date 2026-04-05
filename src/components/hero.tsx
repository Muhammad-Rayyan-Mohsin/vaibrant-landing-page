"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChatCircleDots } from "@phosphor-icons/react";

interface HeroProps {
  onContact?: () => void;
}

export function Hero({ onContact }: HeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Scroll-linked transforms
  const videoOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.3, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.7], [0, -60]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  return (
    <div ref={sectionRef} className="relative h-[200vh]">
      {/* Sticky container — stays pinned for the full 200vh scroll */}
      <div className="sticky top-0 h-[100dvh] overflow-hidden bg-background">
        {/* Video layer — fades on scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
          style={{ opacity: videoOpacity, scale }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/hero-poster.jpg"
            aria-label="Abstract visualization of AI systems"
            className="h-full w-full object-cover"
          >
            <source src="https://jjn46rcnnayepb32.public.blob.vercel-storage.com/vortex-walk.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Vignette — soft blend all edges */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_200px_80px_rgba(10,10,10,0.95)]" />
        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-background from-5% via-background/60 via-40% to-transparent" />
        {/* Left fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-[50%] h-full bg-gradient-to-r from-background/50 to-transparent" />
        {/* Bottom-left corner — radial */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-full" style={{ background: "radial-gradient(ellipse 70% 60% at 0% 100%, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.3) 40%, transparent 70%)" }} />

        {/* Content — fades and lifts on scroll */}
        <motion.div
          className="relative z-10 flex flex-col justify-end min-h-[100dvh] px-6 md:px-12 lg:px-16 pb-16 md:pb-20"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          {/* Left-aligned text block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] uppercase" style={{ marginLeft: "-0.15em" }}>
              Vaibrant
              <span className="sr-only"> — AI Agents, Automation & Strategy Agency</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
              Your competitors are already automating. We build the AI agents,
              automations, and systems that cut your costs, save your team hours,
              and scale what&apos;s working.
            </p>
            <div className="mt-4">
              <span className="text-xs font-mono uppercase tracking-[0.15em] text-white/35">
                Autonomous AI Agents&ensp;|&ensp;End-to-End Automation&ensp;|&ensp;90-Day Deployment
              </span>
            </div>
          </motion.div>

          {/* CTA buttons — bottom right */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-16 md:bottom-20 right-6 md:right-12 lg:right-16"
          >
            <div className="flex items-center gap-3">
              <button
                onClick={onContact}
                className="inline-flex items-center px-10 py-4 text-base font-medium rounded-full bg-white text-black transition-transform duration-200 active:scale-[0.97] hover:bg-white/90"
              >
                Book Free Strategy Call
              </button>
              <a
                href="/chat"
                className="inline-flex items-center gap-2 px-5 py-4 text-sm font-medium rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all duration-200"
              >
                <ChatCircleDots size={16} weight="fill" />
                Ask AI
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
