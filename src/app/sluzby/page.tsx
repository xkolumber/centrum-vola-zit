import { Metadata } from "next";
import HomePageSelection from "../components/HomePageElements/HomePageSelection";

export const metadata: Metadata = {
  title: "Naše služby – Terapie, pomôcky a odborná starostlivosť",
  description:
    "Ponúkame komplexné služby pre podporu zdravia a vývinu detí aj dospelých: terapie, doplnkové terapie, masáže, zraková stimulácia, logopédia a zdravotnícke pomôcky.",
  keywords: [
    "centrum vôľa žiť",
    "centrum vola zit",
    "terapie pre deti",
    "doplnkové terapie",
    "masáže",
    "rehabilitačné služby",
    "zdravotnícke pomôcky",
    "zraková stimulácia",
    "logopédia",
    "fyzioterapia",
    "neurologická rehabilitácia",
    "podpora vývinu detí",
    "terapeutické centrum",
    "centrum pre deti",
    "rehabilitácia Spišská Belá",
    "komplexná starostlivosť o zdravie",
    "kežmarok",
    "spišská belá",
  ],
  openGraph: {
    title: "Naše služby – Starostlivosť o zdravie a vývin detí i dospelých",
    description:
      "Objavte širokú ponuku našich služieb: terapie, logopédia, zraková stimulácia, doplnkové terapie, zdravotnícke pomôcky a masáže pre deti aj dospelých.",
    images: [
      {
        url: "https://d9xqr11l6v5wz.cloudfront.net/logopedia1.jpg",
        alt: "Zdravotnícke centrum poskytujúce terapie a starostlivosť",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const page = () => {
  return (
    <div>
      <HomePageSelection />
    </div>
  );
};

export default page;
