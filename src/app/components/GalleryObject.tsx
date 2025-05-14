import React from "react";
import { GalleryPhotoInterface } from "../lib/interface";
import Image from "next/image";
interface Props {
  data: GalleryPhotoInterface;
}

const GalleryObject = ({ data }: Props) => {
  return (
    <div className="flex flex-col hover:scale-[1.02] duration-200 cursor-pointer">
      <Image
        src="/intro_photo.png"
        alt="Left"
        width={600}
        height={600}
        className="w-full h-[400px] object-cover rounded-[8px]"
      />
      <h6 className="font-extrabold mt-4">{data.title}</h6>
      <p className="text-[#757575]">{data.date}</p>
    </div>
  );
};

export default GalleryObject;
