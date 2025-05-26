import CallToAction from "../components/CallToAction";
import StepBack from "../components/StepBack";
import { aws_bucket_url, cloudfront_url } from "../functions/functionsClient";
import Image from "next/image";

const Page = () => {
  const imageUrl =
    "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/logopedia1.jpg";
  return (
    <div className="main_section m-auto py-12 min-h-screen">
      <StepBack />
      <h2 className=" font-bold  mb-8">Logopédia</h2>

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
          <p className="">
            {" "}
            V našom centre riešime aj problémy so zajakávaním u detí. Na
            začiatku sedení rozvíjame pozornosť, a hravým spôsobom vzbudzujeme
            záujem o rozprávanie. Následne rozširujeme slovnú zásobu a
            zvládnutie gramatiky. Vychádzame z toho, že hlavnou činnosťou detí
            je hra a preto je všetko zakomponované do hravých situácií. Počas
            logopedického sedenia sa zaoberáme týmito oblasťami: naštartovanie
            reči, rozvoj vnímania a porozumenia reči, zlepšenie artikulácie,
            korekcia porúch a vývinu jazyka a reči, korekcia porúch plynulosti
            rečí (zajakávanie, brbľavosť), korekcia narušenej komunikačnej
            schopnosti, prevencia a náprava porúch učenia (dyslexia, dysgrafia,
            dyskalkúlia)
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
