"use client";
import React from "react";
import Image from "next/image";
import ButtonMui from "../ButtonMui";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchActualityLatest } from "@/app/functions/functionsServer";
import { useInfiniteQuery } from "@tanstack/react-query";
import {
  aws_bucket_url,
  cloudfront_url,
} from "@/app/functions/functionsClient";
import IconSwiperLeft from "@/app/icons/IconSwiperLeft";
import IconSwiperRight from "@/app/icons/IconSwiperRight";
import { CircularProgress } from "@mui/material";

const HomePageSwiper = () => {
  const { data, error, isFetching } = useInfiniteQuery({
    queryKey: ["aktuality"],
    queryFn: ({ pageParam = undefined }) => fetchActualityLatest(pageParam),
    getNextPageParam: (lastPage) => lastPage.lastEvaluatedKey ?? undefined,
    initialPageParam: undefined,
    initialData: { pages: [], pageParams: [] },
    refetchOnWindowFocus: false,
  });

  return (
    <div className="bg-[#F1F1F1] flex flex-col justify-center items-center  md:h-[600px] lg:min-h-[70vh] relative">
      <div className="w-full   flex">
        {isFetching && (
          <div className="main_section  m-auto">
            <CircularProgress
              size={24}
              color="inherit"
              className="mt-16 mb-16"
            />
          </div>
        )}
        {error && <p>Chyba pri načítaní dát.</p>}

        {data && !isFetching && (
          <>
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              freeMode={true}
              modules={[Navigation, Autoplay]}
              navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
              speed={1000}
              className=" "
            >
              {data.pages
                .flatMap((page) => page.items)
                .filter((object) => object.viditelnost)
                .map((object, index) => (
                  <SwiperSlide key={index}>
                    <div className="main_section m-auto justify-center items-center flex flex-col md:flex-row w-full gap-8 xl:gap-16 ">
                      <div className="flex flex-col md:w-[60%]">
                        <p>Novinka {index + 1}</p>
                        <h2 className="font-extrabold max-w-[700px]">
                          {object.title}
                        </h2>

                        {object?.text1 && (
                          <div
                            className="max-w-[700px] pt-4 mb-4 line-clamp-2"
                            dangerouslySetInnerHTML={{
                              __html: object?.text1,
                            }}
                          />
                        )}
                        <ButtonMui
                          color={"#ADCA2A"}
                          text={"Prečítať"}
                          link={`/aktuality/${object.slug}`}
                        />
                      </div>{" "}
                      <Image
                        src={object.title_photo.replace(
                          aws_bucket_url,
                          cloudfront_url
                        )}
                        width={800}
                        height={800}
                        className="w-full md:w-[40%] max-h-[400px] object-cover rounded-[8px]"
                        alt="Logo"
                        priority
                      />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </>
        )}
      </div>

      <div className="absolute bottom-0 flex flex-row gap-6 pb-8">
        <div className="arrow-right ">
          <IconSwiperLeft />
        </div>
        <div className="arrow-left">
          <IconSwiperRight />
        </div>
      </div>

      <div className="  flex flex-row gap-6 pt-8 pb-8 md:hidden">
        <div className="arrow-right ">
          <IconSwiperLeft />
        </div>
        <div className="arrow-left">
          <IconSwiperRight />
        </div>
      </div>
    </div>
  );
};

export default HomePageSwiper;
