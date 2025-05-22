"use client";

import {
  aws_bucket_url,
  cloudfront_url,
} from "@/app/functions/functionsClient";
import { fetchBlogsLatest } from "@/app/functions/functionsServer";
import { CircularProgress } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const BlogPage = () => {
  const { ref, inView } = useInView();

  const { data, error, isFetching, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["blog"],
      queryFn: ({ pageParam = undefined }) => fetchBlogsLatest(pageParam),
      getNextPageParam: (lastPage) => lastPage.lastEvaluatedKey ?? undefined,
      initialPageParam: undefined,
      initialData: { pages: [], pageParams: [] },
      refetchOnWindowFocus: false,
    });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
  return (
    <div className="main_section justify-center w-full flex flex-col m-auto  ">
      <h2 className="font-extrabold ">Blog</h2>
      <p className="mt-4 mb-16">
        {" "}
        V našom blogu nájdete zaujímavé články, príbehy detí, rady od odborníkov
        a novinky zo života nášho občianskeho združenia. Snažíme sa prinášať
        inšpiráciu, informácie aj povzbudenie pre rodičov, opatrovateľov a
        všetkých, ktorým záleží na deťoch so znevýhodnením.
      </p>

      {isFetching && <CircularProgress size={24} color="inherit" />}
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {data.pages
            .flatMap((page) => page.items)
            .filter((object) => object.viditelnost)
            .map((object, index) => (
              <Link
                className="hover:scale-[1.02] duration-200"
                href={`/blog/${object.slug}`}
                key={index}
              >
                <Image
                  src={object.title_photo.replace(
                    aws_bucket_url,
                    cloudfront_url
                  )}
                  alt="logo"
                  width={600}
                  height={600}
                  priority
                  className=" w-full h-[300px] rounded-[8px] object-cover"
                />
                <h6 className="font-extrabold pt-4">{object.title}</h6>
                <div
                  className="w-full dark line-clamp-2 pt-1"
                  dangerouslySetInnerHTML={{
                    __html: object?.text1,
                  }}
                />
              </Link>
            ))}
        </div>
      )}
      {error && <p>Chyba pri načítaní dát.</p>}

      <div className="mt-8" ref={ref}>
        {isFetchingNextPage && (
          <CircularProgress size={24} color="inherit" className="" />
        )}
      </div>
    </div>
  );
};

export default BlogPage;
