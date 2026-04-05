import Link from "next/link";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Security", href: "/security" },
  { label: "Acceptable Use", href: "/acceptable-use" },
  { label: "DPA", href: "/dpa" },
  { label: "Data Rights", href: "/data-rights" },
  { label: "Data Deletion", href: "/data-deletion" },
];

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-lg font-bold tracking-tighter text-foreground">
              vaibrant
            </span>
            <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted">
              AI Agency
            </span>
          </Link>
          <Link
            href="/"
            className="text-xs text-muted hover:text-foreground transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
        {children}
      </main>

      {/* Footer with legal nav */}
      <footer className="border-t border-border/50 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted mb-5">
            Legal &amp; Compliance
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-border/30 flex items-center justify-between">
            <p className="text-[10px] font-mono text-muted/50">
              &copy; {new Date().getFullYear()} Vaibrant Agency. All rights
              reserved.
            </p>
            <p className="text-[10px] font-mono text-muted/50">
              info@vaibrant.co
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
