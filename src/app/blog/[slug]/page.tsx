import BlogPageSlug from "@/app/components/BlogComponents/BlogPageSlug";
import {
  aws_bucket_url,
  cloudfront_url,
  stripHtmlTags,
} from "@/app/functions/functionsClient";
import { fetchBlogSlug } from "@/app/functions/functionsServer";
import { BlogInterface } from "@/app/lib/interface";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data_blog = (await fetchBlogSlug(params.slug)) as BlogInterface;
  if (data_blog) {
    return {
      title: data_blog.title,
      description: stripHtmlTags(data_blog.text1),
      openGraph: {
        title: data_blog.title,
        description: stripHtmlTags(data_blog.text1),
        images: [
          {
            url: data_blog.title_photo.replace(aws_bucket_url, cloudfront_url),
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
  return <BlogPageSlug slug={params.slug} />;
};

export default Page;
