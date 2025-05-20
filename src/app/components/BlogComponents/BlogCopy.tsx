"use client";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import copy from "copy-to-clipboard";
import IconCopy from "@/app/icons/IconCopy";

const BlogCopy = () => {
  const handleClick = () => {
    toast.success("Odkaz je skopírovaný");
    copy(window.location.href);
  };

  return (
    <div
      className="flex flex-row items-center gap-2 cursor-pointer"
      onClick={() => handleClick()}
    >
      <Toaster />
      <IconCopy />

      <p className="underline text-fifthtiary font-light">Kopírovať odkaz</p>
    </div>
  );
};

export default BlogCopy;
