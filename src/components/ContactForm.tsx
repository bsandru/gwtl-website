"use client";

import { useRef, useState, useTransition } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Button } from "@/components/ui/button";
import { sendContactEmail } from "@/lib/actions";
import { CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const captchaRef = useRef<HCaptcha>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const sitekey = process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY ?? "";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!captchaToken) {
      setStatus("error");
      setErrorMessage("Please complete the captcha.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.set("captchaToken", captchaToken);

    startTransition(async () => {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setStatus("success");
        setCaptchaToken(null);
        captchaRef.current?.resetCaptcha();
        formRef.current?.reset();
      } else {
        setStatus("error");
        setErrorMessage(result.error ?? "Something went wrong.");
        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
      }
    });
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12">
        <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 max-w-sm">
          Thank you for reaching out. We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Send us a Message
      </h2> */}

      {status === "error" && (
        <div className="mt-4 flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 p-4">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
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
            required
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
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Select a subject…</option>
            <option>Become an Ambassador</option>
            <option>Apply for the Strategic Council</option>
            <option>Power Tables — Apply / Register Interest</option>
            <option>Sponsor Match — Apply as Participant</option>
            <option>Sponsor Match — Apply as Sponsor</option>
            <option>Corporate Sponsorship</option>
            <option>Summit — Register Early Interest</option>
            <option>Event Inquiry</option>
            <option>Subscribe to Newsletter</option>
            <option>Join the Team</option>
            <option>General Inquiry</option>
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
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {sitekey && (
          <HCaptcha
            sitekey={sitekey}
            theme="light"
            size="normal"
            onVerify={(token) => {
              setCaptchaToken(token);
              if (status === "error") setStatus("idle");
            }}
            onExpire={() => setCaptchaToken(null)}
            onError={() => setCaptchaToken(null)}
            ref={captchaRef}
          />
        )}

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isPending || !captchaToken}
        >
          {isPending ? "Sending…" : "Send Message"}
        </Button>
      </form>
    </>
  );
}
