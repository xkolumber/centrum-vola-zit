"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { aws_bucket_url, cloudfront_url } from "../functions/functionsClient";
import Image from "next/image";
import StepBack from "./StepBack";
import CallToAction from "./CallToAction";

const services = [
  {
    id: 0,
    name: "Elektrostimulácia",
    slug: "elektrostimulacia",
    imageUrl:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/elektrostimulacia.jpg",
    videoUrl: "none",
    description:
      "Princíp činnosti je založený na simulácii telu vlastných impulzov, ktoré sa prostredníctvom elektród privádzajú na pokožku, odkiaľ postupujú do nervových resp. svalových vlákien. Elektródy je možné upevniť na rôznych častiach tela, pričom elektrické stimuly sú neškodné a prakticky bezbolestné. Pri určitých aplikáciách pociťujete len jemné mravenčenie alebo vibrovanie. Elektrické impulzy vysielané do tkaniva ovplyvňujú prenos vzruchov v nervových vedeniach ako aj v nervových uzloch a svalových skupinách v oblasti aplikácie.",
  },
  {
    id: 1,
    name: "Rašelinový zábal",
    slug: "raselinovy-zabal",
    imageUrl:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/raselinovy_zabal.jpg",
    videoUrl: "none",
    description:
      "Odporúča sa pri pohybových a neurologických ochoreniach na uvoľnenie, prehriatie, prekrvenie a pregeneráciu svalov a tkanív. Je nabitý živinami, stopovými prvkami, minerálmi a organickými látkami, napr. obsahuje kyselinu huminiovú. Podporuje metabolizmus a zvyšuje odolnosť organizmu.",
  },
  {
    id: 2,
    name: "Oxygenoterapia",
    slug: "oxygenoterapia",
    imageUrl:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/oxygenoterapia.jpg",
    videoUrl: "none",
    description:
      "Regeneračná a liečebná terapia spočíva v inhalovaní zvýšenej koncentrácie kyslíka. Tá nielen pozitívne vplýva na našu psychickú a fyzickú stránku, ale posilňuje aj náš celkový imunitný systém. Telo zbavuje únavy, podieľa sa na zlepšení látkovej výmeny organizmu a zároveň aj očisťuje telo od toxínov.",
  },
  {
    id: 3,
    name: "Bioptron Lampa",
    slug: "bioptron-lampa",
    imageUrl:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/bioptron_lampa.jpg",
    videoUrl: "none",
    description:
      "Môže pôsobiť prirodzeným spôsobom, podporujúc regeneračné a vyvažujúce funkcie tela, a preto pomáha telu aktivovať vlastný, liečebný potenciál. Svetelná energia po preniknutí do tkanív napomáha procesu biostimulácie (to znamená, že pozitívnym spôsobom stimuluje rôzne biologické procesy v organizme, čím zlepšuje telesné funkcie).",
  },
  {
    id: 4,
    name: "Tejpovanie",
    slug: "tejpovanie",
    imageUrl:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/tejpovanie-medihyp.jpg",
    videoUrl: "none",
    description:
      "Fyzioterapeutická metóda, ktorá uľahčuje proces hojenia svalov, šliach a kĺbov. Uvoľní preťažené a namáhané svaly a tiež ich spevní pred náročnými výkonmi, medzi ktoré patrí šport, ťažký výstup alebo iný namáhavý pohyb. Pozitívne pôsobí na fungovanie celej pohybovej sústavy.",
  },
  {
    id: 5,
    name: "Zdravý chrbát",
    slug: "zdravy-chrbat",
    imageUrl:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zdravy_chrbat.jpeg",
    videoUrl: "none",
    description:
      "Terapeutický systém špeciálnych rehabilitačných cvičení, ktoré sú zamerané na prevenciu a liečbu porúch pohybového aparátu u ľudí ktorejkoľvek vekovej kategórie. Cvičenie na odblokovanie nepríjemných bolestí, spevnenie svalstva, nadobudnutie sily, posilnenie hlbokého stabilizačného systému. Je to kombinácia pilates a školy chrbta so zameraním na správne dýchanie, kde využívame kombináciu statických a dynamických cvikov.",
  },
];

export default function TherapyComplementary() {
  const [active, setActive] = useState(0);

  const router = useRouter();
  const searchParams = useSearchParams();
  const druh = searchParams.get("druh");

  const handlePageChange = (type: string, newPage: number) => {
    setActive(newPage);
    router.replace(`?druh=${type}`);
  };

  useEffect(() => {
    if (druh) {
      const found_object = services.find((object) => object.slug === druh);

      if (found_object) {
        setActive(found_object.id);
      } else {
        setActive(0);
        router.replace(`?druh=elektrostimulacia`);
      }
    } else {
      setActive(0);
      router.replace(`?druh=elektrostimulacia`);
    }
  }, [druh]);

  return (
    <div className="main_section m-auto py-12 min-h-screen">
      {" "}
      <StepBack />
      <h2 className=" font-bold  mb-8">Doplnkové terapie</h2>
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
            onClick={() => handlePageChange(s.slug, i)}
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
              className={`w-full h-[513px] object-cover rounded-[16px] object-right" ${services[active].slug === "oxygenoterapia" && "object-[85%_75%]"}`}
              priority
            />
          )}
        </div>
        <div className="w-full lg:w-1/2 space-y-4">
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
