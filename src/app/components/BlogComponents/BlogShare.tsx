"use client";
import IconFacebookBlog from "@/app/icons/IconFacebookBlog";
import React from "react";

const BlogShare = () => {
  const handleShareClick = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      `${window.location.href}`
    )}`;
    window.open(facebookShareUrl, "Facebook Share", "width=600,height=400");
  };
  return (
    <div
      className="flex flex-row items-center gap-4 cursor-pointer"
      onClick={() => handleShareClick()}
    >
      <p>Zdieľať:</p>
      <IconFacebookBlog />
    </div>
  );
};

export default BlogShare;
