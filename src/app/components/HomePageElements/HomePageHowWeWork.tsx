import React from "react";
import HomePageFourPoints from "./HomePageFourPoints";

const HomePageHowWeWork = () => {
  return (
    <div className="main_section m-auto justify-center items-center flex flex-col w-full gap-8 xl:gap-16 ">
      <div className="flex flex-col ">
        <p>Novinka 1</p>
        <h2 className="font-extrabold">Ako pracujeme?</h2>
        <p className=" pt-4 mb-4">
          Každé dieťa má právo na dôstojnú a plnohodnotnú budúcnosť. V našej
          neziskovej organizácii spájame odborné znalosti a ľudskú empatiu, aby
          sme deťom poskytli terapiu, liečbu a pomoc, ktorú potrebujú. Postaráme
          sa aj o administratívne záležitosti, aby rodiny mohli venovať svoj čas
          tomu najcennejšiemu – svojim deťom.
        </p>
        <HomePageFourPoints />
      </div>{" "}
    </div>
  );
};

export default HomePageHowWeWork;
