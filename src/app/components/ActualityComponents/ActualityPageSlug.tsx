"use client";
import { fetchActualitySlug } from "@/app/functions/functionsServer";
import { ActualityInterface } from "@/app/lib/interface";
import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface Props {
  slug: string;
}

const ActualityPageSlug = ({ slug }: Props) => {
  const { data, error, isLoading } = useQuery<ActualityInterface | null>({
    queryKey: ["gallery", slug],
    queryFn: async () => await fetchActualitySlug(slug),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="main_section  w-full flex flex-col m-auto min-h-screen ">
      {isLoading && <CircularProgress size={24} color="inherit" />}
      {error && <p>Chyba pri načítaní dát.</p>}

      {data && (
        <>
          <h2 className="font-extrabold ">{data.title}</h2>

          {data?.text1 && (
            <div
              className="w-full dark  "
              dangerouslySetInnerHTML={{
                __html: data?.text1,
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ActualityPageSlug;
