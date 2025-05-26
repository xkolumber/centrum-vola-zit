import { Metadata } from "next";
import React from "react";
import StepBack from "../components/StepBack";
import Image from "next/image";
import CallToAction from "../components/CallToAction";
import { aws_bucket_url, cloudfront_url } from "../functions/functionsClient";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pomôcky pre rehabilitáciu a podporu mobility",
  description:
    "Zistite, aké pomôcky využívame pri terapiách a rehabilitáciách – od vozíkov, cez podložky, ortopedické pomôcky až po odporúčané domáce vybavenie. Pomáhajú zlepšiť pohyblivosť, bezpečnosť a komfort klientov.",
  keywords: [
    "rehabilitačné pomôcky",
    "vozík",
    "pomôcky pre pohyb",
    "terapeutické vybavenie",
    "podporné pomôcky",
    "pomôcky pre seniorov",
    "ortopedické pomôcky",
    "pomôcky pre rehabilitáciu",
    "domáce pomôcky",
    "podložky",
    "chodítka",
    "pomôcky pre hendikepovaných",
    "fyzická terapia pomôcky",
  ],
  openGraph: {
    title: "Pomôcky pre terapiu, rehabilitáciu a každodenný život",
    description:
      "V našom centre využívame širokú škálu pomôcok na zlepšenie pohyblivosti, bezpečnosti a komfortu. Niektoré z nich si môžete aj objednať na domáce používanie.",
    images: [
      {
        url: "https://d9xqr11l6v5wz.cloudfront.net/intro_pomocky.jpg",
        alt: "Rehabilitačný vozík ako pomôcka na podporu mobility",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const Page = () => {
  const imageUrl =
    "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/intro_pomocky.jpg";
  return (
    <div className="main_section m-auto py-12 min-h-screen">
      <StepBack />
      <h2 className=" font-bold  mb-8">Zdravotnícke pomôcky</h2>

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
            Na výbere pomôcok spolupracujeme s odborníkmi a dodávateľom{" "}
            <strong>Rehacare</strong>, ktorý nám poskytuje kvalitné a overené
            produkty. V prípade záujmu vieme pomôcky zabezpečiť aj na domáce
            používanie a pomôžeme vám s celým procesom objednávky.
          </p>
          <Link
            href="https://www.rehacare.sk"
            className="!font-bold"
            target="_blank"
            rel="noreferrer"
          >
            www.rehacare.sk
          </Link>
        </div>
      </div>
      <div className="mt-16 lg:mt-32 2xl:mt-52">
        <CallToAction />
      </div>
    </div>
  );
};
export default Page;
