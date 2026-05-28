import { MobileBottomNav, SiteFooter, SiteHeader } from "../components/site-chrome";

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

export default function UeberUnsPage() {

  // =========================
  // BEDIENFELD: ÜBER UNS SEITE
  // =========================
  const aboutSettings = {
    backgroundColor: "#383F37",

    title: "Gabonsa ist eine Kooperation von Gans Anders und Bonanza.",
    titleColor: "#00D9FF",
    titleFontFamily: "Trattatello, fantasy",
    titleFontSize: "56px",

    textColor: "#00D9FF",
    textFontFamily: "HaasGrotDisp, Arial, sans-serif",
    textFontSize: "20px",
    lineHeight: "1.28",

    paddingTop: "140px",
    paddingLeft: "140px",
    paddingRight: "90px",
    paddingBottom: "120px",
  };

  // =========================
  // BEDIENFELD: ÜBER UNS BILD RECHTS
  // =========================
  const aboutImageSettings = {
    src: "/ueber-uns-bild1.jpg",
    objectPosition: "60% 80%",
  };

  // =========================
  // BEDIENFELD: ÜBER UNS BACKGROUND PNGS
  // =========================
  const backgroundPngs: BackgroundPngSettings[] = [
    {
      src: "/ueber-uns-bg-1.png",
      width: "800px",
      height: "800px",
      size: "800px",
      left: "-320px",
      top: "550px",
      color: "#EDFCDF",
      rotation: "-220deg",
      opacity: 0.16,
    },
    {
      src: "/ueber-uns-bg-2.png",
      width: "1000px",
      height: "1000px",
      size: "1000px",
      right: "-200px",
      bottom: "150px",
      color: "#EDFCDF",
      rotation: "14deg",
      opacity: 0.5,
    },
  ];

  // =========================
  // BEDIENFELD: TEXT
  // =========================
  const aboutText = `Doch mehr noch als eine bloße Zusammenführung zweier Namen oder Organisationsstrukturen beschreibt Gabonsa einen gemeinsamen kulturellen Impuls.

In diesem Zusammenschluss treffen zwei Haltungen aufeinander, die sich nicht widersprechen, sondern gegenseitig erweitern: die Offenheit für neue Formate, die Lust am Experiment, das Bedürfnis nach kollektiver Erfahrung und der Anspruch, Räume zu schaffen, die mehr sind als reine Veranstaltungsorte.

Gabonsa steht damit für ein Verständnis von Festival, das über Musik oder Programm hinausgeht. Es geht um Atmosphäre, um Begegnung und um das bewusste Erzeugen eines Moments, in dem unterschiedliche Menschen, Szenen und Interessen zusammenfinden können.

Die Kooperation zwischen Gans Anders und Bonanza bündelt dabei nicht nur organisatorische Kräfte, sondern auch Erfahrungen, Netzwerke, Ästhetiken und Visionen.

Aus zwei eigenständigen Identitäten entsteht etwas Drittes: ein Format mit eigener Sprache, eigener Energie und eigener Perspektive.

Gerade in dieser Verbindung liegt die Stärke von Gabonsa. Das Projekt schöpft aus den jeweiligen Hintergründen beider Kollektive und übersetzt sie in einen gemeinsamen Kontext. So wird Gabonsa zu einer Plattform, auf der kulturelle Produktion, soziale Interaktion und räumliche Inszenierung ineinandergreifen.

Es ist ein Ort, an dem Gemeinschaft nicht nur mitgedacht, sondern aktiv hergestellt wird — durch Musik, Gestaltung, Austausch und die gemeinsame Erfahrung eines temporären Miteinanders.`;

  // =========================
  // BEDIENFELD: WERTE ABSCHNITT
  // =========================
  const valuesSettings = {
    backgroundColor: "#00D9FF",

    title: "Was uns zusammenhält.",
    titleColor: "#383F37",
    titleFontFamily: "Trattatello, fantasy",
    titleFontSize: "76px",

    textColor: "#383F37",
    textFontFamily: "HaasGrotDisp, Arial, sans-serif",
    textFontSize: "20px",

    valueTitleFontFamily: "Trattatello, fantasy",
    valueTitleFontSize: "42px",

    lineHeight: "1.28",

    paddingTop: "140px",
    paddingLeft: "90px",
    paddingRight: "140px",
    paddingBottom: "120px",
  };

  // =========================
  // BEDIENFELD: WERTE BACKGROUND PNGS
  // =========================
  // Dateien müssen im public-Ordner liegen:
  // public/werte-bg-1.png
  // public/werte-bg-2.png
  //
  // Diese PNGs liegen im zweiten Abschnitt.
  // Wenn sie nicht verrutschen sollen, nutze top statt bottom.
  const valuesBackgroundPngs: BackgroundPngSettings[] = [
    {
      src: "/werte-bg-1.png",
      width: "700px",
      height: "700px",
      size: "700px",
      right: "-220px",
      top: "50px",
      color: "#383F37",
      rotation: "-12deg",
      opacity: 0.40,
    },
    {
      src: "/werte-bg-2.png",
      width: "700px",
      height: "700px",
      size: "700px",
      right: "300px",
      top: "900px",
      color: "#383F37",
      rotation: "16deg",
      opacity: 0.12,
    },
  ];

  // =========================
  // BEDIENFELD: WERTE BILD LINKS
  // =========================
  const valuesImageSettings = {
    src: "/ueber-uns-bild2.jpg",
    objectPosition: "0% 50%",
  };

  // =========================
  // BEDIENFELD: WERTE TEXTE
  // =========================
  const valuesIntro =
    "Werte sind bei uns Arbeitsanweisungen für Crew, Bookings und alle, die mitfeiern. Wenn dir bei einem Punkt etwas auffällt — sag uns Bescheid. Wir lernen mit.";

  const values = [
    {
      number: "01",
      title: "Awareness ist nicht verhandelbar.",
      text: "Diskriminierung, Übergriffe und Gewalt haben bei uns keinen Platz — egal in welcher Form. Unser Awareness-Team ist über den Info-Point jederzeit erreichbar und trägt gekennzeichnete Westen. Wir glauben Betroffenen.",
    },
    {
      number: "02",
      title: "Care für den Ort.",
      text: "Die Driving Ranch ist eine ehemalige Deponie und ein Lebensraum. Wir hinterlassen das Gelände sauberer, als wir es vorgefunden haben. Mülltrennung, kein Glas, wiederverwendbare Becher, ehrliche Renaturierung nach dem Festival.",
    },
    {
      number: "03",
      title: "Lokal vor billig.",
      text: "Wir kaufen lokal — Essen, Getränke, Crew, Künstler*innen. Faire Preise für faire Arbeit. Lieferketten kurz, Wege kurz, Verantwortung sichtbar.",
    },
    {
      number: "04",
      title: "Autofrei aus Überzeugung.",
      text: "Innsbruck hat einen funktionierenden ÖPNV. Wir nutzen ihn — und du auch. Mit dem Festivalticket fährst du gratis IVB. Keine Parkplätze, keine Ausreden. Fahrrad ist die schönste Variante.",
    },
    {
      number: "05",
      title: "Konsens statt Routine.",
      text: "Frag, wenn du dir nicht sicher bist. Halte dich zurück, wenn jemand zurückhält. Tanzfläche, Bar, Camping — überall gilt: ja heißt ja, alles andere ist nein.",
    },
    {
      number: "06",
      title: "Kein Geld für Konzerne.",
      text: "Gabonsa ist gemeinnützig. Überschüsse fließen zurück in Folgeeditionen und in Innsbrucker Kulturarbeit. Keine Investor*innen, keine Konzern-Sponsorings auf der Bühne. Förderungen ja, Ausverkauf nein.",
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
            .about-bg-mark-1 {
              width: 350px !important;
              height: 350px !important;
              left: -118px !important;
              right: auto !important;
              top: 445px !important;
              bottom: auto !important;
              opacity: 0.30 !important;
            }

            .about-bg-mark-2 {
              width: 380px !important;
              height: 380px !important;
              left: auto !important;
              right: -86px !important;
              top: auto !important;
              bottom: 68px !important;
              opacity: 0.58 !important;
            }

            .values-bg-mark-1 {
              width: 340px !important;
              height: 340px !important;
              left: auto !important;
              right: -78px !important;
              top: 54px !important;
              bottom: auto !important;
              opacity: 0.48 !important;
            }

            .values-bg-mark-2 {
              width: 350px !important;
              height: 350px !important;
              left: -118px !important;
              right: auto !important;
              top: 820px !important;
              bottom: auto !important;
              opacity: 0.22 !important;
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
      {/* ÜBER UNS BEREICH */}
      {/* ========================= */}
      <section
        className="relative min-h-screen overflow-hidden md:grid md:grid-cols-[2fr_1fr]"
        style={{
          backgroundColor: aboutSettings.backgroundColor,
        }}
      >
        {/* BACKGROUND PNGS */}
        {backgroundPngs.map((png, index) => (
          <div
            key={index}
            className={`mobile-bg-mark about-bg-mark-${index + 1} pointer-events-none absolute z-0 select-none`}
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

        {/* ERSTER TEXTBLOCK */}
        <div
          className="relative z-10 flex min-h-screen flex-col justify-center px-6 pb-24 pt-28 md:px-0 md:pb-[100px] md:pl-[140px] md:pr-[140px] md:pt-[120px]"
        >
          <h1
            className="mobile-section-title"
            style={{
              color: aboutSettings.titleColor,
              fontFamily: aboutSettings.titleFontFamily,
              fontSize: aboutSettings.titleFontSize,
              lineHeight: "1.05",
              marginBottom: "52px",
            }}
          >
            {aboutSettings.title}
          </h1>

          <p
            className="mobile-body-text"
            style={{
              color: aboutSettings.textColor,
              fontFamily: aboutSettings.textFontFamily,
              fontSize: aboutSettings.textFontSize,
              lineHeight: aboutSettings.lineHeight,
              whiteSpace: "pre-line",
              maxWidth: "760px",
            }}
          >
            {aboutText}
          </p>
        </div>

        {/* 1. BILD */}
        <div className="relative z-10 h-[70svh] min-h-[360px] overflow-hidden md:h-auto md:self-stretch">
          <img
            src={aboutImageSettings.src}
            alt="Über uns"
            className="h-full w-full object-cover"
            style={{
              objectPosition: aboutImageSettings.objectPosition,
              display: "block",
            }}
          />
        </div>
      </section>

      {/* ========================= */}
      {/* WERTE BEREICH */}
      {/* ========================= */}
      <section
        id="werte"
        className="relative min-h-screen overflow-hidden md:grid md:grid-cols-[1fr_2fr]"
        style={{
          backgroundColor: valuesSettings.backgroundColor,
        }}
      >
        {/* WERTE BACKGROUND PNGS */}
        {valuesBackgroundPngs.map((png, index) => (
          <div
            key={index}
            className={`mobile-bg-mark values-bg-mark-${index + 1} pointer-events-none absolute z-0 select-none`}
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

        {/* ZWEITER TEXTBLOCK */}
        <div
          className="relative z-10 flex min-h-screen flex-col justify-center px-6 pb-24 pt-28 md:order-2 md:px-0 md:pb-[110px] md:pl-[140px] md:pr-[140px] md:pt-[120px]"
        >
          <h2
            className="mobile-title"
            style={{
              color: valuesSettings.titleColor,
              fontFamily: valuesSettings.titleFontFamily,
              fontSize: valuesSettings.titleFontSize,
              lineHeight: "0.95",
              marginBottom: "42px",
              maxWidth: "850px",
            }}
          >
            {valuesSettings.title}
          </h2>

          <p
            className="mobile-body-text"
            style={{
              color: valuesSettings.textColor,
              fontFamily: valuesSettings.textFontFamily,
              fontSize: valuesSettings.textFontSize,
              lineHeight: valuesSettings.lineHeight,
              whiteSpace: "pre-line",
              maxWidth: "900px",
              marginBottom: "64px",
            }}
          >
            {valuesIntro}
          </p>

          <div className="flex flex-col gap-10">
            {values.map((value) => (
              <div
                key={value.number}
                className="mobile-values-row grid gap-4 md:gap-8"
                style={{
                  gridTemplateColumns: "64px 1fr",
                }}
              >
                <div
                  style={{
                    color: valuesSettings.textColor,
                    fontFamily: valuesSettings.textFontFamily,
                    fontSize: "18px",
                    lineHeight: "1",
                    paddingTop: "8px",
                  }}
                >
                  {value.number}
                </div>

                <div>
                  <h3
                    className="mobile-section-title"
                    style={{
                      color: valuesSettings.textColor,
                      fontFamily: valuesSettings.valueTitleFontFamily,
                      fontSize: valuesSettings.valueTitleFontSize,
                      lineHeight: "1",
                      marginBottom: "10px",
                    }}
                  >
                    {value.title}
                  </h3>

                  <p
                    className="mobile-body-text"
                    style={{
                      color: valuesSettings.textColor,
                      fontFamily: valuesSettings.textFontFamily,
                      fontSize: valuesSettings.textFontSize,
                      lineHeight: valuesSettings.lineHeight,
                      maxWidth: "900px",
                    }}
                  >
                    {value.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. BILD */}
        <div className="relative z-10 h-[70svh] min-h-[360px] overflow-hidden md:order-1 md:h-auto md:self-stretch">
          <img
            src={valuesImageSettings.src}
            alt="Werte"
            className="h-full w-full object-cover"
            style={{
              objectPosition: valuesImageSettings.objectPosition,
              display: "block",
            }}
          />
        </div>
      </section>

      {/* ========================= */}
      {/* FOOTER */}
      {/* ========================= */}
      <SiteFooter
        backgroundColor={valuesSettings.backgroundColor}
        textColor={valuesSettings.textColor}
      />
    </main>
  );
}
