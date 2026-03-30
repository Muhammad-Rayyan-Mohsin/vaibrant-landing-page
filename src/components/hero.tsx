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
          className="h-full w-full object-cover"
        >
          <source src="/hero-bg-dolly-v2.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Bottom content overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-background via-background/80 to-transparent" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-[44vh] text-center max-w-lg"
        >
          <p className="text-sm md:text-base text-white/90 leading-relaxed">
            We architect, build, and deploy AI systems that drive real
            business outcomes. From intelligent automation to custom models
            trained on your data.
          </p>
          <div className="mt-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
              AI Strategy / Custom Models / Automation
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-2.5 text-sm font-medium rounded-full bg-white text-black transition-transform duration-200 active:scale-[0.97] hover:bg-white/90"
            >
              Get Started
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="pointer-events-auto absolute bottom-8 right-6 md:right-10 flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-200"
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
