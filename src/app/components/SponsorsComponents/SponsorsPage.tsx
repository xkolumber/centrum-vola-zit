"use client";
import { useInfiniteQuery } from "@tanstack/react-query";

import {
  STALE_TIME,
  aws_bucket_url,
  cloudfront_url,
} from "@/app/functions/functionsClient";
import { fetchSponsorsLatest } from "@/app/functions/functionsServer";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SkeletonSponsorsPage from "./SkeletonSponsorsPage";

const SponsorsPage = () => {
  const { ref, inView } = useInView();

  const { data, error, fetchNextPage, isFetchingNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ["sponzori"],
      queryFn: ({ pageParam = undefined }) => fetchSponsorsLatest(pageParam),
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
    <div className="main_section m-auto  flex flex-col w-full  min-h-screen ">
      <h2 className="font-extrabold">Sponzori</h2>

      <p className="pt-4">
        Bez Vás by to nešlo. Vďaka podpore našich partnerov môžeme každý deň
        pomáhať deťom, ktoré to najviac potrebujú. Vaša pomoc nám umožňuje
        zabezpečiť odborné terapie, kvalitné pomôcky a bezpečné priestory, v
        ktorých deti nachádzajú oporu a nové možnosti.
      </p>
      <p className="pt-4">
        Spoločne meníme svet detí k lepšiemu. Ďakujeme, že ste súčasťou tejto
        cesty. 💙
      </p>

      {isFetching && data === null && <SkeletonSponsorsPage />}
      {error && <p className="mt-8">Chyba pri načítaní dát.</p>}

      {data && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          {data.pages
            .flatMap((page) => page.items)
            .map((object, index) => (
              <Link
                href={object.link}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <Image
                  src={object.logo.replace(aws_bucket_url, cloudfront_url)}
                  alt={`Logo ${object.title}`}
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-[250px] lg:h-[300px] object-contain cursor-pointer hover:scale-[1.02] duration-200"
                  key={index}
                  priority
                />
              </Link>
            ))}
        </div>
      )}

      <div className="mt-8" ref={ref}>
        {isFetchingNextPage && (
          <CircularProgress size={24} color="inherit" className="" />
        )}
      </div>
    </div>
  );
};

export default SponsorsPage;
