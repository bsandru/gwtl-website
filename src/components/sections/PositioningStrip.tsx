export function PositioningStrip() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-brand-navy">
      {/* Subtle glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-brand-teal/10 blur-[100px]" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug mb-6 animate-fade-in-up opacity-0 [animation-delay:0.1s]">
          We don&apos;t do awareness.{" "}
          <span className="gradient-text-cta">We do outcomes.</span>
        </p>
        <p className="text-lg sm:text-xl text-white/60 leading-relaxed animate-fade-in-up opacity-0 [animation-delay:0.2s]">
          Board placements. Capital connections. Corporate commitments.
          Published and tracked.
        </p>
      </div>
    </section>
  );
}
