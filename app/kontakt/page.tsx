import { MobileBottomNav, SiteFooter, SiteHeader } from "../components/site-chrome";
import type { CSSProperties } from "react";

type ContactBackgroundPngSettings = {
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

export default function KontaktPage() {

  // =========================
  // BEDIENFELD: KONTAKT SEITE
  // =========================
  const contactSettings = {
    backgroundColor: "#E8E7E7",

    title: "schreib uns",
    titleColor: "#00D9FF",
    titleFontFamily: "Trattatello, fantasy",
    titleFontSize: "86px",
    mobileTitleFontSize: "clamp(50px, 15vw, 64px)",

    text: "Egal ob Frage, Kooperation oder einfach Hallo.",
    textColor: "#383F37",
    textFontFamily: "HaasGrotDisp, Arial, sans-serif",
    textFontSize: "24px",
    mobileTextFontSize: "21px",
    textLineHeight: "1.35",

    mail: "contact@gabonsa.com",
    buttonBackgroundColor: "#00D9FF",
    buttonTextColor: "#EDFCDF",
    buttonFontFamily: "Trattatello, fantasy",
    buttonFontSize: "32px",
    mobileButtonFontSize: "27px",

    paddingTop: "120px",
    paddingLeft: "130px",
    paddingRight: "80px",
  };

  // =========================
  // BEDIENFELD: KONTAKT BACKGROUND PNG
  // =========================
  // Datei muss im public-Ordner liegen:
  // public/kontakt-bg-1.png
  //
  // width + height = Fläche des Containers
  // size = tatsächliche Größe des PNG-Motivs
  //
  // Zum Größermachen am besten width, height und size gemeinsam erhöhen.
  const contactBackgroundPng: ContactBackgroundPngSettings = {
    src: "/kontakt-bg-1.png",
    width: "520px",
    height: "520px",
    size: "520px",
    left: "-160px",
    bottom: "160px",
    color: "#383F37",
    rotation: "-14deg",
    opacity: 0.11,
  };

  // =========================
  // BEDIENFELD: KONTAKT BILD
  // =========================
  const contactImageSettings = {
    src: "/kontakt-bild1.jpg",
    width: "70vw",
    height: "100vh",
    objectPosition: "center center",
  };


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
            .contact-bg-mark {
              width: 280px !important;
              height: 280px !important;
              left: -96px !important;
              right: auto !important;
              top: 286px !important;
              bottom: auto !important;
              opacity: 0.28 !important;
            }
          }
        `}
      </style>

      {/* ========================= */}
      {/* HEADER */}
      {/* ========================= */}
      <SiteHeader logoColor="#00D9FF" />
      <MobileBottomNav />

      {/* ========================= */}
      {/* KONTAKT BEREICH */}
      {/* ========================= */}
      <section
        className="relative grid h-[100svh] min-h-[620px] grid-cols-1 grid-rows-[minmax(0,55svh)_45svh] overflow-hidden md:h-auto md:min-h-screen md:grid-cols-[2fr_1fr] md:grid-rows-none"
        style={{
          backgroundColor: contactSettings.backgroundColor,
        }}
      >
        {/* KONTAKT BACKGROUND PNG */}
        <div
          className="contact-bg-mark mobile-bg-mark pointer-events-none absolute z-0 select-none"
          style={{
            width: contactBackgroundPng.width,
            height: contactBackgroundPng.height,
            left: contactBackgroundPng.left,
            right: contactBackgroundPng.right,
            top: contactBackgroundPng.top,
            bottom: contactBackgroundPng.bottom,
            opacity: contactBackgroundPng.opacity,
            backgroundColor: contactBackgroundPng.color,
            transform: `rotate(${contactBackgroundPng.rotation})`,

            WebkitMaskImage: `url('${contactBackgroundPng.src}')`,
            maskImage: `url('${contactBackgroundPng.src}')`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: contactBackgroundPng.size,
            maskSize: contactBackgroundPng.size,
          }}
        />

        {/* LINKE SEITE */}
        <div
          className="relative z-10 flex min-h-0 flex-col justify-center px-6 pb-3 pt-24 md:min-h-screen md:px-0 md:pb-0 md:pl-[130px] md:pr-[80px] md:pt-[120px]"
        >
          <h1
            className="text-[length:var(--contact-title-mobile-font-size)] md:text-[length:var(--contact-title-desktop-font-size)]"
            style={{
              "--contact-title-mobile-font-size":
                contactSettings.mobileTitleFontSize,
              "--contact-title-desktop-font-size": contactSettings.titleFontSize,
              color: contactSettings.titleColor,
              fontFamily: contactSettings.titleFontFamily,
              lineHeight: "1",
              marginBottom: "22px",
            } as CssVars}
          >
            {contactSettings.title}
          </h1>

          <p
            className="max-w-[720px] text-[length:var(--contact-text-mobile-font-size)] md:text-[length:var(--contact-text-desktop-font-size)]"
            style={{
              "--contact-text-mobile-font-size":
                contactSettings.mobileTextFontSize,
              "--contact-text-desktop-font-size": contactSettings.textFontSize,
              color: contactSettings.textColor,
              fontFamily: contactSettings.textFontFamily,
              lineHeight: contactSettings.textLineHeight,
              marginBottom: "26px",
            } as CssVars}
          >
            {contactSettings.text}
          </p>

          <a
            href={`mailto:${contactSettings.mail}`}
            className="w-fit max-w-full rounded-full px-6 py-2 text-[length:var(--contact-button-mobile-font-size)] transition hover:scale-105 md:px-8 md:py-3 md:text-[length:var(--contact-button-desktop-font-size)]"
            style={{
              "--contact-button-mobile-font-size":
                contactSettings.mobileButtonFontSize,
              "--contact-button-desktop-font-size":
                contactSettings.buttonFontSize,
              backgroundColor: contactSettings.buttonBackgroundColor,
              color: contactSettings.buttonTextColor,
              fontFamily: contactSettings.buttonFontFamily,
            } as CssVars}
          >
            {contactSettings.mail}
          </a>
        </div>

        {/* RECHTE SEITE / BILD */}
        <div className="relative z-10 h-full min-h-0 overflow-hidden md:h-auto md:min-h-screen">
          <img
            src={contactImageSettings.src}
            alt="Kontakt"
            className="h-full w-full object-cover"
            style={{
              objectPosition: contactImageSettings.objectPosition,
              display: "block",
            }}
          />
        </div>
      </section>

      {/* ========================= */}
      {/* FOOTER */}
      {/* ========================= */}
      <SiteFooter
        backgroundColor={contactSettings.backgroundColor}
        textColor={contactSettings.textColor}
      />
    </main>
  );
}
