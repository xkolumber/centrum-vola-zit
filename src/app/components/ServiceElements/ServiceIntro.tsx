"use client";
import {
  aws_bucket_url,
  BLUR_DATA_URL_GRAY,
  cloudfront_url,
} from "@/app/functions/functionsClient";
import IconArrowServiceLeft from "@/app/icons/IconArrowServiceLeft";
import IconArrowServiceRight from "@/app/icons/IconArrowServiceRight";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CallToAction from "../CallToAction";
import StepBack from "../StepBack";

import SwiperCore from "swiper";

const services = [
  {
    id: 0,
    name: "Bobath koncept",
    slug: "bobath-koncept",
    photos: [
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/bobath_koncept/bobath1.jpg",
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/bobath_koncept/bobath2.jpg",
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/bobath_koncept/bobath3.jpg",
    ],
    imageUrl:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/bobath_koncept.jpg",
    videoUrl: "none",
    description:
      "Ide o neurovývojovú terapiu, ktorej cieľom je dosiahnuť maximálny fyziologický motorický prejav dieťaťa. Fyzioterapeutka vyhodnotí stav a sleduje, čo všetko dokáže dieťa spraviť samé, čo s pomocou a čo nezvládne vôbec. Základom je dosiahnutie normalizácie svalového napätia.",
  },
  {
    id: 1,
    name: "Závesný systém",
    slug: "zavesny-system",
    photos: [
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zavesny_system/zavesny_system1.jpg",
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zavesny_system/zavesny_system4.jpg",
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zavesny_system/zavesny_system3.jpg",
    ],
    imageUrl: "",
    videoUrl: "none",
    description:
      "Cvičenie je určené na nácvik chôdze a vertikalizáciu pacienta",
  },
  {
    id: 2,
    name: "Redcord",
    slug: "redcord",
    photos: [
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/redcord/redcord1.jpg",
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/redcord/redcord2.jpg",
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/redcord/redcord3.jpg",
    ],

    videoUrl: "none",
    description:
      "Ide o unikátne cvičenie v závesnom systéme. Redcord je metóda zameraná na diagnostiku a následnú terapiu pri poruchách funkčných pohybových vzorov. Pomocou systému Redcord vieme odstrániť bolesti, zlepšiť pohybové stereotypy a obnoviť rozsah pohyblivosti v kĺboch. Zameriavame sa najmä na odstránenie príčiny daného motorického problému.",
  },
  {
    id: 3,
    name: "Galileo",
    slug: "galileo",
    photos: [],
    videoUrl:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/galileo.mp4",
    description:
      "Vibračná plošina Galileo MED 25 je inovatívne zariadenie určené na efektívnu rehabilitáciu a výcviku v oblasti terapie a rehabilitácie ortopedických, neurologických a pohybových ochorení. Rovnako tak nachádza svoje maximálne využitie v oblasti fitness a vrcholového športu. Prístroj dosahuje vynikajúce výsledky aj v oblasti budovania kondície a prevencie zhoršenia zdravotného stavu v každom veku.",
  },
  {
    id: 4,
    name: "Horizontálny motomed",
    slug: "horizontalny-motomed",
    photos: [
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/horizontalny_motomed.jpg",
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/horizontalny_motomed.jpg",
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/horizontalny_motomed.jpg",
    ],

    videoUrl:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/giger.mp4",
    description:
      "je zariadenie, ktoré podporuje rozvoj motorických funkcií a tým zároveň aj nápravu poškodení CNS (centrálneho nervového systému). V procese obnovy CNS vyvoláva vytváranie nových nervových buniek a množenie funkčných buniek. Zariadenie využíva rytmické, dynamicky koordinované pohyby, ktoré podporujú obnovenie základných funkcií CNS. Pohyby pacientov na zariadení spúšťajú impulzy v receptoroch kože, svalov, kĺbov a iných tkanív, ktoré mnohonásobným opakovaním vyvolávajú zmeny v nervovej sústave.",
  },

  {
    id: 5,
    name: "Motomed",
    slug: "motomed",
    photos: [],
    videoUrl:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/motomed_video.mp4",
    description:
      "Je vhodný pre pacientov, ktorí sú odkázaní na invalidný vozík  (paraplegici, kvadruplegici), DMO - rôzne formy, skleroza multiplex, priečne ochrnutie, a mnoho daľsích ochorení spôsobujúcich obmedzenie alebo ochrnutie pohyblivosti rúk a nôh. Zmierniť následky vyvolané nedostatkom pohybu, zredukovať spazmy (kŕče), dokáže identifikovať zostavújucu často aj skrytú silu v nohách, podporuje chôdzu a celkovo pomáha k lepšiemu pocitu a samostatnosti pacienta.",
  },
  {
    id: 6,
    name: "Snoozelen",
    slug: "snoozelen",
    photos: [
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/snoozelen/snoozelen1.jpg",
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/snoozelen/snoozelen3.jpg",
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/snoozelen/snoozelen2.jpg",
    ],

    videoUrl: "none",
    description:
      "Snoezelen je multifunkčná metóda, ktorá sa realizuje v obzvlášť príjemnom a upravenom prostredí pomocou svetelných a zvukových prvkov, vôní a hudby, pričom jej cieľom je vyvolanie zmyslových pocitov. Je určená najmä pre osoby s vývinovými poruchami, s mentálnym, telesným alebo viacnásobným postihnutím, s poruchou autistického spektra, poruchami správania a učenia, s psychickými poruchami, traumatickým poranením mozgu, pre osoby s demenciou a pre chronicky chorých pacientov.",
  },
  {
    id: 7,
    name: "SM systém",
    slug: "sm-system",
    photos: [
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/sm_system/sm_system1.jpg",
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/sm_system/sm_system2.jpg",
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/sm_system/sm_system3.jpg",
    ],

    videoUrl: "none",
    description:
      "SM Systém je systematická starostlivosť o pohybový aparát človeka a funkciu vnútorných orgánov. Prepája rehabilitačnú liečbu s prevenciou, regeneráciou a kondičným i výkonnostným tréningom v jednotnom metodickom postupe. Hlavný efekt metódy je vyvolanie trakčnej (naťahovacej) sily v oblasti medzistavcových platničiek. Tento efekt dosahujeme aktiváciou špirálových svalových reťazcov, ktoré zužujú obvod pása a ťahajú telo smerom nahor. Týmto spôsobom je chrbtica pri pohybe aktívne stabilizovaná. Všeobecná indikácia cvičenia je posilňovanie, preťahovanie, koordinácia pohybu, optimálne koordinovaná a stabilizovaná chôdza a beh.",
  },
];

