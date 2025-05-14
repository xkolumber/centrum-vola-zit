"use client";

import { GalleryPhotoInterface } from "@/app/lib/interface";
import GalleryObject from "../GalleryObject";

const gallery_data: GalleryPhotoInterface[] = [
  {
    title: "Vytváranie pozitívneho vzťahu",
    date: "2.4.2025",
    image: "/intro_photo.png",
    link: "/",
  },
  {
    title: "Vytváranie pozitívneho vzťahu",
    date: "2.4.2025",
    image: "/intro_photo.png",
    link: "/",
  },
  {
    title: "Vytváranie pozitívneho vzťahu",
    date: "2.4.2025",
    image: "/intro_photo.png",
    link: "/",
  },
];

const HomePageGallery = () => {
  return (
    <div className="w-full  flex justify-center pt-8 pb-8 2xl:pt-32 2xl:pb-32">
      <div className="main_section justify-center w-full flex flex-col  ">
        <div className="flex flex-col w-full ">
          <h2 className="font-extrabold text-center">Galéria fotiek</h2>
          <p className="text-center pt-4 mb-8 2xl:mb-24 max-w-[700px] m-auto">
            Pozrite sa, ako vyzerá naša každodenná práca – momenty plné
            odhodlania, pokroku a radosti. Naša galéria zachytáva príbehy detí,
            ktorým pomáhame, aj úsilie odborníkov, ktorí im podávajú pomocnú
            ruku. Každý úsmev, každý malý krôčik vpred je pre nás dôkazom, že
            naša práca má zmysel.
          </p>
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {gallery_data.map((object, index) => (
            <GalleryObject data={object} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageGallery;
