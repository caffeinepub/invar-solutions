import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Us", href: "#why-us" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            className="flex items-center gap-2.5 group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-cyan/20 rounded-md animate-pulse-glow" />
              <Zap className="relative w-5 h-5 text-cyan" strokeWidth={2.5} />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              Invar<span className="text-cyan"> Solutions</span>
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-body text-muted-foreground hover:text-cyan transition-colors duration-200 rounded-md hover:bg-cyan/5"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex">
            <Button
              onClick={() => handleNavClick("#contact")}
              className="bg-cyan text-navy-deep hover:bg-cyan-bright font-semibold text-sm px-5 py-2 h-9 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-200"
            >
              Get Free Analysis
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-deep/98 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-muted-foreground hover:text-cyan hover:bg-cyan/5 rounded-md transition-colors text-sm font-body"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 mt-2 border-t border-border">
              <Button
                onClick={() => handleNavClick("#contact")}
                className="w-full bg-cyan text-navy-deep hover:bg-cyan-bright font-semibold text-sm shadow-cyan-glow"
              >
                Get Free Analysis
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
