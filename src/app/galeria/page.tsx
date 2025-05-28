import React from "react";
import GalleryPage from "../components/GalleryElements/GalleryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galéria fotiek",
  description:
    "Pozrite sa, ako vyzerá naša každodenná práca – momenty plné odhodlania, pokroku a radosti. Naša galéria zachytáva príbehy detí, ktorým pomáhame, aj úsilie odborníkov, ktorí im podávajú pomocnú ruku. Každý úsmev, každý malý krôčik vpred je pre nás dôkazom, že naša práca má zmysel.",

  keywords: [
    "centrum vôľa žiť",
    "centrum vola zit",
    "Centrum vôľa žiť",
    "deti s nevýhodnením",
    "fyzioterapia",
    "masáže",
    "kežmarok",
    "spišská belá",
  ],
  openGraph: {
    title: "Galéria fotiek",
    description:
      "Pozrite sa, ako vyzerá naša každodenná práca – momenty plné odhodlania, pokroku a radosti. Naša galéria zachytáva príbehy detí, ktorým pomáhame, aj úsilie odborníkov, ktorí im podávajú pomocnú ruku. Každý úsmev, každý malý krôčik vpred je pre nás dôkazom, že naša práca má zmysel.",
    images: [
      {
        url: "https://d9xqr11l6v5wz.cloudfront.net/centrum_vola_zit_galeria.jpg",
        alt: "Centrum vôľa žiť",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const page = () => {
  return (
    <div>
      <GalleryPage />
    </div>
  );
};

export default page;
