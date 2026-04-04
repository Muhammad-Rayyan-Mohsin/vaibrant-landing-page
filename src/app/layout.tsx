import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ChatFab } from "@/components/chat-fab";
import "./globals.css";

const generalSans = localFont({
  src: "../../public/fonts/GeneralSans-Variable.woff2",
  variable: "--font-general-sans",
  display: "swap",
  weight: "200 700",
});

const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: "300 900",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
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
      className={`${generalSans.variable} ${satoshi.variable} ${jetbrainsMono.variable} antialiased`}
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
