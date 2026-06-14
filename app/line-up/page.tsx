import { MobileBottomNav, SiteFooter, SiteHeader } from "../components/site-chrome";
import { ArtistPopupList, type LineUpArtist } from "./artist-popup-list";

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

type ArtistProfile = NonNullable<LineUpArtist["profile"]>;
type ArtistSocialLink = ArtistProfile["links"][number];

const artistTextBackgroundColor = "#181818";
const artistTextColor = "#e8e8e8";

const artistLink = (
  label: string,
  artistName: string,
  platformName: string,
  href: string,
): ArtistSocialLink => ({
  label,
  ariaLabel: `${artistName} auf ${platformName} öffnen`,
  href,
});

const artistProfile = (
  nameImageSrc: string,
  bio: string,
  links: ArtistSocialLink[] = [],
): ArtistProfile => ({
  nameImageSrc,
  backgroundColor: artistTextBackgroundColor,
  textColor: artistTextColor,
  bio,
  links,
});

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
  const artists: LineUpArtist[] = [
    {
      name: "ALIS.",
      profile: artistProfile(
        "/artists/alis.jpg",
        "ALIS. is a Berlin-based DJ and producer from Zaporizhzhya, Ukraine, known for her genre-defying sets and vibrant, raw, sassy sound. Blending tribal techno, 90s trance, speed garage, ghetto tech and post-punk influences, she creates dancefloor journeys where anything can happen. Shaped by piano lessons, her work as a music journalist and collaborations with The Brvtalist and Kyiv's Closer, ALIS. has played venues such as RSO, Bret, Fuse, Macadam, Lehmann and Mondo Disko, curated lineups at Tresor and Loone, and co-organises community events with TYME. With strong releases in 2025 and more to come, ALIS. continues to shift boundaries while spotlighting emerging talent.",
        [
          artistLink("IG", "ALIS.", "Instagram", "https://www.instagram.com/alisxlis/"),
          artistLink("SC", "ALIS.", "SoundCloud", "https://soundcloud.com/alisxlis"),
          artistLink("RA", "ALIS.", "Resident Advisor", "https://ra.co/dj/alis-de"),
        ],
      ),
    },
    {
      name: "andiamo",
      profile: artistProfile(
        "/artists/andiamo.jpg",
        "andiamo is an Innsbruck-based DJ. His sets are a dynamic blend of unexpected transitions and infectious rhythms, with a strong focus on groove, hardhouse and breakbeat. His mission is simple: to deliver pure fun. Get ready for raw energy and a crowd moving just as hard as the beats. Being part of Primary Care, he shares his passion for events in Innsbruck and beyond.",
      ),
    },
    {
      name: "André Dancekowski",
      profile: artistProfile(
        "/artists/andre-dancekowski.jpg",
        "André Dancekowski is a DJ, regulator and true nightlife connoisseur. Known for his effortless style behind the decks and sometimes at the bar, his sound reflects years of dedication to club culture. Over time, he's witnessed countless electronic music trends come and go, yet his heart has always belonged to house music.",
        [
          artistLink(
            "RA",
            "André Dancekowski",
            "Resident Advisor",
            "https://ra.co/dj/andredancekowski",
          ),
        ],
      ),
    },
    {
      name: "Angel D'lite",
      profile: artistProfile(
        "/artists/angel-dlite.jpg",
        "The colorful universe of South London's Angel D'lite takes in all shades of the rave. Horny organs, high camp vocals, big breaks and thumping bass underscore their genre-bending sets that span tempos and time.",
        [
          artistLink(
            "IG",
            "Angel D'lite",
            "Instagram",
            "https://www.instagram.com/angel_d_lite/",
          ),
          artistLink("SC", "Angel D'lite", "SoundCloud", "https://soundcloud.com/angeldlite"),
          artistLink("RA", "Angel D'lite", "Resident Advisor", "https://ra.co/dj/angeld-lite"),
        ],
      ),
    },
    {
      name: "Beste Hira",
      profile: artistProfile(
        "/artists/beste-hira.jpg",
        "Beste Hira is an Istanbul-born, Amsterdam-based DJ, producer and artist known for her hypnotic blend of rolling minimal techno and ambient textures, shaped by a deep-rooted classical background. A regular at Berlin institution Berghain since 2022, she maintains a strong presence in the Amsterdam scene through her residency with Orphic and longstanding relationship with much-beloved club De School. With appearances at festivals such as Dekmantel and Awakenings Upclose, and an expanding global touring schedule, her sets are defined by precision, depth and emotional intensity.",
        [
          artistLink("IG", "Beste Hira", "Instagram", "https://www.instagram.com/bestehira/"),
          artistLink("SC", "Beste Hira", "SoundCloud", "https://soundcloud.com/beste-hira"),
          artistLink("RA", "Beste Hira", "Resident Advisor", "https://ra.co/dj/bestehira"),
        ],
      ),
    },
    {
      name: "Dirty b2b Fred",
      profile: artistProfile(
        "/artists/dirty-fred.jpg",
        "Dirty & Fred started DJing nearly a decade ago, including regular b2bs. Together they cofounded the collective amorosa, known for showcases in plenty of different locations all over Munich and nearby, as well as for hosting their own floor at Komod Festival. While their sound is genre-bending, right now it breaks down to various styles of house, UK-ish tunes and everything that makes dancers grin. Their primary goal is to establish some quality time with you.",
      ),
    },
    {
      name: "DJaguar",
      profile: artistProfile(
        "/artists/djaguar.jpg",
        "DJaguar fell in love with techno early on. At 13, he bought his first CD: Benny Benassi - Hypnotica. Favourite track: Love Is Gonna Save Us. From there, countless hours on dance floors and digging sessions followed, somewhere between trance, techno, 90s hardcore, house, drum and bass and the occasional existential sunrise. A devoted Nachedigital lover, DJaguar has never really cared about strict genre boundaries. While his roots clearly lie in techno, his sets move freely between moods, tempos and timbres. For him, it's all about timing, track selection and a feel for the moment.",
      ),
    },
    {
      name: "Duostop",
      profile: artistProfile(
        "/artists/duostop.jpg",
        "Innsbruck locals Duostop move between house and UKG sound. Not shying away from switching moods, they bring smiles to the floor. Being part of Primary Care, they aim to connect all individuals interested in electronic music in IBK and beyond.",
        [
          artistLink("SC", "Duostop", "SoundCloud", "https://soundcloud.com/duo-stop"),
        ],
      ),
    },
    {
      name: "Dyl Boban",
      profile: artistProfile(
        "/artists/dyl-boban.jpg",
        "Dyl Boban is a DJ from Innsbruck who is part of the local electronic music scene. He is a vinyl collector and mainly active in house, disco and electronic club music. He started DJing around 2006, after previously collecting reggae and dub records. His style later developed further towards disco, cosmic, Italo and house. Closely connected to the Innsbruck club scene, he has played at and organized events, for example at Club Project, and was part of DJ collectives such as DJs in Love. He also organized his own event series, including Deep Jackin' Acid.",
        [
          artistLink("SC", "Dyl Boban", "SoundCloud", "https://soundcloud.com/dylboban"),
        ],
      ),
    },
    {
      name: "Ellen Allien",
      profile: artistProfile(
        "/artists/ellen-allien.jpg",
        "Ellen Allien is an unparalleled force in electronic music. The matriarch of Berlin techno founded BPitch and UFO Inc., releasing ten solo albums alongside countless EPs, collaborations, and remixes spanning underground and pop music alike. She has also curated legendary We Are Not Alone weekenders and Vinylism record store parties. Her 2026 album, New Life, is a rich and rousing soundscape of emotional rave music.",
        [
          artistLink("IG", "Ellen Allien", "Instagram", "https://www.instagram.com/ellen.allien/"),
          artistLink("SC", "Ellen Allien", "SoundCloud", "https://soundcloud.com/ellen-allien"),
          artistLink("RA", "Ellen Allien", "Resident Advisor", "https://ra.co/dj/ellenallien"),
        ],
      ),
    },
    {
      name: "Fasme",
      profile: artistProfile(
        "/artists/fasme.jpg",
        "A young producer recently invited by Bicep to release a maxi on Feel My Bicep in 2021, FASME released his first LP in 2023. Raised with Drexciya, James Holden and Aphex Twin, FASME has a pronounced taste for the Roland TB-303, his characteristic wildness quickly ranking him among the rising figures of acid in France. But considering him under this sole genre would be narrow minded. Adept of experimentation, his productions cross IDM, jungle, electro and trance.",
        [
          artistLink("IG", "Fasme", "Instagram", "https://www.instagram.com/fasme_live/"),
          artistLink("SC", "Fasme", "SoundCloud", "https://soundcloud.com/fasme-live"),
          artistLink("RA", "Fasme", "Resident Advisor", "https://ra.co/dj/fasme"),
        ],
      ),
    },
    {
      name: "fbi",
      profile: artistProfile(
        "/artists/fbi.jpg",
        "With a love for 00s house and techno, fbi stands for the insatiable urge to play with different moods as a way to tell a story for the dance floor. His approach will always be to deliver refreshing yet nostalgic sound, forcing you to dance.",
        [
          artistLink("RA", "fbi", "Resident Advisor", "https://ra.co/dj/fbi-1"),
        ],
      ),
    },
    {
      name: "Ferdik",
      profile: artistProfile(
        "/artists/ferdik.jpg",
        "What began with a love for rhythm and the motivation to bring more women behind the decks soon evolved into a deeper fascination with music. Born in Innsbruck and encouraged by the Gans Anders crew, Ferdik found her way from a passion for reggaeton to a groovy house sound. Still moving between genres and developing her own musical language, she aims to create a special place on the dance floor, one filled with energy and the urge to move.",
      ),
    },
    {
      name: "Main Phase",
      profile: artistProfile(
        "/artists/main-phase.jpg",
        "Main Phase is a DJ and producer with a sound deeply rooted in the UK underground. Blending UK garage, speed garage, dubstep and jungle, he brings raw bass pressure, old-school energy and plenty of unreleased heat to the dance floor. As co-owner of ATW Records with Interplanetary Criminal, he has become a key name in the new wave of UK-leaning club music, with releases on Hardline Sounds, Instinct, Locked On and ec2a - backed by names like Ben UFO, Kettama and Sammy Virji.",
        [
          artistLink("IG", "Main Phase", "Instagram", "https://www.instagram.com/mainphase93/"),
          artistLink("SC", "Main Phase", "SoundCloud", "https://soundcloud.com/mainphase001"),
          artistLink("RA", "Main Phase", "Resident Advisor", "https://ra.co/dj/mainphase"),
        ],
      ),
    },
    {
      name: "maša",
      profile: artistProfile(
        "/artists/masa.jpg",
        "Drawn to the sensual, the strange and the deep, maša flirts with the dancefloor through restless rhythms and slow burning grooves.",
        [
          artistLink("RA", "maša", "Resident Advisor", "https://ra.co/dj/masa-si"),
        ],
      ),
    },
    {
      name: "mastur_babe",
    },
    {
      name: "milhan",
    },
    {
      name: "mindestens",
    },
    {
      name: "NUNKI",
      profile: artistProfile(
        "/artists/nunki.jpg",
        "NUNKI, the sparkling star, is back. This time, she shines brighter than ever, bringing the energy straight from the decks to the dancefloor with her cheeky beats.",
      ),
    },
    {
      name: "Randalia b2b Flœr",
      profile: artistProfile(
        "/artists/randalia-floer.jpg",
        "Deeply embedded in Vienna's nightlife scene, they are not only selectors behind the decks, but also curators of their own events within their collectives. What started as a strong friendship later developed into a shared passion for a similar style of electronic music, which soon offered the chance to play together at various parties in Vienna. Their sound unfolds like a spiral of flowing progressive house, pulling you deep in straight from the beginning, wandering towards edgy electro layers while dubby elements form the last open space in the story.",
        [
          artistLink("IG R", "Randalia", "Instagram", "https://www.instagram.com/rrandalia/"),
          artistLink("SC R", "Randalia", "SoundCloud", "https://soundcloud.com/user-428114063"),
          artistLink("RA R", "Randalia", "Resident Advisor", "https://ra.co/dj/randalia"),
          artistLink("IG F", "Flœr", "Instagram", "https://www.instagram.com/floramerl/"),
          artistLink("SC F", "Flœr", "SoundCloud", "https://soundcloud.com/floramerl"),
        ],
      ),
    },
    {
      name: "Sansibar",
      profile: artistProfile(
        "/artists/sansibar.jpg",
        "Galactic funk, streamlined in succession of outlined parameters. Symbiotic dreams of effervescent moments. Sansibar steers this ship through intuitive impulses that are cut deep in the flesh, with the extension of his thoughts and process audible via labels such as Kalahari Oyster Cult, Darknet, Emotsiya, Natural Sciences and his own imprint, Sin Sistema. As a live performer, the Sansibarian take on things is raw and beautiful, pinned down by a steady drum machine pulse singing in unison with flailing outboard synths. On the disc jockey side of things, an anything-goes approach can be sensed, although 100% adherence to groove is certain.",
        [
          artistLink("IG", "Sansibar", "Instagram", "https://www.instagram.com/sans1bar/"),
          artistLink("SC", "Sansibar", "SoundCloud", "https://soundcloud.com/sunnysibar"),
          artistLink("RA", "Sansibar", "Resident Advisor", "https://ra.co/dj/sansibar"),
        ],
      ),
    },
    {
      name: "Schwarzmarct",
      profile: artistProfile(
        "/artists/schwarzmarct.jpg",
        "Schwarzmarct is an electronic music producer based in Innsbruck, known for his distinctive and immersive techno sound. His tracks combine atmospheric depth with driving rhythms, balancing melody and percussive energy. He began his musical journey in hip-hop, later exploring breakbeat and drum and bass before finding his way to techno. These influences continue to shape his style, resulting in layered soundscapes that feel both powerful and emotional.",
        [
          artistLink(
            "SC",
            "Schwarzmarct",
            "SoundCloud",
            "https://soundcloud.com/schwarzmarctofficial",
          ),
        ],
      ),
    },
    {
      name: "Schwesta P",
      profile: artistProfile(
        "/artists/schwesta-p.jpg",
        "Based in Hanover, Schwesta P delivers a house-driven sound with strong influences from tech and prog house, built around groovy rhythms and powerful basslines. With years of experience in the booth, her sets balance variation and consistency, creating a dynamic flow through carefully selected tracks. Always focused on energy and atmosphere, she crafts dancefloor-oriented performances that keep the crowd engaged and the momentum high from start to finish.",
        [
          artistLink("IG", "Schwesta P", "Instagram", "https://www.instagram.com/schwestap/"),
          artistLink("SC", "Schwesta P", "SoundCloud", "https://soundcloud.com/schwestap"),
          artistLink("RA", "Schwesta P", "Resident Advisor", "https://ra.co/dj/schwestap"),
        ],
      ),
    },
    {
      name: "Sibil",
      profile: artistProfile(
        "/artists/sibil.jpg",
        "Sibil is a selector who thrives on contrast - discipline meets freedom, precision meets wildness. Raised in France with a foundation in classical music, she now calls Slovenia home, where her sound has evolved into a vibrant fusion of groove-heavy basslines, playful vocal fragments and dream-soaked synths. As part of the LuckIsOn label and collective, she carries forward its spirit of community and forward-thinking artistry, shaping her identity through bold selections and immersive storytelling. Her sets are designed as journeys, inviting dancers to lose themselves in unexpected turns and euphoric highs.",
        [
          artistLink("SC", "Sibil", "SoundCloud", "https://soundcloud.com/sibil-fr"),
          artistLink("RA", "Sibil", "Resident Advisor", "https://ra.co/dj/sibil-1"),
        ],
      ),
    },
    {
      name: "Sophti",
    },
    {
      name: "TeilZeitRecords",
      profile: artistProfile(
        "/artists/teilzeitrecords.jpg",
        "TeilZeitRecords consists of archiveollie, Inujascha, Masu and Sally. The four guys from Berlin and Halle got their start in a basement at their parents' house in 2019 and are now making a name for themselves on the stages of the underground hip hop scene. With a dose of humor, bass-heavy beats collide with lyrics drawn from everyday life.",
        [
          artistLink(
            "IG",
            "TeilZeitRecords",
            "Instagram",
            "https://www.instagram.com/teilzeitrec/",
          ),
          artistLink("SC", "TeilZeitRecords", "SoundCloud", "https://soundcloud.com/teilzeitrec"),
        ],
      ),
    },
    {
      name: "Tornado",
      profile: artistProfile(
        "/artists/tornado.jpg",
        "Tornado is a vinyl selector blending his collection with handpicked digital selections. His sound ranges from house and electro to breaky vibes - always rooted in a genuine passion for music and the joy of sharing it. As part of Primary Care, he aims to share his love for the underground with all people in IBK and further.",
      ),
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
        <ArtistPopupList
          artists={artists}
          textColor={lineUpSettings.textColor}
          hoverColor={lineUpSettings.hoverColor}
          fontFamily={lineUpSettings.fontFamily}
          lineHeight={lineUpSettings.lineHeight}
          mobileFontSize={lineUpSettings.mobileFontSize}
          desktopFontSize={lineUpSettings.fontSize}
        />
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
