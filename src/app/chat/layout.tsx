import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat with Vaibrant AI",
  description:
    "Ask our AI assistant about Vaibrant's AI agents, automation services, and how we can help your business.",
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
