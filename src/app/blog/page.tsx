import React from "react";
import BlogPage from "../components/BlogComponents/BlogPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Nahliadnite do našej práce cez fotografie z terapií, stretnutí a radostných momentov našich detí.",

  keywords: [
    "centrum vôľa žiť",
    "centrum vola zit",
    "centrum pre deti",
    "zdravotné znevýhodnenie",
    "rehalitácia",
    "pomoc ďeťom",
    "spišská belá",
    "kežmarok",
  ],
  openGraph: {
    title: "Blog",
    description:
      "Nahliadnite do našej práce cez fotografie z terapií, stretnutí a radostných momentov našich detí.",
    images: [
      {
        url: "https://d9xqr11l6v5wz.cloudfront.net/centrum_vola_zit_blog.webp",
        alt: "Centrum vôľa žiť",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const Page = () => {
  return <BlogPage />;
};

export default Page;
