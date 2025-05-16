"use client";
import { fetchActualityLatest } from "@/app/functions/functionsServer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { CircularProgress } from "@mui/material";
import { useInView } from "react-intersection-observer";
import ActualityObject from "./ActualityObject";

const ActualityPage = () => {
  const { ref, inView } = useInView();
  const { data, error, fetchNextPage, isFetchingNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ["aktuality"],
      queryFn: ({ pageParam = undefined }) => fetchActualityLatest(pageParam),
      getNextPageParam: (lastPage) => lastPage.lastEvaluatedKey ?? undefined,
      initialPageParam: undefined,
      initialData: { pages: [], pageParams: [] },
      refetchOnWindowFocus: true,
    });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <div className="main_section  w-full flex flex-col m-auto min-h-screen ">
      <h2 className="font-extrabold ">Aktuality</h2>
      <p className="mt-4 mb-16">
        {" "}
        Pozrite sa, ako vyzerá naša každodenná práca – momenty plné odhodlania,
        pokroku a radosti. Naša galéria zachytáva príbehy detí, ktorým pomáhame,
        aj úsilie odborníkov, ktorí im podávajú pomocnú ruku. Každý úsmev, každý
        malý krôčik vpred je pre nás dôkazom, že naša práca má zmysel.
      </p>
      {isFetching && <CircularProgress size={24} color="inherit" />}
      {data && (
        <div className="flex flex-col gap-16">
          {data.pages
            .flatMap((page) => page.items)
            .map((object, index) => (
              <ActualityObject data={object} key={index} />
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

export default ActualityPage;
