"use client";

import Tiptap from "@/app/components/TipTapEditor/TipTap";
import {
  aws_bucket_url,
  BLUR_DATA_URL_GRAY,
  cloudfront_url,
  CompressImage,
} from "@/app/functions/functionsClient";
import {
  AdminAddActuality,
  uploadFileToS3,
} from "@/app/functions/functionsServer";
import { ActualityInterface, IsLoadingMap } from "@/app/lib/interface";
import { useQueryClient } from "@tanstack/react-query";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const Page = () => {
  const queryClient = useQueryClient();

  const [actualizeData, setActualizeData] = useState<ActualityInterface>({
    author: "",
    id: "",
    title: "",
    date: "",
    slug: "",
    title_photo: "",
    partition_key: "all",
    text1: "",
    text2: "",
    text3: "",
    photo1: "",
    photo2: "",
    photo3: "",
    another_photos: [],
  });
  const [isLoadingMap, setIsLoadingMap] = useState<IsLoadingMap>({});

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [dataLoading, setDataLoading] = useState(false);

  const router = useRouter();

  const handleSaveData = async (e: any) => {
    e.preventDefault();
    setIsLoadingMap((prevState) => ({
      ...prevState,
      [`actualize_album`]: true,
    }));

    try {
      const response = await AdminAddActuality(actualizeData);
      if (response === 200) {
        await queryClient.refetchQueries({
          queryKey: ["admin_actuality"],
        });
        toast.success("Objekt bol aktualizovaný");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        router.push("/admin/aktuality");
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
    setActualizeData((prevData) => {
      const updatedPhotos = prevData.another_photos.filter(
        (photo) => photo !== urlToDelete
      );
      return { ...prevData, another_photos: updatedPhotos };
    });
  };

  const handleChangeMain = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setActualizeData((prevData) => {
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

      setActualizeData((prevData) => {
        const updatedPhotos = [...prevData.another_photos, ...uploadedUrls];
        return { ...prevData, another_photos: updatedPhotos };
      });
    } catch (error) {
      console.error("Error uploading photos:", error);
      alert("Failed to upload one or more photos. Please try again.");
    } finally {
      setDataLoading(false);
      e.target.value = "";
    }
  };

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    title: string
  ) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.error("No file selected");
      return;
    }

    setDataLoading(true);

    const file = e.target.files[0];

    const compressed = await CompressImage(file);
    const fileToUpload = compressed
      ? new File([compressed], file.name, {
          type: compressed.type,
          lastModified: file.lastModified,
        })
      : file;

    const formData = new FormData();
    formData.append("file", fileToUpload);

    const url = await uploadFileToS3(formData);

    setActualizeData((prevData) => ({
      ...prevData,
      [title]: url,
    }));

    e.target.value = "";
    setDataLoading(false);
  };

  const handleTextChange = (field: string, value: string) => {
    setActualizeData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div>
      <div className="products_admin">
        <Toaster />
        <Link href={"/admin/aktuality"}>
          <p className="hover:underline ease-in text-black">Späť</p>
        </Link>

        <form onSubmit={handleSaveData}>
          <h5 className="text-center">Nová aktualita</h5>
          <div className="flex flex-row justify-between items-center gap-4 mt-8">
            <h6>Názov aktuality:</h6>
            <input
              type="text"
              name="title"
              value={actualizeData.title}
              onChange={handleChangeMain}
              className="w-full border border-solid border-black h-[5rem] mt-4"
              required
            />
          </div>
          <div className="flex flex-row justify-between items-center gap-4 mt-8">
            <h6>Meno autora:</h6>
            <input
              type="text"
              name="author"
              value={actualizeData.author}
              onChange={handleChangeMain}
              className="w-full border border-solid border-black h-[5rem] mt-4"
              required
            />
          </div>

          <div className="product_admin_row">
            <h6>Titulná foto:</h6>
            <div className="flex flex-col w-[75%]">
              {actualizeData.title_photo && (
                <Image
                  alt="image"
                  width={120}
                  height={120}
                  src={actualizeData.title_photo.replace(
                    aws_bucket_url,
                    cloudfront_url
                  )}
                  className="mt-4 mb-4 cursor-pointer"
                />
              )}

              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "title_photo")}
                required={actualizeData.title_photo === ""}
              />
            </div>
          </div>

          <div className="product_admin_row !flex-col">
            <h6>Text1:</h6>
            <Tiptap
              content={actualizeData.text1}
              onChange={(value) => handleTextChange("text1", value)}
            />
          </div>

          <div className="product_admin_row">
            <h6>Foto1 :</h6>
            <div className="flex flex-col w-[75%]">
              {actualizeData.photo1 && (
                <Image
                  alt="image"
                  width={120}
                  height={120}
                  src={actualizeData.photo1.replace(
                    aws_bucket_url,
                    cloudfront_url
                  )}
                  className="mt-4 mb-4 cursor-pointer"
                />
              )}

              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "photo1")}
              />
            </div>
          </div>

          <div className="product_admin_row !flex-col">
            <h6>Text2:</h6>
            <Tiptap
              content={actualizeData.text2}
              onChange={(value) => handleTextChange("text2", value)}
            />
          </div>

          <div className="product_admin_row">
            <h6>Foto2 :</h6>
            <div className="flex flex-col w-[75%]">
              {actualizeData.photo2 && (
                <Image
                  alt="image"
                  width={120}
                  height={120}
                  src={actualizeData.photo2.replace(
                    aws_bucket_url,
                    cloudfront_url
                  )}
                  className="mt-4 mb-4 cursor-pointer"
                />
              )}

              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "photo2")}
              />
            </div>
          </div>

          <div className="product_admin_row !flex-col">
            <h6>Text3:</h6>
            <Tiptap
              content={actualizeData.text3}
              onChange={(value) => handleTextChange("text3", value)}
            />
          </div>

          <div className="product_admin_row">
            <h6>Foto3 :</h6>
            <div className="flex flex-col w-[75%]">
              {actualizeData.photo3 && (
                <Image
                  alt="image"
                  width={120}
                  height={120}
                  src={actualizeData.photo3.replace(
                    aws_bucket_url,
                    cloudfront_url
                  )}
                  className="mt-4 mb-4 cursor-pointer"
                />
              )}

              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "photo3")}
              />
            </div>
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
            {actualizeData.another_photos.map((foto, index_foto) => (
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
    </div>
  );
};

export default Page;
