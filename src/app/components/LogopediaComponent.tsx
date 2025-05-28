"use client";
import React, { useRef } from "react";
import ReactPlayer from "react-player/lazy";
import {
  aws_bucket_url,
  BLUR_DATA_URL_GRAY,
  cloudfront_url,
} from "../functions/functionsClient";

import IconArrowServiceLeft from "../icons/IconArrowServiceLeft";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import SwiperCore from "swiper";
import StepBack from "./StepBack";
import IconArrowServiceRight from "../icons/IconArrowServiceRight";
import CallToAction from "./CallToAction";
import PlaceholderVideo from "./PlaceholderVideo";

const LogopediaComponent = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const objects = [
    "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/logopedia1.jpg",
    "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/logopedia2.jpg",
    "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/logopedia3.jpg",
    "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/logopedia/logopedia_video.mp4",
  ];

  const handleSelectPhoto = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="main_section m-auto py-12 min-h-screen">
      <StepBack />
      <h2 className=" font-bold  mb-8">Logopédia</h2>

      <div className="flex flex-col lg:flex-row gap-16 items-start mt-16">
        <div className="w-full lg:w-1/2 ">
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
              className="rounded-[16px]"
            >
              {objects.map((object, index) => (
                <SwiperSlide key={index}>
                  {object.endsWith("mp4") ? (
                    <div className="react_player_own">
                      <ReactPlayer
                        url={object.replace(aws_bucket_url, cloudfront_url)}
                        controls
                        width="100%"
                        height="513px"
                        config={{
                          file: {
                            attributes: {
                              controlsList: "nodownload",
                            },
                          },
                        }}
                      />
                    </div>
                  ) : (
                    <Image
                      alt="image"
                      width={1920}
                      height={1080}
                      src={object.replace(aws_bucket_url, cloudfront_url)}
                      className={`w-full h-[513px] "
              }  object-cover  rounded-[16px]`}
                      blurDataURL={BLUR_DATA_URL_GRAY}
                      priority
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="arrow-left">
              <IconArrowServiceRight />
            </div>
          </div>

          <div className=" m-auto flex flex-row gap-4 mt-4 md:mt-8 md:gap-8 w-full justify-center">
            {objects.map((object, index) => {
              const isVideo = object.endsWith(".mp4");
              const imageUrl = object.replace(aws_bucket_url, cloudfront_url);

              return (
                <div
                  key={index}
                  className="relative w-[60px] h-[60px] md:w-[90px] md:h-[90px] cursor-pointer rounded-[16px] overflow-hidden"
                  onClick={() => handleSelectPhoto(index)}
                >
                  {isVideo ? (
                    <PlaceholderVideo />
                  ) : (
                    <Image
                      alt="image"
                      src={imageUrl}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL_GRAY}
                      quality={50}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* <Image
            alt="image"
            width={1920}
            height={1080}
            src={data[0].imageUrl.replace(aws_bucket_url, cloudfront_url)}
            className={`w-full h-[513px] "
              }  object-cover rounded-[16px]`}
            priority
          /> */}
        </div>
        <div className="w-full lg:w-1/2 sticky top-40">
          <p className="">
            {" "}
            V našom centre riešime aj problémy so zajakávaním u detí. Na
            začiatku sedení rozvíjame pozornosť, a hravým spôsobom vzbudzujeme
            záujem o rozprávanie. Následne rozširujeme slovnú zásobu a
            zvládnutie gramatiky. Vychádzame z toho, že hlavnou činnosťou detí
            je hra a preto je všetko zakomponované do hravých situácií. Počas
            logopedického sedenia sa zaoberáme týmito oblasťami: naštartovanie
            reči, rozvoj vnímania a porozumenia reči, zlepšenie artikulácie,
            korekcia porúch a vývinu jazyka a reči, korekcia porúch plynulosti
            rečí (zajakávanie, brbľavosť), korekcia narušenej komunikačnej
            schopnosti, prevencia a náprava porúch učenia (dyslexia, dysgrafia,
            dyskalkúlia)
          </p>
        </div>
      </div>
      <div className="mt-16 lg:mt-32 2xl:mt-52">
        <CallToAction />
      </div>
    </div>
  );
};

export default LogopediaComponent;
