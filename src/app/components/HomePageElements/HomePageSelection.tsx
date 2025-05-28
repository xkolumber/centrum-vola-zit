"use client";
import React from "react";
import Image from "next/image";
import TextWithArrow from "../TextWithArrow";
import { cloudfront_url } from "@/app/functions/functionsClient";
import { usePathname } from "next/navigation";

const data = [
  {
    id: "01",
    title: "Terapie",
    slug: "terapie",
    image: "/bobath_koncept.jpg",
  },
  {
    id: "02",
    title: "Doplnkové terapie",
    slug: "doplnkove-terapie",
    image: "/oxygenoterapia.jpg",
  },
  {
    id: "03",
    title: "Logopédia",
    slug: "logopedia",
    image: "/logopedia_foto.jpg",
  },
  {
    id: "04",
    title: "Zraková stimulácia",
    slug: "zrakova-stimulacia",
    image: "/zrakova_stimulacia/zrak_stimulacia3.jpg",
  },
  {
    id: "05",
    title: "Masáže",
    slug: "masaze",
    image: "/intro_masaze.jpg",
  },
  {
    id: "06",
    title: "Zdravotnícke pomôcky",
    slug: "zdravotnicke-pomocky",
    image: "/intro_pomocky.jpg",
  },
];

const HomePageSelection = () => {
  const pathname = usePathname();
  return (
    <div className="main_section m-auto" id="sluzby">
      <h2
        className={`font-extrabold lg:mb-8  ${pathname != "/sluzby" && "hidden"}`}
      >
        Naše služby
      </h2>
      <div className="hidden lg:grid grid-cols-3 gap-8 ">
        {data.map((object, index) => (
          <div className="relative" key={index}>
            <div className="absolute top-0 left-0 w-full h-full rounded-[8px] bg-gradient-to-b from-transparent to-black/10 z-10" />
            <Image
              src={cloudfront_url + `${object.image}`}
              alt={object.image}
              width={1920}
              height={1080}
              className="w-full h-[300px] 2xl:h-[370px]  object-cover rounded-[8px]"
              priority
            />

            <TextWithArrow link={object.slug} title={object.title} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-8 mt-8">
        {data.map((object, index) => (
          <div className="h-full relative" key={index}>
            <div className="absolute top-0 left-0 w-full h-full rounded-[8px] bg-gradient-to-b from-transparent to-black/10 z-10" />
            <Image
              src={cloudfront_url + `${object.image}`}
              alt="Left"
              width={600}
              height={280}
              className="w-full h-[300px] object-cover rounded-[8px]"
              priority
            />
            <TextWithArrow link={object.slug} title={object.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageSelection;
