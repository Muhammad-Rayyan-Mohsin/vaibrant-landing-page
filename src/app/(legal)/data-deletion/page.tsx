import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Deletion",
};

export default function DataDeletionPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4 pb-8 border-b border-border/30">
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted">Privacy</p>
        <h1 className="text-4xl font-bold tracking-tighter">Data Deletion</h1>
        <div className="flex gap-6 text-xs font-mono text-muted">
          <span>Last Updated: April 5, 2026</span>
        </div>
      </header>

      <div className="space-y-10 text-sm leading-relaxed text-white/70">
        <section className="space-y-4">
          <p>This page explains how to request deletion of your data from Vaibrant and all our platforms, including data obtained through third-party platform APIs. This serves as our Data Deletion Instructions as required by Meta Platform Terms.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">What Gets Deleted</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong className="text-white/90">Account Data:</strong> Name, email, organization info, credentials</li>
            <li><strong className="text-white/90">Platform Data:</strong> All data obtained through third-party APIs (Meta, Google, etc.)</li>
            <li><strong className="text-white/90">AI Data:</strong> Prompts, generated content, recommendations, workflow data</li>
            <li><strong className="text-white/90">Usage Data:</strong> Interaction logs, feature usage, session data</li>
            <li><strong className="text-white/90">Preferences:</strong> Settings, notification preferences, configurations</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">How to Request</h2>
          <div className="grid gap-4">
            <div className="bg-surface border border-border/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center text-xs font-bold">1</span>
                <h3 className="text-base font-semibold text-foreground">Self-Service (Recommended)</h3>
              </div>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Log in to your account</li>
                <li>Navigate to <strong className="text-white/90">Settings</strong></li>
                <li>Click <strong className="text-white/90">&quot;Delete My Account and Data&quot;</strong></li>
                <li>Confirm by entering your email</li>
                <li>Receive confirmation with tracking reference</li>
              </ol>
            </div>

            <div className="bg-surface border border-border/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center text-xs font-bold">2</span>
                <h3 className="text-base font-semibold text-foreground">Email Request</h3>
              </div>
              <p>Email <strong className="text-white/90">privacy@vaibrant.agency</strong> with subject &quot;Data Deletion Request,&quot; your name, account email, and whether you want full deletion or specific categories.</p>
            </div>

            <div className="bg-surface border border-border/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center text-xs font-bold">3</span>
                <h3 className="text-base font-semibold text-foreground">Via Meta / Third-Party Platform</h3>
              </div>
              <p>Remove Vaibrant from your connected apps in the platform&apos;s settings (e.g., Facebook &gt; Settings &gt; Apps and Websites). This revokes access tokens and triggers our automated deletion process.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">Timeline</h2>
          <div className="bg-surface border border-border/50 rounded-xl p-5 space-y-3">
            {[
              ["Request acknowledgment", "Within 48 hours"],
              ["Active systems deletion", "Within 30 days"],
              ["Backup systems deletion", "Within 90 days"],
              ["Sub-processor propagation", "Within 120 days"],
              ["Deletion confirmation", "Upon completion"],
            ].map(([label, time]) => (
              <div key={label} className="flex items-center justify-between py-2 border-b border-border/20 last:border-0">
                <span className="text-white/80">{label}</span>
                <span className="font-mono text-xs text-muted">{time}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">Data We May Retain</h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li><strong className="text-white/90">Billing Records:</strong> Required by tax law (typically 7 years)</li>
            <li><strong className="text-white/90">Legal Compliance:</strong> Data required to resolve disputes or enforce agreements</li>
            <li><strong className="text-white/90">Security Logs:</strong> Limited anonymized records for incident investigation</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">Tracking</h2>
          <p>After submitting, you receive a confirmation email with a tracking reference, a status page URL, and a final confirmation when complete. Requests via Meta app removal receive a status URL and confirmation code per Meta&apos;s Data Deletion Callback protocol.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">Questions</h2>
          <div className="bg-surface border border-border/50 rounded-xl p-5">
            <p className="text-white/80">Contact: <strong>privacy@vaibrant.agency</strong></p>
            <p className="text-white/60 mt-2 text-xs">See also: <Link href="/data-rights" className="text-foreground underline underline-offset-4">Your Data Rights</Link> · <Link href="/privacy" className="text-foreground underline underline-offset-4">Privacy Policy</Link></p>
          </div>
        </section>
      </div>
    </article>
  );
}
