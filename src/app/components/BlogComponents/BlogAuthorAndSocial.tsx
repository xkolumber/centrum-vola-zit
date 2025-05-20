import { ActualityInterface } from "@/app/lib/interface";
import React from "react";
import BlogCopy from "./BlogCopy";
import BlogShare from "./BlogShare";

interface Props {
  data: ActualityInterface;
  bottom: boolean;
}

const BlogAuthorAndSocial = ({ data, bottom }: Props) => {
  function getFormatedDate(data: string) {
    const date = new Date(data);
    const day = date.getDate().toString().padStart(2, "0");
    const monthNumber = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    const formattedDate = ` ${day}.${monthNumber}.${year}`;

    return formattedDate;
  }
  return (
    <div
      className={`flex flex-col md:flex-row justify-between mb-4 md:mb-8 xl:mb-12 gap-4 ${
        bottom
          ? "border-t border-primary pt-4 mt-12 md:!mt-24 2xl:mb-[10rem]"
          : "mt-16 "
      }`}
    >
      <div className="flex flex-row gap-8 justify-between md:justify-start dark">
        <p> {getFormatedDate(data.date)}</p>
        <p> {data.author}</p>
      </div>
      <div className="flex flex-row gap-8 items-center justify-between">
        <BlogCopy />
        <BlogShare />
      </div>
    </div>
  );
};

export default BlogAuthorAndSocial;
