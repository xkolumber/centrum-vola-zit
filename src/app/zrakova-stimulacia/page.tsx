import CallToAction from "../components/CallToAction";
import StepBack from "../components/StepBack";
import Image from "next/image";
import { aws_bucket_url, cloudfront_url } from "../functions/functionsClient";

const Page = () => {
  const imageUrl =
    "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/zrakova_stimulacia.jpg";
  return (
    <div className="main_section m-auto py-12 min-h-screen">
      <StepBack />
      <h2 className=" font-bold  mb-8">Zraková stimulácia</h2>

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
        <div className="w-full lg:w-1/2">
          <p className="text-gray-800">
            {" "}
            Zraková stimulácia je dôležitou súčasťou podpory detí so zrakovým
            znevýhodnením. Včasná diagnostika a odborné zásahy môžu významne
            ovplyvniť celkový vývin dieťaťa. Na Slovensku pôsobí niekoľko
            kvalifikovaných zrakových terapeutiek, ktoré poskytujú odbornú pomoc
            rodinám detí s poruchami zraku.
          </p>
          <p className="mt-4">
            {" "}
            Jednou z nich je{" "}
            <span className="font-bold">Mariana Garneková</span>, ktorá pôsobí v{" "}
            <span className="font-bold">
              Špecializovanom centre poradenstva a prevencie pre deti a žiakov
              so zrakovým postihnutím
            </span>{" "}
            v Levoči. Mariana poskytuje odbornú starostlivosť deťom od narodenia
            do 7 rokov, pričom sa zameriava na:
          </p>
          <ul className="">
            <li>Posúdenie funkčného zraku</li>
            <li>Zrakovú stimuláciu a terapiu</li>
            <li>Úpravu prostredia pre podporu zrakového vývinu dieťaťa</li>
          </ul>
          <p>
            Zameriavame sa na deti so zrakovým a viacnásobným znevýhodnením, ako
            sú: Katarakta, glaukóm, slabozrakosť, slepota, genetické ochorenia,
            syndrómy, ROP, nystagmus, centrálna porucha zraku, degeneratívne
            ochorenia sietnice, amblyopia a ďalšie.
          </p>
        </div>
      </div>
      <div className="mt-16 lg:mt-32 2xl:mt-52">
        <CallToAction />
      </div>
    </div>
  );
};

export default Page;
