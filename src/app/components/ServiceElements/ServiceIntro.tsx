"use client";
import {
  aws_bucket_url,
  cloudfront_url,
} from "@/app/functions/functionsClient";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import StepBack from "../StepBack";
import CallToAction from "../CallToAction";

const services = [
  {
    id: 0,
    name: "Bobath koncept",
    slug: "bobath-koncept",
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
    imageUrl:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zavesny_system.jpg",
    videoUrl: "none",
    description:
      "Cvičenie je určené na nácvik chôdze a vertikalizáciu pacienta",
  },
  {
    id: 2,
    name: "Redcord",
    slug: "redcord",
    imageUrl:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/redcord_new.png",
    videoUrl: "none",
    description:
      "Ide o unikátne cvičenie v závesnom systéme. Redcord je metóda zameraná na diagnostiku a následnú terapiu pri poruchách funkčných pohybových vzorov. Pomocou systému Redcord vieme odstrániť bolesti, zlepšiť pohybové stereotypy a obnoviť rozsah pohyblivosti v kĺboch. Zameriavame sa najmä na odstránenie príčiny daného motorického problému.",
  },
  {
    id: 3,
    name: "Galileo",
    slug: "galileo",
    videoUrl:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/galileo.mp4",
    description:
      "Vibračná plošina Galileo MED 25 je inovatívne zariadenie určené na efektívnu rehabilitáciu a výcviku v oblasti terapie a rehabilitácie ortopedických, neurologických a pohybových ochorení. Rovnako tak nachádza svoje maximálne využitie v oblasti fitness a vrcholového športu. Prístroj dosahuje vynikajúce výsledky aj v oblasti budovania kondície a prevencie zhoršenia zdravotného stavu v každom veku.",
  },
  {
    id: 4,
    name: "Horizontálny motomed",
    slug: "horizontalny-motomed",
    imageUrl:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/horizontalny_motomed.jpg",
    videoUrl: "none",
    description:
      "je zariadenie, ktoré podporuje rozvoj motorických funkcií a tým zároveň aj nápravu poškodení CNS (centrálneho nervového systému). V procese obnovy CNS vyvoláva vytváranie nových nervových buniek a množenie funkčných buniek. Zariadenie využíva rytmické, dynamicky koordinované pohyby, ktoré podporujú obnovenie základných funkcií CNS. Pohyby pacientov na zariadení spúšťajú impulzy v receptoroch kože, svalov, kĺbov a iných tkanív, ktoré mnohonásobným opakovaním vyvolávajú zmeny v nervovej sústave.",
  },

  {
    id: 5,
    name: "Motomed",
    slug: "motomed",

    videoUrl:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/motomed_video.mp4",
    description:
      "Je vhodný pre pacientov, ktorí sú odkázaní na invalidný vozík  (paraplegici, kvadruplegici), DMO - rôzne formy, skleroza multiplex, priečne ochrnutie, a mnoho daľsích ochorení spôsobujúcich obmedzenie alebo ochrnutie pohyblivosti rúk a nôh. Zmierniť následky vyvolané nedostatkom pohybu, zredukovať spazmy (kŕče), dokáže identifikovať zostavújucu často aj skrytú silu v nohách, podporuje chôdzu a celkovo pomáha k lepšiemu pocitu a samostatnosti pacienta.",
  },
  {
    id: 6,
    name: "Snoozelen",
    slug: "snoozelen",
    imageUrl:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/intro_doplnkove.jpg",
    videoUrl: "none",
    description:
      "Snoezelen je multifunkčná metóda, ktorá sa realizuje v obzvlášť príjemnom a upravenom prostredí pomocou svetelných a zvukových prvkov, vôní a hudby, pričom jej cieľom je vyvolanie zmyslových pocitov. Je určená najmä pre osoby s vývinovými poruchami, s mentálnym, telesným alebo viacnásobným postihnutím, s poruchou autistického spektra, poruchami správania a učenia, s psychickými poruchami, traumatickým poranením mozgu, pre osoby s demenciou a pre chronicky chorých pacientov.",
  },
  {
    id: 7,
    name: "SM systém",
    slug: "sm-system",
    imageUrl:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/sm_system.jpg",
    videoUrl: "none",
    description:
      "SM Systém je systematická starostlivosť o pohybový aparát človeka a funkciu vnútorných orgánov. Prepája rehabilitačnú liečbu s prevenciou, regeneráciou a kondičným i výkonnostným tréningom v jednotnom metodickom postupe. Hlavný efekt metódy je vyvolanie trakčnej (naťahovacej) sily v oblasti medzistavcových platničiek. Tento efekt dosahujeme aktiváciou špirálových svalových reťazcov, ktoré zužujú obvod pása a ťahajú telo smerom nahor. Týmto spôsobom je chrbtica pri pohybe aktívne stabilizovaná. Všeobecná indikácia cvičenia je posilňovanie, preťahovanie, koordinácia pohybu, optimálne koordinovaná a stabilizovaná chôdza a beh.",
  },
];

export default function ServiceIntro() {
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

  return (
    <div className="main_section m-auto py-12 min-h-screen">
      <StepBack />
      <h2 className=" font-bold  mb-8">Terapie</h2>
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

      <div className="flex flex-col lg:flex-row gap-16 items-start mt-16">
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
            <Image
              alt="image"
              width={1920}
              height={1080}
              src={services[active].imageUrl!.replace(
                aws_bucket_url,
                cloudfront_url
              )}
              className={`w-full ${
                services[active].slug === "zavesny-system" ||
                services[active].slug === "sm-system"
                  ? "h-full"
                  : "h-[513px] "
              }  object-cover rounded-[16px]`}
              priority
            />
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
