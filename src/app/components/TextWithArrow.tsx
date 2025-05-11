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
      className={`flex flex-row gap-6 items-center cursor-pointer rounded-[16px] absolute bottom-16 left-16
   

      `}
      onMouseEnter={() => setHoverButton(true)}
      onMouseLeave={() => setHoverButton(false)}
      href={link}
    >
      <h5 className=" font-semibold text-white ">{title}</h5>
      <IconArrowRight ishovered={hoverButton} />
    </Link>
  );
};

export default TextWithArrow;
