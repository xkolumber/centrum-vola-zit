import React from "react";
import SponsorsPage from "../components/SponsorsComponents/SponsorsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponzori",
  description:
    "Bez Vás by to nešlo. Vďaka podpore našich partnerov môžeme každý deň pomáhať deťom, ktoré to najviac potrebujú. Vaša pomoc nám umožňuje zabezpečiť odborné terapie, kvalitné pomôcky a bezpečné priestory, v ktorých deti nachádzajú oporu a nové možnosti.",

  keywords: [
    "Sponzori",
    "pomoc ďeťom",
    "centrum pre deti",
    "zdravotné znevýhodnenie",
    "rehabilitácia",
    "občianske združenie",
    "spišská belá",
    "kežmarok",
  ],
  openGraph: {
    title: "Sponzori",
    description:
      "Bez Vás by to nešlo. Vďaka podpore našich partnerov môžeme každý deň pomáhať deťom, ktoré to najviac potrebujú. Vaša pomoc nám umožňuje zabezpečiť odborné terapie, kvalitné pomôcky a bezpečné priestory, v ktorých deti nachádzajú oporu a nové možnosti.",
    images: [
      {
        url: "https://d9xqr11l6v5wz.cloudfront.net/centrum_vola_zit_sponzori.jpg",
        alt: "Centrum vôľa žiť",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const Page = () => {
  return <SponsorsPage />;
};

export default Page;
