"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import {
  aws_bucket_url,
  cloudfront_url,
  STALE_TIME,
} from "../../functions/functionsClient";
import { fetchCooperationPartners } from "../../functions/functionsServer";
import { CooperationInterface } from "../../lib/interface";
import SkeletonCooperationPage from "./SkeletonCooperationPage";

const CooperationPage = () => {
  const { data, error, isLoading } = useQuery<CooperationInterface[]>({
    queryKey: ["spolupracujeme"],
    queryFn: () => fetchCooperationPartners(),
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
    placeholderData: (previousData) => previousData,
  });

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

      {isLoading && <SkeletonCooperationPage />}
      {error && <p className="mt-8">Chyba pri načítaní dát.</p>}

      {data && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {data.map((object, index) => (
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
                className="rounded-lg w-full h-full  object-contain cursor-pointer hover:scale-[1.02] duration-200"
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

export default CooperationPage;
