import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-600 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          Ready to Shape the Future of{" "}
          <span className="gradient-text">Tech Leadership</span>?
        </h2>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Whether you&apos;re a woman leader looking to grow, or a company wanting
          to make an impact, GWTL is your partner in building a more inclusive
          tech industry.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/for-leaders/join">
            <Button size="xl" className="w-full sm:w-auto group">
              Join as a Leader
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/for-companies">
            <Button
              variant="outline"
              size="xl"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900"
            >
              Become a Partner
            </Button>
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Join 10,000+ leaders and 50+ partner companies worldwide
        </p>
      </div>
    </section>
  );
}
