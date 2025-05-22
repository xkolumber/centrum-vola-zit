"use client";
import IconArrowRight from "@/app/icons/IconArrowRight";
import { HowWeWork } from "@/app/lib/interface";
import Link from "next/link";
import React, { useState } from "react";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "../NextImage";
import {
  aws_bucket_url,
  cloudfront_url,
} from "@/app/functions/functionsClient";

interface Props {
  data: HowWeWork;
}

export const photos_room = [
  "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/priestory/1.jpg",
  "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/priestory/2.jpg",
  "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/priestory/3.jpg",
  "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/priestory/4.jpg",
  "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/priestory/5.jpg",
  "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/priestory/6.jpg",
  "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/priestory/7.jpg",
  "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/priestory/8.jpg",
  "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/priestory/9.jpg",
  "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/priestory/10.jpg",
  "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/priestory/11.jpg",
  "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/priestory/12.jpg",
  "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/priestory/13.jpg",
  "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/priestory/14.jpg",
  "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/priestory/15.jpg",
  "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/priestory/16.jpg",
  "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/priestory/17.jpg",
];

const HomePageOnePoint = ({ data }: Props) => {
  const [open, setOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  const [choosenAlbum, setChoosenAlbum] = useState<SlideImage[]>([]);

  const handleOpenGallery = () => {
    if (data) {
      const transformedAlbum = photos_room.map((url) => ({
        src: url.replace(aws_bucket_url, cloudfront_url),
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
