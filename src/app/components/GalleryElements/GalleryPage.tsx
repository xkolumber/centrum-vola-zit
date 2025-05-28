"use client";
import { fetchGalleriesLatest } from "@/app/functions/functionsServer";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import GalleryObject from "./GalleryObject";
import { useInView } from "react-intersection-observer";
import { CircularProgress } from "@mui/material";
import { STALE_TIME } from "@/app/functions/functionsClient";
import SkeletonGalleryPage from "./SkeletonGalleryPage";

const GalleryPage = () => {
  const { ref, inView } = useInView();

  const { data, error, fetchNextPage, isFetchingNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ["gallery"],
      queryFn: ({ pageParam = undefined }) => fetchGalleriesLatest(pageParam),
      getNextPageParam: (lastPage) => lastPage.lastEvaluatedKey ?? undefined,
      initialPageParam: undefined,
      initialData: { pages: [], pageParams: [] },
      refetchOnWindowFocus: false,
      staleTime: STALE_TIME,
    });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <div className="main_section w-full flex flex-col m-auto min-h-screen  ">
      <h2 className="font-extrabold ">Galéria fotiek</h2>
      <p className="mt-4 mb-16">
        {" "}
        Pozrite sa, ako vyzerá naša každodenná práca – momenty plné odhodlania,
        pokroku a radosti. Naša galéria zachytáva príbehy detí, ktorým pomáhame,
        aj úsilie odborníkov, ktorí im podávajú pomocnú ruku. Každý úsmev, každý
        malý krôčik vpred je pre nás dôkazom, že naša práca má zmysel.
      </p>
      {isFetching && <SkeletonGalleryPage />}
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {data.pages
            .flatMap((page) => page.items)
            .map((object, index) => (
              <GalleryObject data={object} key={index} />
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

export default GalleryPage;
