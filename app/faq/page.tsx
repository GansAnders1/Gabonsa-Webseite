"use client";

import { MobileBottomNav, SiteFooter, SiteHeader } from "../components/site-chrome";
import { useState, type CSSProperties } from "react";

type FaqBackgroundPngSettings = {
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

export default function FaqPage() {

  // =========================
  // BEDIENFELD: FAQ SEITE
  // =========================
  const faqSettings = {
    backgroundColor: "#B07A3A",

    title: "Alles was es zu wissen gibt:",
    titleColor: "#EDFCDF",
    titleFontFamily: "Trattatello, fantasy",
    titleFontSize: "54px",
    mobileTitleFontSize: "clamp(40px, 11vw, 50px)",

    questionColor: "#EDFCDF",
    answerColor: "#EDFCDF",

    activeQuestionColor: "#B7F000",
    activeAnswerColor: "#B7F000",

    questionFontFamily: "Trattatello, fantasy",
    answerFontFamily: "HaasGrotDisp, Arial, sans-serif",

    questionFontSize: "34px",
    mobileQuestionFontSize: "clamp(22px, 6.4vw, 26px)",
    answerFontSize: "18px",
    mobileAnswerFontSize: "15px",
    answerMaxWidth: "1000px",

    lineHeight: "1.25",

    contentWidth: "1000px",
    paddingTop: "130px",
    paddingLeft: "130px",
    paddingBottom: "120px",
  };

  // =========================
  // BEDIENFELD: FAQ BACKGROUND PNGS
  // =========================
  // Dateien müssen im public-Ordner liegen:
  // public/faq-bg-1.png
  // public/faq-bg-2.png
  //
  // width + height = Fläche des Containers
  // size = tatsächliche Größe des PNG-Motivs
  //
  // Zum Größermachen am besten alle drei Werte gemeinsam erhöhen:
  // width, height und size.
  //
  // Weitere PNGs kannst du einfach als neues Objekt ergänzen.
  const faqBackgroundPngs: FaqBackgroundPngSettings[] = [
    {
      src: "/faq-bg-1.png",
      width: "1250px",
      height: "1250px",
      size: "1250px",
      right: "-470px",
      top: "-150px",
      color: "#EDFCDF",
      rotation: "0deg",
      opacity: 0.55,
    },
    {
      src: "/faq-bg-2.png",
      width: "1000px",
      height: "1000px",
      size: "1000px",
      right: "-7px",
      top: "900px",
      color: "#EDFCDF",
      rotation: "0deg",
      opacity: 0.55,
    },
  ];

  // =========================
  // BEDIENFELD: FAQ BILD ABSCHNITT
  // =========================
  const faqImageSectionSettings = {
    src: "/faq-bild1.jpg",
    height: "100vh",
    objectPosition: "center center",
  };

  // =========================
  // BEDIENFELD: FAQ INHALTE
  // =========================
  const faqs = [
    {
      question: "Wann findet das Festival statt?",
      answer:
        "Das Gabonsa Festival findet vom 03. bis 04. Juli statt.\n\nFreitag: 14:00 – 03:00 Uhr\nSamstag: 12:00 – 03:00 Uhr",
    },
    {
      question: "Wo findet das Festival statt?",
      answer:
        "Das Festival findet direkt bei der alten Driving Ranch in Innsbruck statt.\n\nAdresse: Archenweg 70",
    },
    {
      question: "Wie komme ich am besten zum Festival?",
      answer:
        "Unsere Location ist bewusst autofrei. Es gibt keine Parkplätze direkt am Festivalgelände.\n\nMit dem Bus:\nMit eurem Festivalticket oder Festivalband könnt ihr kostenlos mit allen IVB-Linien zum Festival und wieder zurück fahren. Das gilt auch für Nightliner.\n\nMit dem Fahrrad:\nSehr gerne. Die Anreise mit dem Rad ist schnell, nachhaltig und macht Laune. Es wird genügend Abstellmöglichkeiten in Festivalnähe geben.\n\nZu Fuß:\nWenn du in der Nähe wohnst, komm natürlich auch einfach zu Fuß. Danke, dass ihr mithilft, unseren CO₂-Fußabdruck klein zu halten.",
    },
    {
      question: "Gibt es Campingmöglichkeiten?",
      answer:
        "Leider gibt es keine offiziellen Campingmöglichkeiten am Festivalgelände. Bitte plant eure Unterkunft entsprechend.",
    },
    {
      question: "Gibt es Parkplätze?",
      answer:
        "Nein, es gibt keine offiziellen Parkplätze am Festivalgelände. Wir empfehlen die Anreise mit öffentlichen Verkehrsmitteln, dem Fahrrad oder zu Fuß.\n\nIn Innsbruck gibt es Park&Ride-Parkplätze sowie einige kostenlose Parkplätze etwas außerhalb.",
    },
    {
      question: "Kann ich unter 18 Jahren teilnehmen?",
      answer:
        "Grundsätzlich ist das Festival ab 18 Jahren. Jüngere Personen können nur in Begleitung einer erziehungsberechtigten Person teilnehmen.",
    },
    {
      question: "Welche Tickets gibt es und wo kann ich sie kaufen?",
      answer:
        "Tickets gibt es online auf unserer Webseite - schau mal der coole Button oben rechts. Weitere Informationen zu Preisen und Verfügbarkeit findest du im Ticketshop.",
    },
    {
      question: "Gibt es eine Abendkasse?",
      answer:
        "Wir rechnen mit einem ausverkauften Festival und daher mit keiner Abendkasse.",
    },
    {
      question: "Awareness & Grundwerte",
      answer:
        "Wir wollen gemeinsam einen sicheren und respektvollen Raum schaffen.\n\nKeine Toleranz gibt es für Diskriminierung, sexuelle Übergriffe, Gewalt und grenzüberschreitendes Verhalten jeder Art.\n\nUnser Awareness-Team ist während des gesamten Festivals für euch da. Wenn du dich unwohl fühlst, sprich das Team an oder melde dich beim Info-Point.",
    },
    {
      question: "Darf ich eigene Getränke mitbringen?",
      answer:
        "Nein, eigene Getränke dürfen nicht mitgebracht werden. Auf dem Festival gibt es eine große Auswahl an Getränken zu fairen Preisen sowie kostenloses Trinkwasser.\nBring gern eine leere Trinkflasche mit, um diese auf dem Gelände an der Wasserstelle zu befüllen.",
    },
    {
      question: "Gibt es Essen vor Ort?",
      answer:
        "Ja, es gibt eine vielfältige Auswahl an Food-Ständen mit vegetarischen, veganen und weiteren Optionen.",
    },
    {
      question: "Welche Zahlungsmethoden werden akzeptiert?",
      answer:
        "Du kannst dein Cashless-Band sowohl mit Karte als auch mit Bargeld aufladen. Außerdem kannst du es online direkt beim Ticketkauf aufladen, um Wartezeiten vor Ort zu vermeiden.",
    },
    {
      question: "Ist das Festival barrierefrei?",
      answer:
        "Das Gelände ist leider weitestgehend nicht barrierefrei und kann nur mit Begleitperson begangen werden.",
    },
    {
      question: "Gibt es eine Garderobe?",
      answer: "Nein, es gibt keine Garderobe.",
    },
    {
      question: "Einlass & Taschenkontrolle",
      answer:
        "Am Eingang findet eine Taschenkontrolle statt. Bitte halte dein Ticket oder Festivalband bereit. Große Rucksäcke oder Taschen können nicht mit aufs Gelände genommen werden.\n\nBitte zuhause lassen:\nGlasbehälter\nWaffen oder waffenähnliche Gegenstände\nPyrotechnik, Spraydosen oder brennbare Flüssigkeiten\nDrogen\nGroße Fahnenstangen oder sperrige Gegenstände\nTiere, ausgenommen Assistenzhunde",
    },
    {
      question: "Fundsachen & Info-Point",
      answer:
        "Wenn du etwas verloren oder gefunden hast, komm zum Info-Point am Festivalgelände. Dort sammeln wir alle Fundsachen und helfen dir weiter. Nach dem Festival kannst du uns auch per Mail kontaktieren unter contact@gabonsa.com.",
    },
    {
      question: "Darf ich mein Haustier mitbringen?",
      answer:
        "Nein, Haustiere sind auf dem Festivalgelände nicht erlaubt. Ausgenommen sind Assistenzhunde.",
    },
    {
      question: "Was passiert bei schlechtem Wetter?",
      answer:
        "Das Festival findet bei jedem Wetter statt. Bitte kleidet euch entsprechend.",
    },
    {
      question: "Wie kann ich das Festival unterstützen?",
      answer:
        "Ihr könnt uns unterstützen, indem ihr Tickets kauft, Merch shoppt oder als Helfer*innen mitmacht. Weitere Infos dazu gibt es auf unserer Website.",
    },
    {
      question: "Abfallvermeidung",
      answer:
        "Bitte helft mit, unser Festival sauber zu halten.\n\nNutzt die Mülltrennungssysteme vor Ort.\nBringt am besten wiederverwendbare Becher und Flaschen mit.\nLasst keinen Müll liegen.\n\nWir feiern gemeinsam und übernehmen auch gemeinsam Verantwortung.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);


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
            .faq-bg-mark-1 {
              width: 320px !important;
              height: 320px !important;
              left: auto !important;
              right: -68px !important;
              top: 126px !important;
              bottom: auto !important;
              opacity: 0.30 !important;
            }

            .faq-bg-mark-2 {
              width: 340px !important;
              height: 340px !important;
              left: -122px !important;
              right: auto !important;
              top: 770px !important;
              bottom: auto !important;
              opacity: 0.24 !important;
            }
          }

        `}
      </style>

      {/* ========================= */}
      {/* HEADER */}
      {/* ========================= */}
      <SiteHeader logoColor="#B7F000" />
      <MobileBottomNav />

      {/* ========================= */}
      {/* FAQ BEREICH */}
      {/* ========================= */}
      <section
        className="relative min-h-screen overflow-hidden px-6 pb-16 pt-28 md:pb-[140px] md:pl-[130px] md:pt-[130px]"
        style={{
          backgroundColor: faqSettings.backgroundColor,
        }}
      >
        {/* FAQ BACKGROUND PNGS */}
        {faqBackgroundPngs.map((png, index) => (
          <div
            key={index}
            className={`mobile-bg-mark faq-bg-mark-${index + 1} pointer-events-none absolute z-0 select-none`}
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
          className="relative z-20"
          style={{
            maxWidth: faqSettings.contentWidth,
          }}
        >
          <h1
            className="text-[length:var(--faq-title-mobile-font-size)] md:text-[length:var(--faq-title-desktop-font-size)]"
            style={{
              "--faq-title-mobile-font-size": faqSettings.mobileTitleFontSize,
              "--faq-title-desktop-font-size": faqSettings.titleFontSize,
              color: faqSettings.titleColor,
              fontFamily: faqSettings.titleFontFamily,
              lineHeight: "1",
              marginBottom: "32px",
            } as CssVars}
          >
            {faqSettings.title}
          </h1>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="block text-left text-[length:var(--faq-question-mobile-font-size)] transition hover:scale-[1.01] md:text-[length:var(--faq-question-desktop-font-size)]"
                      style={{
                        "--faq-question-mobile-font-size":
                          faqSettings.mobileQuestionFontSize,
                        "--faq-question-desktop-font-size":
                          faqSettings.questionFontSize,
                        color: isOpen
                          ? faqSettings.activeQuestionColor
                          : faqSettings.questionColor,
                        fontFamily: faqSettings.questionFontFamily,
                        lineHeight: faqSettings.lineHeight,
                      } as CssVars}
                    >
                    {faq.question}
                  </button>

                  {isOpen && (
                    <p
                      className="text-[length:var(--faq-answer-mobile-font-size)] md:text-[length:var(--faq-answer-desktop-font-size)]"
                      style={{
                        "--faq-answer-mobile-font-size":
                          faqSettings.mobileAnswerFontSize,
                        "--faq-answer-desktop-font-size":
                          faqSettings.answerFontSize,
                        color: faqSettings.activeAnswerColor,
                        fontFamily: faqSettings.answerFontFamily,
                        lineHeight: faqSettings.lineHeight,
                        maxWidth: faqSettings.answerMaxWidth,
                        marginTop: "6px",
                        whiteSpace: "pre-line",
                      } as CssVars}
                    >
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* FAQ BILD ABSCHNITT */}
      {/* ========================= */}
      <section
        className="relative overflow-hidden bg-black md:h-[var(--faq-image-desktop-height)]"
        style={{
          "--faq-image-desktop-height": faqImageSectionSettings.height,
        } as CssVars}
      >
        <img
          src={faqImageSectionSettings.src}
          alt="FAQ Bild"
          className="block h-auto w-full object-contain md:h-full md:object-cover"
          style={{
            objectPosition: faqImageSectionSettings.objectPosition,
          }}
        />
      </section>

      {/* ========================= */}
      {/* FOOTER */}
      {/* ========================= */}
      <SiteFooter
        backgroundColor={faqSettings.backgroundColor}
        textColor={faqSettings.questionColor}
      />
    </main>
  );
}
