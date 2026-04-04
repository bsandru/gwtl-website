import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://globalwomentechleaders.com"),
  title: {
    default: "Global Women TechLeaders — Board Seats. Capital. Accountability.",
    template: "%s | Global Women TechLeaders",
  },
  description:
    "GWTL accelerates women into tech leadership through board placements, capital connections, and corporate accountability. AI-native. Outcomes-driven. Global.",
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
    canonical: "https://globalwomentechleaders.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://globalwomentechleaders.com",
    siteName: "Global Women TechLeaders",
    title: "Global Women TechLeaders — Board Seats. Capital. Accountability.",
    description:
      "GWTL accelerates women into tech leadership through board placements, capital connections, and corporate accountability. AI-native. Outcomes-driven. Global.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Global Women TechLeaders — Where AI-Powered Leadership and Visionary Women Reshape Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Women TechLeaders",
    description:
      "GWTL accelerates women into tech leadership through board placements, capital connections, and corporate accountability.",
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
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-stone-50 antialiased font-sans">
        <Script
          id="org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Global Women TechLeaders",
              url: "https://globalwomentechleaders.com",
              logo: "https://globalwomentechleaders.com/images/logo.png",
              description:
                "GWTL accelerates women into tech leadership through board placements, capital connections, and corporate accountability. AI-native. Outcomes-driven. Global.",
              sameAs: [
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
