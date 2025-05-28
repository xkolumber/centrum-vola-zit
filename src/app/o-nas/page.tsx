import React from "react";
import AboutUsElement from "../components/AboutUsElement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nás",
  description:
    "Sme občianske združenie, ktoré sa s láskou a odbornosťou stará o deti so znevýhodnením. Naším cieľom je poskytovať komplexnú starostlivosť a podporu – fyzickú, psychologickú aj sociálnu – v bezpečnom a priateľskom prostredí.",

  keywords: [
    "centrum vôľa žiť",
    "centrum vola zit",
    "deti s nevýhodnením",
    "fyzioterapia",
    "masáže",
    "kežmarok",
    "spišská belá",
  ],
  openGraph: {
    title: "O nás",
    description:
      "Sme občianske združenie, ktoré sa s láskou a odbornosťou stará o deti so znevýhodnením. Naším cieľom je poskytovať komplexnú starostlivosť a podporu – fyzickú, psychologickú aj sociálnu – v bezpečnom a priateľskom prostredí.",
    images: [
      {
        url: "https://d9xqr11l6v5wz.cloudfront.net/o_nas.jpg",
        alt: "Centrum vôľa žiť",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const Page = () => {
  return <AboutUsElement />;
};

export default Page;
