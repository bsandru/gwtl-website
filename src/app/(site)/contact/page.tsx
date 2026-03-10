import { Metadata } from "next";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Global Women TechLeaders. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
              <p className="mt-4 text-lg text-gray-600">
                Whether you&apos;re interested in joining our network, partnering with
                us, or just want to say hello — we&apos;d love to hear from you.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:contact@globalwomentechleaders.com"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      contact@globalwomentechleaders.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a
                      href="tel:+40745149258"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      +40 745 149 258
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Brașov, Romania</p>
                    <p className="text-sm text-gray-500">
                      Operating globally across 10+ countries
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { href: "https://www.linkedin.com/company/global-women-techleaders", icon: Linkedin },
                    { href: "https://www.facebook.com/GlobalWomeninTech", icon: Facebook },
                    { href: "https://instagram.com/globalwomentechleaders", icon: Instagram },
                    { href: "https://x.com/globalwomentechleaders", icon: Twitter },
                  ].map(({ href, icon: Icon }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-primary-100 transition-colors"
                    >
                      <Icon className="h-5 w-5 text-gray-600" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl p-8 lg:p-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
