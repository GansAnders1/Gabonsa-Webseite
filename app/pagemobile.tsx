"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";

type SectionThreeBackgroundPngSettings = {
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

type DesktopOffsetStyle = CSSProperties & {
  "--desktop-move-x": string;
};

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

export default function Home() {
  // =========================
  // BEDIENFELD: HEADER-LOGO
  // =========================
  const headerLogoSettings = {
    color: "#00D9FF",
    moveY: "0px",
  };

  // =========================
  // BEDIENFELD: HEADER-BUTTONS
  // =========================
  const headerButtonSettings = {
    backgroundColor: "#f7ffd7",
    textColor: "#383F37",
  };

  const headerButtonStyle = {
    backgroundColor: headerButtonSettings.backgroundColor,
    color: headerButtonSettings.textColor,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const headerLinks: NavLink[] = [
    { href: "/line-up", label: "Line-Up" },
    { href: "/faq", label: "FAQ" },
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/archive", label: "Archiv" },
    { href: "/partner", label: "Partner" },
    {
      href: "https://forms.gle/iv6jVRm3cU1yua9c8",
      label: "Volunteering",
      external: true,
    },
    { href: "/kontakt", label: "Kontakt" },
  ];

  const mobileBottomRowOne: NavLink[] = [
    { href: "/line-up", label: "Line-Up" },
    { href: "/faq", label: "FAQ" },
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/archive", label: "Archiv" },
  ];

  const mobileBottomRowTwo: NavLink[] = [
    { href: "/partner", label: "Partner" },
    {
      href: "https://forms.gle/iv6jVRm3cU1yua9c8",
      label: "Volunteering",
      external: true,
    },
    { href: "/kontakt", label: "Kontakt" },
  ];

  // =========================
  // BEDIENFELD: MOBILE BUTTONS
  // =========================
  // Hier kannst du die mobile Buttonleiste selbst einstellen.
  // Die Desktop-Buttons bleiben davon unberührt.
  const mobileButtonSettings = {
    bottomNavBottom: "34px", // Abstand vom unteren Bildschirmrand
    rowGap: "6px", // Abstand zwischen oberer und unterer Buttonzeile
    columnGap: "5px", // Abstand zwischen Buttons

    buttonMinHeight: "28px", // minimale Höhe der unteren Buttons
    buttonFontSize: "20px", // Schriftgröße der unteren Buttons
    buttonPaddingX: "10px", // Innenabstand links/rechts der unteren Buttons
    buttonPaddingY: "2px", // Innenabstand oben/unten der unteren Buttons
    buttonRadius: "9999px",

    topRowColumns: 4, // erste untere Reihe: 4 Buttons
    bottomRowColumns: 3, // zweite untere Reihe: 3 Buttons
    bottomRowWidth: "82%", // macht die zweite Reihe schmäler
    bottomRowOffset: "9%", // verschiebt die zweite Reihe nach rechts

    mobileNavPaddingX: "14px", // äußerer Abstand links/rechts der unteren Leiste

    topTicketMinHeight: "28px", // minimale Höhe vom Ticketbutton oben rechts
    topTicketFontSize: "20px", // Schriftgröße vom Ticketbutton oben rechts
    topTicketPaddingX: "10px", // Innenabstand links/rechts vom Ticketbutton oben rechts
    topTicketPaddingY: "3px", // Innenabstand oben/unten vom Ticketbutton oben rechts

    backgroundColor: "#f7ffd7",
    textColor: "#383F37",
  };

  // =========================
  // BEDIENFELD: BILD 2 TICKET-SCHRIFTZUG
  // =========================
  const ticketTextSettings = {
    text: "Dein Ticket",
    color: "#B7F000",
    hoverColor: "#f7ffd7",
    fontFamily: "Trattatello, fantasy",
    desktopMoveX: "-375px",
  };

  // =========================
  // BEDIENFELD: ABSCHNITT 3
  // =========================
  const sectionThreeSettings = {
    backgroundColor: "#181818",
    textColor: "#EDFCDF",
    lineHeight: "1.15",
  };

  // =========================
  // BEDIENFELD: ABSCHNITT 3 BACKGROUND PNG
  // =========================
  const sectionThreeBackgroundPng: SectionThreeBackgroundPngSettings = {
    src: "/startseite-bg-1.png",
    width: "520px",
    height: "520px",
    size: "520px",
    right: "-100px",
    bottom: "-30px",
    color: "#EDFCDF",
    rotation: "-18deg",
    opacity: 0.4,
  };

  // =========================
  // BEDIENFELD: AFTERMOVIE ABSCHNITT
  // =========================
  const aftermovieSettings = {
    videoUrl:
      "https://www.youtube.com/embed/XM5ZW30aWlk?autoplay=1&mute=1&playsinline=1&controls=1&rel=0",
    backgroundColor: "#181818",
  };

  // =========================
  // BEDIENFELD: BILD 4 SCHRIFTZUG
  // =========================
  const imageFourTextSettings = {
    text: "Archiv",
    link: "/archive",
    external: false,
    color: "#EDFCDF",
    fontFamily: "Trattatello, fantasy",
    desktopMoveX: "375px",
  };

  // =========================
  // BEDIENFELD: ABSCHNITT 5 / LOGO STRETCHED
  // =========================
  const sectionFiveSettings = {
    backgroundColor: "#181818",
    logoSrc: "/Logo-stretched.webp",
    logoColor: "#00D9FF",
    moveX: "0px",
    moveY: "0px",
  };

  // =========================
  // BEDIENFELD: FOOTER
  // =========================
  const footerSettings = {
    backgroundColor: "#181818",
    textColor: "#EDFCDF",
    borderColor: "#181818",
    fontSize: "14px",
    fontFamily: "HaasGrotDisp",
    fontWeight: "700",
  };

  const footerNavOne: NavLink[] = [
    {
      href: "https://tickets.nfctron.de/event/gabonsa-kulturverein/gabonsa-festival-2026",
      label: "Tickets",
      external: true,
    },
    { href: "/line-up", label: "Musik" },
    { href: "/faq", label: "FAQ" },
    {
      href: "https://www.youtube.com/watch?v=XM5ZW30aWlk",
      label: "Aftermovie",
      external: true,
    },
    { href: "/partner", label: "Partner" },
    {
      href: "https://forms.gle/iv6jVRm3cU1yua9c8",
      label: "Volunteering",
      external: true,
    },
  ];

  const footerNavTwo: NavLink[] = [
    { href: "/ueber-uns", label: "Werte" },
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/archive", label: "Archiv" },
    { href: "/kontakt", label: "Kontakt" },
    { href: "/impressum", label: "Impressum" },
  ];

  const footerNavThree: NavLink[] = [
    {
      href: "https://www.instagram.com/gabonsa.festival",
      label: "Instagram",
      external: true,
    },
    {
      href: "https://de.ra.co/events/2417850",
      label: "Resident Advisor",
      external: true,
    },
    { href: "https://linktr.ee/gabonsa", label: "Linktree", external: true },
  ];

  const mobileFooterRowOne: NavLink[] = [
    { href: "/archive", label: "Archiv" },
    { href: "/partner", label: "Partner" },
    { href: "/kontakt", label: "Kontakt" },
    {
      href: "https://tickets.nfctron.de/event/gabonsa-kulturverein/gabonsa-festival-2026",
      label: "Tickets",
      external: true,
    },
    { href: "/impressum", label: "Impressum" },
  ];

  const mobileFooterRowTwo: NavLink[] = [
    { href: "/ueber-uns", label: "Werte" },
    {
      href: "https://forms.gle/iv6jVRm3cU1yua9c8",
      label: "Volunteer",
      external: true,
    },
    {
      href: "https://www.instagram.com/gabonsa.festival",
      label: "Instagram",
      external: true,
    },
    {
      href: "https://www.youtube.com/watch?v=XM5ZW30aWlk",
      label: "YouTube",
      external: true,
    },
    { href: "https://linktr.ee/gabonsa", label: "Linktree", external: true },
  ];

  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const footerElement = footerRef.current;

    if (!footerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(footerElement);

    return () => observer.disconnect();
  }, []);

  const renderLink = ({
    href,
    label,
    external,
  }: {
    href: string;
    label: string;
    external?: boolean;
  }) => (
    <a
      key={`${href}-${label}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {label}
    </a>
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <style>
        {`
          @font-face {
            font-family: "HaasGrotDisp";
            src: url("/HaasGrotDisp-65Medium.otf") format("opentype");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }

          .desktop-offset-link {
            transform: translate(-50%, -50%);
          }

          .section-three-bg-png {
            width: min(68vw, 300px);
            height: min(68vw, 300px);
            right: -70px;
            bottom: 12px;
            -webkit-mask-size: contain;
            mask-size: contain;
          }

          .mobile-bottom-nav {
            bottom: max(${mobileButtonSettings.bottomNavBottom}, calc(env(safe-area-inset-bottom) + ${mobileButtonSettings.bottomNavBottom}));
          }

          @media (min-width: 1024px) {
            .desktop-offset-link {
              transform: translate(calc(-50% + var(--desktop-move-x)), -50%);
            }

            .section-three-bg-png {
              width: ${sectionThreeBackgroundPng.width};
              height: ${sectionThreeBackgroundPng.height};
              right: ${sectionThreeBackgroundPng.right};
              bottom: ${sectionThreeBackgroundPng.bottom};
              -webkit-mask-size: ${sectionThreeBackgroundPng.size};
              mask-size: ${sectionThreeBackgroundPng.size};
            }
          }
        `}
      </style>

      {/* ========================= */}
      {/* ERSTER BEREICH / LANDING */}
      {/* ========================= */}
      <section className="relative h-[100svh] min-h-[620px] overflow-hidden bg-black text-white md:h-screen md:min-h-0">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/festival-bg.jpg')",
            backgroundPosition: "center 82%",
          }}
        />

        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-pink-500/20 mix-blend-screen" />

        <header
          className="fixed left-0 top-0 z-50 grid w-full grid-cols-[46px_minmax(0,1fr)_82px] items-start gap-x-2 px-2.5 py-5 min-[390px]:grid-cols-[50px_minmax(0,1fr)_88px] md:flex md:items-start md:justify-between md:px-6 md:py-5"
          style={{
            fontFamily: "Trattatello, fantasy",
          }}
        >
          <div className="contents md:flex md:min-w-0 md:items-start md:gap-4">
            <Link href="/" aria-label="Zur Startseite">
              <div
                className="h-[38px] w-[46px] shrink-0 min-[390px]:h-[41px] min-[390px]:w-[50px] md:h-[72px] md:w-[92px]"
                style={{
                  backgroundColor: headerLogoSettings.color,
                  transform: `translateY(${headerLogoSettings.moveY})`,

                  WebkitMaskImage: "url('/Gabonsa_logo-02.png')",
                  maskImage: "url('/Gabonsa_logo-02.png')",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                }}
              />
            </Link>

            <div className="block min-w-0 overflow-visible pt-0 text-left text-[clamp(16px,4.4vw,18px)] leading-[1.04] text-[#f7ffd7] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] md:hidden">
              <p>Gabonsa Festival</p>
              <p className="whitespace-nowrap tracking-[-0.03em]">03. &amp; 04.07.2026, Innsbruck</p>
            </div>

            <nav className="hidden items-center gap-3 md:flex">
              {headerLinks.map((link) => (
                <a
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="inline-flex h-9 w-[115px] items-center justify-center rounded-full text-[22px] shadow-md transition hover:scale-105"
                  style={headerButtonStyle}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <a
            href="https://tickets.nfctron.de/event/gabonsa-kulturverein/gabonsa-festival-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[var(--mobile-top-ticket-min-height)] w-auto shrink-0 items-center justify-center rounded-full px-[var(--mobile-top-ticket-padding-x)] py-[var(--mobile-top-ticket-padding-y)] text-[length:var(--mobile-top-ticket-font-size)] leading-none shadow-md transition hover:scale-105 md:h-9 md:w-[115px] md:px-0 md:py-0 md:text-[22px]"
            style={
              {
                ...headerButtonStyle,
                "--mobile-top-ticket-min-height": mobileButtonSettings.topTicketMinHeight,
                "--mobile-top-ticket-padding-x": mobileButtonSettings.topTicketPaddingX,
                "--mobile-top-ticket-padding-y": mobileButtonSettings.topTicketPaddingY,
                "--mobile-top-ticket-font-size": mobileButtonSettings.topTicketFontSize,
              } as CSSProperties & {
                "--mobile-top-ticket-min-height": string;
                "--mobile-top-ticket-padding-x": string;
                "--mobile-top-ticket-padding-y": string;
                "--mobile-top-ticket-font-size": string;
              }
            }
          >
            Tickets
          </a>
        </header>

        <nav
          className={`mobile-bottom-nav fixed inset-x-0 z-50 flex flex-col items-stretch transition duration-300 md:hidden ${
            isFooterVisible
              ? "pointer-events-none translate-y-8 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
          style={{
            paddingLeft: mobileButtonSettings.mobileNavPaddingX,
            paddingRight: mobileButtonSettings.mobileNavPaddingX,
            gap: mobileButtonSettings.rowGap,
            fontFamily: "Trattatello, fantasy",
          }}
          aria-label="Mobile Hauptnavigation"
        >
          <div
            className="grid w-full items-center"
            style={{
              gridTemplateColumns: `repeat(${mobileButtonSettings.topRowColumns}, minmax(0, 1fr))`,
              gap: mobileButtonSettings.columnGap,
            }}
          >
            {mobileBottomRowOne.map((link) => (
              <a
                key={`${link.href}-${link.label}-mobile-bottom-row-one`}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="inline-flex w-full min-w-0 items-center justify-center whitespace-nowrap shadow-md transition hover:scale-105"
                style={{
                  minHeight: mobileButtonSettings.buttonMinHeight,
                  borderRadius: mobileButtonSettings.buttonRadius,
                  paddingLeft: mobileButtonSettings.buttonPaddingX,
                  paddingRight: mobileButtonSettings.buttonPaddingX,
                  paddingTop: mobileButtonSettings.buttonPaddingY,
                  paddingBottom: mobileButtonSettings.buttonPaddingY,
                  fontSize: mobileButtonSettings.buttonFontSize,
                  lineHeight: 1,
                  backgroundColor: mobileButtonSettings.backgroundColor,
                  color: mobileButtonSettings.textColor,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div
            className="grid items-center"
            style={{
              width: mobileButtonSettings.bottomRowWidth,
              marginLeft: mobileButtonSettings.bottomRowOffset,
              gridTemplateColumns: `repeat(${mobileButtonSettings.bottomRowColumns}, minmax(0, 1fr))`,
              gap: mobileButtonSettings.columnGap,
            }}
          >
            {mobileBottomRowTwo.map((link) => (
              <a
                key={`${link.href}-${link.label}-mobile-bottom-row-two`}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="inline-flex w-full min-w-0 items-center justify-center whitespace-nowrap shadow-md transition hover:scale-105"
                style={{
                  minHeight: mobileButtonSettings.buttonMinHeight,
                  borderRadius: mobileButtonSettings.buttonRadius,
                  paddingLeft: mobileButtonSettings.buttonPaddingX,
                  paddingRight: mobileButtonSettings.buttonPaddingX,
                  paddingTop: mobileButtonSettings.buttonPaddingY,
                  paddingBottom: mobileButtonSettings.buttonPaddingY,
                  fontSize: mobileButtonSettings.buttonFontSize,
                  lineHeight: 1,
                  backgroundColor: mobileButtonSettings.backgroundColor,
                  color: mobileButtonSettings.textColor,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="absolute inset-0 z-10 flex items-center justify-center px-5">
          <img
            src="/gabonsa-logo.webp"
            alt="Gabonsa Logo"
            className="w-[560px] max-w-[86vw] translate-y-[-18px] drop-shadow-[0_10px_35px_rgba(0,0,0,0.75)] md:w-[1700px] md:max-w-[95vw] md:translate-y-[-20px]"
          />
        </div>

        <a
          href="https://www.youtube.com/watch?v=XM5ZW30aWlk"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-1/2 top-[64%] z-20 -translate-x-1/2 rounded-full bg-cyan-400 px-6 py-2 text-[21px] text-black shadow-lg transition hover:scale-105 hover:bg-cyan-300 md:top-[70%] md:px-8 md:text-[24px]"
          style={{
            fontFamily: "Trattatello, fantasy",
          }}
        >
          Video
        </a>

        <div
          className="absolute bottom-8 left-8 z-20 hidden text-left text-[35px] leading-tight text-[#f7ffd7] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] md:block"
          style={{
            fontFamily: "Trattatello, fantasy",
          }}
        >
          <p>Gabonsa Festival</p>
          <p>03. &amp; 04.07.2026, Innsbruck</p>
        </div>

        <div
          className="absolute bottom-8 right-8 z-20 hidden text-right text-[35px] leading-tight text-[#f7ffd7] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] md:block"
          style={{
            fontFamily: "Trattatello, fantasy",
          }}
        >
          <p>Stell dir vor es ist Zukunft</p>
          <p>und alles ist gut.</p>
        </div>
      </section>

      {/* ========================= */}
      {/* ZWEITER BEREICH / BILD 2 */}
      {/* ========================= */}
      <section className="relative h-[100svh] min-h-[560px] overflow-hidden bg-black md:h-screen md:min-h-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Bild2.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/15" />

        <a
          href="https://tickets.nfctron.de/event/gabonsa-kulturverein/gabonsa-festival-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="desktop-offset-link absolute left-1/2 top-1/2 z-30 whitespace-nowrap text-[42px] transition hover:scale-105 md:text-[56px]"
          style={
            {
              "--desktop-move-x": ticketTextSettings.desktopMoveX,
              color: ticketTextSettings.color,
              fontFamily: ticketTextSettings.fontFamily,
            } as DesktopOffsetStyle
          }
        >
          {ticketTextSettings.text}
        </a>
      </section>

      {/* ========================= */}
      {/* DRITTER BEREICH / BILD 3 */}
      {/* ========================= */}
      <section className="relative grid min-h-[100svh] grid-cols-1 overflow-hidden bg-black md:h-screen md:grid-cols-2">
        <div
          className="h-[42svh] min-h-[280px] w-full bg-cover bg-center bg-no-repeat md:h-full md:min-h-0"
          style={{
            backgroundImage: "url('/Bild3.jpg')",
          }}
        />

        <div
          className="relative flex min-h-[58svh] items-center overflow-hidden px-6 py-10 sm:px-8 md:h-full md:min-h-0 md:p-20"
          style={{
            backgroundColor: sectionThreeSettings.backgroundColor,
          }}
        >
          {/* BACKGROUND PNG HINTER DEM TEXTBLOCK */}
          <div
            className="section-three-bg-png pointer-events-none absolute z-0 select-none"
            style={{
              opacity: sectionThreeBackgroundPng.opacity,
              backgroundColor: sectionThreeBackgroundPng.color,
              transform: `rotate(${sectionThreeBackgroundPng.rotation})`,

              WebkitMaskImage: `url('${sectionThreeBackgroundPng.src}')`,
              maskImage: `url('${sectionThreeBackgroundPng.src}')`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />

          <p
            className="relative z-10 text-[24px] leading-[1.15] sm:text-[28px] md:text-[38px]"
            style={{
              color: sectionThreeSettings.textColor,
              lineHeight: sectionThreeSettings.lineHeight,
              fontFamily: "HaasGrotDisp",
            }}
          >
            <span
              className="text-[36px] md:text-[56px]"
              style={{
                fontFamily: "Trattatello, fantasy",
              }}
            >
              Gabonsa 2026
            </span>{" "}
            - eine{" "}
            <span
              className="text-[36px] md:text-[56px]"
              style={{
                fontFamily: "Trattatello, fantasy",
              }}
            >
              Symbiose
            </span>
            . Musik, Installation und Performance. Umgeben von Bergen entsteht
            ein Raum zwischen{" "}
            <span
              className="text-[36px] md:text-[56px]"
              style={{
                fontFamily: "Trattatello, fantasy",
              }}
            >
              Gegenwart
            </span>{" "}
            und{" "}
            <span
              className="text-[36px] md:text-[56px]"
              style={{
                fontFamily: "Trattatello, fantasy",
              }}
            >
              Zukunft
            </span>
            . Ein{" "}
            <span
              className="text-[36px] md:text-[56px]"
              style={{
                fontFamily: "Trattatello, fantasy",
              }}
            >
              Möglichkeitsraum
            </span>
            .
          </p>
        </div>
      </section>

      {/* ========================= */}
      {/* NEUER BEREICH / AFTERMOVIE */}
      {/* ========================= */}
      <section
        className="relative h-[56svh] min-h-[320px] overflow-hidden md:h-screen"
        style={{
          backgroundColor: aftermovieSettings.backgroundColor,
        }}
      >
        <iframe
          className="absolute inset-0 h-full w-full"
          src={aftermovieSettings.videoUrl}
          title="Gabonsa Aftermovie"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </section>

      {/* ========================= */}
      {/* VIERTER BEREICH / BILD 4 */}
      {/* ========================= */}
      <section className="relative h-[100svh] min-h-[560px] overflow-hidden bg-black md:h-screen md:min-h-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Bild4.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/15" />

        <a
          href={imageFourTextSettings.link}
          target={imageFourTextSettings.external ? "_blank" : undefined}
          rel={imageFourTextSettings.external ? "noopener noreferrer" : undefined}
          className="desktop-offset-link absolute left-1/2 top-1/2 z-30 whitespace-nowrap text-[42px] transition hover:scale-105 md:text-[56px]"
          style={
            {
              "--desktop-move-x": imageFourTextSettings.desktopMoveX,
              color: imageFourTextSettings.color,
              fontFamily: imageFourTextSettings.fontFamily,
            } as DesktopOffsetStyle
          }
        >
          {imageFourTextSettings.text}
        </a>
      </section>

      {/* ========================= */}
      {/* FÜNFTER BEREICH / LOGO STRETCHED */}
      {/* ========================= */}
      <section
        className="relative flex h-[55svh] min-h-[360px] items-center justify-center overflow-hidden md:h-screen"
        style={{
          backgroundColor: sectionFiveSettings.backgroundColor,
        }}
      >
        <div
          aria-label="Gabonsa Logo Stretched"
          className="h-[220px] w-[92vw] md:h-[500px] md:w-[900px] md:max-w-[100svw]"
          style={{
            backgroundColor: sectionFiveSettings.logoColor,
            transform: `translate(${sectionFiveSettings.moveX}, ${sectionFiveSettings.moveY})`,

            WebkitMaskImage: `url('${sectionFiveSettings.logoSrc}')`,
            maskImage: `url('${sectionFiveSettings.logoSrc}')`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
        />
      </section>

      {/* ========================= */}
      {/* FOOTER */}
      {/* ========================= */}
      <footer
        ref={footerRef}
        className="w-full border-t px-3 py-5 md:flex md:items-center md:justify-between md:gap-6 md:px-[30px] md:py-3"
        style={{
          backgroundColor: footerSettings.backgroundColor,
          color: footerSettings.textColor,
          borderColor: footerSettings.borderColor,
          fontSize: footerSettings.fontSize,
          fontFamily: footerSettings.fontFamily,
          fontWeight: footerSettings.fontWeight,
        }}
      >
        <div className="grid gap-2 text-[12px] leading-tight md:hidden">
          <nav className="grid grid-cols-5 items-start gap-x-2 gap-y-1 text-center">
            {mobileFooterRowOne.map(renderLink)}
          </nav>
          <nav className="grid grid-cols-5 items-start gap-x-2 gap-y-1 text-center">
            {mobileFooterRowTwo.map(renderLink)}
          </nav>
        </div>

        <div className="hidden whitespace-nowrap md:block">© Gabonsa Festival</div>

        <nav className="hidden items-center gap-5 whitespace-nowrap md:flex">
          {footerNavOne.map(renderLink)}
        </nav>

        <nav className="hidden items-center gap-5 whitespace-nowrap md:flex">
          {footerNavTwo.map(renderLink)}
        </nav>

        <nav className="hidden items-center gap-5 whitespace-nowrap md:flex">
          {footerNavThree.map(renderLink)}
        </nav>
      </footer>
    </main>
  );
}
