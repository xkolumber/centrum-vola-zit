"use client";
import { CircularProgress } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  aws_bucket_url,
  cloudfront_url,
  STALE_TIME,
} from "../../functions/functionsClient";
import { fetchCooperationLatest } from "../../functions/functionsServer";
import SkeletonCooperationPage from "./SkeletonCooperationPage";

const CooperationPage = () => {
  const { ref, inView } = useInView();

  const { data, error, fetchNextPage, isFetchingNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ["spolupracujeme"],
      queryFn: ({ pageParam = undefined }) => fetchCooperationLatest(pageParam),
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
      <h2 className="font-extrabold">Spolupracujeme</h2>

      <p className="pt-4">
        Vážime si každého partnera, ktorý s nami zdieľa spoločnú víziu – pomáhať
        deťom rásť, rozvíjať sa a napredovať napriek prekážkam. Naša spolupráca
        je postavená na dôvere, odbornosti a spoločnom cieli: vytvárať lepšie
        podmienky pre život detí so znevýhodnením.
      </p>
      <p className="pt-4">
        Ďakujeme všetkým organizáciám, firmám a odborníkom, ktorí nám pomáhajú
        zabezpečiť kvalitné pomôcky, poradenstvo, odborné služby aj technickú
        podporu. Vaša spolupráca je pre nás kľúčová.
      </p>

      {isFetching && data === null && <SkeletonCooperationPage />}
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
                  width={400}
                  height={300}
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

export default CooperationPage;
