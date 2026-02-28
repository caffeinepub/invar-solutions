import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "AutoFlow transformed our invoice processing from a 3-day manual nightmare into a 4-hour automated pipeline. We've cut operational costs by 70% and completely eliminated data entry errors. The ROI was evident within the first month.",
    name: "Sarah Mitchell",
    title: "CFO, Nexora Financial Group",
    initials: "SM",
    color: "from-cyan/30 to-blue-500/20",
  },
  {
    quote:
      "The custom AI agent they built for our patient scheduling system handles over 2,000 bookings per week autonomously. Our administrative staff now focuses entirely on patient experience rather than logistics. Genuinely game-changing.",
    name: "Dr. James Okafor",
    title: "Operations Director, CareEdge Health",
    initials: "JO",
    color: "from-emerald-500/30 to-cyan/20",
  },
  {
    quote:
      "We were skeptical about AI automation, but AutoFlow's discovery process was so thorough they identified bottlenecks we didn't even know we had. Our order fulfillment speed increased 8x and returns disputes dropped to near zero.",
    name: "Priya Sharma",
    title: "VP Operations, Elevate Commerce",
    initials: "PS",
    color: "from-violet-500/30 to-cyan/20",
  },
];

export function TestimonialsSection() {
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
      className="py-24 lg:py-32 bg-navy-deep relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-cyan/4 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs font-mono font-medium tracking-widest uppercase mb-4">
            Testimonials
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-lg font-body">
            Real results from real clients who transformed their operations with
            AutoFlow.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`reveal reveal-delay-${i + 1}`}>
              <div className="relative p-8 rounded-2xl border border-border hover:border-cyan/25 bg-navy-card transition-all duration-300 group h-full overflow-hidden">
                {/* Gradient bg */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-20 pointer-events-none`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Quote icon */}
                  <Quote
                    className="w-8 h-8 text-cyan/30 mb-5 flex-shrink-0"
                    strokeWidth={1.5}
                  />

                  {/* Quote text */}
                  <p className="text-foreground/85 font-body text-base leading-relaxed flex-1 mb-6 italic">
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <Avatar className="w-11 h-11">
                      <AvatarFallback
                        className={`bg-gradient-to-br ${t.color} text-foreground font-display font-bold text-sm border border-cyan/20`}
                      >
                        {t.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-display font-bold text-foreground text-sm">
                        {t.name}
                      </div>
                      <div className="text-muted-foreground text-xs font-body">
                        {t.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
