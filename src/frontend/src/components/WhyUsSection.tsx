import { DollarSign, Gauge, ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  {
    icon: DollarSign,
    value: "80%",
    numericProgress: 80,
    label: "Cost Reduction",
    description:
      "Eliminate repetitive manual tasks and redirect your workforce to high-value strategic work. Clients average 80% reduction in operational costs within the first year.",
    gradientFrom: "oklch(0.65 0.18 160)",
    gradientTo: "oklch(0.78 0.18 195)",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    iconColor: "text-emerald-400",
    glowColor: "oklch(0.65 0.18 160 / 0.15)",
  },
  {
    icon: Gauge,
    value: "10×",
    numericProgress: 100,
    label: "Faster Execution",
    description:
      "Automated processes run 24/7 without breaks, fatigue, or slowdowns. What takes your team hours executes in minutes — consistently and reliably.",
    gradientFrom: "oklch(0.78 0.18 195)",
    gradientTo: "oklch(0.65 0.2 220)",
    iconBg: "bg-cyan/10 border-cyan/20",
    iconColor: "text-cyan",
    glowColor: "oklch(0.78 0.18 195 / 0.2)",
    featured: true,
  },
  {
    icon: ShieldCheck,
    value: "Zero",
    numericProgress: 100,
    label: "Human Error",
    description:
      "Precision-driven AI agents deliver 100% consistent outputs every single time — no typos, no missed steps, no off days. Ever.",
    gradientFrom: "oklch(0.65 0.2 290)",
    gradientTo: "oklch(0.78 0.18 195)",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    iconColor: "text-violet-400",
    glowColor: "oklch(0.65 0.2 290 / 0.15)",
  },
];

export function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
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

    const barObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            for (const bar of entry.target.querySelectorAll<HTMLElement>(
              ".progress-bar",
            )) {
              const target = bar.getAttribute("data-width");
              if (target) {
                setTimeout(() => {
                  bar.style.width = target;
                }, 300);
              }
            }
          }
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) sectionObserver.observe(sectionRef.current);
    if (barsRef.current) barObserver.observe(barsRef.current);

    return () => {
      sectionObserver.disconnect();
      barObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="why-us"
      className="py-24 lg:py-32 bg-navy-deep relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Central glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-cyan/4 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/25 bg-cyan/8 text-cyan text-xs font-mono font-medium tracking-[0.15em] uppercase mb-5">
            Why Choose Us
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            The Numbers Speak{" "}
            <span className="gradient-text">For Themselves</span>
          </h2>
          <p className="max-w-xl mx-auto text-foreground/55 text-base font-body leading-relaxed">
            Real, measurable outcomes delivered to clients across every industry
            we serve.
          </p>
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5" ref={barsRef}>
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`reveal reveal-delay-${i + 1} ${stat.featured ? "md:-translate-y-5" : ""}`}
              >
                <div
                  className={`relative p-8 rounded-2xl h-full overflow-hidden transition-all duration-300 group ${
                    stat.featured
                      ? "border border-cyan/30 bg-gradient-to-br from-white/[0.06] to-transparent"
                      : "border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-transparent hover:border-white/[0.1]"
                  }`}
                  style={
                    stat.featured
                      ? {
                          boxShadow: `0 0 50px ${stat.glowColor}, 0 0 0 0 transparent`,
                        }
                      : {}
                  }
                >
                  {/* Subtle gradient shimmer on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                    style={{
                      background: `radial-gradient(ellipse at 20% 50%, ${stat.glowColor}, transparent 70%)`,
                    }}
                  />

                  {/* Featured label */}
                  {stat.featured && (
                    <div className="absolute top-5 right-5 px-2.5 py-0.5 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-[10px] font-mono font-medium tracking-widest uppercase">
                      Top Result
                    </div>
                  )}

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl ${stat.iconBg} border flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}
                    >
                      <Icon
                        className={`w-5 h-5 ${stat.iconColor}`}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Stat number */}
                    <div
                      className="font-display font-extrabold leading-none mb-1"
                      style={{
                        fontSize: "clamp(3rem, 8vw, 5rem)",
                        background: `linear-gradient(135deg, ${stat.gradientFrom}, ${stat.gradientTo})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {stat.value}
                    </div>

                    {/* Progress bar */}
                    <div className="h-px w-full bg-white/8 rounded-full mt-3 mb-4 overflow-hidden">
                      <div
                        className="progress-bar h-full rounded-full transition-all duration-1000 ease-out"
                        data-width={`${stat.numericProgress}%`}
                        style={{
                          width: "0%",
                          background: `linear-gradient(90deg, ${stat.gradientFrom}, ${stat.gradientTo})`,
                        }}
                      />
                    </div>

                    <h3 className="font-display text-lg font-bold text-foreground mb-3">
                      {stat.label}
                    </h3>

                    <p className="text-foreground/45 text-sm font-body leading-relaxed">
                      {stat.description}
                    </p>
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
