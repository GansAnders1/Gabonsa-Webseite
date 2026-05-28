import { MobileBottomNav, SiteFooter, SiteHeader } from "../components/site-chrome";

export default function ImpressumPage() {

  // =========================
  // BEDIENFELD: IMPRESSUM SEITE
  // =========================
  const impressumSettings = {
    backgroundColor: "#F4E7C6",

    title: "Impressum",
    titleColor: "#FF9F3D",
    titleFontFamily: "Trattatello, fantasy",
    titleFontSize: "90px",

    textColor: "#383F37",
    headlineColor: "#383F37",
    fontFamily: "HaasGrotDisp, Arial, sans-serif",
    fontSize: "19px",
    lineHeight: "1.45",

    contentWidth: "1300px",
    paddingTop: "150px",
    paddingX: "130px",
    paddingBottom: "140px",

    dividerColor: "#383F37",
    dividerThickness: "2px",
    dividerMarginTop: "40px",
    dividerMarginBottom: "70px",
  };

  // =========================
  // BEDIENFELD: IMPRESSUM INHALTE
  // =========================
  const impressumSections = [
    {
      title: "Angaben gemäß Impressumspflicht",
      text: `Information Obligations according to §5 E-Commerce Act, §14 Commercial Code, §63 Trade Regulation, and Disclosure Obligations according to §25 Media Act.

GABONSA Kulturverein
Sankt Bartlmä 3
6020 Innsbruck
Österreich
ATU81760907

Vertreten durch:
Obmann: Dennis Übelhör
Kassier: Johannes Steinkopff
Schriftführer: Konrad Wolfgang

ZVR-Zahl: 1425041191`,
    },
    {
      title: "Kontakt",
      text: `E-Mail: contact@gabonsa.com

Telefon:
+49 1590 1970312
oder
+43 699 17164256`,
    },
    {
      title: "Vereinsregister & Zuständigkeit",
      text: `Zuständig: Tirol LPD Sicherheits- und Verwaltungspolizeiliche Abteilung SVA
Entstehungsdatum: 24.02.2025`,
    },
    {
      title: "Haftung für Inhalte",
      text: `Als Diensteanbieter sind wir gemäß § 18 Abs. 1 ECG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir übernehmen jedoch keine Gewähr für die Aktualität, Korrektheit oder Vollständigkeit der bereitgestellten Inhalte.`,
    },
    {
      title: "Haftung für Links",
      text: `Unsere Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Deshalb übernehmen wir für diese fremden Inhalte keine Gewähr.`,
    },
    {
      title: "Urheberrecht",
      text: `Die auf dieser Website erstellten Inhalte und Werke unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.`,
    },
    {
      title: "Design und Erstellung",
      text: `Diese Webseite wurde erstellt von Dennis Übelhör und designed von Leon Stofft.`,
    },
    {
      title: "Allgemeine Geschäftsbedingungen für Veranstaltungen des GABONSA Kulturvereins",
      text: `Diese Allgemeinen Geschäftsbedingungen regeln die Rechtsbeziehung zwischen dem GABONSA Kulturverein als Veranstalter und den Besucher:innen der vom Verein organisierten Veranstaltungen.

Mit dem Erwerb eines Tickets akzeptieren Besucher:innen die AGB als verbindlich. Der Veranstalter behält sich vor, die AGB bei Bedarf zu ändern. Änderungen treten mit Veröffentlichung auf der offiziellen Website in Kraft.

Ein Verstoß gegen die AGB kann zum Entzug des Tickets, zum Verweis vom Veranstaltungsgelände sowie zur Einbehaltung des Ticketpreises führen.`,
    },
    {
      title: "Datenschutz & Verhaltensregeln",
      text: `Der Veranstalter duldet keinerlei diskriminierendes, sexistisches, rassistisches oder aggressives Verhalten. Bei Zuwiderhandlung kann ein sofortiger Ausschluss von der Veranstaltung ohne Erstattungsanspruch erfolgen.

Besucher:innen sind verpflichtet, Abfälle ordnungsgemäß in den bereitgestellten Müll- und Recyclingstationen zu entsorgen.

Kommerzielle Handlungen, Werbemaßnahmen oder die Nutzung des Namens GABONSA Kulturverein für Werbezwecke sind ohne schriftliche Genehmigung untersagt.

Während der Veranstaltung können Pyrotechnik, Nebelmaschinen, Stroboskop-Licht und andere Spezialeffekte eingesetzt werden. Personen mit Epilepsie oder Lichtempfindlichkeit sollten sich von Bühnen und Lichteffekten fernhalten.`,
    },
    {
      title: "Eintritt, Tickets & Rückerstattung",
      text: `Tickets sind ausschließlich online über den offiziellen Ticketshop erhältlich. Der Kauf von Tickets über Dritte erfolgt auf eigenes Risiko.

Der Zutritt zur Veranstaltung ist nur mit gültigem Ticket möglich. Beim Eintritt erhalten Besucher:innen ein Festival-Armband, das während der gesamten Veranstaltung getragen werden muss.

Der Weiterverkauf von Tickets mit Gewinnerzielungsabsicht ist verboten.

Tickets können nur erstattet werden, wenn die gesamte Veranstaltung abgesagt oder um mindestens ein Kalenderjahr verschoben wird. Keine Rückerstattung erfolgt unter anderem bei individueller Nichtanreise, wetterbedingten Beeinträchtigungen, behördlichen Auflagen oder höherer Gewalt.`,
    },
    {
      title: "Mindestalter",
      text: `Zutritt zur Veranstaltung haben nur Personen ab 18 Jahren mit gültigem Lichtbildausweis. Minderjährige dürfen nur in Begleitung eines Erziehungsberechtigten teilnehmen. Alkoholische Getränke werden nicht an Minderjährige ausgeschenkt.`,
    },
    {
      title: "Verbotene Gegenstände & Sicherheitsmaßnahmen",
      text: `Auf dem Veranstaltungsgelände sind unter anderem Glasflaschen und Glasbehälter, Laserpointer, Gaskartuschen, Feuerwerkskörper, Signalhörner sowie Waffen oder waffenähnliche Gegenstände verboten.

Besucher:innen können am Eingang und auf dem Veranstaltungsgelände durchsucht werden. Verbotene oder illegale Gegenstände können konfisziert werden. Besucher:innen, die mit illegalen Substanzen angetroffen werden, können der Polizei gemeldet werden.`,
    },
    {
      title: "Absage & Änderungen der Veranstaltung",
      text: `Der Veranstalter behält sich das Recht vor, die Veranstaltung bei Unwetter, Sicherheitsrisiken, Ausfall wesentlicher Künstler:innen oder Personal, behördlichen Anordnungen oder technischen Problemen abzusagen.

Bei vollständiger Absage erfolgt eine Rückerstattung des Ticketpreises. Geringfügige Änderungen wie Anpassungen im Line-Up, Zeiten oder eine Verlegung innerhalb des Stadtgebiets begründen keinen Erstattungsanspruch.

Open-Air-Veranstaltungen finden bei jeder Witterung statt. Besucher:innen sind selbst für geeignete Kleidung verantwortlich.`,
    },
    {
      title: "Haftungsausschluss",
      text: `Der Veranstalter haftet nicht für Schäden oder Verluste, die durch Besucher:innen verursacht werden.

Besucher:innen sind selbst für ihre Gesundheit verantwortlich. Der Veranstalter übernimmt keine Haftung für gesundheitliche Schäden durch Lautstärke, Lichteffekte oder andere Veranstaltungseinflüsse.

Wertgegenstände werden auf eigenes Risiko mitgeführt. Der Veranstalter haftet nicht für Diebstahl oder Verlust. Der Veranstalter übernimmt keine Garantie für die künstlerische Qualität von Darbietungen.`,
    },
    {
      title: "Rechtswahl & Gerichtsstand",
      text: `Es gilt ausschließlich österreichisches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand für alle Streitigkeiten ist Innsbruck, sofern der Besucher Unternehmer ist.`,
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
        `}
      </style>

      {/* ========================= */}
      {/* HEADER */}
      {/* ========================= */}
      <SiteHeader logoColor="#FF9F3D" />
      <MobileBottomNav />

      {/* ========================= */}
      {/* IMPRESSUM BEREICH */}
      {/* ========================= */}
      <section
        className="relative min-h-screen px-6 pb-32 pt-28 md:px-[130px] md:pb-[140px] md:pt-[150px]"
        style={{
          backgroundColor: impressumSettings.backgroundColor,
        }}
      >
        <div
          style={{
            maxWidth: impressumSettings.contentWidth,
          }}
        >
          <h1
            className="mobile-title"
            style={{
              color: impressumSettings.titleColor,
              fontFamily: impressumSettings.titleFontFamily,
              fontSize: impressumSettings.titleFontSize,
              lineHeight: "1",
              marginBottom: "70px",
            }}
          >
            {impressumSettings.title}
          </h1>

          <div className="flex flex-col gap-12">
            {impressumSections.map((section) => {
              const isAgbStart = section.title.includes(
                "Allgemeine Geschäftsbedingungen"
              );

              return (
                <section key={section.title}>
                  {isAgbStart && (
                    <hr
                      style={{
                        border: "none",
                        borderTop: `${impressumSettings.dividerThickness} solid ${impressumSettings.dividerColor}`,
                        marginTop: impressumSettings.dividerMarginTop,
                        marginBottom: impressumSettings.dividerMarginBottom,
                        width: "100%",
                      }}
                    />
                  )}

                  <h2
                    className="mobile-section-title"
                    style={{
                      color: impressumSettings.headlineColor,
                      fontFamily: impressumSettings.titleFontFamily,
                      fontSize: "42px",
                      lineHeight: "1",
                      marginBottom: "16px",
                    }}
                  >
                    {section.title}
                  </h2>

                  <p
                    className="mobile-body-text"
                    style={{
                      color: impressumSettings.textColor,
                      fontFamily: impressumSettings.fontFamily,
                      fontSize: impressumSettings.fontSize,
                      lineHeight: impressumSettings.lineHeight,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {section.text}
                  </p>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* FOOTER */}
      {/* ========================= */}
      <SiteFooter
        backgroundColor={impressumSettings.backgroundColor}
        textColor={impressumSettings.textColor}
      />
    </main>
  );
}
