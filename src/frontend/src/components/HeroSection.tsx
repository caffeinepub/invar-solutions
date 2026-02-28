import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-banner.dim_1600x700.jpg')",
        }}
      />

      {/* Rich layered overlays */}
      <div className="absolute inset-0 bg-navy-deep/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/30 via-transparent to-navy-deep" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-transparent to-navy-deep/80" />

      {/* Fine grid — refined opacity */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.78 0.18 195) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.18 195) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Atmospheric glows — repositioned for asymmetry */}
      <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] bg-cyan/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[8%] w-[350px] h-[350px] bg-cyan/6 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-cyan/25 bg-cyan/8 text-cyan text-xs font-mono font-medium tracking-[0.2em] uppercase mb-10 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
          AI Agents &amp; Automation Agency
        </div>

        {/* Main headline — editorial typographic treatment */}
        <div className="animate-fade-in-up">
          <h1 className="font-display font-extrabold text-foreground leading-[1.0] tracking-[-0.03em]">
            {/* First line — large but secondary weight visually */}
            <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground/70 mb-1">
              Automate. Optimize.
            </span>
            {/* Hero word — monument scale */}
            <span className="block text-7xl sm:text-8xl lg:text-9xl xl:text-[11rem] gradient-text text-glow-cyan leading-none">
              Grow.
            </span>
          </h1>
        </div>

        {/* Subheadline — higher contrast, tighter max-width */}
        <p className="max-w-xl mx-auto text-base sm:text-lg text-foreground/65 font-body leading-relaxed mt-8 mb-10 animate-fade-in-up delay-200">
          We design AI agents and automation systems that eliminate
          inefficiencies, cut costs, and free your team to focus on what
          matters.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <Button
            onClick={() => scrollTo("contact")}
            size="lg"
            className="bg-cyan text-navy-deep hover:bg-cyan-bright font-bold text-sm px-8 h-12 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 group rounded-full"
          >
            Get a Free Analysis
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            onClick={() => scrollTo("services")}
            size="lg"
            variant="outline"
            className="border-foreground/20 text-foreground/70 hover:text-cyan hover:bg-cyan/8 hover:border-cyan/40 font-medium text-sm px-8 h-12 transition-all duration-300 rounded-full"
          >
            See Our Services
          </Button>
        </div>

        {/* Stats row — with dividers */}
        <div className="mt-20 flex items-center justify-center gap-0 max-w-md mx-auto animate-fade-in-up delay-500">
          {[
            { value: "80%", label: "Cost Reduction" },
            { value: "10×", label: "Faster Execution" },
            { value: "0", label: "Human Errors" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <div className="text-center px-8">
                <div className="font-display text-2xl sm:text-3xl font-extrabold gradient-text leading-none">
                  {stat.value}
                </div>
                <div className="text-[11px] text-foreground/40 font-mono uppercase tracking-widest mt-1.5">
                  {stat.label}
                </div>
              </div>
              {i < 2 && (
                <div className="w-px h-10 bg-foreground/15 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollTo("services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-foreground/30 hover:text-cyan transition-colors duration-300 group"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em]">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}
