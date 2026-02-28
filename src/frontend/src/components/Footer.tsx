import { Github, Zap } from "lucide-react";
import { SiLinkedin, SiX } from "react-icons/si";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Us", href: "#why-us" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-deep border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-cyan/20 rounded-md" />
                <Zap className="relative w-5 h-5 text-cyan" strokeWidth={2.5} />
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                Invar<span className="text-cyan"> Solutions</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm font-body leading-relaxed max-w-xs">
              We design AI agents and automation systems that eliminate
              inefficiencies, cut costs, and free your team to focus on what
              matters.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border hover:border-cyan/40 flex items-center justify-center text-muted-foreground hover:text-cyan transition-all duration-200"
                aria-label="Twitter/X"
              >
                <SiX className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border hover:border-cyan/40 flex items-center justify-center text-muted-foreground hover:text-cyan transition-all duration-200"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border hover:border-cyan/40 flex items-center justify-center text-muted-foreground hover:text-cyan transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-widest mb-4 text-cyan/60">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-cyan text-sm font-body transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-widest mb-4 text-cyan/60">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Process Analysis & Mapping",
                "Custom AI Agents",
                "Workflow Automation",
                "Data Pipelines",
                "Ongoing Support",
              ].map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    onClick={() => handleNavClick("#services")}
                    className="text-muted-foreground hover:text-cyan text-sm font-body transition-colors duration-200 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-body">
            © {currentYear} Invar Solutions. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs font-body">
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan/60 hover:text-cyan transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
