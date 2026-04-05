import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
};

const cookieTable = [
  { name: "vb_session", provider: "Vaibrant", purpose: "Authentication session management", type: "Strictly Necessary", duration: "Session" },
  { name: "vb_csrf", provider: "Vaibrant", purpose: "Cross-site request forgery protection", type: "Strictly Necessary", duration: "Session" },
  { name: "vb_consent", provider: "Vaibrant", purpose: "Stores cookie consent preferences", type: "Strictly Necessary", duration: "1 year" },
  { name: "vb_prefs", provider: "Vaibrant", purpose: "User interface preferences", type: "Functional", duration: "1 year" },
  { name: "_ga", provider: "Google Analytics", purpose: "Unique visitor identification", type: "Analytics", duration: "2 years" },
  { name: "_ga_*", provider: "Google Analytics", purpose: "Session state persistence", type: "Analytics", duration: "2 years" },
];

export default function CookiePolicyPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4 pb-8 border-b border-border/30">
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted">Legal</p>
        <h1 className="text-4xl font-bold tracking-tighter">Cookie Policy</h1>
        <div className="flex gap-6 text-xs font-mono text-muted">
          <span>Effective: April 5, 2026</span>
          <span>Last Updated: April 5, 2026</span>
        </div>
      </header>

      <div className="space-y-10 text-sm leading-relaxed text-white/70">
        <section className="space-y-4">
          <p>This Cookie Policy explains how Vaibrant Agency uses cookies and similar tracking technologies on vaibrant.agency and our related platforms. Read alongside our <a href="/privacy" className="text-foreground underline underline-offset-4">Privacy Policy</a>.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">1. What Are Cookies</h2>
          <p>Cookies are small text files placed on your device when you visit a website. They store preferences, enable functionality, and help us understand usage. Similar technologies include local storage, session storage, and pixel tags.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">2. Cookie Categories</h2>
          <h3 className="text-base font-semibold text-foreground mt-6">Strictly Necessary</h3>
          <p>Required for the site to function — authentication, security, and consent storage. Cannot be disabled. No consent required under the ePrivacy Directive.</p>
          <h3 className="text-base font-semibold text-foreground mt-6">Functional</h3>
          <p>Store preferences to enhance your experience. The site functions without them. Consent required in the EU/EEA.</p>
          <h3 className="text-base font-semibold text-foreground mt-6">Analytics</h3>
          <p>Help us understand site usage with aggregated, anonymized data. Consent required in the EU/EEA.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">3. Cookies We Use</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-3 pr-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Name</th>
                  <th className="text-left py-3 pr-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Provider</th>
                  <th className="text-left py-3 pr-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Purpose</th>
                  <th className="text-left py-3 pr-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Type</th>
                  <th className="text-left py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Duration</th>
                </tr>
              </thead>
              <tbody>
                {cookieTable.map((cookie) => (
                  <tr key={cookie.name} className="border-b border-border/20">
                    <td className="py-3 pr-4 font-mono text-white/80">{cookie.name}</td>
                    <td className="py-3 pr-4 text-white/60">{cookie.provider}</td>
                    <td className="py-3 pr-4 text-white/60">{cookie.purpose}</td>
                    <td className="py-3 pr-4">
                      <span className={`text-[9px] font-mono uppercase tracking-[0.15em] px-2 py-0.5 rounded-full border ${
                        cookie.type === "Strictly Necessary" ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" :
                        cookie.type === "Functional" ? "text-blue-400 bg-blue-500/10 border-blue-500/20" :
                        "text-amber-400 bg-amber-500/10 border-amber-500/20"
                      }`}>{cookie.type}</span>
                    </td>
                    <td className="py-3 font-mono text-white/60">{cookie.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">4. Managing Preferences</h2>
          <p>A consent banner lets you accept or reject non-essential cookies on first visit. Change preferences anytime via the cookie settings link in our footer. Non-essential cookies are blocked until you consent (GDPR/ePrivacy compliant).</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">5. Browser Controls</h2>
          <p>Most browsers let you manage cookies in their settings. Blocking all cookies may affect functionality.</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Chrome: Settings &gt; Privacy and Security &gt; Cookies</li>
            <li>Firefox: Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
            <li>Safari: Preferences &gt; Privacy &gt; Manage Website Data</li>
            <li>Edge: Settings &gt; Cookies and Site Permissions</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">6. Global Privacy Control</h2>
          <p>We honor GPC browser signals as a valid opt-out for non-essential cookies and data sharing (CCPA/CPRA compliant).</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">7. Contact</h2>
          <p>Questions about cookies: <strong className="text-white/90">privacy@vaibrant.agency</strong></p>
        </section>
      </div>
    </article>
  );
}
