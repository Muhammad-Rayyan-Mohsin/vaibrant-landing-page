"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarBlank, EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react";
import { useEffect } from "react";

// TODO: Replace these with your real links
const CALENDLY_URL = "https://calendly.com/vaibrant/strategy-call";
const EMAIL = "hello@vaibrant.agency";
const WHATSAPP_NUMBER = "1234567890"; // just digits, no +

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const options = [
  {
    icon: CalendarBlank,
    label: "Book a Call",
    description: "Free 30-min strategy session",
    href: CALENDLY_URL,
    color: "bg-white text-black hover:bg-white/90",
  },
  {
    icon: EnvelopeSimple,
    label: "Send an Email",
    description: EMAIL,
    href: `mailto:${EMAIL}`,
    color: "bg-white/[0.06] text-foreground hover:bg-white/[0.1] border border-white/[0.1]",
  },
  {
    icon: WhatsappLogo,
    label: "WhatsApp",
    description: "Chat with us directly",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    color: "bg-white/[0.06] text-foreground hover:bg-white/[0.1] border border-white/[0.1]",
  },
];

export function ContactModal({ open, onClose }: ContactModalProps) {
  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            onClick={onClose}
          >
            <div
              className="relative w-full max-w-sm rounded-2xl border border-white/[0.1] bg-[#111111] p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors duration-200"
              >
                <X size={18} weight="bold" />
              </button>

              {/* Header */}
              <div className="mb-5">
                <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted/50">
                  Get in touch
                </span>
                <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground">
                  Let&apos;s talk about your AI roadmap
                </h3>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  Pick whichever works best for you.
                </p>
              </div>

              {/* Options */}
              <div className="flex flex-col gap-2.5">
                {options.map((opt) => (
                  <a
                    key={opt.label}
                    href={opt.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${opt.color}`}
                  >
                    <opt.icon
                      size={20}
                      weight="fill"
                      className="shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                    />
                    <div className="min-w-0">
                      <div className="text-sm font-medium leading-tight">{opt.label}</div>
                      <div className="text-[10px] opacity-60 leading-tight mt-0.5 truncate">
                        {opt.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
