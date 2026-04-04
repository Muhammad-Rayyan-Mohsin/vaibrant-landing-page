"use client";

import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";

const team = [
  {
    name: "Muhammad Rayyan Mohsin",
    role: "Head of Neural Architectures",
    focus: "Generative Logic & Ethics",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcoQ4pQog_VLAWJAIPsHTTXciWKlkpB_zCq4vSdN2X-i06HRzszi2BiIQ6RHjwMJFB-8VCx8NCbE25n8Z6l9deP4ULuD1GNdNvOeWppUrGlf4ZdRyGuBIqNaUSi_UTdhmz1yt79PuhNGfuNyNezZbg1vuCQpYPu1g8ITOFsg5qqoLH-LBr77IgGPfnV-S40C01UK0JW7305BR57O5l2rgGCRD61plgQABRqXPObHrG9QNAqObYnUSadUCFSvev_493m9dcwVsY8g0",
    offset: false,
  },
  {
    name: "Usman Abbas",
    role: "Lead Systems Designer",
    focus: "Recursive Optimization",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBi3Kk_YDeCTAIevUwhYScL2MkVGz8J43FkHsJiGyBxIE-7Rk6rglWRweSk27mJbn3HGwmTLuiF5FJA_mDEhWW7Sb1aJmQFfYPTydeNJaL3jJx_pLK1lKs8PPb2ahwjon8vEssjVX3KjpCYJn33Vehy13qKSUQWJmjGRwHw_oWfOZ3_3dFI0W54gOBnvVDYNC3ZGT21eNrCgimEvozph3E8p50uQ43GUn1NkxEw3nPMBWcgysE0Nz3fdGeSFDJpFTu1cdabXg_YVic",
    offset: true,
  },
  {
    name: "Abdullah Nadeem",
    role: "Director of Cognitive Strategy",
    focus: "Synthetic Humanics",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIzHI4gL9dQUyfdsixd3nus4hnKQNUyHy2CBSvQyJs102COpyIcR026u_kLt0RPe8PfU80oRSsLE6TvHdBTmm6pveu-nBDFo-VGy4C0GoGDQ3EiOWwjrksI9pkcPKMCY4vTXSF_U-WL18907KWyc_4zYhKc1zVrz5ACk0BDGyk2suPdGGGFos1MZ0_B8OCnXv7JJuINLY9KBqQBiKvD2Z2Ee-9o9hzQHGhs3phG-2x1EOEWfGimcm6A8NECyppQ9G7-cBbofrdKrw",
    offset: false,
  },
  {
    name: "Haider Farooq",
    role: "Principal AI Ethicist",
    focus: "Algorithmic Accountability",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-8_d7ul2KfG2sjJzbhRtKzkpLwM9zhsLUbyctRatTrWsicRqO5wGgs3i7OgzEfyW1vrzVUGVhrY5kKa4S9b1Y3qZt9ixs1yo4S0YiSQNHgH7TdjaxKmkc-ivPO9CGEbRXlOC1LCykZ89dDgnoQ9DVLgIFul0u3dZTjtTPe9qm5aruRvNjLfhh5FH4Dkq1zYbDdLVPCEWsUqjCcIWtdiNJZcszsNHd1vZJ8hJIv-bBhvFDJRlZJRK5ABimblUCj-PexxbRyJFJb_c",
    offset: true,
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        {/* Subtle radial glow */}
        <div
          className="pointer-events-none fixed inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.03) 0%, transparent 50%)",
          }}
        />

        {/* Header */}
        <section className="mx-auto max-w-[1400px] px-6 md:px-12 mb-24">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/[0.06] pb-16">
              <div className="max-w-2xl">
                <span className="text-[0.65rem] font-mono tracking-[0.4em] uppercase text-muted block mb-6">
                  Our Foundation
                </span>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] text-foreground mb-8">
                  THE COLLECTIVE //{" "}
                  <span className="text-muted">HUMAN INTELLIGENCE</span>
                </h1>
                <p className="text-xl text-muted font-light leading-relaxed">
                  Meet the architects of the cognitive frontier. A convergence
                  of neural engineers, ethicists, and theorists defining the
                  next epoch of intelligence.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Team Grid */}
        <section className="mx-auto max-w-[1400px] px-6 md:px-12 pb-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div
                  className={`group ${member.offset ? "lg:mt-16" : ""}`}
                >
                  {/* Portrait */}
                  <div className="relative overflow-hidden aspect-[3/4] rounded-lg mb-6 bg-surface transition-transform duration-700 group-hover:scale-[0.98]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                    {/* Hover arrow */}
                    <a
                      href="#"
                      className="absolute top-5 right-5 p-3 rounded-full bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white hover:text-background"
                    >
                      <ArrowUpRight size={16} weight="bold" />
                    </a>
                  </div>

                  {/* Info */}
                  <span className="text-[0.6rem] font-mono tracking-[0.3em] uppercase text-muted block mb-2">
                    {member.role}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                    {member.name}
                  </h3>
                  <div className="h-px w-12 bg-white/[0.1] mb-4 transition-all duration-500 group-hover:w-full" />
                  <p className="text-[0.65rem] font-mono tracking-wider uppercase text-muted/70">
                    Intelligence Focus: {member.focus}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-[#0e0e0e] py-32 border-t border-white/[0.06] overflow-hidden relative">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative z-10">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-12 md:mb-0">
                READY TO TRANSCEND?
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="flex flex-col items-center md:items-end gap-6">
                <p className="text-muted max-w-sm text-center md:text-right text-sm leading-relaxed">
                  Our collective is expanding. We are seeking the next
                  generation of cognitive architects.
                </p>
                <a
                  href="/#contact"
                  className="group inline-flex items-center gap-4 bg-foreground text-background px-10 py-5 rounded-full text-xs font-semibold uppercase tracking-widest hover:scale-105 transition-transform duration-300 active:scale-[0.97]"
                >
                  View Open Briefs
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </FadeIn>
          </div>
          {/* Ambient glow */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />
        </section>
      </main>
      <Footer />
    </>
  );
}
