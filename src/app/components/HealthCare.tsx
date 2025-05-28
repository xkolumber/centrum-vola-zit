"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import StepBack from "./StepBack";
import {
  aws_bucket_url,
  BLUR_DATA_URL_GRAY,
  cloudfront_url,
} from "../functions/functionsClient";
import Link from "next/link";
import CallToAction from "./CallToAction";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import IconArrowServiceLeft from "../icons/IconArrowServiceLeft";

import SwiperCore from "swiper";
import IconArrowServiceRight from "../icons/IconArrowServiceRight";

const HealthCare = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const services = [
    {
      id: 0,
      name: "Detský program",
      slug: "detsky-program",
      photos: [
        "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zdravotnicke_pomocky/detsky_program/vertikalizacne_zariadenie_ella_rehacare.jpg",
        "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zdravotnicke_pomocky/detsky_program/kidsflex_autosedacka_rehacare.webp",
        "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zdravotnicke_pomocky/detsky_program/anatomicky_tvarovana_sedacka_adamik2.png",
        "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zdravotnicke_pomocky/detsky_program/rehabilitacny_kocik2.png",
        "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zdravotnicke_pomocky/detsky_program/invalidny_vozik.jpg",
      ],

      description:
        "Princíp činnosti je založený na simulácii telu vlastných impulzov, ktoré sa prostredníctvom elektród privádzajú na pokožku, odkiaľ postupujú do nervových resp. svalových vlákien. Elektródy je možné upevniť na rôznych častiach tela, pričom elektrické stimuly sú neškodné a prakticky bezbolestné. Pri určitých aplikáciách pociťujete len jemné mravenčenie alebo vibrovanie. Elektrické impulzy vysielané do tkaniva ovplyvňujú prenos vzruchov v nervových vedeniach ako aj v nervových uzloch a svalových skupinách v oblasti aplikácie.",
    },
    {
      id: 1,
      name: "Individuálne pomôcky",
      slug: "individualne-pomocky",
      photos: [
        "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zdravotnicke_pomocky/individualne_pomocky/walker_hlavna2.png",
        "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zdravotnicke_pomocky/individualne_pomocky/dublin2.jpg",
        "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zdravotnicke_pomocky/individualne_pomocky/koleno_genu_recurvatum2.png",
        "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zdravotnicke_pomocky/individualne_pomocky/proteza_predkolenna_privykacia.png",
        "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zdravotnicke_pomocky/individualne_pomocky/3d_vlozka.png",
      ],

      description:
        "Odporúča sa pri pohybových a neurologických ochoreniach na uvoľnenie, prehriatie, prekrvenie a pregeneráciu svalov a tkanív. Je nabitý živinami, stopovými prvkami, minerálmi a organickými látkami, napr. obsahuje kyselinu huminiovú. Podporuje metabolizmus a zvyšuje odolnosť organizmu.",
    },
    {
      id: 2,
      name: "Debarierizácia",
      slug: "debarierizacia",
      photos: [
        "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zdravotnicke_pomocky/debarierizacia/debarierizacia1.png",
        "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zdravotnicke_pomocky/debarierizacia/debarierizacia2.jpg",
        "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zdravotnicke_pomocky/debarierizacia/debarierizacia3.jpg",
        "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zdravotnicke_pomocky/debarierizacia/debarierizacia4.jpg",
      ],

      description:
        "Regeneračná a liečebná terapia spočíva v inhalovaní zvýšenej koncentrácie kyslíka. Tá nielen pozitívne vplýva na našu psychickú a fyzickú stránku, ale posilňuje aj náš celkový imunitný systém. Telo zbavuje únavy, podieľa sa na zlepšení látkovej výmeny organizmu a zároveň aj očisťuje telo od toxínov.",
    },
  ];

  const [active, setActive] = useState(0);

  const router = useRouter();
  const searchParams = useSearchParams();
  const druh = searchParams.get("druh");

  const handlePageChange = (type: string) => {
    router.replace(`?druh=${type}`);
  };

  useEffect(() => {
    if (druh) {
      const found_object = services.find((object) => object.slug === druh);

      if (found_object) {
        setActive(found_object.id);
      } else {
        setActive(0);
        router.replace(`?druh=detsky-program`);
      }
    } else {
      setActive(0);
      router.replace(`?druh=detsky-program`);
    }
  }, [druh]);

  const handleSelectPhoto = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <>
      <div className="main_section m-auto py-12 min-h-screen">
        <StepBack />
        <h2 className=" font-bold  mb-8">Zdravotnícke pomôcky</h2>
        <div className="flex  gap-4 mb-6 flex-wrap">
          {services.map((s, i) => (
            <button
              key={i}
              className={`px-6 py-4 rounded-full  font-medium transition 
              ${
                i === active
                  ? "bg-[#ADCA2A] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handlePageChange(s.slug)}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start mt-8 lg:mt-16">
          <div className="w-full lg:w-1/2 ">
            <>
              <div className="relative">
                <div className="arrow-right">
                  <IconArrowServiceLeft color="#000000" />
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
                  {services[active].photos.map((object, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        alt="image"
                        width={1920}
                        height={1080}
                        src={object.replace(aws_bucket_url, cloudfront_url)}
                        className={`w-full ${
                          services[active].slug === "zavesny-system" ||
                          services[active].slug === "sm-system"
                            ? "h-full"
                            : "h-[513px]"
                        }  object-contain rounded-[16px]`}
                        blurDataURL={BLUR_DATA_URL_GRAY}
                        priority
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="arrow-left">
                  <IconArrowServiceRight color="#000000" />
                </div>
              </div>
              <div className=" m-auto flex flex-row gap-4 mt-4 md:mt-8 md:gap-8 w-full justify-center">
                {services[active].photos.map((object, index) => (
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
          <div className="w-full lg:w-1/2 sticky top-40">
            <p>
              V našom centre kladieme dôraz na individuálny prístup ku každému
              dieťaťu. Podľa jeho potrieb a možností spoločne hľadáme vhodné
              zdravotnícke pomôcky, ktoré mu môžu pomôcť zlepšiť pohyblivosť,
              bezpečnosť a celkový komfort v každodennom živote.
            </p>
            <p className="mt-4">
              Na výbere pomôcok spolupracujeme s odborníkmi a dodávateľmi{" "}
              <strong>Rehacare, Revomat</strong>, ktorí nám poskytujú kvalitné a
              overené produkty. V prípade záujmu vieme pomôcky zabezpečiť aj na
              domáce používanie a pomôžeme vám s celým procesom objednávky.
              Pomôžeme Vám taktiež s financovaním cez zdravotnú poisťovňu alebo
              UPSVaR v prípade doplatkov nadácie.
            </p>
            <div className="flex flex-col">
              {" "}
              <Link
                href="https://www.rehacare.sk"
                className="!font-bold"
                target="_blank"
                rel="noreferrer"
              >
                www.rehacare.sk
              </Link>
              <Link
                href="https://www.revomat.sk"
                className="!font-bold"
                target="_blank"
                rel="noreferrer"
              >
                www.revomat.sk
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 lg:mt-32 2xl:mt-52">
          <CallToAction />
        </div>
      </div>
    </>
  );
};

export default HealthCare;
