import { MobileBottomNav, SiteFooter, SiteHeader } from "../components/site-chrome";
import type { CSSProperties } from "react";

type BackgroundImageSettings = {
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

type CssVars = CSSProperties & Record<`--${string}`, string>;

export default function LineUpPage() {

  // =========================
  // BEDIENFELD: LINE-UP SEITE
  // =========================
  const lineUpSettings = {
    backgroundColor: "#00d9ff",

    textColor: "#b07a3a",
    hoverColor: "#EDFCDF",

    fontFamily: "Trattatello, fantasy",
    fontSize: "54px",
    mobileFontSize: "clamp(32px, 10.5vw, 42px)",
    lineHeight: "1.12",

    paddingTop: "120px",
    paddingBottom: "120px",
  };

  // =========================
  // BEDIENFELD: BACKGROUND PNG BILDER
  // =========================
  // width + height = Fläche des Bild-Containers
  // size = tatsächliche Größe des PNG-Motivs innerhalb dieser Fläche
  //
  // Wenn das PNG größer werden soll:
  // width, height und size gemeinsam erhöhen.
  const backgroundImages: BackgroundImageSettings[] = [
    {
      src: "/lineup-bg-1.png",
      width: "700px",
      height: "700px",
      size: "700px",
      left: "60px",
      top: "20px",
      color: "#EDFCDF",
      rotation: "-10deg",
      opacity: 0.95,
    },
    {
      src: "/lineup-bg-2.png",
      width: "600px",
      height: "600px",
      size: "600px",
      left: "900px",
      top: "600px",
      color: "#EDFCDF",
      rotation: "0deg",
      opacity: 0.85,
    },
    {
      src: "/lineup-bg-3.png",
      width: "700px",
      height: "700px",
      size: "700px",
      right: "700px",
      top: "1200px",
      color: "#EDFCDF",
      rotation: "15deg",
      opacity: 0.85,
    },
    {
      src: "/lineup-bg-4.png",
      width: "550px",
      height: "550px",
      size: "550px",
      right: "50px",
      bottom: "-100px",
      color: "#EDFCDF",
      rotation: "-18deg",
      opacity: 0.95,
    },
  ];

  // =========================
  // BEDIENFELD: ARTISTS
  // =========================
  const artists = [
    {
      name: "ALIS.",
      link: "/artists/alis",
    },
    {
      name: "andiamo",
      link: "/artists/andiamo",
    },
    {
      name: "André Dancekowski",
      link: "/artists/andre-dancekowski",
    },
    {
      name: "Angel D'lite",
      link: "/artists/angel-dlite",
    },
    {
      name: "Beste Hira",
      link: "/artists/beste-hira",
    },
    {
      name: "Dirty b2b Fred",
      link: "/artists/dirty-b2b-fred",
    },
    {
      name: "DJaguar",
      link: "/artists/djaguar",
    },
    {
      name: "Duostop",
      link: "/artists/duostop",
    },
    {
      name: "Dyl Boban",
      link: "/artists/dyl-boban",
    },
    {
      name: "Ellen Allien",
      link: "/artists/ellen-allien",
    },
    {
      name: "Fasme",
      link: "/artists/fasme",
    },
    {
      name: "fbi",
      link: "/artists/fbi",
    },
    {
      name: "Ferdik",
      link: "/artists/ferdik",
    },
    {
      name: "Main Phase",
      link: "/artists/main-phase",
    },
    {
      name: "maša",
      link: "/artists/masa",
    },
    {
      name: "mastur_babe",
      link: "/artists/mastur-babe",
    },
    {
      name: "milhan",
      link: "/artists/milhan",
    },
    {
      name: "mindestens",
      link: "/artists/mindestens",
    },
    {
      name: "NUNKI",
      link: "/artists/nunki",
    },
    {
      name: "Randalia b2b Flœr",
      link: "/artists/randalia-b2b-floer",
    },
    {
      name: "Sansibar",
      link: "/artists/sansibar",
    },
    {
      name: "Schwarzmarct",
      link: "/artists/schwarzmarct",
    },
    {
      name: "Schwesta P",
      link: "/artists/schwesta-p",
    },
    {
      name: "Sibil",
      link: "/artists/sibil",
    },
    {
      name: "Sophti",
      link: "/artists/sophti",
    },
    {
      name: "TeilZeitRecords",
      link: "/artists/teilzeitrecords",
    },
    {
      name: "Tornado",
      link: "/artists/tornado",
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

          .artist-link {
            color: var(--artist-color);
            transition: color 200ms ease, transform 200ms ease;
          }

          .artist-link:hover {
            color: var(--artist-hover-color);
          }

          @media (max-width: 767px) {
            .lineup-bg-mark-1 {
              width: 340px !important;
              height: 340px !important;
              left: -18px !important;
              right: auto !important;
              top: -24px !important;
              bottom: auto !important;
              opacity: 0.42 !important;
            }

            .lineup-bg-mark-2 {
              width: 310px !important;
              height: 310px !important;
              left: auto !important;
              right: -72px !important;
              top: 330px !important;
              bottom: auto !important;
              opacity: 0.56 !important;
            }

            .lineup-bg-mark-3 {
              width: 330px !important;
              height: 330px !important;
              left: -118px !important;
              right: auto !important;
              top: 725px !important;
              bottom: auto !important;
              opacity: 0.44 !important;
            }

            .lineup-bg-mark-4 {
              width: 390px !important;
              height: 390px !important;
              left: auto !important;
              right: -100px !important;
              top: auto !important;
              bottom: -86px !important;
              opacity: 0.58 !important;
            }
          }

        `}
      </style>

      {/* ========================= */}
      {/* HEADER */}
      {/* ========================= */}
      <SiteHeader logoColor="#b07a3a" />
      <MobileBottomNav />

      {/* ========================= */}
      {/* LINE-UP BEREICH */}
      {/* ========================= */}
      <section
        className="mobile-page-section relative flex min-h-screen items-start justify-center overflow-hidden"
        style={{
          backgroundColor: lineUpSettings.backgroundColor,
          paddingTop: lineUpSettings.paddingTop,
          paddingBottom: lineUpSettings.paddingBottom,
        }}
      >
        {/* BACKGROUND PNG BILDER */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`mobile-bg-mark lineup-bg-mark-${index + 1} pointer-events-none absolute select-none`}
            style={{
              width: image.width,
              height: image.height,
              left: image.left,
              right: image.right,
              top: image.top,
              bottom: image.bottom,
              opacity: image.opacity,
              backgroundColor: image.color,
              transform: `rotate(${image.rotation})`,
              WebkitMaskImage: `url('${image.src}')`,
              maskImage: `url('${image.src}')`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: image.size,
              maskSize: image.size,
            }}
          />
        ))}

        {/* ARTIST NAMEN */}
        <div
          className="relative z-20 flex flex-col items-center text-center text-[length:var(--lineup-mobile-font-size)] md:text-[length:var(--lineup-desktop-font-size)]"
          style={{
            "--lineup-mobile-font-size": lineUpSettings.mobileFontSize,
            "--lineup-desktop-font-size": lineUpSettings.fontSize,
            fontFamily: lineUpSettings.fontFamily,
            lineHeight: lineUpSettings.lineHeight,
          } as CssVars}
        >
          {artists.map((artist) => (
            <a
              key={artist.name}
              href={artist.link}
              target="_blank"
              rel="noopener noreferrer"
              className="artist-link hover:scale-105"
              style={
                {
                  "--artist-color": lineUpSettings.textColor,
                  "--artist-hover-color": lineUpSettings.hoverColor,
                } as CSSProperties
              }
            >
              {artist.name}
            </a>
          ))}
        </div>
      </section>

      {/* ========================= */}
      {/* FOOTER */}
      {/* ========================= */}
      <SiteFooter
        backgroundColor={lineUpSettings.backgroundColor}
        textColor={lineUpSettings.textColor}
      />
    </main>
  );
}
