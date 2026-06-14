"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState, type CSSProperties } from "react";

type CssVars = CSSProperties & Record<`--${string}`, string>;

type ArtistSocialLink = {
  label: string;
  ariaLabel: string;
  href: string;
};

type ArtistProfile = {
  nameImageSrc: string;
  bio: string;
  backgroundColor: string;
  textColor: string;
  links: ArtistSocialLink[];
};

export type LineUpArtist = {
  name: string;
  profile?: ArtistProfile;
};

type ArtistPopupListProps = {
  artists: LineUpArtist[];
  textColor: string;
  hoverColor: string;
  fontFamily: string;
  lineHeight: string;
  mobileFontSize: string;
  desktopFontSize: string;
};

export function ArtistPopupList({
  artists,
  textColor,
  hoverColor,
  fontFamily,
  lineHeight,
  mobileFontSize,
  desktopFontSize,
}: ArtistPopupListProps) {
  const [activeArtistName, setActiveArtistName] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const titleId = useId();
  const activeArtist =
    artists.find((artist) => artist.name === activeArtistName) ?? null;
  const activeProfile = activeArtist?.profile ?? null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!activeProfile || !dialog || dialog.open) return;

    dialog.showModal();
  }, [activeProfile]);

  useEffect(() => {
    if (!activeProfile) return;

    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [activeProfile]);

  const closeArtist = () => setActiveArtistName(null);

  return (
    <>
      <div
        className="relative z-20 flex flex-col items-center text-center text-[length:var(--lineup-mobile-font-size)] md:text-[length:var(--lineup-desktop-font-size)]"
        style={
          {
            "--lineup-mobile-font-size": mobileFontSize,
            "--lineup-desktop-font-size": desktopFontSize,
            fontFamily,
            lineHeight,
          } as CssVars
        }
      >
        {artists.map((artist) =>
          artist.profile ? (
            <button
              key={artist.name}
              type="button"
              onClick={() => setActiveArtistName(artist.name)}
              className="artist-link touch-manipulation border-0 bg-transparent p-0 font-[inherit] leading-[inherit] transition hover:scale-105"
              style={
                {
                  "--artist-color": textColor,
                  "--artist-hover-color": hoverColor,
                } as CssVars
              }
            >
              {artist.name}
            </button>
          ) : (
            <span
              key={artist.name}
              className="artist-link"
              style={
                {
                  "--artist-color": textColor,
                  "--artist-hover-color": hoverColor,
                } as CssVars
              }
            >
              {artist.name}
            </span>
          ),
        )}
      </div>

      {activeArtist && activeProfile && (
        <dialog
          ref={dialogRef}
          className="artist-profile-dialog m-0 h-dvh max-h-none w-dvw max-w-none overflow-y-auto overscroll-contain border-0 bg-transparent p-0 text-[#f2f2f2]"
          aria-labelledby={titleId}
          onCancel={closeArtist}
          onClose={closeArtist}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeArtist();
            }
          }}
        >
          <style>
            {`
              .artist-profile-dialog::backdrop {
                background: rgba(0, 0, 0, 0.85);
              }
            `}
          </style>

          <div
            className="flex min-h-dvh items-start justify-center px-3 py-5 md:items-center md:px-8 md:py-8"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                closeArtist();
              }
            }}
          >
            <section
              className="relative flex w-full max-w-[1120px] flex-col overflow-hidden rounded-[6px] text-[#f2f2f2] shadow-2xl md:w-[min(1120px,94vw,calc((100svh-116px)*1.6))]"
              style={{ backgroundColor: activeProfile.backgroundColor }}
            >
              <h2 id={titleId} className="sr-only">
                {activeArtist.name}
              </h2>

              <button
                type="button"
                onClick={closeArtist}
                className="fixed right-4 top-4 z-[1010] flex h-10 w-10 touch-manipulation items-center justify-center rounded-full bg-[#EDFCDF] text-[24px] leading-none text-[#181818] shadow-lg transition hover:scale-105 md:absolute md:right-4 md:top-4"
                aria-label="Infofenster schließen"
                style={{ fontFamily: "Trattatello, fantasy" }}
              >
                X
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <figure className="order-1 aspect-[4/5] overflow-hidden bg-black md:order-2">
                  <Image
                    src={activeProfile.nameImageSrc}
                    alt={`${activeArtist.name} Artistbild`}
                    width={1080}
                    height={1350}
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="h-full w-full object-cover"
                    priority
                  />
                </figure>

                <article
                  className="order-2 flex min-h-[270px] flex-col justify-center overflow-y-auto px-7 py-10 md:order-1 md:aspect-[4/5] md:justify-start md:px-11 md:py-12"
                  style={{
                    backgroundColor: activeProfile.backgroundColor,
                    color: activeProfile.textColor,
                    fontFamily:
                      'Trattatello, "Marker Felt", "Chalkboard SE", "Comic Sans MS", cursive',
                  }}
                >
                  <p className="max-w-[880px] text-[clamp(18px,4.7vw,23px)] leading-[1.32] md:text-[clamp(22px,2vw,28px)] md:leading-[1.35]">
                    {activeProfile.bio}
                  </p>
                </article>
              </div>

              {activeProfile.links.length > 0 && (
                <nav
                  className="flex min-h-14 items-center justify-center gap-3 border-t border-white/15 px-4 py-3"
                  aria-label={`Weiterführende Links von ${activeArtist.name}`}
                  style={{ backgroundColor: activeProfile.backgroundColor }}
                >
                  {activeProfile.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.ariaLabel}
                      className="flex h-9 min-w-9 items-center justify-center rounded-full border border-[#EDFCDF] px-3 text-[18px] leading-none text-[#EDFCDF] transition hover:scale-105 hover:bg-[#EDFCDF] hover:text-[#181818]"
                      style={{ fontFamily: "Trattatello, fantasy" }}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              )}
            </section>
          </div>
        </dialog>
      )}
    </>
  );
}
