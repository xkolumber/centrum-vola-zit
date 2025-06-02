"use client";

import React, { useState } from "react";
import IconArrowRight from "../icons/IconArrowRight";
import Link from "next/link";

interface Props {
  title: string;
  link: string;
}

const TextWithArrow = ({ title, link }: Props) => {
  const [hoverButton, setHoverButton] = useState(false);

  return (
    <Link
      className={`flex flex-row gap-6 items-center cursor-pointer rounded-[16px] absolute bottom-12 md:bottom-16 left-12 md:left-16 z-10
   ${link === "zdravotnicke-pomocky" && "md:max-w-min 2xl:max-w-none"}

      `}
      onMouseEnter={() => setHoverButton(true)}
      onMouseLeave={() => setHoverButton(false)}
      href={link}
    >
      <h5 className=" font-semibold text-white ">{title}</h5>
      <div className="">
        <IconArrowRight ishovered={hoverButton} />
      </div>
    </Link>
  );
};

export default TextWithArrow;
