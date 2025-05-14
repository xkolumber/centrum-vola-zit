import { ThreeElementInterface } from "@/app/lib/interface";
import React from "react";

interface Props {
  data: ThreeElementInterface;
}

const HomePageOneElement = ({ data }: Props) => {
  return (
    <div className="flex flex-row gap-10">
      <div className="">
        {" "}
        <div
          className="circle"
          style={{
            backgroundColor: data.color,
          }}
        ></div>
      </div>

      <div className="flex flex-col">
        <h6 className="font-extrabold">{data.title}</h6>
        <p className="text-[12px] lg:text-[14px] 2xl:text-[16px]">
          {data.text}
        </p>
      </div>
    </div>
  );
};

export default HomePageOneElement;
