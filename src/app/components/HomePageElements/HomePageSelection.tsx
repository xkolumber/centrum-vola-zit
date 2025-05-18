import React from "react";
import Image from "next/image";
import TextWithArrow from "../TextWithArrow";

const HomePageSelection = () => {
  return (
    <div className="main_section m-auto" id="sluzby">
      <div className="hidden lg:grid grid-cols-2 gap-8 ">
        <div className="h-full relative">
          <Image
            src="/selection/1.png"
            alt="Left"
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-[8px]"
          />
          <TextWithArrow link="/terapie" title="Terapie" />
        </div>

        <div className="grid grid-rows-2 gap-8 h-full">
          <div className="relative">
            <Image
              src="/selection/2.png"
              alt="Top Right"
              width={600}
              height={300}
              className="w-full h-[370px] object-cover rounded-[8px]"
            />

            <TextWithArrow
              link="/doplnkove-terapie"
              title="Doplnkové terapie"
            />
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="relative">
              <Image
                src="/selection/3.png"
                alt="Bottom Left"
                width={300}
                height={300}
                className="w-full h-[370px] object-cover  rounded-[8px]"
              />
              <TextWithArrow link="/masaze" title="Masáže" />
            </div>

            <div className="relative">
              <Image
                src="/selection/4.png"
                alt="Bottom Right"
                width={300}
                height={300}
                className="w-full h-[370px] object-cover  rounded-[8px]"
              />
              <TextWithArrow link="/" title="Pomôcky" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:hidden gap-8 mt-16">
        <div className="h-full relative">
          <Image
            src="/selection/1.png"
            alt="Left"
            width={600}
            height={600}
            className="w-full h-[200px] object-cover rounded-[8px]"
          />
          <TextWithArrow link="/" title="Zdravotnícke pomôcky" />
        </div>

        <div className="relative">
          <Image
            src="/selection/2.png"
            alt="Top Right"
            width={600}
            height={300}
            className="w-full h-[200px] object-cover rounded-[8px]"
          />

          <TextWithArrow link="/" title="Zdravotnícke pomôcky" />
        </div>

        <div className="relative">
          <Image
            src="/selection/3.png"
            alt="Bottom Left"
            width={300}
            height={300}
            className="w-full h-[200px] object-cover  rounded-[8px]"
          />
          <TextWithArrow link="/masaze" title="Masáže" />
        </div>

        <div className="relative">
          <Image
            src="/selection/4.png"
            alt="Bottom Right"
            width={300}
            height={300}
            className="w-full h-[200px] object-cover  rounded-[8px]"
          />
          <TextWithArrow link="/" title="Pomôcky" />
        </div>
      </div>
    </div>
  );
};

export default HomePageSelection;
