"use client";

import {
  aws_bucket_url,
  cloudfront_url,
  CompressImage,
} from "@/app/functions/functionsClient";
import {
  AdminAddPartner,
  uploadFileToS3,
} from "@/app/functions/functionsServer";
import { CooperationInterface, IsLoadingMap } from "@/app/lib/interface";
import { useQueryClient } from "@tanstack/react-query";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const Page = () => {
  const queryClient = useQueryClient();

  const [actualizeData, setActualizeData] = useState<CooperationInterface>({
    id: "",
    link: "",
    logo: "",
    title: "",
    partition_key: "all",
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
      const response = await AdminAddPartner(actualizeData);
      if (response === 200) {
        await queryClient.refetchQueries({
          queryKey: ["admin_spolupracujeme"],
        });
        toast.success("Objekt bol aktualizovaný");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        router.push("/admin/spolupracujeme");
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

  return (
    <div>
      <div className="products_admin">
        <Toaster />
        <Link href={"/admin/spolupracujeme"}>
          <p className="hover:underline ease-in text-black">Späť</p>
        </Link>

        <form onSubmit={handleSaveData}>
          <h5 className="text-center">Nový partner:</h5>
          <div className="flex flex-row justify-between items-center gap-4 mt-8">
            <h6>Názov partnera:</h6>
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
            <h6>Link webu:</h6>
            <input
              type="text"
              name="link"
              value={actualizeData.link}
              onChange={handleChangeMain}
              className="w-full border border-solid border-black h-[5rem] mt-4"
              required
            />
          </div>

          <div className="product_admin_row">
            <h6>Logo:</h6>
            <div className="flex flex-col w-[75%]">
              {actualizeData.logo && (
                <Image
                  alt="image"
                  width={120}
                  height={120}
                  src={actualizeData.logo.replace(
                    aws_bucket_url,
                    cloudfront_url
                  )}
                  className="mt-4 mb-4 cursor-pointer"
                />
              )}

              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "logo")}
                required={actualizeData.logo === ""}
              />
            </div>
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
