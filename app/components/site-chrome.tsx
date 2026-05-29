"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

type CssVars = CSSProperties & Record<`--${string}`, string>;

const displayFontFamily =
  'Trattatello, "Marker Felt", "Chalkboard SE", "Comic Sans MS", cursive';

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

function renderLink({ href, label, external }: NavLink) {
  return (
    <a
      key={`${href}-${label}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {label}
    </a>
  );
}

export function SiteHeader({ logoColor = "#00D9FF" }: { logoColor?: string }) {
  const buttonStyle = {
    backgroundColor: "#f7ffd7",
    color: "#383F37",
  };

  return (
    <header
      className="fixed left-0 top-0 z-50 grid w-full grid-cols-[58px_minmax(0,1fr)_96px] items-start gap-x-2 px-2.5 py-5 min-[390px]:grid-cols-[58px_minmax(0,1fr)_102px] md:flex md:items-start md:justify-between md:px-6 md:py-5"
      style={{ fontFamily: displayFontFamily }}
    >
      <div className="contents md:flex md:min-w-0 md:items-start md:gap-4">
        <Link
          href="/"
          aria-label="Zur Startseite"
          className="relative z-10 block shrink-0"
        >
          <div
            className="h-[47px] w-[58px] md:h-[72px] md:w-[92px] md:translate-y-[-8px]"
            style={{
              backgroundColor: logoColor,
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

        <div className="block min-w-0 overflow-visible text-left text-[clamp(16px,4.4vw,18px)] leading-[1.04] text-[#f7ffd7] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] md:hidden">
          <p>Gabonsa Festival</p>
          <p className="whitespace-nowrap tracking-[-0.03em]">
            03. &amp; 04.07.2026, Innsbruck
          </p>
        </div>

        <nav className="hidden items-center gap-3 md:flex">
          {headerLinks.map((link) => (
            <a
              key={`${link.href}-${link.label}`}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="inline-flex h-9 w-[115px] items-center justify-center rounded-full text-[22px] shadow-md transition hover:scale-105"
              style={buttonStyle}
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
        className="inline-flex min-h-8 w-auto shrink-0 items-center justify-center rounded-full px-3 py-[3px] text-[22px] leading-none shadow-md transition hover:scale-105 md:h-9 md:w-[115px] md:px-0 md:py-0"
        style={buttonStyle}
      >
        Tickets
      </a>
    </header>
  );
}

export function MobileBottomNav({
  showAfterScroll = false,
}: {
  showAfterScroll?: boolean;
}) {
  const [hasStartedScrolling, setHasStartedScrolling] =
    useState(!showAfterScroll);
  const [isOverFooter, setIsOverFooter] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!showAfterScroll) return;

    const markVisible = () => setHasStartedScrolling(true);
    const updateScrollState = () => {
      const scrollY =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      if (scrollY > 0) markVisible();
    };
    const visualViewport = window.visualViewport;

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("wheel", markVisible, { passive: true });
    window.addEventListener("touchstart", markVisible, { passive: true });
    window.addEventListener("touchmove", markVisible, { passive: true });
    visualViewport?.addEventListener("scroll", updateScrollState, {
      passive: true,
    });
    visualViewport?.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("wheel", markVisible);
      window.removeEventListener("touchstart", markVisible);
      window.removeEventListener("touchmove", markVisible);
      visualViewport?.removeEventListener("scroll", updateScrollState);
      visualViewport?.removeEventListener("resize", updateScrollState);
    };
  }, [showAfterScroll]);

  useEffect(() => {
    const updateFooterOverlap = () => {
      const footerElement = document.querySelector("[data-site-footer]");
      const navElement = navRef.current;

      if (!footerElement || !navElement) {
        setIsOverFooter(false);
        return;
      }

      const footerRect = footerElement.getBoundingClientRect();
      const navRect = navElement.getBoundingClientRect();
      const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
      const footerVisible = footerRect.top < viewportHeight && footerRect.bottom > 0;
      const navOverFooter =
        footerRect.top < navRect.bottom && footerRect.bottom > navRect.top;

      setIsOverFooter(footerVisible || navOverFooter);
    };

    updateFooterOverlap();
    window.addEventListener("scroll", updateFooterOverlap, { passive: true });
    window.addEventListener("resize", updateFooterOverlap);
    window.visualViewport?.addEventListener("resize", updateFooterOverlap);

    return () => {
      window.removeEventListener("scroll", updateFooterOverlap);
      window.removeEventListener("resize", updateFooterOverlap);
      window.visualViewport?.removeEventListener("resize", updateFooterOverlap);
    };
  }, []);

  const shouldShow = hasStartedScrolling && !isOverFooter;
  const renderButton = (link: NavLink, keySuffix: string) => (
    <a
      key={`${link.href}-${link.label}-${keySuffix}`}
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className="inline-flex min-h-[27px] w-full min-w-0 items-center justify-center whitespace-nowrap rounded-full bg-[#f7ffd7] px-2 py-0.5 text-[19px] leading-none text-[#383F37] shadow-md transition hover:scale-105"
    >
      {link.label}
    </a>
  );

  return (
    <nav
      ref={navRef}
      className={`fixed inset-x-0 z-50 flex flex-col items-stretch gap-1 px-3.5 transition duration-300 md:hidden ${
        shouldShow
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-8 opacity-0"
      }`}
      style={
        {
          bottom: "max(52px, calc(env(safe-area-inset-bottom) + 52px))",
          fontFamily: displayFontFamily,
        } as CssVars
      }
      aria-label="Mobile Hauptnavigation"
    >
      <div className="grid w-full grid-cols-4 items-center gap-1">
        {mobileBottomRowOne.map((link) => renderButton(link, "row-one"))}
      </div>
      <div className="ml-[9%] grid w-[82%] grid-cols-3 items-center gap-1">
        {mobileBottomRowTwo.map((link) => renderButton(link, "row-two"))}
      </div>
    </nav>
  );
}

export function SiteFooter({
  backgroundColor = "#181818",
  textColor = "#EDFCDF",
  borderColor = backgroundColor,
}: {
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
}) {
  return (
    <footer
      data-site-footer
      className="w-full border-t px-3 py-5 md:flex md:h-10 md:items-center md:justify-between md:gap-6 md:px-[30px] md:py-0"
      style={{
        backgroundColor,
        color: textColor,
        borderColor,
        fontSize: "14px",
        fontFamily: "HaasGrotDisp, Arial, sans-serif",
        fontWeight: 700,
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
  );
}
