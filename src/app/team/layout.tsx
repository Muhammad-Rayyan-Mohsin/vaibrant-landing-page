import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Collective | Vaibrant",
  description:
    "Meet the architects behind Vaibrant's AI systems — the engineers, strategists, and builders defining the next epoch of business intelligence.",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
