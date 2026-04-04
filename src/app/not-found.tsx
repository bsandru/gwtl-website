import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-brand-navy overflow-hidden flex items-center justify-center">
      {/* Ambient glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] animate-glow-pulse"
        style={{ background: "radial-gradient(circle, #00A3A3, transparent)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] animate-glow-pulse"
        style={{
          background: "radial-gradient(circle, #2dd4bf, transparent)",
          animationDelay: "2s",
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-pattern-grid opacity-40" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Large faded 404 in background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
      >
        <span
          className="font-display text-[clamp(12rem,40vw,28rem)] font-bold leading-none tracking-tighter"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Decorative line */}
        <div className="flex justify-center mb-8 animate-fade-in-up opacity-0 stagger-1">
          <div className="decorative-line" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up opacity-0 stagger-2">
          <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse-glow" />
          <span className="text-sm font-medium text-white/60 tracking-wide uppercase">
            Page not found
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[0.95] tracking-tight animate-fade-in-up opacity-0 stagger-3">
          Lost in the{" "}
          <span className="gradient-text-hero">network</span>
        </h1>

        {/* Body */}
        <p className="text-lg sm:text-xl text-white/50 mb-12 max-w-md mx-auto leading-relaxed animate-fade-in-up opacity-0 stagger-4">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 stagger-5">
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-brand-teal text-white font-semibold rounded-xl transition-all duration-300 hover:bg-brand-teal-light hover:shadow-[0_0_40px_-8px_rgba(0,163,163,0.6)] hover:-translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white/70 font-semibold rounded-xl transition-all duration-300 hover:border-white/30 hover:text-white hover:bg-white/5"
          >
            Contact us
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-16 pt-8 border-t border-white/6 animate-fade-in-up opacity-0 stagger-6">
          <p className="text-xs text-white/30 uppercase tracking-widest mb-4">
            Popular pages
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { href: "/about", label: "About" },
              { href: "/programs", label: "Programs" },
              { href: "/events", label: "Events" },
              { href: "/news", label: "News" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/40 hover:text-brand-teal-light transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
