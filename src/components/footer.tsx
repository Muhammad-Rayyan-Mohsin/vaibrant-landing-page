const footerLinks = {
  Services: ["AI Strategy", "Custom Models", "Automation", "Integration"],
  Company: ["About", "Case Studies", "Blog", "Careers"],
  Legal: ["Privacy", "Terms", "Security"],
};

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/50 py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <span className="text-lg font-semibold tracking-tight">
              vaibrant
            </span>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-[30ch]">
              AI services agency building intelligent systems that
              drive measurable business outcomes.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="md:col-span-2">
              <span className="text-xs font-mono uppercase tracking-widest text-muted">
                {category}
              </span>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-xs text-muted">
            2026 Vaibrant. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-muted transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-xs text-muted transition-colors hover:text-foreground"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-xs text-muted transition-colors hover:text-foreground"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
