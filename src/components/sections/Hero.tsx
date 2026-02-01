import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Globe, Award, Sparkles } from "lucide-react";

const stats = [
  { label: "Members Worldwide", value: "10,000+", icon: Users },
  { label: "Countries", value: "50+", icon: Globe },
  { label: "Years of Impact", value: "9", icon: Award },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-secondary-50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary-50 via-secondary-50 to-white" />

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-3 px-5 py-2.5 rounded-full shadow-lg mb-8 bg-white border border-secondary-200 opacity-0 [animation-delay:0.1s]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-brand-teal"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-teal"></span>
              </span>
              <span className="text-brand-navy text-sm font-medium">Featured at Davos 2026</span>
              <Sparkles className="h-4 w-4 text-brand-teal" />
            </div>

            <h1 className="animate-fade-in-up font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] opacity-0 [animation-delay:0.2s]">
              <span className="text-brand-navy">Where Balanced,</span>{" "}
              <span className="text-brand-teal">AI-Powered Leadership</span>{" "}
              <span className="text-brand-navy">Reshapes Tech</span>
            </h1>

            <p className="animate-fade-in-up mt-8 text-lg sm:text-xl max-w-xl leading-relaxed text-secondary-600 opacity-0 [animation-delay:0.3s]">
              Join a global network of senior women in technology. Learn, connect, and lead the future of tech through mentorship, events, and strategic partnerships.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up mt-10 flex flex-col sm:flex-row gap-4 opacity-0 [animation-delay:0.4s]">
              <Link href="/for-leaders/join">
                <button className="w-full sm:w-auto group h-16 px-10 text-lg rounded-2xl font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl inline-flex items-center justify-center bg-brand-teal text-white">
                  Join Our Community
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/for-companies">
                <button className="w-full sm:w-auto h-16 px-10 text-lg rounded-2xl font-bold border-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center justify-center border-brand-navy text-brand-navy bg-transparent">
                  Partner With Us
                </button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="animate-fade-in-up mt-14 pt-10 border-t border-secondary-200 opacity-0 [animation-delay:0.5s]">
              <p className="text-sm font-medium mb-5 uppercase tracking-wider text-secondary-500">Trusted by leaders from</p>
              <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
                {['Google', 'Microsoft', 'Amazon', 'Meta', 'SAP'].map((company) => (
                  <span
                    key={company}
                    className="text-lg font-semibold hover:opacity-70 transition-opacity cursor-default text-secondary-400"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual side */}
          <div className="relative lg:h-[700px] animate-fade-in-scale opacity-0 [animation-delay:0.3s]">
            {/* Main image container */}
            <div className="relative h-[500px] lg:h-full">
              {/* Background shape */}
              <div className="absolute inset-4 rounded-[3rem] transform rotate-3 bg-linear-to-br from-brand-teal to-brand-navy" />

              {/* Image container */}
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=1000&fit=crop&crop=faces"
                  alt="Women tech leaders collaborating"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy/70 to-transparent" />
              </div>

              {/* Stats floating card */}
              <div className="absolute -bottom-6 -left-6 lg:-left-12 rounded-3xl shadow-2xl p-6 lg:p-8 max-w-sm animate-float bg-white [animation-delay:1s]">
                <h3 className="font-display text-xl font-bold mb-6 text-brand-navy">
                  A Global Community of Impact
                </h3>
                <div className="space-y-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center gap-4 p-3 rounded-xl transition-colors hover:scale-105 duration-300 bg-primary-50"
                    >
                      <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-linear-to-br from-brand-teal to-brand-teal-dark">
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-brand-navy">
                          {stat.value}
                        </div>
                        <div className="text-sm text-secondary-500">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Announcement floating card */}
              <div className="absolute -top-4 -right-4 lg:-right-8 rounded-2xl shadow-xl p-5 max-w-xs animate-float bg-white [animation-delay:2s]">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 animate-pulse bg-brand-teal">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      2026 Leadership Cohort
                    </p>
                    <p className="text-xs mt-0.5 text-secondary-500">Program now open</p>
                    <Link
                      href="/programs/mentoring"
                      className="inline-flex items-center mt-2 text-xs font-semibold hover:opacity-70 transition-opacity text-brand-teal"
                    >
                      Learn more <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
