import React from "react";
import ServiceIntro from "../components/ServiceElements/ServiceIntro";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terapie pre deti so zdravotným znevýhodnením",
  description:
    "Objavte terapie, ktoré pomáhajú deťom so zdravotným znevýhodnením napredovať – Bobath koncept, závesné systémy, Redcord, Galileo a ďalšie inovatívne prístupy využívané v našom centre.",
  keywords: [
    "centrum vôľa žiť",
    "centrum vola zit",
    "terapie pre deti",
    "bobath koncept",
    "redcord terapia",
    "závesný systém",
    "rehabilitácia detí",
    "galileo plošina",
    "motomed",
    "neurovývojová terapia",
    "centrum pre deti",
    "zdravotné znevýhodnenie",
    "rehabilitácia Spišská Belá",
    "fyzioterapia detí",
    "kežmarok",
    "spišská belá",
  ],
  openGraph: {
    title: "Terapie pre deti so zdravotným znevýhodnením",
    description:
      "Naše centrum ponúka špecializované terapie pre deti – vrátane Bobath konceptu, Redcord systému, závesného systému a vibračnej plošiny Galileo. Zistite, ako vieme pomôcť vášmu dieťaťu.",
    images: [
      {
        url: "https://d9xqr11l6v5wz.cloudfront.net/bobath_koncept.jpg",
        alt: "Redcord terapia – závesný systém pre deti",
        width: 1200,
        height: 630,
      },
    ],
  },
};
const page = () => {
  return (
    <div>
      <ServiceIntro />
    </div>
  );
};

export default page;
