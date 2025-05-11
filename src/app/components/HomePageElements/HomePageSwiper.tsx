import React from "react";
import Image from "next/image";
import ButtonMui from "../ButtonMui";

const HomePageSwiper = () => {
  return (
    <div className="w-full bg-[#F1F1F1] h-[700px] md:min-h-[90vh] flex">
      <div className="main_section m-auto justify-center items-center flex flex-col md:flex-row w-full gap-8 xl:gap-16 ">
        <div className="flex flex-col md:w-[60%]">
          <p>Novinka 1</p>
          <h2 className="font-extrabold max-w-[700px]">
            Master Wire is powerful tool for your project
          </h2>
          <p className="max-w-[700px] pt-4 mb-4">
            Accelerate your wireframing workflow using pre-build components or
            combine your own.
          </p>
          <ButtonMui color={"#ADCA2A"} text={"Pozrieť"} link={"/"} />
        </div>{" "}
        <Image
          src={`/intro_photo.png`}
          width={800}
          height={800}
          className="w-full md:w-[40%]  object-cover rounded-[8px]"
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default HomePageSwiper;
