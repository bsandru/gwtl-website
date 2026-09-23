import { ScrollHighlightText } from "@/components/motion";

export function PositioningStrip() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-brand-navy">
      {/* Subtle glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px]">
          <div className="h-full w-full rounded-full bg-brand-teal/15 blur-[100px] animate-drift" />
        </div>
        <div className="absolute -top-20 left-[10%] w-[300px] h-[300px] rounded-full bg-brand-teal-light/10 blur-[90px] animate-drift-slow" />
        <div className="absolute inset-0 bg-pattern-dots opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div className="absolute inset-0 noise-overlay" />
        {/* Hairlines framing the statement */}
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-brand-teal-light/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-brand-teal-light/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug mb-8 animate-fade-in-up opacity-0 [animation-delay:0.1s]">
          Before GWTL became AI-native,<br/>
          <span className="gradient-text-cta gradient-text-animated">it was human-native</span>
        </p>
        <ScrollHighlightText
          className="text-lg sm:text-2xl text-white leading-relaxed"
          text="Years of mentoring cohorts, leadership events, roundtables, global forums, and community trust now power a sharper model: access, sponsorship, accountability, and measurable outcomes."
        />
      </div>
    </section>
  );
}
