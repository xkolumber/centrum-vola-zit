"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { photos_room } from "../components/HomePageElements/HomePageOnePoint";
import { aws_bucket_url, cloudfront_url } from "../functions/functionsClient";
import AboutUsTeam from "./AboutUsTeam";
import CallToAction from "./CallToAction";
import NextJsImage from "./NextImage";

const AboutUsElement = () => {
  const [open, setOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  const [choosenAlbum, setChoosenAlbum] = useState<SlideImage[]>([]);

  const handleOpenGallery = (index: number) => {
    const transformedAlbum = photos_room.map((url) => ({
      src: url.replace(aws_bucket_url, cloudfront_url),
    }));
    setChoosenAlbum(transformedAlbum);
    setOpen(true);
    setInitialSlide(index);
  };

  return (
    <>
      <div className="main_section m-auto flex flex-col  px-4 py-12 max-w-7xl">
        <h2 className="font-extrabold">O nás</h2>

        <p className="pt-4 pb-4">
          Sme občianske združenie, ktoré sa s láskou a odbornosťou stará o deti
          so znevýhodnením. Naším cieľom je poskytovať komplexnú starostlivosť a
          podporu – fyzickú, psychologickú aj sociálnu – v bezpečnom a
          priateľskom prostredí.
        </p>

        <AboutUsTeam />

        <div>
          <Link href="/sluzby">
            {" "}
            <h3 className="font-extrabold mt-16 mb-4">Naše služby</h3>
          </Link>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <Link href="/terapie">
              {" "}
              <li>
                {" "}
                Terapie: Bobath koncept, závesný systém, Redcord, Galileo,
                Horizontálny motomed, Motomed, Snoozelen, SM systém
              </li>
            </Link>
            <Link href="/doplnkove-terapie">
              <li>
                Doplnkové terapie: elektrostimulácia, rašelinový zábal,
                oxygenoterapia, Bioptron lampa, tejpovanie, zdravý chrbát
              </li>
            </Link>
            <Link href="/masaze">
              <li>
                Masáže: klasická, reflexná, myofasiálna, lymfodrenáž, bankovanie
              </li>
            </Link>
            <Link href="/logopedia">
              <li>Logopédia</li>
            </Link>
            <Link href="/zrakova-stimulacia">
              <li>Zraková stimulácia</li>
            </Link>
            <Link href="/zdravotnicke-pomocky">
              <li>Zdravotnícke pomôcky</li>
            </Link>
          </ul>
        </div>

        <div>
          <h3 className="font-extrabold mt-16 lg:mt-24 mb-4">Naše priestory</h3>
          <p className="mb-4 max-w-[700px]">
            Vytvorili sme bezpečné a podporné prostredie, kde sa deti môžu cítiť
            príjemne a slobodne. Priestory sú navrhnuté tak, aby podporovali
            rehabilitáciu aj relaxáciu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            {photos_room.map((object, index) => (
              <Image
                src={object.replace(aws_bucket_url, cloudfront_url)}
                alt="Priestor 1"
                width={400}
                height={300}
                className="rounded-lg w-full h-full max-h-[300px] object-cover cursor-pointer hover:scale-[1.02] duration-200"
                key={index}
                onClick={() => handleOpenGallery(index)}
                priority
              />
            ))}
          </div>
        </div>

        <div className="mt-16 lg:mt-32 2xl:mt-52">
          <CallToAction />
        </div>
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={choosenAlbum}
          render={{ slide: NextJsImage }}
          index={initialSlide}
        />
      )}
    </>
  );
};

export default AboutUsElement;
