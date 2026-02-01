import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";

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
  title: {
    default: "Global Women TechLeaders | Empowering Women in Tech",
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
    title: "Global Women TechLeaders | Empowering Women in Tech",
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
    creator: "@glowomentechlea",
  },
  robots: {
    index: true,
    follow: true,
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
