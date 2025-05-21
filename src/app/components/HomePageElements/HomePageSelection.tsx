import React from "react";
import Image from "next/image";
import TextWithArrow from "../TextWithArrow";
import { cloudfront_url } from "@/app/functions/functionsClient";

const HomePageSelection = () => {
  return (
    <div className="main_section m-auto" id="sluzby">
      <div className="hidden lg:grid grid-cols-2 gap-8 ">
        <div className="h-full relative">
          <Image
            src={cloudfront_url + `/bobath_koncept.jpg`}
            alt="Left"
            width={800}
            height={1600}
            className="w-full h-[760px] object-cover rounded-[8px]"
            priority
          />
          <TextWithArrow link="/terapie" title="Terapie" />
        </div>

        <div className="grid grid-rows-2 gap-8 h-full">
          <div className="relative">
            <Image
              src={cloudfront_url + `/intro_doplnkove.jpg`}
              alt="Top Right"
              width={1920}
              height={1080}
              className="w-full h-[370px] object-cover rounded-[8px]"
              priority
            />

            <TextWithArrow
              link="/doplnkove-terapie"
              title="Doplnkové terapie"
            />
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="relative">
              <Image
                src={cloudfront_url + `/intro_masaze.jpg`}
                alt="Bottom Left"
                width={300}
                height={300}
                className="w-full h-[370px] object-cover  rounded-[8px]"
                priority
              />
              <TextWithArrow link="/masaze" title="Masáže" />
            </div>

            <div className="relative">
              <Image
                src={cloudfront_url + `/intro_pomocky.jpg`}
                alt="Bottom Right"
                width={300}
                height={300}
                className="w-full h-[370px] object-cover  rounded-[8px]"
                priority
              />
              <TextWithArrow link="/pomocky" title="Pomôcky" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:hidden gap-8 mt-16">
        <div className="h-full relative">
          <Image
            src={cloudfront_url + `/bobath_koncept.jpg`}
            alt="Left"
            width={600}
            height={280}
            className="w-full h-[280px] object-cover rounded-[8px]"
            priority
          />
          <TextWithArrow link="/terapie" title="Terapie" />
        </div>

        <div className="relative">
          <Image
            src={cloudfront_url + `/intro_doplnkove.jpg`}
            alt="Top Right"
            width={600}
            height={280}
            className="w-full h-[280px] object-cover rounded-[8px]"
            priority
          />

          <TextWithArrow link="/doplnkove-terapie" title="Doplnkové terapie" />
        </div>

        <div className="relative">
          <Image
            src={cloudfront_url + `/intro_masaze.jpg`}
            alt="Bottom Left"
            width={600}
            height={280}
            className="w-full h-[280px] object-cover  rounded-[8px]"
            priority
          />
          <TextWithArrow link="/masaze" title="Masáže" />
        </div>

        <div className="relative">
          <Image
            src={cloudfront_url + `/intro_pomocky.jpg`}
            alt="Bottom Right"
            width={600}
            height={280}
            className="w-full h-[280px] object-cover  rounded-[8px]"
            priority
          />
          <TextWithArrow link="/pomocky" title="Pomôcky" />
        </div>
      </div>
    </div>
  );
};

export default HomePageSelection;
