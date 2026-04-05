import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your Data Rights",
};

const rights = [
  { title: "Right of Access", ref: "GDPR Art. 15 · CCPA §1798.100", description: "Request a copy of all personal data we hold about you, including processing purposes, categories, recipients, and retention periods.", how: "Submit a request via email. Data provided in JSON or CSV within 30 days." },
  { title: "Right to Rectification", ref: "GDPR Art. 16 · CCPA §1798.106", description: "Correct inaccurate or incomplete personal data.", how: "Update in account settings or submit via email." },
  { title: "Right to Erasure", ref: "GDPR Art. 17 · CCPA §1798.105", description: "Request deletion of your personal data ('right to be forgotten').", how: "Self-service in account settings or via email. See Data Deletion page." },
  { title: "Right to Restrict Processing", ref: "GDPR Art. 18", description: "Limit processing in certain circumstances (e.g., while verifying accuracy).", how: "Submit via email specifying which processing to restrict." },
  { title: "Right to Data Portability", ref: "GDPR Art. 20", description: "Receive your data in a structured, machine-readable format.", how: "Use the data export feature or submit via email." },
  { title: "Right to Object", ref: "GDPR Art. 21", description: "Object to processing based on legitimate interests. Absolute right for direct marketing.", how: "Submit via email. For marketing, use the unsubscribe link." },
  { title: "Automated Decision-Making Rights", ref: "GDPR Art. 22", description: "Not be subject to solely automated decisions with significant effects. Right to human intervention, express your view, and contest decisions.", how: "Contact us via email. Our AI features require human approval for all significant decisions." },
  { title: "Right to Opt-Out", ref: "CCPA §1798.120", description: "Opt out of sale or sharing of personal information. Note: We do not sell or share personal information.", how: "We honor GPC signals. Explicit requests accepted via email." },
  { title: "Right to Non-Discrimination", ref: "CCPA §1798.125", description: "Exercise privacy rights without discriminatory treatment.", how: "Automatically protected. Contact us if you believe otherwise." },
];

export default function DataRightsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4 pb-8 border-b border-border/30">
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted">Privacy</p>
        <h1 className="text-4xl font-bold tracking-tighter">Your Data Rights</h1>
        <div className="flex gap-6 text-xs font-mono text-muted">
          <span>Last Updated: April 5, 2026</span>
        </div>
      </header>

      <div className="space-y-10 text-sm leading-relaxed text-white/70">
        <section className="space-y-4">
          <p>Depending on your location, you have specific rights regarding your personal data. This page explains each right and how to exercise it.</p>
          <div className="bg-surface border border-border/50 rounded-xl p-5">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted mb-2">How to Submit a Request</p>
            <p className="text-white/80">Email <strong>privacy@vaibrant.agency</strong> with your name, account email, and the right you wish to exercise. We verify identity before processing.</p>
            <p className="text-white/60 mt-2 text-xs">Response within 30 days (extendable by 60 days for complex requests).</p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-bold tracking-tight text-foreground">Your Rights</h2>
          {rights.map((right) => (
            <div key={right.title} className="bg-surface border border-border/50 rounded-2xl p-6 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold text-foreground">{right.title}</h3>
                <span className="text-[9px] font-mono text-muted whitespace-nowrap">{right.ref}</span>
              </div>
              <p>{right.description}</p>
              <div className="pt-2 border-t border-border/30">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted mb-1">How to Exercise</p>
                <p className="text-white/60">{right.how}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">Right to Complain</h2>
          <p>If in the EEA, UK, or Switzerland, you may lodge a complaint with your local data protection supervisory authority. We encourage contacting us first.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">Related</h2>
          <div className="flex gap-4 flex-wrap">
            <Link href="/data-deletion" className="bg-surface border border-border/50 rounded-xl px-5 py-3 text-xs font-medium text-foreground hover:bg-white/[0.04] transition-colors">Data Deletion</Link>
            <Link href="/privacy" className="bg-surface border border-border/50 rounded-xl px-5 py-3 text-xs font-medium text-foreground hover:bg-white/[0.04] transition-colors">Privacy Policy</Link>
            <Link href="/dpa" className="bg-surface border border-border/50 rounded-xl px-5 py-3 text-xs font-medium text-foreground hover:bg-white/[0.04] transition-colors">DPA</Link>
          </div>
        </section>
      </div>
    </article>
  );
}
