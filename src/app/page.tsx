import { Metadata } from "next";
import HomePageFaq from "./components/HomePageElements/HomePageFaq";
import HomePageGallery from "./components/HomePageElements/HomePageGallery";
import HomePageHowWeWork from "./components/HomePageElements/HomePageHowWeWork";
import HomePageSelection from "./components/HomePageElements/HomePageSelection";
import HomePageSwiper from "./components/HomePageElements/HomePageSwiper";
import HomePageTeam from "./components/HomePageElements/HomePageTeam";
import CallToAction from "./components/CallToAction";

export const metadata: Metadata = {
  title: "Centrum vôľa žiť",
  description:
    "Sme občianske združenie, ktoré sa s láskou a odbornosťou stará o deti so znevýhodnením. Naším cieľom je poskytovať komplexnú starostlivosť a podporu – fyzickú, psychologickú aj sociálnu – v bezpečnom a priateľskom prostredí.",

  keywords: [
    "Centrum vôľa žiť",
    "deti s nevýhodnením",
    "fyzioterapia",
    "masáže",
    "kežmarok",
    "spišská belá",
  ],
  openGraph: {
    title: "Centrum vôľa žiť",
    description:
      "Sme občianske združenie, ktoré sa s láskou a odbornosťou stará o deti so znevýhodnením. Naším cieľom je poskytovať komplexnú starostlivosť a podporu – fyzickú, psychologickú aj sociálnu – v bezpečnom a priateľskom prostredí.",
    images: [
      {
        url: "https://d9xqr11l6v5wz.cloudfront.net/intro_doplnkove.jpg",
        alt: "Centrum vôľa žiť",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="">
      <HomePageSwiper />

      <HomePageSelection />
      <HomePageHowWeWork />
      <HomePageTeam />
      <HomePageFaq />
      {/* <HomePageThreeElements /> */}
      <HomePageGallery />
      <div className="main_section m-auto !pt-16 !pb-16 md:!pt-0 lg:!pb-32">
        <CallToAction />
      </div>
    </div>
  );
}
