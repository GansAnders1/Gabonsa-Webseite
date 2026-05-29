"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MobileBottomNav, SiteFooter, SiteHeader } from "../components/site-chrome";

export default function ArchivePage() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement | null>(null);

  // =========================
  // BEDIENFELD: ABSCHNITT 1 / HERO BILD + EINFÄRBBARES LOGO
  // =========================
  const heroSettings = {
    backgroundImage: "/archive-header-1.jpeg",
    backgroundPosition: "center center",

    logoSrc: "/logo-stretched-2.png",
    logoColor: "#FF3B5C",

    logoWidth: "1200px",
    logoHeight: "520px",
    logoMaxWidth: "88vw",

    logoMoveX: "0px",
    logoMoveY: "0px",
  };

  // =========================
  // BEDIENFELD: ABSCHNITT 2 / AFTERMOVIE
  // =========================
  const aftermovieSettings = {
    videoUrl:
      "https://www.youtube.com/embed/XM5ZW30aWlk?autoplay=1&mute=1&playsinline=1&controls=1&rel=0&loop=1&playlist=XM5ZW30aWlk",
    backgroundColor: "#181818",

    marginTop: "80px"
  };

  // =========================
  // BEDIENFELD: ABSCHNITT 3 / GALERIE
  // =========================
  const gallerySectionSettings = {
    backgroundColor: "#181818",

    paddingTop: "120px",
    paddingX: "28px",
    paddingBottom: "120px",
  };

  const gallerySettings = {
    maxWidth: "1300px",
    columnCount: 3,
    columnGap: "10px",
    imageGap: "10px",
    marginTop: "0px",
  };

  const galleryImages = [
    "/archive-bild2.jpg",
    "/archive-bild3.jpg",
    "/archive-bild4.jpg",
    "/archive-bild5.jpg",
    "/archive-bild6.jpg",
    "/archive-bild7.jpg",
    "/archive-bild8.jpg",
    "/archive-bild9.jpg",
    "/archive-bild10.jpg",
    "/archive-bild11.jpg",
    "/archive-bild12.jpg",
    "/archive-bild13.jpg",
    "/archive-bild14.jpg",
    "/archive-bild15.jpg",
    "/archive-bild16.jpg",
    "/archive-bild17.jpg",
    "/archive-bild18.jpg",
    "/archive-bild19.jpg",
    "/archive-bild20.jpg",
    "/archive-bild21.jpg",
    "/archive-bild22.jpg",
    "/archive-bild23.jpg",
    "/archive-bild24.jpg",
    "/archive-bild25.jpg",
    "/archive-bild26.jpg",
    "/archive-bild27.jpg",
    "/archive-bild28.jpg",
    "/archive-bild29.jpg",
    "/archive-bild30.jpg",
    "/archive-bild31.jpg",
    "/archive-bild32.jpg",
    "/archive-bild33.jpg",
    "/archive-bild34.jpg",
    "/archive-bild35.jpg",
    "/archive-bild36.jpg",
    "/archive-bild37.jpg",
    "/archive-bild38.jpg",
    "/archive-bild39.jpg",
  ];

  const photoCreditSettings = {
    text: "Fotografie von Anna Rogler, Christoph Schwarz, Jan Stork und Kata Mende.",
    color: "#EDFCDF",
    fontFamily: "HaasGrotDisp, Arial, sans-serif",
    fontSize: "18px",
    marginTop: "42px",
  };

  // =========================
  // BEDIENFELD: ABSCHNITT 4 / LINE-UP BILD
  // =========================
  const lineUpImageSectionSettings = {
    backgroundColor: "#181818",

    imageSrc: "/archive-lineup-1.webp",

    imageWidth: "100vw",
    imageMaxWidth: "none",

    paddingTop: "0px",
    paddingBottom: "0px",
  };

  const moveLightboxImage = useCallback((direction: -1 | 1) => {
    const lightboxElement = lightboxRef.current;
    if (!lightboxElement) return;

    const currentIndex = Math.round(
      lightboxElement.scrollLeft / lightboxElement.clientWidth
    );
    const nextIndex =
      (currentIndex + direction + galleryImages.length) % galleryImages.length;

    lightboxElement.scrollTo({
      left: lightboxElement.clientWidth * nextIndex,
      behavior: "smooth",
    });
  }, [galleryImages.length]);

  useEffect(() => {
    if (activeImageIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImageIndex(null);
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        moveLightboxImage(-1);
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        moveLightboxImage(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    requestAnimationFrame(() => {
      const lightboxElement = lightboxRef.current;
      if (!lightboxElement) return;

      lightboxElement.scrollLeft = lightboxElement.clientWidth * activeImageIndex;
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImageIndex, moveLightboxImage]);


  return (
    <main className="archive-page min-h-screen bg-[#181818] text-white">
      <style>
        {`
          @font-face {
            font-family: "HaasGrotDisp";
            src: url("/HaasGrotDisp-65Medium.otf") format("opentype");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }

          .archive-lightbox-track {
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }

          .archive-lightbox-track::-webkit-scrollbar {
            display: none;
          }

          @media (max-width: 767px) {
            .archive-page .archive-hero-logo {
              flex-shrink: 0;
              height: 370px !important;
              max-width: 124vw !important;
              width: 124vw !important;
            }

            .archive-page .archive-gallery {
              column-count: 3 !important;
            }
          }
        `}
      </style>

      {/* ========================= */}
      {/* HEADER */}
      {/* ========================= */}
      <SiteHeader logoColor="#FF3B5C" />
      <MobileBottomNav />

      {/* ========================= */}
      {/* 1. ABSCHNITT / VOLLFLÄCHIGES BILD MIT EINFÄRBBAREM LOGO */}
      {/* ========================= */}
      <section className="relative h-screen overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('${heroSettings.backgroundImage}')`,
            backgroundPosition: heroSettings.backgroundPosition,
          }}
        />

        <div className="absolute inset-0 z-10 flex items-center justify-center px-0 md:px-6">
          <div
            aria-label="Gabonsa Logo"
            className="archive-hero-logo"
            style={{
              width: heroSettings.logoWidth,
              height: heroSettings.logoHeight,
              maxWidth: heroSettings.logoMaxWidth,
              backgroundColor: heroSettings.logoColor,
              transform: `translate(${heroSettings.logoMoveX}, ${heroSettings.logoMoveY})`,

              WebkitMaskImage: `url('${heroSettings.logoSrc}')`,
              maskImage: `url('${heroSettings.logoSrc}')`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />
        </div>
      </section>

      {/* ========================= */}
      {/* 2. ABSCHNITT / VOLLFLÄCHIGES VIDEO */}
      {/* ========================= */}
      <section
        className="relative h-screen overflow-hidden"
        style={{
          backgroundColor: aftermovieSettings.backgroundColor,
          marginTop: aftermovieSettings.marginTop,
        }}
      >
        <iframe
          src={aftermovieSettings.videoUrl}
          title="Gabonsa Aftermovie"
          className="absolute left-1/2 top-1/2 h-[100vh] w-[177.78vh] min-h-[56.25vw] min-w-[100vw] -translate-x-1/2 -translate-y-1/2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </section>

      {/* ========================= */}
      {/* 3. ABSCHNITT / GALERIE */}
      {/* ========================= */}
      <section
        className="relative min-h-screen overflow-hidden px-4 pb-32 pt-24 md:px-[28px] md:pb-[120px] md:pt-[120px]"
        style={{
          backgroundColor: gallerySectionSettings.backgroundColor,
        }}
      >
        <div
          className="archive-gallery mobile-gallery mx-auto"
          style={{
            maxWidth: gallerySettings.maxWidth,
            columnCount: gallerySettings.columnCount,
            columnGap: gallerySettings.columnGap,
            marginTop: gallerySettings.marginTop,
          }}
        >
          {galleryImages.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImageIndex(index)}
              className="block w-full cursor-zoom-in border-0 bg-transparent p-0"
              style={{
                breakInside: "avoid",
                marginBottom: gallerySettings.imageGap,
              }}
            >
              <img
                src={image}
                alt={`Gabonsa Archiv Bild ${index + 2}`}
                style={{
                  width: "100%",
                  display: "block",
                }}
              />
            </button>
          ))}
        </div>

        <p
          className="mobile-body-text mx-auto text-center"
          style={{
            maxWidth: gallerySettings.maxWidth,
            color: photoCreditSettings.color,
            fontFamily: photoCreditSettings.fontFamily,
            fontSize: photoCreditSettings.fontSize,
            marginTop: photoCreditSettings.marginTop,
          }}
        >
          {photoCreditSettings.text}
        </p>
      </section>

      {/* ========================= */}
      {/* 4. ABSCHNITT / LINE-UP BILD */}
      {/* ========================= */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          backgroundColor: lineUpImageSectionSettings.backgroundColor,
          paddingTop: lineUpImageSectionSettings.paddingTop,
          paddingBottom: lineUpImageSectionSettings.paddingBottom,
        }}
      >
        <img
          src={lineUpImageSectionSettings.imageSrc}
          alt="Gabonsa Archiv Line-Up"
          style={{
            width: lineUpImageSectionSettings.imageWidth,
            maxWidth: lineUpImageSectionSettings.imageMaxWidth,
            height: "auto",
            display: "block",
          }}
        />
      </section>

      {/* ========================= */}
      {/* FOOTER */}
      {/* ========================= */}
      <SiteFooter
        backgroundColor={lineUpImageSectionSettings.backgroundColor}
        textColor={photoCreditSettings.color}
      />

      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-[90] bg-black"
          role="dialog"
          aria-modal="true"
          aria-label="Archiv Bildansicht"
        >
          <button
            type="button"
            onClick={() => setActiveImageIndex(null)}
            className="fixed right-4 top-4 z-[100] flex h-11 w-11 items-center justify-center rounded-full bg-[#EDFCDF] text-[24px] leading-none text-[#181818] shadow-lg transition hover:scale-105 md:right-6 md:top-6"
            aria-label="Bildansicht schließen"
            style={{
              fontFamily: "Trattatello, fantasy",
            }}
          >
            X
          </button>

          <button
            type="button"
            onClick={() => moveLightboxImage(-1)}
            className="fixed left-6 top-1/2 z-[100] hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#EDFCDF] text-[34px] leading-none text-[#181818] shadow-lg transition hover:scale-105 md:flex"
            aria-label="Vorheriges Bild"
            style={{
              fontFamily: "Trattatello, fantasy",
            }}
          >
            {"<"}
          </button>

          <button
            type="button"
            onClick={() => moveLightboxImage(1)}
            className="fixed right-6 top-1/2 z-[100] hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#EDFCDF] text-[34px] leading-none text-[#181818] shadow-lg transition hover:scale-105 md:flex"
            aria-label="Nächstes Bild"
            style={{
              fontFamily: "Trattatello, fantasy",
            }}
          >
            {">"}
          </button>

          <div
            ref={lightboxRef}
            className="archive-lightbox-track flex h-full w-full snap-x snap-mandatory overflow-x-auto"
          >
            {galleryImages.map((image, index) => (
              <figure
                key={`${image}-lightbox`}
                className="flex h-full w-full shrink-0 snap-center items-center justify-center px-4 py-16 md:px-12 md:py-20"
                aria-label={`Archiv Bild ${index + 1} von ${galleryImages.length}`}
              >
                <img
                  src={image}
                  alt={`Gabonsa Archiv Bild ${index + 2}`}
                  className="max-h-full max-w-full object-contain"
                />
              </figure>
            ))}
          </div>
        </div>
      )}
    </main>
  );
} 
