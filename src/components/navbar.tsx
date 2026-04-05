"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
];

interface NavbarProps {
  onContact?: () => void;
}

export function Navbar({ onContact }: NavbarProps) {
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
          <div className="flex items-center justify-center gap-2 w-fit mx-auto rounded-full bg-black/70 backdrop-blur-xl border border-white/[0.08] px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)] will-change-transform">
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
              <button
                onClick={onContact}
                className="px-4 py-1.5 text-[13px] font-medium rounded-full bg-white text-black hover:bg-white/90 transition-colors duration-200 ml-1"
              >
                Book a Call
              </button>
            </div>

            {/* Mobile toggle */}
            <div className="flex items-center gap-3">
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
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      onContact?.();
                    }}
                    className="mx-3 mt-2 py-2.5 text-sm font-medium rounded-xl bg-white text-black hover:bg-white/90 transition-colors"
                  >
                    Book a Call
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
