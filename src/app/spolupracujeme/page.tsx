import React from "react";
import CooperationPage from "../components/CooperationComponents/CooperationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spolupracujeme",
  description:
    "Vážime si každého partnera, ktorý s nami zdieľa spoločnú víziu – pomáhať deťom rásť, rozvíjať sa a napredovať napriek prekážkam. Naša spolupráca je postavená na dôvere, odbornosti a spoločnom cieli: vytvárať lepšie podmienky pre život detí so znevýhodnením.",

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
    title: "Spolupracujeme",
    description:
      "Vážime si každého partnera, ktorý s nami zdieľa spoločnú víziu – pomáhať deťom rásť, rozvíjať sa a napredovať napriek prekážkam. Naša spolupráca je postavená na dôvere, odbornosti a spoločnom cieli: vytvárať lepšie podmienky pre život detí so znevýhodnením.",
    images: [
      {
        url: "https://d9xqr11l6v5wz.cloudfront.net/centrum_vola_zit_spolupracujeme.jpg",
        alt: "Centrum vôľa žiť",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const page = () => {
  return <CooperationPage />;
};

export default page;
