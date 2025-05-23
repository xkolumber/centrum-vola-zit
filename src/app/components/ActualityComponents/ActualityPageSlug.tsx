"use client";
import {
  aws_bucket_url,
  cloudfront_url,
} from "@/app/functions/functionsClient";
import { fetchActualitySlug } from "@/app/functions/functionsServer";
import { ActualityInterface } from "@/app/lib/interface";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { ClipLoader } from "react-spinners";

import { useState } from "react";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import BlogAuthorAndSocial from "../BlogComponents/BlogAuthorAndSocial";
import ButtonMui from "../ButtonMui";
import NextJsImage from "../NextImage";
import StepBack from "../StepBack";

interface Props {
  slug: string;
}

const ActualityPageSlug = ({ slug }: Props) => {
  const [open, setOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  const [choosenAlbum, setChoosenAlbum] = useState<SlideImage[]>([]);

  const { data, error, isLoading } = useQuery<ActualityInterface>({
    queryKey: ["actuality", slug],
    queryFn: async () => await fetchActualitySlug(slug),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  const handleOpenGallery = (index: number) => {
    if (data) {
      const transformedAlbum = data?.another_photos.map((url) => ({
        src: url.replace(aws_bucket_url, cloudfront_url),
      }));
      setChoosenAlbum(transformedAlbum);
      setOpen(true);
      setInitialSlide(index);
    }
  };

  const handleOpenGalleryTitlePhoto = () => {
    if (data) {
      const transformedAlbum = [
        {
          src: data.title_photo.replace(aws_bucket_url, cloudfront_url),
        },
        ...data.another_photos.map((url) => ({
          src: url.replace(aws_bucket_url, cloudfront_url),
        })),
      ];

      setChoosenAlbum(transformedAlbum);
      setOpen(true);
    }
  };

  return (
    <>
      {data && (
        <>
          <div className="m-auto main_section additional_padding !pb-0 ">
            <StepBack />
            <h2 className=" mb-4 md:mb-8 text-center font-extrabold">
              {data.title}
            </h2>
            {data.text1 && (
              <div
                className="w-full dark mt-8 "
                dangerouslySetInnerHTML={{
                  __html: data?.text1,
                }}
              />
            )}
            <BlogAuthorAndSocial data={data} bottom={false} />
            <Image
              src={data.title_photo.replace(aws_bucket_url, cloudfront_url)}
              width={1920}
              height={1080}
              priority
              className="w-full h-full  object-cover rounded-[50px] mt-8 md:mt-0 cursor-pointer"
              alt="Blog foto"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEklEQVR4nGP48OHDf2TMQLoAABc0PPGQ/86sAAAAAElFTkSuQmCC"
              onClick={() => handleOpenGalleryTitlePhoto()}
            />
          </div>

          <div className="flex justify-center items-center p-[1.6rem] mt-8 2xl:mt-16 relative overflow-hidden">
            <div className="md:max-w-[70%] 2xl:max-w-[50%]">
              {data.text2 && (
                <div
                  className="w-full dark mt-8 "
                  dangerouslySetInnerHTML={{
                    __html: data?.text2,
                  }}
                />
              )}

              {data.photo1 && (
                <Image
                  src={data.photo1.replace(aws_bucket_url, cloudfront_url)}
                  width={500}
                  height={500}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  className="w-full h-full  object-cover mt-4 md:mt-16 rounded-[50px] "
                  alt="Blog foto"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEklEQVR4nGP48OHDf2TMQLoAABc0PPGQ/86sAAAAAElFTkSuQmCC"
                />
              )}

              {data?.text3 && (
                <div
                  className="w-full dark mt-4 md:mt-16 "
                  dangerouslySetInnerHTML={{
                    __html: data?.text3,
                  }}
                />
              )}

              {data.photo2 && (
                <Image
                  src={data.photo2.replace(aws_bucket_url, cloudfront_url)}
                  width={500}
                  height={500}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  className="w-full h-full  object-cover mt-4 md:mt-16 rounded-[50px] "
                  alt="Blog foto"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEklEQVR4nGP48OHDf2TMQLoAABc0PPGQ/86sAAAAAElFTkSuQmCC"
                />
              )}

              {data.another_photos.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-8 ">
                  {data.another_photos.map((object, index) => (
                    <Image
                      src={object.replace(aws_bucket_url, cloudfront_url)}
                      width={500}
                      height={500}
                      className="w-full h-[200px]  object-cover  rounded-[16px] hover:scale-[1.02] duration-200 cursor-pointer"
                      alt="Blog foto"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEklEQVR4nGP48OHDf2TMQLoAABc0PPGQ/86sAAAAAElFTkSuQmCC"
                      key={index}
                      onClick={() => handleOpenGallery(index)}
                    />
                  ))}
                </div>
              )}

              <BlogAuthorAndSocial data={data} bottom={true} />
            </div>
          </div>
        </>
      )}

      {isLoading && (
        <div className="main_section m-auto min-h-screen">
          <ClipLoader size={20} color={"#000000"} loading={isLoading} />
        </div>
      )}
      {error && (
        <div className="m-auto min-h-screen flex justify-center items-center flex-col">
          <h2 className="font-extrabold">Daný článok neexistuje.</h2>

          <ButtonMui color="#ADCA2A" text="Aktuality" link="/" />
        </div>
      )}

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

export default ActualityPageSlug;
