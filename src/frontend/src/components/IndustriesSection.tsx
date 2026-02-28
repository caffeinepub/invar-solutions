import {
  HeartPulse,
  Landmark,
  Scale,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";
import { useEffect, useRef } from "react";

const industries = [
  {
    icon: Landmark,
    name: "Finance",
    description:
      "Automate compliance checks, fraud detection, reporting, and loan processing workflows.",
    highlight: "Compliance & Risk Automation",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    description:
      "Streamline patient scheduling, claims processing, EHR data entry, and administrative tasks.",
    highlight: "Patient Operations",
  },
  {
    icon: ShoppingCart,
    name: "E-commerce",
    description:
      "Automate inventory management, order processing, returns handling, and customer support.",
    highlight: "Order & Inventory Ops",
  },
  {
    icon: Truck,
    name: "Logistics",
    description:
      "Optimize route planning, shipment tracking, warehousing automation, and supplier comms.",
    highlight: "Supply Chain Intelligence",
  },
  {
    icon: Scale,
    name: "Legal",
    description:
      "Automate document review, contract analysis, deadline tracking, and due diligence processes.",
    highlight: "Document Intelligence",
  },
  {
    icon: Users,
    name: "HR & Recruiting",
    description:
      "Automate candidate screening, onboarding workflows, payroll processing, and compliance tracking.",
    highlight: "Talent Operations",
  },
];

export function IndustriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            for (const el of entry.target.querySelectorAll<HTMLElement>(
              ".reveal",
            )) {
              el.classList.add("visible");
            }
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="industries"
      className="py-24 lg:py-32 relative"
      style={{
        background: "oklch(0.12 0.025 245)",
        isolation: "isolate",
        overflow: "clip",
      }}
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs font-mono font-medium tracking-widest uppercase mb-4">
            Industries
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            We Automate Across{" "}
            <span className="gradient-text">Every Sector</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-lg font-body">
            Industry-specific automation expertise across 6 major verticals —
            each with battle-tested playbooks.
          </p>
        </div>

        {/* Industries grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className={`reveal reveal-delay-${(i % 3) + 1}`}
              >
                <div className="group relative p-6 rounded-2xl bg-navy-deep/80 border border-border hover:border-cyan/30 transition-all duration-300 cursor-default overflow-hidden">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan/8 to-transparent pointer-events-none" />

                  <div className="relative z-10 flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center group-hover:bg-cyan/15 group-hover:border-cyan/40 transition-all duration-300">
                      <Icon className="w-6 h-6 text-cyan" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-cyan transition-colors duration-200">
                        {industry.name}
                      </h3>
                      <p className="text-muted-foreground text-sm font-body leading-relaxed mb-3">
                        {industry.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan/60" />
                        {industry.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
