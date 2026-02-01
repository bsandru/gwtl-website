import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, Award } from "lucide-react";

const stats = [
  { label: "Members Worldwide", value: "10,000+", icon: Users },
  { label: "Countries", value: "50+", icon: Globe },
  { label: "Years of Impact", value: "9", icon: Award },
];

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-40 w-96 h-96 bg-accent-300 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Featured at Davos 2026
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Empowering{" "}
              <span className="gradient-text">Women Tech Leaders</span>{" "}
              Worldwide
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl">
              Join a global network of senior women in technology. Connect with
              peers, access world-class mentorship, and shape the future of tech
              leadership.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/for-leaders/join">
                <Button size="xl" className="w-full sm:w-auto group">
                  Join the Network
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/for-companies">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Partner With Us
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by leaders from</p>
              <div className="flex flex-wrap items-center gap-8 opacity-60">
                <span className="text-lg font-semibold text-gray-700">Google</span>
                <span className="text-lg font-semibold text-gray-700">Microsoft</span>
                <span className="text-lg font-semibold text-gray-700">Amazon</span>
                <span className="text-lg font-semibold text-gray-700">Meta</span>
                <span className="text-lg font-semibold text-gray-700">SAP</span>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl transform rotate-3" />
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                A Global Community of Impact
              </h2>
              
              <div className="space-y-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors"
                  >
                    <div className="h-14 w-14 rounded-xl bg-primary-100 flex items-center justify-center">
                      <stat.icon className="h-7 w-7 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-100">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-primary-600">New:</span>{" "}
                  2026 Leadership Cohort applications now open
                </p>
                <Link
                  href="/programs/cohorts"
                  className="inline-flex items-center mt-2 text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
