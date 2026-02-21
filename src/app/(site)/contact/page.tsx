import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

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
                  <a
                    href="https://linkedin.com/company/globalwomentechleaders"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-primary-100 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-gray-600" />
                  </a>
                  <a
                    href="https://twitter.com/glowomentechlea"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-primary-100 transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-gray-600" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option>Join the Network</option>
                    <option>Corporate Partnership</option>
                    <option>Speaking Opportunity</option>
                    <option>Media Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
