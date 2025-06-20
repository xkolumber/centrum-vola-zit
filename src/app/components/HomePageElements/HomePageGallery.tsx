"use client";

import { fetchGalleriesLatest } from "@/app/functions/functionsServer";
import { CircularProgress } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import Link from "next/link";
import GalleryObject from "../GalleryElements/GalleryObject";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const HomePageGallery = () => {
  const { ref, inView } = useInView();
  const { data, error, isFetching, refetch, isFetched } = useInfiniteQuery({
    queryKey: ["gallery"],
    queryFn: ({ pageParam = undefined }) => fetchGalleriesLatest(pageParam),
    getNextPageParam: (lastPage) => lastPage.lastEvaluatedKey ?? undefined,
    initialPageParam: undefined,
    initialData: { pages: [], pageParams: [] },
    refetchOnWindowFocus: false,
    enabled: false,
  });

  useEffect(() => {
    if (inView && !isFetched) {
      refetch();
    }
  }, [inView, refetch, isFetched]);

  return (
    <div className="w-full  flex justify-center pt-8  " ref={ref}>
      <div className="main_section justify-center w-full flex flex-col  ">
        <div className="flex flex-col w-full ">
          <p>Spomienky</p>
          <Link href={"/galeria"}>
            <h2 className="font-extrabold">Galéria fotiek</h2>
          </Link>
          <p className=" pt-4 mb-8 2xl:mb-16 ">
            Pozrite sa, ako vyzerá naša každodenná práca – momenty plné
            odhodlania, pokroku a radosti. Naša galéria zachytáva príbehy detí,
            ktorým pomáhame, aj úsilie odborníkov, ktorí im podávajú pomocnú
            ruku. Každý úsmev, každý malý krôčik vpred je pre nás dôkazom, že
            naša práca má zmysel.
          </p>
        </div>{" "}
        {isFetching && <CircularProgress size={24} color="inherit" />}
        {error && <p>Chyba pri načítaní dát.</p>}
        {data && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
            {data.pages
              .flatMap((page) => page.items)
              .slice(0, 3)
              .map((object, index) => (
                <GalleryObject data={object} key={index} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePageGallery;
