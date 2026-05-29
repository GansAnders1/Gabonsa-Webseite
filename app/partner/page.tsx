import { MobileBottomNav, SiteFooter, SiteHeader } from "../components/site-chrome";
import type { CSSProperties } from "react";

type BackgroundPngSettings = {
  src: string;
  width: string;
  height: string;
  size: string;
  color: string;
  rotation: string;
  opacity: number;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
};

type PartnerLogo = {
  name: string;
  logo: string;
  link: string;

  // Individuelle Logo-Größe
  logoWidth?: string;
  logoMaxWidth?: string;
  logoMaxHeight?: string;
};

type LogoCardSettings = {
  backgroundColor: string;
  height: string;
  padding: string;
  borderRadius: string;
  logoMaxWidth: string;
  logoMaxHeight: string;
};

type CssVars = CSSProperties & Record<`--${string}`, string>;

function PartnerLogoGrid({
  partners,
  columns,
  logoCardSettings,
}: {
  partners: PartnerLogo[];
  columns: string;
  logoCardSettings: LogoCardSettings;
}) {
  return (
    <div
      className="partner-logo-grid grid gap-6"
      style={{ "--desktop-grid-columns": columns } as CssVars}
    >
      {partners.map((partner) => (
        <a
          key={partner.name}
          href={partner.link}
          target={partner.link === "#" ? "_self" : "_blank"}
          rel={partner.link === "#" ? undefined : "noopener noreferrer"}
          aria-label={partner.name}
          className="partner-logo-card flex items-center justify-center transition hover:scale-105"
          style={{
            height: logoCardSettings.height,
            padding: logoCardSettings.padding,
            backgroundColor: logoCardSettings.backgroundColor,
            borderRadius: logoCardSettings.borderRadius,
          }}
        >
          <img
            src={partner.logo}
            alt={partner.name}
            style={{
              width: partner.logoWidth,
              maxWidth: partner.logoMaxWidth ?? logoCardSettings.logoMaxWidth,
              maxHeight: partner.logoMaxHeight ?? logoCardSettings.logoMaxHeight,
              objectFit: "contain",
              display: "block",
            }}
          />
        </a>
      ))}
    </div>
  );
}

