"use client";

import { usePathname } from "next/navigation";
import { ChatCircleDots } from "@phosphor-icons/react";

export function ChatFab() {
  const pathname = usePathname();

  // Hide on the chat page itself
  if (pathname === "/chat") return null;

  return (
    <a
      href="/chat"
      aria-label="Chat with Vaibrant AI"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-foreground text-background text-xs font-medium shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:scale-105 active:scale-[0.97] transition-transform duration-200"
    >
      <ChatCircleDots size={18} weight="fill" />
      <span className="hidden sm:inline">Ask AI</span>
    </a>
  );
}
