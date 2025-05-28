"use client";
import Image from "next/image";
import {
  aws_bucket_url,
  BLUR_DATA_URL_GRAY,
  cloudfront_url,
} from "../functions/functionsClient";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore from "swiper";
import StepBack from "../components/StepBack";
import IconArrowServiceLeft from "../icons/IconArrowServiceLeft";
import { useRef } from "react";
import IconArrowServiceRight from "../icons/IconArrowServiceRight";
import CallToAction from "../components/CallToAction";

const EyeStimulation = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const photos = [
    "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zrakova_stimulacia/zrak_stimulacia1.jpg",
    "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zrakova_stimulacia/zrak_stimulacia2.jpg",
    "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zrakova_stimulacia/zrak_stimulacia3.jpg",
  ];

  const handleSelectPhoto = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="main_section m-auto py-12 min-h-screen">
      <StepBack />
      <h2 className=" font-bold  mb-8">Zraková stimulácia</h2>

      <div className="flex flex-col lg:flex-row gap-16 items-start lg:mt-16">
        <div className="w-full lg:w-1/2 ">
          {/* <Image
            alt="image"
            width={1920}
            height={1080}
            src={imageUrl.replace(aws_bucket_url, cloudfront_url)}
            className={`w-full h-[513px] "
              }  object-cover rounded-[16px]`}
            priority
          /> */}
          <>
            <div className="relative">
              <div className="arrow-right">
                <IconArrowServiceLeft />
              </div>
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                }}
                loop={true}
                freeMode={true}
                modules={[Navigation]}
                navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                speed={1000}
                className="rounded-[16px] "
              >
                {photos.map((object, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      alt="image"
                      width={1920}
                      height={1080}
                      src={object.replace(aws_bucket_url, cloudfront_url)}
                      className={`w-full h-[513px] "
              }  object-cover rounded-[16px]`}
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL_GRAY}
                      priority
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="arrow-left">
                <IconArrowServiceRight />
              </div>
            </div>
            <div className=" m-auto flex flex-row gap-4 mt-4 md:mt-8 md:gap-8 w-full justify-center">
              {photos.map((object, index) => (
                <Image
                  alt="image"
                  width={200}
                  height={200}
                  src={object.replace(aws_bucket_url, cloudfront_url)}
                  className={`w-[60px] h-[60px] md:w-[90px] md:h-[90px] object-cover rounded-[16px] cursor-pointer`}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL_GRAY}
                  quality={50}
                  key={index}
                  onClick={() => handleSelectPhoto(index)}
                />
              ))}
            </div>
          </>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-gray-800">
            {" "}
            Zraková stimulácia je dôležitou súčasťou podpory detí so zrakovým
            znevýhodnením. Včasná diagnostika a odborné zásahy môžu významne
            ovplyvniť celkový vývin dieťaťa. Na Slovensku pôsobí niekoľko
            kvalifikovaných zrakových terapeutiek, ktoré poskytujú odbornú pomoc
            rodinám detí s poruchami zraku.
          </p>
          <p className="mt-4">
            {" "}
            Jednou z nich je{" "}
            <span className="font-bold">Mariana Garneková</span>, ktorá pôsobí v{" "}
            <span className="font-bold">
              Špecializovanom centre poradenstva a prevencie pre deti a žiakov
              so zrakovým postihnutím
            </span>{" "}
            v Levoči. Mariana poskytuje odbornú starostlivosť deťom od narodenia
            do 7 rokov, pričom sa zameriava na:
          </p>
          <ul className="">
            <li>Posúdenie funkčného zraku</li>
            <li>Zrakovú stimuláciu a terapiu</li>
            <li>Úpravu prostredia pre podporu zrakového vývinu dieťaťa</li>
          </ul>
          <p>
            Zameriavame sa na deti so zrakovým a viacnásobným znevýhodnením, ako
            sú: Katarakta, glaukóm, slabozrakosť, slepota, genetické ochorenia,
            syndrómy, ROP, nystagmus, centrálna porucha zraku, degeneratívne
            ochorenia sietnice, amblyopia a ďalšie.
          </p>
        </div>
      </div>
      <div className="mt-16 lg:mt-32 2xl:mt-52">
        <CallToAction />
      </div>
    </div>
  );
};

export default EyeStimulation;
