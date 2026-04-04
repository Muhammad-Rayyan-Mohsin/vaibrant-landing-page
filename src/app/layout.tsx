import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ChatFab } from "@/components/chat-fab";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaibrant | AI Services Agency",
  description: "We architect, build, and deploy AI systems that drive real business outcomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link
          rel="preload"
          as="video"
          href="https://jjn46rcnnayepb32.public.blob.vercel-storage.com/vortex-walk.mp4"
          type="video/mp4"
        />
      </head>
      <body className="min-h-dvh bg-background text-foreground">
        <SmoothScroll>{children}</SmoothScroll>
        <ChatFab />
      </body>
    </html>
  );
}
