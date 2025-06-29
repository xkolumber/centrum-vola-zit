"use client";
import {
  aws_bucket_url,
  cloudfront_url,
  STALE_TIME,
} from "@/app/functions/functionsClient";
import { fetchActualityAll } from "@/app/functions/functionsServer";
import IconSwiperLeft from "@/app/icons/IconSwiperLeft";
import IconSwiperRight from "@/app/icons/IconSwiperRight";
import { ActualityInterface } from "@/app/lib/interface";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SkeletonActualityHomePage from "../ActualityComponents/SkeletonActualityHomePage";
import ButtonMui from "../ButtonMui";

const HomePageSwiper = () => {
  const { data, error, isLoading } = useQuery<ActualityInterface[]>({
    queryKey: ["aktuality"],
    queryFn: () => fetchActualityAll(),
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
    placeholderData: (previousData) => previousData,
  });

  return (
    <div className="bg-[#F1F1F1] flex flex-col justify-center items-center  md:h-[600px] xl:min-h-[70vh] relative">
      {isLoading && <SkeletonActualityHomePage />}
      {error && <p>Chyba pri načítaní dát.</p>}
      <div className="w-full   flex">
        {data && (
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
              {data
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
                        className="w-full md:w-[40%] h-[280px]  md:h-full max-h-[400px] object-cover rounded-[8px] hidden md:block"
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
