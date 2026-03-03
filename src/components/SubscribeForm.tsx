"use client";

import { useRef, useState, useTransition } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Mail, ArrowRight, Check, Loader2 } from "lucide-react";
import { subscribeNewsletter } from "@/lib/subscribe";

interface SubscribeFormProps {
  source: "footer" | "news" | "events";
  variant?: "dark" | "light";
  showIcon?: boolean;
}

export function SubscribeForm({
  source,
  variant = "dark",
  showIcon = false,
}: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const captchaRef = useRef<HCaptcha>(null);

  const sitekey = process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY ?? "";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!captchaToken) {
      setStatus("error");
      setErrorMessage("Please complete the captcha.");
      return;
    }

    startTransition(async () => {
      const result = await subscribeNewsletter(email, captchaToken, source);

      if (result.success) {
        setStatus("success");
        setEmail("");
        setCaptchaToken(null);
        captchaRef.current?.resetCaptcha();
      } else {
        setStatus("error");
        setErrorMessage(result.error);
        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
      }
    });
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 py-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-teal/20">
          <Check className="h-5 w-5 text-brand-teal-light" />
        </div>
        <p className={variant === "dark" ? "text-white/80" : "text-secondary-700"}>
          You&apos;re subscribed! Check your inbox soon.
        </p>
      </div>
    );
  }

  const isDark = variant === "dark";

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          className={
            isDark
              ? "flex-1 lg:w-80 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal/50 transition-all bg-white/5 border border-white/10 text-white placeholder:text-white/30"
              : "flex-1 lg:w-80 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal/50 transition-all bg-secondary-50 border border-secondary-200 text-secondary-800 placeholder:text-secondary-400"
          }
        />
        <button
          type="submit"
          disabled={isPending || !captchaToken}
          className="magnetic-btn group px-8 py-4 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 bg-linear-to-r from-brand-teal to-brand-teal-light text-brand-navy hover:shadow-lg hover:shadow-brand-teal/30 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : showIcon ? (
            <Mail className="h-5 w-5" />
          ) : null}
          <span>{isPending ? "Subscribing..." : "Subscribe"}</span>
          {!isPending && !showIcon && <ArrowRight className="h-4 w-4" />}
        </button>
      </div>

      {sitekey && (
        <HCaptcha
          sitekey={sitekey}
          theme={isDark ? "dark" : "light"}
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

      {status === "error" && (
        <p className={`text-sm ${isDark ? "text-red-400" : "text-red-600"}`}>
          {errorMessage}
        </p>
      )}
    </form>
  );
}
