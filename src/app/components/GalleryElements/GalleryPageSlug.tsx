"use client";

import {
  aws_bucket_url,
  cloudfront_url,
  getFormatDate,
} from "@/app/functions/functionsClient";
import { fetchGallerySlug } from "@/app/functions/functionsServer";
import { GalleryInterface } from "@/app/lib/interface";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Image from "next/image";
import { CircularProgress } from "@mui/material";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import NextJsImage from "../NextImage";
import "yet-another-react-lightbox/styles.css";
import StepBack from "../StepBack";

interface Props {
  slug: string;
}

const GalleryPageSlug = ({ slug }: Props) => {
  const [open, setOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  const [choosenAlbum, setChoosenAlbum] = useState<SlideImage[]>([]);

  const { data, error, isLoading } = useQuery<GalleryInterface | null>({
    queryKey: ["gallery", slug],
    queryFn: async () => await fetchGallerySlug(slug),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  const handleOpenGallery = (index: number) => {
    const transformedAlbum = data!.fotky.map((url) => ({
      src: url.replace(aws_bucket_url, cloudfront_url),
    }));
    setChoosenAlbum(transformedAlbum);
    setOpen(true);
    setInitialSlide(index);
  };

  return (
    <div className="main_section  w-full flex flex-col m-auto min-h-screen ">
      {data && (
        <>
          <StepBack />
          <h2 className="font-extrabold ">{data.nazov}</h2>
          <p>{getFormatDate(data.datum_pridania)}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 w-full">
            {data?.fotky.map((object, index) => (
              <div key={index} className="relative w-full h-[280px]">
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-[16px]"></div>
                <Image
                  src={object.replace(aws_bucket_url, cloudfront_url)}
                  alt={`Gallery item ${index}`}
                  width={600}
                  height={400}
                  className="rounded-[16px] w-full h-full object-cover relative z-10 cursor-pointer hover:scale-[1.02] duration-200"
                  onClick={() => handleOpenGallery(index)}
                />
              </div>
            ))}
          </div>
        </>
      )}
      {isLoading && <CircularProgress size={24} color="inherit" />}
      {(error || data === null) && <p>Chyba pri načítaní dát.</p>}

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={choosenAlbum}
          render={{ slide: NextJsImage }}
          index={initialSlide}
        />
      )}
    </div>
  );
};

export default GalleryPageSlug;
