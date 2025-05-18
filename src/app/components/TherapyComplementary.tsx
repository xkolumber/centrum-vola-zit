"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";

const services = [
  {
    name: "Elektrostimulácia",
    videoUrl:
      "https://justtesttt.s3.eu-north-1.amazonaws.com/Bobath+koncept+v+MNO+_+1.+d%C3%ADl+-+Prevence.mp4",
    description:
      "Princíp činnosti je založený na simulácii telu vlastných impulzov, ktoré sa prostredníctvom elektród privádzajú na pokožku, odkiaľ postupujú do nervových resp. svalových vlákien. Elektródy je možné upevniť na rôznych častiach tela, pričom elektrické stimuly sú neškodné a prakticky bezbolestné. Pri určitých aplikáciách pociťujete len jemné mravenčenie alebo vibrovanie. Elektrické impulzy vysielané do tkaniva ovplyvňujú prenos vzruchov v nervových vedeniach ako aj v nervových uzloch a svalových skupinách v oblasti aplikácie.",
  },
  {
    name: "Rašelinový z bal",
    videoUrl:
      "https://justtesttt.s3.eu-north-1.amazonaws.com/Bobath+koncept+v+MNO+_+1.+d%C3%ADl+-+Prevence.mp4",
    description:
      "Odporúča sa pri pohybových a neurologických ochoreniach na uvoľnenie, prehriatie, prekrvenie a pregeneráciu svalov a tkanív. Je nabitý živinami, stopovými prvkami, minerálmi a organickými látkami, napr. obsahuje kyselinu huminiovú. Podporuje metabolizmus a zvyšuje odolnosť organizmu.",
  },
  {
    name: "Oxigenoterapia",
    videoUrl:
      "https://justtesttt.s3.eu-north-1.amazonaws.com/Bobath+koncept+v+MNO+_+1.+d%C3%ADl+-+Prevence.mp4",
    description:
      "Regeneračná a liečebná terapia spočíva v inhalovaní zvýšenej koncentrácie kyslíka. Tá nielen pozitívne vplýva na našu psychickú a fyzickú stránku, ale posilňuje aj náš celkový imunitný systém. Telo zbavuje únavy, podieľa sa na zlepšení látkovej výmeny organizmu a zároveň aj očisťuje telo od toxínov.",
  },
  {
    name: "Bioptron Lampa",
    videoUrl:
      "https://justtesttt.s3.eu-north-1.amazonaws.com/Bobath+koncept+v+MNO+_+1.+d%C3%ADl+-+Prevence.mp4",
    description:
      "Môže pôsobiť prirodzeným spôsobom, podporujúc regeneračné a vyvažujúce funkcie tela, a preto pomáha telu aktivovať vlastný, liečebný potenciál. Svetelná energia po preniknutí do tkanív napomáha procesu biostimulácie (to znamená, že pozitívnym spôsobom stimuluje rôzne biologické procesy v organizme, čím zlepšuje telesné funkcie).",
  },
  {
    name: "Tejpovanie",
    videoUrl:
      "https://justtesttt.s3.eu-north-1.amazonaws.com/Bobath+koncept+v+MNO+_+1.+d%C3%ADl+-+Prevence.mp4",
    description:
      "Fyzioterapeutická metóda, ktorá uľahčuje proces hojenia svalov, šliach a kĺbov. Uvoľní preťažené a namáhané svaly a tiež ich spevní pred náročnými výkonmi, medzi ktoré patrí šport, ťažký výstup alebo iný namáhavý pohyb. Pozitívne pôsobí na fungovanie celej pohybovej sústavy.",
  },
  {
    name: "Zdravý chrbát",
    videoUrl:
      "https://justtesttt.s3.eu-north-1.amazonaws.com/Bobath+koncept+v+MNO+_+1.+d%C3%ADl+-+Prevence.mp4",
    description:
      "Terapeutický systém špeciálnych rehabilitačných cvičení, ktoré sú zamerané na prevenciu a liečbu porúch pohybového aparátu u ľudí ktorejkoľvek vekovej kategórie. Cvičenie na odblokovanie nepríjemných bolestí, spevnenie svalstva, nadobudnutie sily, posilnenie hlbokého stabilizačného systému. Je to kombinácia pilates a školy chrbta so zameraním na správne dýchanie, kde využívame kombináciu statických a dynamických cvikov.",
  },
];

export default function TherapyComplementary() {
  const [active, setActive] = useState(0);

  return (
    <div className="main_section m-auto py-12 min-h-screen">
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
            onClick={() => setActive(i)}
          >
            {s.name}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-start mt-16">
        <div className="w-full lg:w-1/2 ">
          <div className="react_player_own">
            <ReactPlayer
              url={services[active].videoUrl}
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
        </div>
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className=" font-semibold">{services[active].name}</h3>
          <p className="text-gray-800">{services[active].description}</p>
        </div>
      </div>
    </div>
  );
}
