"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-background">
      {/* Full-bleed looping video */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        >
          <source src="https://jjn46rcnnayepb32.public.blob.vercel-storage.com/vortex-walk.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Vignette — soft blend all edges */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_200px_80px_rgba(10,10,10,0.95)]" />
      {/* Bottom fade — wide and soft */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-background from-5% via-background/60 via-40% to-transparent" />
      {/* Left fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-[50%] h-full bg-gradient-to-r from-background/50 to-transparent" />
      {/* Bottom-left corner — radial for seamless blend */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-full" style={{ background: "radial-gradient(ellipse 70% 60% at 0% 100%, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.3) 40%, transparent 70%)" }} />

      <div className="relative z-10 flex flex-col justify-end min-h-[100dvh] px-6 md:px-12 lg:px-16 pb-16 md:pb-20">
        {/* Left-aligned text block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[0.9] uppercase">
            Vaibrant
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/80 leading-relaxed">
            Your business runs on decisions. We build the
            AI agents that make them — faster, sharper,
            and at a scale no team can match.
          </p>
          <div className="mt-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/35">
              AI Strategy&ensp;|&ensp;Custom Models&ensp;|&ensp;Automation
            </span>
          </div>
        </motion.div>

        {/* Get Started — bottom right */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-16 md:bottom-20 right-6 md:right-12 lg:right-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 text-sm font-medium rounded-full bg-white text-black transition-transform duration-200 active:scale-[0.97] hover:bg-white/90"
          >
            Get Started
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="pointer-events-auto absolute bottom-6 right-6 md:right-12 lg:right-16 flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-200"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} weight="bold" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
