import Image from "next/image";
import { Handshake } from "lucide-react";

interface Partner {
  name: string;
  logo: string;
  url?: string;
}

const strategicPartners: Partner[] = [
  // { name: "Microsoft", logo: "/images/partners/Microsoft.png", url: "https://microsoft.com" },
  { name: "EU Digital Skills & Jobs Coalition", logo: "/images/partners/DSJC.png", url: "https://digital-strategy.ec.europa.eu/en" },
  { name: "WeAreDevelopers", logo: "/images/partners/WAD.svg", url: "https://wearedevelopers.com" },
  { name: "European Centre for Women and Technology", logo: "/images/partners/ecwt.webp", url: "https://ecwt.eu" },
  // { name: "Global Semiconductor Alliance", logo: "/images/partners/gsa.png" },
  // { name: "Zitec", logo: "/images/partners/Zitec.webp", url: "https://zitec.com" },
];

const communityPartners: Partner[] = [
  { name: "SEE 40 under 40", logo: "/images/partners/SEE.png" },
  { name: "European Business Union", logo: "/images/partners/EBU.png", url: "https://ebu.lu" },
  { name: "ANIS", logo: "/images/partners/anis.png", url: "https://anis.ro" },
  { name: "WomenTech Network", logo: "/images/partners/WomenTechNetwork.png", url: "https://womentech.net" },
  { name: "Women in Leadership", logo: "/images/partners/WIL.webp" },
  // { name: "TechWomen Moldova", logo: "/images/partners/TechWomenMoldova.webp" },
  { name: "InnovX", logo: "/images/partners/innovx.png" },
  { name: "Druid", logo: "/images/partners/Druid.png", url: "https://druidai.com" },
  { name: "WinTech Series", logo: "/images/partners/WinTechSeries.webp" },
  { name: "AmCham", logo: "/images/partners/AmCham.png" },
  { name: "Wolfpack Digital", logo: "/images/partners/wolfpack_digital.svg", url: "https://wolfpackdigital.com" },
  { name: "Women in Tech Alliance", logo: "/images/partners/womenintechalliance.png" },
  { name: "HackAtOns", logo: "/images/partners/hackatons.webp" },
  { name: "TechVentures", logo: "/images/partners/TechVentures.png" },
  { name: "House of Public Policies", logo: "/images/partners/HOP.png" },
  // { name: "Reporting Center", logo: "/images/partners/ReportingCenter.png" },
  // { name: "Skillab", logo: "/images/partners/Skillab.png" },
  { name: "SVF", logo: "/images/partners/svf.png" },
  // { name: "Arvato Systems", logo: "/images/partners/Arvato.webp", url: "https://arvato-systems.com" },
  { name: "TechWoman", logo: "/images/partners/techwoman.webp" },
];

function PartnerLogo({ partner, small = false }: { partner: Partner, small?: boolean }) {
  const content = (
    <div className="group relative flex items-center mx-auto h-full w-fit transition-all duration-500 hover:-translate-y-1">
      <Image
        src={partner.logo}
        alt={partner.name}
        width={256}
        height={144}
        className={`object-contain ${small ? 'h-24' : 'h-36'} w-auto`}
      />
    </div>
  );

  if (partner.url) {
    return (
      <a href={partner.url} target="_blank" rel="noopener noreferrer" title={partner.name}>
        {content}
      </a>
    );
  }

  return <div title={partner.name}>{content}</div>;
}

export function Partners() {
  return (
    <section className="relative bg-[#f8f8f8] py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-b from-brand-teal/4 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] translate-y-1/3 translate-x-1/4 rounded-full bg-linear-to-l from-brand-navy/4 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/5 mb-6 animate-fade-in-up opacity-0 [animation-delay:0.1s]">
            <Handshake className="h-4 w-4 text-brand-navy" />
            <span className="text-sm font-semibold text-brand-navy">Partnerships</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy leading-[1.1] animate-fade-in-up opacity-0 [animation-delay:0.2s]">
            Our{" "}
            <span className="gradient-text-teal">Partners</span>
          </h2>
          <p className="mt-6 text-lg text-secondary-600 leading-relaxed animate-fade-in-up opacity-0 [animation-delay:0.3s]">
            Leaders from these organizations are part of GWTL
          </p>
        </div>

        {/* Strategic Partners */}
        <div className="mb-20 animate-fade-in-up opacity-0 [animation-delay:0.4s]">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-secondary-300 to-transparent" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-secondary-400 shrink-0">
              Strategic Partners
            </h3>
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-secondary-300 to-transparent" />
          </div>

          <div className="grid grid-flow-col justify-items-center gap-5">
            {strategicPartners.map((partner) => (
              <PartnerLogo key={partner.name} partner={partner} />
            ))}
          </div>
        </div>

        {/* Community Partners */}
        <div className="animate-fade-in-up opacity-0 [animation-delay:0.6s]">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-secondary-300 to-transparent" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-secondary-400 shrink-0">
              Community Partners
            </h3>
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-secondary-300 to-transparent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {communityPartners.map((partner) => (
              <PartnerLogo key={partner.name} partner={partner} small={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
