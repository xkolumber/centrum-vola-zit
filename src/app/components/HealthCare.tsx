"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import StepBack from "./StepBack";
import { aws_bucket_url, cloudfront_url } from "../functions/functionsClient";
import Link from "next/link";
import CallToAction from "./CallToAction";

const HealthCare = () => {
  const services = [
    {
      id: 0,
      name: "Detský program",
      slug: "detsky-program",
      imageUrl:
        "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/elektrostimulacia.jpg",
      videoUrl: "none",
      description:
        "Princíp činnosti je založený na simulácii telu vlastných impulzov, ktoré sa prostredníctvom elektród privádzajú na pokožku, odkiaľ postupujú do nervových resp. svalových vlákien. Elektródy je možné upevniť na rôznych častiach tela, pričom elektrické stimuly sú neškodné a prakticky bezbolestné. Pri určitých aplikáciách pociťujete len jemné mravenčenie alebo vibrovanie. Elektrické impulzy vysielané do tkaniva ovplyvňujú prenos vzruchov v nervových vedeniach ako aj v nervových uzloch a svalových skupinách v oblasti aplikácie.",
    },
    {
      id: 1,
      name: "Individuálne pomôcky",
      slug: "individualne-pomocky",
      imageUrl:
        "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/raselinovy_zabal.jpg",
      videoUrl: "none",
      description:
        "Odporúča sa pri pohybových a neurologických ochoreniach na uvoľnenie, prehriatie, prekrvenie a pregeneráciu svalov a tkanív. Je nabitý živinami, stopovými prvkami, minerálmi a organickými látkami, napr. obsahuje kyselinu huminiovú. Podporuje metabolizmus a zvyšuje odolnosť organizmu.",
    },
    {
      id: 2,
      name: "Debarierizácia",
      slug: "debarierizacia",
      imageUrl:
        "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/oxygenoterapia.jpg",
      videoUrl: "none",
      description:
        "Regeneračná a liečebná terapia spočíva v inhalovaní zvýšenej koncentrácie kyslíka. Tá nielen pozitívne vplýva na našu psychickú a fyzickú stránku, ale posilňuje aj náš celkový imunitný systém. Telo zbavuje únavy, podieľa sa na zlepšení látkovej výmeny organizmu a zároveň aj očisťuje telo od toxínov.",
    },
  ];

  const [active, setActive] = useState(0);

  const router = useRouter();
  const searchParams = useSearchParams();
  const druh = searchParams.get("druh");

  const handlePageChange = (type: string) => {
    router.replace(`?druh=${type}`);
  };

  useEffect(() => {
    if (druh) {
      const found_object = services.find((object) => object.slug === druh);

      if (found_object) {
        setActive(found_object.id);
      } else {
        setActive(0);
        router.replace(`?druh=detsky-program`);
      }
    } else {
      setActive(0);
      router.replace(`?druh=detsky-program`);
    }
  }, [druh]);

  const imageUrl =
    "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/intro_pomocky.jpg";

  return (
    <>
      <div className="main_section m-auto py-12 min-h-screen">
        <StepBack />
        <h2 className=" font-bold  mb-8">Zdravotnícke pomôcky</h2>
        <div className="flex  gap-4 mb-6 flex-wrap">
          {services.map((s, i) => (
            <button
              key={i}
              className={`px-6 py-4 rounded-full  font-medium transition 
              ${
                i === active
                  ? "bg-[#ADCA2A] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handlePageChange(s.slug)}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start mt-16">
          <div className="w-full lg:w-1/2 ">
            <Image
              alt="image"
              width={1920}
              height={1080}
              src={imageUrl.replace(aws_bucket_url, cloudfront_url)}
              className={`w-full h-[513px] "
              }  object-cover rounded-[16px]`}
              priority
            />
          </div>
          <div className="w-full lg:w-1/2 sticky top-40">
            <p>
              V našom centre kladieme dôraz na individuálny prístup ku každému
              dieťaťu. Podľa jeho potrieb a možností spoločne hľadáme vhodné
              zdravotnícke pomôcky, ktoré mu môžu pomôcť zlepšiť pohyblivosť,
              bezpečnosť a celkový komfort v každodennom živote.
            </p>
            <p className="mt-4">
              Na výbere pomôcok spolupracujeme s odborníkmi a dodávateľmi{" "}
              <strong>Rehacare, Revomat</strong>, ktorí nám poskytujú kvalitné a
              overené produkty. V prípade záujmu vieme pomôcky zabezpečiť aj na
              domáce používanie a pomôžeme vám s celým procesom objednávky.
              Pomôžeme Vám taktiež s financovaním cez zdravotnú poisťovňu alebo
              UPSVaR v prípade doplatkov nadácie.
            </p>
            <div className="flex flex-col">
              {" "}
              <Link
                href="https://www.rehacare.sk"
                className="!font-bold"
                target="_blank"
                rel="noreferrer"
              >
                www.rehacare.sk
              </Link>
              <Link
                href="https://www.revomat.sk"
                className="!font-bold"
                target="_blank"
                rel="noreferrer"
              >
                www.revomat.sk
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 lg:mt-32 2xl:mt-52">
          <CallToAction />
        </div>
      </div>
    </>
  );
};

export default HealthCare;
