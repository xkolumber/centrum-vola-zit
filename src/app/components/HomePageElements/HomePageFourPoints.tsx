import React from "react";
import HomePageOnePoint from "./HomePageOnePoint";
import { HowWeWork } from "@/app/lib/interface";

const data: HowWeWork[] = [
  {
    id: "01",
    title: "Poskytujeme odbornú a sociálnu starostlivosť",
    text: "V našom tíme sú fyzioterapeuti, psychológovia a logopédi. Všetci spoločne pracujeme na tom, aby Vaše dieťa dostalo individuálnu a kvalitnú starostlivosť.",
    link: "/o-nas",
    color: "#C3F12D",
  },

  {
    id: "02",
    title: "Máme bezpečné a podporné priestory",
    text: "Naše centrum je miestom, kde sa deti cítia prijaté, pochopené a majú podmienky na svoj rozvoj.",
    link: "/",
    color: "#95BB40",
  },
  {
    id: "03",
    title: "Pomáhame získať financie",
    text: "Mnohí rodičia nevedia, že môžu požiadať poisťovne o príspevky na liečbu a terapie. Pomôžeme Vám s administratívou, aby vaše dieťa dostalo, na čo má nárok. Neváhajte nás kontaktovať.",
    link: "/kontakt",
    color: "#20A9E1",
  },
  {
    id: "04",
    title: "Každý môže pomôcť",
    text: "Podporiť nás môže ktokoľvek – príspevkom na transparentný účet alebo pravidelným darcovstvom. Aj malá pomoc mení veľké životy.",
    link: "/blog/transparentny-ucet",
    color: "#2E63AD",
  },
];

const HomePageFourPoints = () => {
  return (
    <div>
      <div className=" grid-cols-1 lg:grid-cols-2 mt-16 hidden lg:grid">
        {data.map((object, index) => {
          const isFirstRow = index < 2;
          const isFirstCol = index % 2 === 0;

          return (
            <div
              key={index}
              className={`${!isFirstRow ? "border-t" : ""} ${
                !isFirstCol ? "border-l" : ""
              } border-gray-300`}
            >
              <HomePageOnePoint data={object} />
            </div>
          );
        })}
      </div>

      <div className=" grid-cols-1 lg:hidden">
        {data.map((object, index) => {
          return (
            <div key={index} className={` border-b border-gray-300`}>
              <HomePageOnePoint data={object} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePageFourPoints;
