import { Header, Footer } from "@/components";
import { ScrollReveal } from "@/components/motion";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
