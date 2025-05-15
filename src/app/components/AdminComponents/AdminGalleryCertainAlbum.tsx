"use client";

import {
  aws_bucket_url,
  BLUR_DATA_URL_GRAY,
  cloudfront_url,
  CompressImage,
} from "@/app/functions/functionsClient";
import {
  AdminActualizeAlbumGallery,
  fetchGalleryId,
  uploadFileToS3,
} from "@/app/functions/functionsServer";
import { GalleryInterface, IsLoadingMap } from "@/app/lib/interface";
import { CircularProgress } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

interface Props {
  id: string;
}

const AdminGalleryCertainAlbum = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery<GalleryInterface>({
    queryKey: ["admin_gallery", id],
    queryFn: () => fetchGalleryId(id),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    placeholderData: (previousData) => previousData,
  });

  const [actualizeGallery, setActualizeGallery] = useState<GalleryInterface>({
    datum_pridania: "",
    fotky: [],
    nazov: "",
    id: "",
    partition_key: "all",
  });
  const [isLoadingMap, setIsLoadingMap] = useState<IsLoadingMap>({});

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [dataLoading, setDataLoading] = useState(false);

  const handleEditAlbumFirebase = async () => {
    setIsLoadingMap((prevState) => ({
      ...prevState,
      [`actualize_album`]: true,
    }));

    try {
      const response = await AdminActualizeAlbumGallery(actualizeGallery);
      if (response === 200) {
        await queryClient.refetchQueries({
          queryKey: ["admin_gallery", id],
        });
        toast.success("Album bol aktualizovaný");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        toast.error("Niekde nastala chyba");
      }
    } catch (error) {
      console.error("Error adding photo:", error);
    } finally {
      setIsLoadingMap((prevState) => ({
        ...prevState,
        [`actualize_album`]: false,
      }));
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

  useEffect(() => {
    if (data) {
      setActualizeGallery((prevData) => ({
        ...prevData,
        fotky: data.fotky ? data.fotky : [],
        nazov: data.nazov ? data.nazov : "",
        id: data.id,
        partition_key: "all",
      }));
    }
  }, [data]);

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

  return (
    <div>
      <div className="products_admin">
        <Toaster />
        <Link href={"/admin/galeria"}>
          <p className="hover:underline ease-in text-black">Späť</p>
        </Link>

        {isLoading && (
          <CircularProgress size={24} color="inherit" className="mt-16 mb-16" />
        )}
        {error && <p>Chyba pri načítaní dát.</p>}

        {data && (
          <>
            <h5 className="text-center">Úprava albumu - {data?.nazov}</h5>
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
            <div className="flex flex-row items-center pt-8 gap-6 mb-16">
              {" "}
              <h6 className="text-primary ">Pridajte fotky:</h6>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleUploadPhotos(e)}
                className="mt-6"
                multiple
              />
            </div>
            <div className="flex flex-wrap gap-16 mt-4">
              {actualizeGallery.fotky.map((foto, index_foto) => (
                <div className="flex flex-col" key={index_foto}>
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
                    className="btn btn--primary !max-w-none"
                    onClick={() => handleDeleteImageFromAlbum(foto)}
                    disabled={isLoadingMap[`delete_photo-${index_foto}`]}
                  >
                    {isLoadingMap[`delete_photo-${index_foto}`] ? (
                      <ClipLoader size={20} color={"#32a8a0"} loading={true} />
                    ) : (
                      "Odstrániť"
                    )}
                  </button>
                </div>
              ))}
            </div>

            <button
              className={`btn btn--primary ${
                isLoadingMap["actualize_album"] && "disabledBtn"
              } `}
              onClick={() => handleEditAlbumFirebase()}
              disabled={isLoadingMap[`actualize_album`]}
            >
              {isLoadingMap[`actualize_album`] ? (
                <ClipLoader
                  size={20}
                  color={"#32a8a0"}
                  loading={true}
                  className="mr-16 ml-16"
                />
              ) : (
                "Aktualizovať"
              )}
            </button>
          </>
        )}

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
    </div>
  );
};

export default AdminGalleryCertainAlbum;
