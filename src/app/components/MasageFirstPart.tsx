"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";

const services = [
  {
    name: "Klasická masáž",
    videoUrl:
      "https://justtesttt.s3.eu-north-1.amazonaws.com/Bobath+koncept+v+MNO+_+1.+d%C3%ADl+-+Prevence.mp4",
    description:
      "Je najčastejšie používaným druhom masáže. Využíva sa ako prevencia proti vzniku rôznych diagnóz, na doliečenie prekonaných ochorení a prispieva k uvoľneniu a regenerácii celého tela. Ide o relaxačné techniky a hmaty, ktoré uvoľňujú svalstvo a kožné napätie. Prekrvuje kožu a svaly, zlepšuje kvalitu tkanív a odstraňuje bolesť.",
  },
  {
    name: "Reflexná masáž",
    videoUrl:
      "https://justtesttt.s3.eu-north-1.amazonaws.com/Bobath+koncept+v+MNO+_+1.+d%C3%ADl+-+Prevence.mp4",
    description:
      "Pri reflexnej masáži miestom zásahu nie je primárne postihnuté tkanivo alebo orgán, ale oblasť (koža, podkožie, väzivo...), kde sa porucha daného tkaniva alebo orgánu reflexne prejavila. Princípom reflexnej masáže je dráždenie nervových receptorov a očakávaná spätná reakcia na podráždenie. Konečným cieľom je ovplyvnenie tkaniva alebo orgánu reflexne. Odtiaľ pochádza názov reflexná masáž. Pri reflexnej masáži sa používa súbor špeciálnych techník a hmatov, ktoré volí fyzioterapeut podľa aktuálneho stavu klienta.",
  },
  {
    name: "Myofasciálna masáž",
    videoUrl:
      "https://justtesttt.s3.eu-north-1.amazonaws.com/Bobath+koncept+v+MNO+_+1.+d%C3%ADl+-+Prevence.mp4",
    description:
      "Zahŕňa naťahovanie aj jemné masážne techniky, ktoré pôsobia na spojivové tkanivo alebo fascie. Samotné myofasciálne techniky sa používajú ako súčasť masáže. Rovnako tak aj spoločne s vyšetrením a ošetrením svalov. Existuje celý rad stavov a symptómov, pri ktorých je myofasciálna masáž vhodná. ",
  },
  {
    name: "Lymfodrenáž",
    videoUrl:
      "https://justtesttt.s3.eu-north-1.amazonaws.com/Bobath+koncept+v+MNO+_+1.+d%C3%ADl+-+Prevence.mp4",
    description:
      "Je jemná technika, ktorá podporuje tok lymfy po tele. Táto metóda je šetrná a pomalá, s minimálnym tlakom, pretože lymfatický systém sa nachádza blízko povrchu tela. Cieľom tejto masáže je odstrániť a odviezť toxíny z tkanív. Je vhodná aj pre tých, čo trpia kŕčovými žilami. Lymfodrenážna masáž sa používa aj ako prevencia pred celulitídou, opuchmi a ochoreniami, vrátane onkologických chorôb, a má pozitívny vplyv na športovcov.",
  },
  {
    name: "Bankovanie",
    videoUrl:
      "https://justtesttt.s3.eu-north-1.amazonaws.com/Bobath+koncept+v+MNO+_+1.+d%C3%ADl+-+Prevence.mp4",
    description:
      "Prekrvuje končatiny, prečisťuje krv (tým, že dochádza vplyvom bankovania ku zvýšeniu mikrocirkulácie v cievach), obnovuje funkcie nervového systému, zmierňuje bolesť klbov, hlavy, zahrieva pokožku a zvláčňuje tkanivá aby získali elasticitu. Má pozitívny vplyv pri ochoreniach reumatizmu, gynekologických problémoch, vysokom krvnom tlaku, migrénach či astmách.",
  },
];

export default function MasageFirstPart() {
  const [active, setActive] = useState(0);

  return (
    <div className="main_section m-auto py-12 min-h-screen">
      <h2 className=" font-bold  mb-8">Masáže</h2>
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
