import { Metadata } from "next";
import HealthCare from "../components/HealthCare";

export const metadata: Metadata = {
  title: "Pomôcky pre rehabilitáciu a podporu mobility",
  description:
    "Zistite, aké pomôcky využívame pri terapiách a rehabilitáciách – od vozíkov, cez podložky, ortopedické pomôcky až po odporúčané domáce vybavenie. Pomáhajú zlepšiť pohyblivosť, bezpečnosť a komfort klientov.",
  keywords: [
    "centrum vôľa žiť",
    "centrum vola zit",
    "rehabilitačné pomôcky",
    "vozík",
    "pomôcky pre pohyb",
    "terapeutické vybavenie",
    "podporné pomôcky",
    "pomôcky pre seniorov",
    "ortopedické pomôcky",
    "pomôcky pre rehabilitáciu",
    "domáce pomôcky",
    "podložky",
    "chodítka",
    "pomôcky pre hendikepovaných",
    "fyzická terapia pomôcky",
    "kežmarok",
    "spišská belá",
  ],
  openGraph: {
    title: "Pomôcky pre terapiu, rehabilitáciu a každodenný život",
    description:
      "V našom centre využívame širokú škálu pomôcok na zlepšenie pohyblivosti, bezpečnosti a komfortu. Niektoré z nich si môžete aj objednať na domáce používanie.",
    images: [
      {
        url: "https://d9xqr11l6v5wz.cloudfront.net/intro_pomocky.jpg",
        alt: "Rehabilitačný vozík ako pomôcka na podporu mobility",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const Page = () => {
  return <HealthCare />;
};

export default Page;
