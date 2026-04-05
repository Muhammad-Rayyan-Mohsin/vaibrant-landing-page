"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Projects } from "@/components/projects";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { ContactModal } from "@/components/chat/contact-modal";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <>
      <Navbar onContact={openContact} />
      <main>
        <Hero onContact={openContact} />
        <Projects />
        <Features />
        <CTA onContact={openContact} />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