export default function PartnerPage() {

  // =========================
  // BEDIENFELD: PARTNER SEITE
  // =========================
  const partnerSettings = {
    backgroundColor: "#EDFCDF",

    title: "Partner:innen",
    titleColor: "#B07A3A",
    titleFontFamily: "Trattatello, fantasy",
    titleFontSize: "90px",

    introText:
      "Danke an alle Förderstellen, Sponsor:innen und Partner:innen, die Gabonsa unterstützen und möglich machen.",
    textColor: "#383F37",
    fontFamily: "HaasGrotDisp, Arial, sans-serif",
    fontSize: "22px",

    sectionTitleColor: "#383F37",
    sectionTitleFontFamily: "Trattatello, fantasy",
    sectionTitleFontSize: "58px",

    contentWidth: "1300px",
    paddingTop: "150px",
    paddingX: "130px",
    paddingBottom: "140px",
  };

  // =========================
  // BEDIENFELD: BACKGROUND PNGS
  // =========================
  // Dateien müssen im public-Ordner liegen:
  // public/partner-bg-1.png
  // public/partner-bg-2.png
  // public/partner-bg-3.png
  //
  // width + height = Fläche des Containers
  // size = tatsächliche Größe des PNG-Motivs
  //
  // Zum Größermachen am besten width, height und size gemeinsam erhöhen.
  const backgroundPngs: BackgroundPngSettings[] = [
    {
      src: "/partner-bg-1.png",
      width: "700px",
      height: "700px",
      size: "700px",
      right: "-175px",
      top: "-200px",
      color: "#B07A3A",
      rotation: "-14deg",
      opacity: 0.28,
    },
    {
      src: "/partner-bg-2.png",
      width: "800px",
      height: "800px",
      size: "800px",
      left: "-350px",
      top: "650px",
      color: "#B07A3A",
      rotation: "10deg",
      opacity: 0.22,
    },
    {
      src: "/partner-bg-3.png",
      width: "700px",
      height: "700px",
      size: "700px",
      right: "150px",
      bottom: "80px",
      color: "#B07A3A",
      rotation: "-5deg",
      opacity: 0.28,
    },
  ];

  // =========================
  // BEDIENFELD: LOGO-KARTEN
  // =========================
  const logoCardSettings = {
    backgroundColor: "#EDFCDF",
    height: "160px",
    padding: "34px",
    borderRadius: "0px",

    // Standardgröße für alle Logos,
    // falls beim einzelnen Logo nichts anderes eingestellt ist.
    logoMaxWidth: "90%",
    logoMaxHeight: "95px",
  };

  // =========================
  // BEDIENFELD: FÖRDERSTELLEN
  // =========================
  const fundingPartners: PartnerLogo[] = [
    {
      name: "Förderstelle 1",
      logo: "/partner-foerderstelle-1.png",
      link: "https://www.innsbruck.gv.at/",
      logoMaxWidth: "88%",
      logoMaxHeight: "90px",
    },
    {
      name: "Förderstelle 4",
      logo: "/partner-foerderstelle-4.png",
      link: "https://www.tirol.gv.at/kunst-kultur/abteilung-kultur/",
      logoMaxWidth: "82%",
      logoMaxHeight: "140px",
    },
    {
      name: "Förderstelle 2",
      logo: "/partner-foerderstelle-2.webp",
      link: "https://www.tirol.gv.at/kunst-kultur/abteilung-kultur/",
      logoMaxWidth: "92%",
      logoMaxHeight: "100px",
    },
    {
      name: "Förderstelle 3",
      logo: "/partner-foerderstelle-3.png",
      link: "https://www.wko.at/oe/gewerbe-handwerk/film-musikwirtschaft/start",
      logoMaxWidth: "80%",
      logoMaxHeight: "80px",
    },
  ];

  // =========================
  // BEDIENFELD: SPONSOR:INNEN
  // =========================
  const sponsors: PartnerLogo[] = [
    {
      name: "Sponsor 1",
      logo: "/partner-sponsor-1.svg",
      link: "https://moschen.tirol/",
      logoMaxWidth: "88%",
      logoMaxHeight: "90px",
    },
    {
      name: "Sponsor 2",
      logo: "/partner-sponsor-2.webp",
      link: "https://eatplanted.com/",
      logoMaxWidth: "72%",
      logoMaxHeight: "76px",
    },
    {
      name: "Sponsor 3",
      logo: "/partner-sponsor-3.png",
      link: "https://www.recheis.com/",
      logoMaxWidth: "170%",
      logoMaxHeight: "90px",
    },
    {
      name: "Sponsor 4",
      logo: "/partner-sponsor-4.png",
      link: "https://www.sonett.eu/",
      logoMaxWidth: "100%",
      logoMaxHeight: "82px",
    },
    {
      name: "Sponsor 5",
      logo: "/partner-sponsor-5.svg",
      link: "http://brennpunktcoffee.at:8069/",
      logoMaxWidth: "82%",
      logoMaxHeight: "86px",
    },
    {
      name: "Halle 5",
      logo: "/partner-sponsor-halle-5.png",
      link: "https://www.instagram.com/halle5_ibk/",
      logoMaxWidth: "145%",
      logoMaxHeight: "118px",
    },
  ];

  // =========================
  // BEDIENFELD: PARTNER:INNEN
  // =========================
  const generalPartners: PartnerLogo[] = [
    {
      name: "Partner 1",
      logo: "/partner-partner-1.png",
      link: "https://www.ivb.at/",
      logoMaxWidth: "84%",
      logoMaxHeight: "90px",
    },
    {
      name: "Partner 2",
      logo: "/partner-partner-2.svg",
      link: "https://www.eltonymate.com/en/",
      logoMaxWidth: "74%",
      logoMaxHeight: "78px",
    },
    {
      name: "Partner 3",
      logo: "/partner-partner-3.jpg",
      link: "https://makava.bio/",
      logoMaxWidth: "78%",
      logoMaxHeight: "82px",
    },
    {
      name: "Partner 4",
      logo: "/partner-partner-4.png",
      link: "https://fritz-kola.com/de",
      logoMaxWidth: "76%",
      logoMaxHeight: "84px",
    },
  ];


  return (
    <main className="min-h-screen bg-black text-white">
      <style>
        {`
          @font-face {
            font-family: "HaasGrotDisp";
            src: url("/HaasGrotDisp-65Medium.otf") format("opentype");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }

          @media (max-width: 767px) {
            .partner-bg-mark-1 {
              width: 340px !important;
              height: 340px !important;
              left: auto !important;
              right: -82px !important;
              top: -70px !important;
              bottom: auto !important;
              opacity: 0.38 !important;
            }

            .partner-bg-mark-2 {
              width: 340px !important;
              height: 340px !important;
              left: -118px !important;
              right: auto !important;
              top: 530px !important;
              bottom: auto !important;
              opacity: 0.30 !important;
            }

            .partner-bg-mark-3 {
              width: 330px !important;
              height: 330px !important;
              left: auto !important;
              right: -82px !important;
              top: auto !important;
              bottom: 76px !important;
              opacity: 0.40 !important;
            }

            .partner-logo-card {
              background-color: transparent !important;
            }
          }
        `}
      </style>

      {/* ========================= */}
      {/* HEADER */}
      {/* ========================= */}
      <SiteHeader logoColor="#B07A3A" />
      <MobileBottomNav />

      {/* ========================= */}
      {/* PARTNER BEREICH */}
      {/* ========================= */}
      <section
        className="relative min-h-screen overflow-hidden px-6 pb-32 pt-28 md:px-[130px] md:pb-[130px] md:pt-[130px]"
        style={{
          backgroundColor: partnerSettings.backgroundColor,
        }}
      >
        {/* BACKGROUND PNGS */}
        {backgroundPngs.map((png, index) => (
          <div
            key={index}
            className={`mobile-bg-mark partner-bg-mark-${index + 1} pointer-events-none absolute z-0 select-none`}
            style={{
              width: png.width,
              height: png.height,
              left: png.left,
              right: png.right,
              top: png.top,
              bottom: png.bottom,
              opacity: png.opacity,
              backgroundColor: png.color,
              transform: `rotate(${png.rotation})`,

              WebkitMaskImage: `url('${png.src}')`,
              maskImage: `url('${png.src}')`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: png.size,
              maskSize: png.size,
            }}
          />
        ))}

        <div
          className="relative z-10 mx-auto"
          style={{
            maxWidth: partnerSettings.contentWidth,
          }}
        >
          <h1
            className="text-center text-[clamp(50px,16vw,64px)] md:text-[length:var(--partner-title-font-size)]"
            style={{
              "--partner-title-font-size": partnerSettings.titleFontSize,
              color: partnerSettings.titleColor,
              fontFamily: partnerSettings.titleFontFamily,
              lineHeight: "0.96",
              marginBottom: "28px",
            } as CssVars}
          >
            {partnerSettings.title}
          </h1>

          <p
            className="mobile-body-text mx-auto text-center"
            style={{
              maxWidth: "850px",
              color: partnerSettings.textColor,
              fontFamily: partnerSettings.fontFamily,
              fontSize: partnerSettings.fontSize,
              lineHeight: "1.35",
              marginBottom: "90px",
            }}
          >
            {partnerSettings.introText}
          </p>

          {/* ========================= */}
          {/* FÖRDERSTELLEN */}
          {/* ========================= */}
          <section style={{ marginBottom: "110px" }}>
            <h2
              className="text-[clamp(34px,11vw,48px)] md:text-[length:var(--partner-section-title-font-size)]"
              style={{
                "--partner-section-title-font-size":
                  partnerSettings.sectionTitleFontSize,
                color: partnerSettings.sectionTitleColor,
                fontFamily: partnerSettings.sectionTitleFontFamily,
                lineHeight: "1",
                marginBottom: "34px",
              } as CssVars}
            >
              Förderstellen
            </h2>

            <PartnerLogoGrid
              partners={fundingPartners}
              columns="repeat(3, minmax(0, 1fr))"
              logoCardSettings={logoCardSettings}
            />
          </section>

          {/* ========================= */}
          {/* SPONSOR:INNEN */}
          {/* ========================= */}
          <section style={{ marginBottom: "110px" }}>
            <h2
              className="text-[clamp(34px,11vw,48px)] md:text-[length:var(--partner-section-title-font-size)]"
              style={{
                "--partner-section-title-font-size":
                  partnerSettings.sectionTitleFontSize,
                color: partnerSettings.sectionTitleColor,
                fontFamily: partnerSettings.sectionTitleFontFamily,
                lineHeight: "1",
                marginBottom: "34px",
              } as CssVars}
            >
              Sponsor:innen
            </h2>

            <PartnerLogoGrid
              partners={sponsors}
              columns="repeat(4, minmax(0, 1fr))"
              logoCardSettings={logoCardSettings}
            />
          </section>

          {/* ========================= */}
          {/* PARTNER:INNEN */}
          {/* ========================= */}
          <section>
            <h2
              className="text-[clamp(34px,11vw,48px)] md:text-[length:var(--partner-section-title-font-size)]"
              style={{
                "--partner-section-title-font-size":
                  partnerSettings.sectionTitleFontSize,
                color: partnerSettings.sectionTitleColor,
                fontFamily: partnerSettings.sectionTitleFontFamily,
                lineHeight: "1",
                marginBottom: "34px",
              } as CssVars}
            >
              Partner:innen
            </h2>

            <PartnerLogoGrid
              partners={generalPartners}
              columns="repeat(4, minmax(0, 1fr))"
              logoCardSettings={logoCardSettings}
            />
          </section>
        </div>
      </section>

      {/* ========================= */}
      {/* FOOTER */}
      {/* ========================= */}
      <SiteFooter
        backgroundColor={partnerSettings.backgroundColor}
        textColor={partnerSettings.textColor}
      />
    </main>
  );
}
