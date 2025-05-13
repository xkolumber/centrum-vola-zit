"use client";
import IconArrowRight from "@/app/icons/IconArrowRight";
import { HowWeWork } from "@/app/lib/interface";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  data: HowWeWork;
}

const HomePageOnePoint = ({ data }: Props) => {
  const [hoverButton, setHoverButton] = useState(false);
  return (
    <div className="p-8">
      <h3
        className="font-extrabold"
        style={{
          color: data.color,
        }}
      >
        {data.id}
      </h3>
      <h5 className="font-extrabold mt-8 mb-4">{data.title}</h5>
      <p>{data.text}</p>
      <div className="mt-4">
        <Link
          onMouseEnter={() => setHoverButton(true)}
          onMouseLeave={() => setHoverButton(false)}
          href={data.link}
        >
          <IconArrowRight ishovered={hoverButton} color="#000000" />
        </Link>
      </div>
    </div>
  );
};

export default HomePageOnePoint;
