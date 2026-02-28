import { Bot, Database, Search, TrendingUp, Workflow } from "lucide-react";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: Search,
    title: "Process Analysis & Mapping",
    description:
      "We conduct deep-dive audits of your existing workflows to identify bottlenecks, redundancies, and prime automation opportunities.",
    tag: "Strategy",
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    description:
      "Purpose-built intelligent agents that reason, plan, and execute complex multi-step tasks autonomously — tailored to your specific business logic.",
    tag: "AI",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "End-to-end automation of repetitive business processes across your tools, apps, and departments — reducing manual effort to near zero.",
    tag: "Automation",
  },
  {
    icon: Database,
    title: "AI-Powered Data Pipelines",
    description:
      "Intelligent pipelines that collect, clean, transform, and deliver data exactly where you need it — enriched with ML-driven insights.",
    tag: "Data",
  },
  {
    icon: TrendingUp,
    title: "Ongoing Optimization & Support",
    description:
      "We monitor deployed automations, track KPIs, and continuously improve performance — so your systems get smarter over time.",
    tag: "Support",
  },
];

export function ServicesSection() {
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
      id="services"
      className="py-24 lg:py-32 bg-navy-deep relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/25 bg-cyan/8 text-cyan text-xs font-mono font-medium tracking-[0.15em] uppercase mb-5">
            Our Services
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Everything You Need to{" "}
            <span className="gradient-text">Automate at Scale</span>
          </h2>
          <p className="max-w-xl mx-auto text-foreground/55 text-base font-body leading-relaxed">
            From initial discovery to ongoing optimization — complete automation
            solutions that deliver measurable ROI.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            const index = String(i + 1).padStart(2, "0");
            return (
              <div
                key={service.title}
                className={`reveal reveal-delay-${(i % 3) + 1}`}
              >
                {/* Hand-crafted card — no shadcn Card wrapper */}
                <div className="relative h-full p-6 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-transparent hover:border-cyan/25 hover:from-cyan/[0.06] hover:to-transparent transition-all duration-400 group cursor-default overflow-hidden">
                  {/* Watermark index number */}
                  <span className="absolute -right-3 -top-4 font-mono text-[80px] font-black text-white/[0.035] group-hover:text-cyan/[0.06] leading-none select-none transition-colors duration-400 pointer-events-none">
                    {index}
                  </span>

                  {/* Inner glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{
                      boxShadow: "inset 0 0 40px oklch(0.78 0.18 195 / 0.04)",
                    }}
                  />

                  {/* Header row */}
                  <div className="flex items-start justify-between mb-5 relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-cyan/10 border border-cyan/15 flex items-center justify-center group-hover:bg-cyan/15 group-hover:border-cyan/30 group-hover:shadow-[0_0_16px_oklch(0.78_0.18_195/0.2)] transition-all duration-300 flex-shrink-0">
                      <Icon className="w-5 h-5 text-cyan" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-mono text-foreground/30 group-hover:text-cyan/50 font-medium tracking-[0.18em] uppercase pt-1 transition-colors duration-300">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-[1.05rem] font-bold text-foreground/90 group-hover:text-foreground mb-3 leading-snug relative z-10 transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/45 text-[0.8125rem] font-body leading-relaxed relative z-10">
                    {service.description}
                  </p>

                  {/* Bottom indicator line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
