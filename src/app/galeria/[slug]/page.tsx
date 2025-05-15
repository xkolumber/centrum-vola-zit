import GalleryPageSlug from "@/app/components/GalleryElements/GalleryPageSlug";
import React from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  return <GalleryPageSlug slug={params.slug} />;
};

export default Page;
