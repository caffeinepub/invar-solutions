import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  Loader2,
  Mail,
  MessageSquare,
  Send,
  User,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { actor } = useActor();

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!actor) {
      toast.error("Not connected. Please try again.");
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await actor.submitContactForm(
        form.name.trim(),
        form.email.trim(),
        form.company.trim(),
        form.message.trim(),
      );

      if (result.__kind__ === "success") {
        toast.success("Message sent! We'll be in touch within 24 hours.", {
          description: "Thank you for reaching out to AutoFlow Agency.",
        });
        setForm(initialForm);
      } else {
        toast.error(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        background: "oklch(0.12 0.025 245)",
        isolation: "isolate",
        zIndex: 1,
      }}
      ref={sectionRef}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs font-mono font-medium tracking-widest uppercase mb-4">
              Get Started
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Ready to{" "}
              <span className="gradient-text">Automate Your Business?</span>
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground text-lg font-body">
              Tell us about your business. We'll analyse your processes and send
              you a free automation opportunity report.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left panel */}
            <div className="lg:col-span-2 reveal reveal-delay-1">
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    Let's Talk Automation
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    Our team will review your message and get back to you within
                    24 hours with an initial assessment and next steps.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: MessageSquare,
                      title: "Free Process Analysis",
                      desc: "We identify your top 3 automation opportunities at no cost.",
                    },
                    {
                      icon: Mail,
                      title: "24-Hour Response",
                      desc: "A senior automation specialist will respond within one business day.",
                    },
                    {
                      icon: Send,
                      title: "No Commitment Required",
                      desc: "Explore what's possible before making any decisions.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex gap-3">
                        <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center mt-0.5">
                          <Icon
                            className="w-4 h-4 text-cyan"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div>
                          <div className="font-display font-semibold text-foreground text-sm">
                            {item.title}
                          </div>
                          <div className="text-muted-foreground text-xs font-body mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 reveal reveal-delay-2">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="p-8 rounded-2xl bg-navy-deep/80 border border-border"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm font-body text-foreground/80 flex items-center gap-1.5"
                    >
                      <User className="w-3.5 h-3.5 text-cyan/60" />
                      Full Name <span className="text-cyan/60">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                      disabled={isSubmitting}
                      autoComplete="name"
                      className="bg-navy-mid border-border focus:border-cyan/50 focus:ring-cyan/30 placeholder:text-muted-foreground/50 font-body text-sm h-11"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-body text-foreground/80 flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-cyan/60" />
                      Email Address <span className="text-cyan/60">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      disabled={isSubmitting}
                      autoComplete="email"
                      className="bg-navy-mid border-border focus:border-cyan/50 focus:ring-cyan/30 placeholder:text-muted-foreground/50 font-body text-sm h-11"
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="space-y-2 mb-5">
                  <Label
                    htmlFor="company"
                    className="text-sm font-body text-foreground/80 flex items-center gap-1.5"
                  >
                    <Building2 className="w-3.5 h-3.5 text-cyan/60" />
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    disabled={isSubmitting}
                    autoComplete="organization"
                    className="bg-navy-mid border-border focus:border-cyan/50 focus:ring-cyan/30 placeholder:text-muted-foreground/50 font-body text-sm h-11"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2 mb-6">
                  <Label
                    htmlFor="message"
                    className="text-sm font-body text-foreground/80 flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-cyan/60" />
                    Tell Us About Your Process{" "}
                    <span className="text-cyan/60">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe the process you'd like to automate, current pain points, and what outcome you're hoping to achieve..."
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="bg-navy-mid border-border focus:border-cyan/50 focus:ring-cyan/30 placeholder:text-muted-foreground/50 font-body text-sm resize-none"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan text-navy-deep hover:bg-cyan-bright font-bold text-sm h-12 shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                <p className="text-center text-muted-foreground text-xs font-body mt-3">
                  No spam, ever. We respect your privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
