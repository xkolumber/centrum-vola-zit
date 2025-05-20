"use client";
import IconArrowRight from "@/app/icons/IconArrowRight";
import { HowWeWork } from "@/app/lib/interface";
import Link from "next/link";
import React, { useState } from "react";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "../NextImage";

interface Props {
  data: HowWeWork;
}

const photos_room = ["/intro_photo.png", "/intro_photo.png"];

const HomePageOnePoint = ({ data }: Props) => {
  const [open, setOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  const [choosenAlbum, setChoosenAlbum] = useState<SlideImage[]>([]);

  const handleOpenGallery = () => {
    if (data) {
      const transformedAlbum = photos_room.map((url) => ({
        src: url,
      }));
      setChoosenAlbum(transformedAlbum);
      setOpen(true);
      setInitialSlide(0);
    }
  };

  const [hoverButton, setHoverButton] = useState(false);
  return (
    <>
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
          {data.id != "02" ? (
            <Link
              onMouseEnter={() => setHoverButton(true)}
              onMouseLeave={() => setHoverButton(false)}
              href={data.link}
            >
              <IconArrowRight ishovered={hoverButton} color="#000000" />
            </Link>
          ) : (
            <div
              onMouseEnter={() => setHoverButton(true)}
              onMouseLeave={() => setHoverButton(false)}
              className="cursor-pointer"
              onClick={() => handleOpenGallery()}
            >
              <IconArrowRight ishovered={hoverButton} color="#000000" />
            </div>
          )}
        </div>
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={choosenAlbum}
          render={{ slide: NextJsImage }}
          index={initialSlide}
        />
      )}
    </>
  );
};

export default HomePageOnePoint;
