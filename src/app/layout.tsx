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
    default: "Global Women TechLeaders",
    template: "%s | GWTL",
  },
  description:
    "Join a global network of senior women in technology. Connect with peers, access world-class mentorship, and shape the future of tech leadership.",
  keywords: [
    "women in tech",
    "tech leadership",
    "women leaders",
    "mentorship",
    "diversity in tech",
    "DEI",
    "technology",
    "networking",
  ],
  authors: [{ name: "Global Women TechLeaders" }],
  creator: "Global Women TechLeaders",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://globalwomentechleaders.com",
    siteName: "Global Women TechLeaders",
    title: "Global Women TechLeaders",
    description:
      "Join a global network of senior women in technology. Connect with peers, access world-class mentorship, and shape the future of tech leadership.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Global Women TechLeaders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Women TechLeaders",
    description:
      "Empowering women tech leaders worldwide through networking, mentorship, and advocacy.",
    images: ["/og-image.png"],
    creator: "@gwtl",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "Oda4D58yKaHNTnQxGa5SBkUDlzJlOI8TvPzzOkYlXEE",
    other: {
      "msvalidate.01": "42B8C4AF6BFD7FD6DA44F9AEB01DE36A",
      "yandex-verification": "YOUR_YANDEX_VERIFICATION_CODE",
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
                "GWTL accelerates women into tech leadership through board placements, capital connections, and corporate accountability.",
              sameAs: [
                "https://twitter.com/gwtl",
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
