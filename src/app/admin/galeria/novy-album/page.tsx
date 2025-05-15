"use client";

import { useQueryClient } from "@tanstack/react-query";

import {
  aws_bucket_url,
  BLUR_DATA_URL_GRAY,
  cloudfront_url,
  CompressImage,
} from "@/app/functions/functionsClient";
import {
  AdminAddPhotoGallery,
  uploadFileToS3,
} from "@/app/functions/functionsServer";
import { GalleryInterface } from "@/app/lib/interface";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const Page = () => {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [actualizeGallery, setActualizeGallery] = useState<GalleryInterface>({
    datum_pridania: "",
    fotky: [],
    nazov: "",
    id: "",
    partition_key: "all",
    slug: "",
  });

  const [dataLoading, setDataLoading] = useState(false);

  const handleAddGallery = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await AdminAddPhotoGallery(actualizeGallery);
      if (response === 200) {
        await queryClient.refetchQueries({
          queryKey: ["admin_gallery"],
        });
        toast.success("Album bol pridaný");
        setActualizeGallery((prevData) => ({
          ...prevData,
          fotky: [],
          kategorie: [],
          profil: "",
          nazov: "",
        }));

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        router.push("/admin/galeria");
      } else {
        toast.error("Niekde nastala chyba");
      }
    } catch (error) {
      console.error("Error adding photo:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeMain = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setActualizeGallery((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      return updatedData;
    });
  };

  const handleUploadPhotos = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);

    const validFiles = fileArray.filter((file) =>
      file.type.startsWith("image/")
    );

    if (validFiles.length === 0) {
      toast.error("Iba obrázky sú povolené");
      return;
    }

    setDataLoading(true);

    const compressedFiles = [];
    for (const file of validFiles) {
      const compressedFile = await CompressImage(file);
      if (compressedFile) {
        const newFile = new File([compressedFile], file.name, {
          type: compressedFile.type,
          lastModified: file.lastModified,
        });
        compressedFiles.push(newFile);
      }
    }

    try {
      const uploadedUrls = await Promise.all(
        compressedFiles.map(async (compressedFile) => {
          const formData = new FormData();

          const fileName = compressedFile.name.replace(/\s+/g, "_");
          console.log(fileName);

          formData.append("file", compressedFile);

          const url = await uploadFileToS3(formData);

          return url;
        })
      );

      setActualizeGallery((prevData) => {
        const updatedPhotos = [...prevData.fotky, ...uploadedUrls];
        return { ...prevData, fotky: updatedPhotos };
      });
    } catch (error) {
      console.error("Error uploading photos:", error);
      alert("Failed to upload one or more photos. Please try again.");
    } finally {
      setDataLoading(false);
      e.target.value = "";
    }
  };

  const handleDeleteImageFromAlbum = async (urlToDelete: string) => {
    setActualizeGallery((prevData) => {
      const updatedPhotos = prevData.fotky.filter(
        (photo) => photo !== urlToDelete
      );
      return { ...prevData, fotky: updatedPhotos };
    });
  };

  return (
    <div className="">
      <Toaster />
      <Link href={"/admin/galeria"}>
        <p className="hover:underline ease-in text-black">Späť</p>
      </Link>
      <form onSubmit={handleAddGallery}>
        <h3>Pridanie nového albumu</h3>

        <div className="flex flex-row justify-between items-center gap-4 mt-8">
          <h6>Názov galérie:</h6>
          <input
            type="text"
            name="nazov"
            value={actualizeGallery.nazov}
            onChange={handleChangeMain}
            className="w-full border border-solid border-black h-[5rem] mt-4"
            required
          />
        </div>

        <h6 className="text-primary pt-8">Pridajte fotky:</h6>
        <div className="flex flex-wrap gap-4 mt-4">
          {actualizeGallery.fotky.map((foto: string, index_foto: number) => (
            <div
              className="flex flex-col justify-center items-center"
              key={index_foto}
            >
              <Image
                src={foto.replace(aws_bucket_url, cloudfront_url)}
                width={500}
                height={500}
                priority
                alt="logo"
                className="w-[200px] h-[200px] pt-2 pb-2 md:pb-0 cursor-pointer object-cover"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL_GRAY}
              />

              <button
                className="btn btn--primary"
                onClick={() => handleDeleteImageFromAlbum(foto)}
              >
                Odstrániť
              </button>
            </div>
          ))}
        </div>
        <p className="text-primary"></p>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleUploadPhotos(e)}
          className="mt-6"
          multiple
        />

        <button
          className={`btn btn--primary ${isLoading && "disabledBtn"}`}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <ClipLoader
              size={20}
              color={"#32a8a0"}
              loading={true}
              className="mr-8 ml-8"
            />
          ) : (
            "Pridať galériu"
          )}
        </button>
      </form>

      {dataLoading && (
        <>
          {" "}
          <div className="behind_card_background"></div>
          <div className="popup_message">
            <h5 className="text-center">Objekty sa nahrávajú do cloudu...</h5>
            <ClipLoader
              size={20}
              color={"#00000"}
              loading={true}
              className="ml-16 mr-16"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
