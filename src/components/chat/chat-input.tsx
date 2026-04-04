"use client";

import { useRef, useEffect } from "react";
import { PaperPlaneRight } from "@phosphor-icons/react";

interface ChatInputProps {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
  disabled: boolean;
}

export function ChatInput({ value, onChange, onSend, disabled }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  }, [value]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!disabled && value.trim()) onSend();
    }
  }

  return (
    <div className="sticky bottom-0 bg-background/80 backdrop-blur-xl border-t border-border/50">
      <div className="mx-auto max-w-2xl px-4 py-3">
        <div className="flex items-center gap-2.5 rounded-lg bg-surface border border-border px-3 py-1.5">
          <textarea
            ref={textareaRef}
            rows={1}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about our AI services..."
            disabled={disabled}
            className="flex-1 bg-transparent text-xs text-foreground placeholder:text-muted/50 resize-none outline-none max-h-32 py-1.5 leading-relaxed"
          />
          <button
            onClick={onSend}
            disabled={disabled || !value.trim()}
            className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background shrink-0 transition-opacity duration-200 disabled:opacity-20"
          >
            <PaperPlaneRight size={13} weight="bold" />
          </button>
        </div>
        <p className="text-center text-[9px] text-muted/40 mt-1.5 font-mono">
          Powered by Vaibrant AI
        </p>
      </div>
    </div>
  );
}