export default function ServiceIntro() {
  const swiperRef = useRef<SwiperCore | null>(null);
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
        router.replace(`?druh=bobath-koncept`);
      }
    } else {
      setActive(0);
      router.replace(`?druh=bobath-koncept`);
    }
  }, [druh]);

  const handleSelectPhoto = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="main_section m-auto py-12 min-h-screen">
      <StepBack />
      <h2 className=" font-bold  mb-8">Terapie</h2>
      <div className="flex  gap-4 md:mb-6 flex-wrap">
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

      <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-start mt-8 md:mt-16">
        <div className="w-full lg:w-1/2 ">
          {services[active].videoUrl != "none" ? (
            <div className="react_player_own">
              <ReactPlayer
                url={services[active].videoUrl.replace(
                  aws_bucket_url,
                  cloudfront_url
                )}
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
                            : "h-[513px] lg:h-[713px]"
                        }  object-cover rounded-[16px]`}
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
          )}
        </div>
        <div className="w-full lg:w-1/2 space-y-4 sticky top-40">
          <h3 className=" font-semibold">{services[active].name}</h3>
          <p className="text-gray-800">{services[active].description}</p>
        </div>
      </div>
      <div className="mt-16 lg:mt-32 2xl:mt-52">
        <CallToAction />
      </div>
    </div>
  );
}
