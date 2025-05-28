import React from "react";
import TherapyComplementary from "../components/TherapyComplementary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doplnkové terapie pre deti a dospelých",
  description:
    "Preskúmajte naše doplnkové terapeutické metódy – elektrostimulácia, rašelinový zábal, oxygenoterapia, bioptron lampa, tejpovanie a cvičenia na zdravý chrbát. Pomáhame pri regenerácii, úľave od bolesti aj podpore imunity.",
  keywords: [
    "centrum vôľa žiť",
    "centrum vola zit",
    "doplnkové terapie",
    "elektrostimulácia",
    "rašeľinový zábal",
    "oxygenoterapia",
    "bioptron lampa",
    "tejpovanie",
    "zdravý chrbát",
    "terapie pre deti",
    "fyzioterapia",
    "neurologická rehabilitácia",
    "centrum pre deti",
    "rehabilitácia Spišská Belá",
    "podpora zdravia",
    "kežmarok",
    "spišská belá",
  ],
  openGraph: {
    title: "Doplnkové terapie pre deti a dospelých",
    description:
      "Naše doplnkové terapie pomáhajú pri bolesti, únave a zlepšení zdravia – elektrostimulácia, zábaly, svetelná terapia a ďalšie metódy na podporu liečby a pohybového aparátu.",
    images: [
      {
        url: "https://d9xqr11l6v5wz.cloudfront.net/elektrostimulacia.jpg",
        alt: "Tejpovanie ako súčasť doplnkovej terapie",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const page = () => {
  return (
    <div>
      <TherapyComplementary />
    </div>
  );
};

export default page;
