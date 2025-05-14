import React from "react";
import HomePageOneElement from "./HomePageOneElement";
import { ThreeElementInterface } from "@/app/lib/interface";

const data: ThreeElementInterface[] = [
  {
    title: "Staňte sa darcom",
    text: "Každý môže prispieť na transparentný účet a pomôcť zdravotne znevýhodneným deťom. Aj malý dar dokáže veľké veci.",
    color: "#F4D429",
  },
  {
    title: "Miesto podpory",
    text: "Naše centrum je bezpečným a podporným priestorom, kde sa každé dieťa cíti prijaté a pochopené.",
    color: "#22A6DF",
  },
  {
    title: "Tím odborníkov",
    text: "Lekári, psychológovia, logopédi a špecialisti spájajú svoje sily, aby deťom zabezpečili starostlivosť, ktorú potrebujú.",
    color: "#ADCA2A",
  },
];

const HomePageThreeElements = () => {
  return (
    <div className="main_section m-auto !min-w-min !max-w-[1200px] !pb-0">
      <div className="grid grid-cols-3 gap-16 ">
        {data.map((object, index) => (
          <HomePageOneElement data={object} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomePageThreeElements;

// divide-x divide-[#D9D9D9]
