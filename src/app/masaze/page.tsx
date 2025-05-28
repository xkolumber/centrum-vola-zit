import React from "react";
import MasageFirstPart from "../components/MasageFirstPart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Masáže pre uvoľnenie, regeneráciu a liečbu bolesti",
  description:
    "Vyberte si z našej ponuky masáží – klasická, reflexná, myofasciálna, lymfodrenáž a bankovanie. Masáže pomáhajú uvoľniť telo, zmierniť bolesť a podporiť regeneráciu organizmu prirodzeným spôsobom.",
  keywords: [
    "centrum vôľa žiť",
    "centrum vola zit",
    "masáže",
    "klasická masáž",
    "reflexná masáž",
    "myofasciálna masáž",
    "lymfodrenáž",
    "bankovanie",
    "uvoľnenie svalov",
    "zmiernenie bolesti",
    "masáže Spišská Belá",
    "regenerácia tela",
    "relaxačné techniky",
    "fyzioterapia",
    "kežmarok",
    "spišská belá",
  ],
  openGraph: {
    title: "Masáže – účinná pomoc pri bolesti a únave",
    description:
      "Objavte liečivú silu masáží. Klasická, reflexná, lymfodrenáž, myofasciálna a bankovanie – každá z nich pomáha pri inom probléme, no všetky prispievajú k lepšiemu zdraviu a pohode.",
    images: [
      {
        url: "https://d9xqr11l6v5wz.cloudfront.net/intro_masaze.jpg",
        alt: "Bankovanie – masážna technika na podporu zdravia",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const page = () => {
  return <MasageFirstPart />;
};

export default page;
