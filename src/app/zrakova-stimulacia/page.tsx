import React from "react";
import EyeStimulation from "../components/EyeStimualtion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zraková stimulácia – Podpora detí so zrakovým znevýhodnením",
  description:
    "Zraková stimulácia a odborná terapia pre deti so zrakovým postihnutím. Včasná intervencia, funkčné vyšetrenie zraku a prispôsobenie prostredia na podporu vývinu dieťaťa.",
  keywords: [
    "zraková stimulácia",
    "zraková terapia",
    "zrakové znevýhodnenie",
    "slabozrakosť",
    "slepota",
    "funkčný zrak",
    "nystagmus",
    "ROP",
    "zrakové postihnutie",
    "amblyopia",
    "zraková diagnostika",
    "zrakové poruchy u detí",
    "podpora vývinu zraku",
    "degeneratívne ochorenia sietnice",
    "centrálna porucha zraku",
    "genetické ochorenia zraku",
    "kežmarok",
    "spišská belá",
  ],
  openGraph: {
    title: "Zraková stimulácia pre deti – Odborná podpora a terapia",
    description:
      "Pomáhame deťom so zrakovým a viacnásobným znevýhodnením. Odborná diagnostika, zraková stimulácia a úprava prostredia pre rozvoj funkčného zraku.",
    images: [
      {
        url: "https://d9xqr11l6v5wz.cloudfront.net/zrakova_stimulacia/zrak_stimulacia1.jpg",
        alt: "Dieťa počas zrakovej terapie so špecialistkou",
        width: 1200,
        height: 630,
      },
    ],
  },
};
const page = () => {
  return <EyeStimulation />;
};

export default page;
