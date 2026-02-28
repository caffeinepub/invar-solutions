import { BarChart3, Microscope, PenTool, Rocket } from "lucide-react";
import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    icon: Microscope,
    title: "Discovery",
    description:
      "We immerse ourselves in your business — interviewing stakeholders, mapping workflows, and identifying the highest-impact automation opportunities with clear ROI potential.",
    highlight: "Process deep-dive",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    description:
      "Our engineers architect the optimal solution — whether that's an AI agent, RPA script, or orchestrated workflow — with full technical specifications and integration plans.",
    highlight: "Solution architecture",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Build & Deploy",
    description:
      "We develop, test, and integrate the solution directly into your existing tech stack with zero disruption. Staged rollout ensures smooth adoption by your team.",
    highlight: "Seamless integration",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Monitor & Improve",
    description:
      "Post-deployment, we track performance metrics, catch edge cases, and continuously optimize — so your automation delivers compounding value over time.",
    highlight: "Continuous optimization",
  },
];

export function HowItWorksSection() {
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
      id="how-it-works"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "oklch(0.12 0.025 245)" }}
      ref={sectionRef}
    >
      {/* Grid decoration */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.78 0.18 195) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.18 195) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs font-mono font-medium tracking-widest uppercase mb-4">
            Our Process
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-lg font-body">
            A proven 4-step methodology that takes you from analysis to fully
            deployed automation in weeks, not months.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`reveal reveal-delay-${i + 1} relative`}
              >
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%_-_12px)] w-6 h-px bg-gradient-to-r from-cyan/40 to-cyan/20 z-20" />
                )}

                <div className="relative p-6 rounded-2xl bg-navy-deep/60 border border-border hover:border-cyan/30 transition-all duration-300 group h-full">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-4xl font-bold text-cyan/20 group-hover:text-cyan/40 transition-colors duration-300">
                      {step.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center group-hover:bg-cyan/15 group-hover:border-cyan/40 transition-all duration-300">
                      <Icon className="w-5 h-5 text-cyan" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-cyan transition-colors duration-200">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Highlight tag */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan/70 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan/60" />
                    {step.highlight}
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
