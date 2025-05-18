"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";

const services = [
  {
    name: "Bobath koncept",
    videoUrl:
      "https://justtesttt.s3.eu-north-1.amazonaws.com/Bobath+koncept+v+MNO+_+1.+d%C3%ADl+-+Prevence.mp4",
    description:
      "Ide o neurovývojovú terapiu, ktorej cieľom je dosiahnuť maximálny fyziologický motorický prejav dieťaťa. Fyzioterapeutka vyhodnotí stav a sleduje, čo všetko dokáže dieťa spraviť samé, čo s pomocou a čo nezvládne vôbec. Základom je dosiahnutie normalizácie svalového napätia.",
  },
  {
    name: "Závesný systém",
    videoUrl:
      "https://justtesttt.s3.eu-north-1.amazonaws.com/Bobath+koncept+v+MNO+_+1.+d%C3%ADl+-+Prevence.mp4",
    description:
      "Cvičenie je určené na nácvik chôdze a vertikalizáciu pacienta",
  },
  {
    name: "Redcord",
    videoUrl:
      "https://justtesttt.s3.eu-north-1.amazonaws.com/Bobath+koncept+v+MNO+_+1.+d%C3%ADl+-+Prevence.mp4",
    description:
      "Ide o unikátne cvičenie v závesnom systéme. Redcord je metóda zameraná na diagnostiku a následnú terapiu pri poruchách funkčných pohybových vzorov. Pomocou systému Redcord vieme odstrániť bolesti, zlepšiť pohybové stereotypy a obnoviť rozsah pohyblivosti v kĺboch. Zameriavame sa najmä na odstránenie príčiny daného motorického problému.",
  },
  {
    name: "Galileo",
    videoUrl:
      "https://justtesttt.s3.eu-north-1.amazonaws.com/Bobath+koncept+v+MNO+_+1.+d%C3%ADl+-+Prevence.mp4",
    description:
      "Vibračná plošina Galileo MED 25 je inovatívne zariadenie určené na efektívnu rehabilitáciu a výcviku v oblasti terapie a rehabilitácie ortopedických, neurologických a pohybových ochorení. Rovnako tak nachádza svoje maximálne využitie v oblasti fitness a vrcholového športu. Prístroj dosahuje vynikajúce výsledky aj v oblasti budovania kondície a prevencie zhoršenia zdravotného stavu v každom veku.",
  },
  {
    name: "Horizontálny motomed",
    videoUrl:
      "https://justtesttt.s3.eu-north-1.amazonaws.com/Bobath+koncept+v+MNO+_+1.+d%C3%ADl+-+Prevence.mp4",
    description:
      "je zariadenie, ktoré podporuje rozvoj motorických funkcií a tým zároveň aj nápravu poškodení CNS (centrálneho nervového systému). V procese obnovy CNS vyvoláva vytváranie nových nervových buniek a množenie funkčných buniek. Zariadenie využíva rytmické, dynamicky koordinované pohyby, ktoré podporujú obnovenie základných funkcií CNS. Pohyby pacientov na zariadení spúšťajú impulzy v receptoroch kože, svalov, kĺbov a iných tkanív, ktoré mnohonásobným opakovaním vyvolávajú zmeny v nervovej sústave.",
  },
];

export default function ServiceIntro() {
  const [active, setActive] = useState(0);

  return (
    <div className="main_section m-auto py-12 min-h-screen">
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
