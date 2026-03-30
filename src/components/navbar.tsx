"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Services", href: "/#features" },
  { label: "Projects", href: "/projects" },
  { label: "Results", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest < 100) {
      setVisible(true);
    } else if (latest > previous) {
      setVisible(false);
      setMobileOpen(false);
    } else {
      setVisible(true);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="fixed top-5 left-0 right-0 z-40 flex justify-center px-4"
      >
        <div className="w-full max-w-3xl">
          {/* Main pill */}
          <div className="flex items-center justify-center gap-2 w-fit mx-auto rounded-full bg-black/70 backdrop-blur-xl border border-white/[0.08] px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1.5 text-[13px] text-white/60 rounded-full transition-colors duration-200 hover:text-white hover:bg-white/[0.06]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="/#contact"
                className="hidden md:inline-flex items-center px-4 py-1.5 text-[13px] font-medium rounded-full bg-white text-black transition-transform duration-200 active:scale-[0.97] hover:bg-white/90"
              >
                Get Started
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-1.5 text-white/80 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="md:hidden mt-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden"
              >
                <div className="px-4 py-4 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-3 py-2.5 text-sm text-white/60 rounded-xl transition-colors hover:text-white hover:bg-white/[0.06]"
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="mt-2 px-3">
                    <a
                      href="/#contact"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium rounded-full bg-white text-black"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
