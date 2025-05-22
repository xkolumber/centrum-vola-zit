"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { SponsorInterface } from "../lib/interface";
import { fetchSponsors } from "../functions/functionsServer";
import {
  aws_bucket_url,
  cloudfront_url,
  STALE_TIME,
} from "../functions/functionsClient";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const SponsorsPage = () => {
  const { data, error, isLoading } = useQuery<SponsorInterface[]>({
    queryKey: ["admin_sponzori"],
    queryFn: () => fetchSponsors(),
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
    placeholderData: (previousData) => previousData,
  });

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

      {isLoading && (
        <CircularProgress size={24} color="inherit" className="mt-8" />
      )}
      {error && <p className="mt-8">Chyba pri načítaní dát.</p>}

      {data && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {data.map((object, index) => (
            <Link href={object.link} target="_blank" rel="noreferrer">
              <Image
                src={object.logo.replace(aws_bucket_url, cloudfront_url)}
                alt={`Logo ${object.title}`}
                width={400}
                height={300}
                className="rounded-lg w-full h-full max-h-[300px] object-cover cursor-pointer hover:scale-[1.02] duration-200"
                key={index}
                priority
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SponsorsPage;
