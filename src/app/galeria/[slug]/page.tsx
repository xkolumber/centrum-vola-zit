import GalleryPageSlug from "@/app/components/GalleryElements/GalleryPageSlug";
import {
  aws_bucket_url,
  cloudfront_url,
} from "@/app/functions/functionsClient";
import { fetchGallerySlug } from "@/app/functions/functionsServer";
import { GalleryInterface } from "@/app/lib/interface";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data_blog = (await fetchGallerySlug(params.slug)) as GalleryInterface;
  if (data_blog) {
    return {
      title: data_blog.nazov,
      description:
        "Nahliadnite do našej práce cez fotografie z terapií, stretnutí a radostných momentov našich detí.",
      openGraph: {
        title: data_blog.nazov,
        description:
          "Nahliadnite do našej práce cez fotografie z terapií, stretnutí a radostných momentov našich detí.",
        images: [
          {
            url: data_blog.fotky[0].replace(aws_bucket_url, cloudfront_url),
            alt: "Centrum vôľa žiť",
            width: 1200,
            height: 630,
          },
        ],
      },
    };
  }
  return {
    title: "Error",
    description: "An error occurred while fetching the blog data.",
    openGraph: {
      title: "Error",
      description: "An error occurred while fetching the blog data.",
      images: [
        {
          url: "error-image-url",
          alt: "Error image",
        },
      ],
    },
  };
}

const Page = ({ params }: { params: { slug: string } }) => {
  return <GalleryPageSlug slug={params.slug} />;
};

export default Page;
