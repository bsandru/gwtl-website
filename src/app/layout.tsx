import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, DM_Sans, Mulish } from "next/font/google";
import "./globals.css";
import { GWIT_NAME, GWTL_NAME, PRIMARY_SITE_URL } from "@/lib/org";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const brandSpace = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-brand-space",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(PRIMARY_SITE_URL),
  title: {
    default: "Global Women TechLeaders — From Pipeline to Power",
    template: "%s | Global Women TechLeaders",
  },
  description:
    "GWTL accelerates women into technology leadership through human sponsorship, access to decision-makers, capital connections, and accountable outcomes. Human-led. AI-amplified. Global.",
  keywords: [
    "women in tech",
    "tech leadership",
    "women on boards",
    "board placement",
    "capital access",
    "AI governance",
    "mentorship",
    "diversity in tech",
    "women leaders",
    "corporate accountability",
    "sponsor matching",
    "global summit",
  ],
  authors: [{ name: "Global Women TechLeaders" }],
  creator: "Global Women TechLeaders",
  alternates: {
    canonical: PRIMARY_SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PRIMARY_SITE_URL,
    siteName: "Global Women TechLeaders",
    title: "Global Women TechLeaders — From Pipeline to Power",
    description:
      "GWTL accelerates women into technology leadership through human sponsorship, access to decision-makers, capital connections, and accountable outcomes. Human-led. AI-amplified. Global.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Global Women TechLeaders — Where women tech leaders move from visibility to power",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Women TechLeaders",
    description:
      "GWTL accelerates women into technology leadership through sponsorship, access, capital connections, and accountability.",
    images: ["/images/og-image.png"],
    creator: "@gwtl",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Oda4D58yKaHNTnQxGa5SBkUDlzJlOI8TvPzzOkYlXEE",
    other: {
      "msvalidate.01": "42B8C4AF6BFD7FD6DA44F9AEB01DE36A",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${brandSpace.variable}`}>
      <body className="min-h-screen bg-stone-50 antialiased font-sans">
        <Script
          id="org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: GWTL_NAME,
              url: PRIMARY_SITE_URL,
              logo: `${PRIMARY_SITE_URL}/images/logo.png`,
              description:
                "GWTL accelerates women into technology leadership through human sponsorship, access to decision-makers, capital connections, and accountable outcomes. Human-led. AI-amplified. Global.",
              parentOrganization: {
                "@type": "Organization",
                name: GWIT_NAME,
                url: PRIMARY_SITE_URL,
              },
              sameAs: [
                "https://globalwomentechleaders.com",
                "https://globalwomenintech.com",
                "https://x.com/gwtl",
                "https://www.linkedin.com/company/global-women-techleaders",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
