"use client";
import IconArrowLeftTeam from "@/app/icons/IconArrowLeftTeam";
import IconArrowRightTeam from "@/app/icons/IconArrowRightTeam";
import HomePageMember from "./HomePageMember";
import { TeamMemberInterface } from "@/app/lib/interface";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const team_members: TeamMemberInterface[] = [
  {
    name: "Mgr. Alexandra Németh",
    job: "fyzioterapeut",
    desc: "Venujem sa neurorehabilitácii detí. Som certifikovaná detská Bobath terapeutka. Zameriavam sa na diagnostiku a terapiu posturálnych porúch, pričom využívam aj metódu SM-systém a kineziotejping.",
    fb_link: "www.facebook.com",
    ig_link: "www.instagram.com",
    photo:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/alexandra_foto.jpg",
  },
  {
    name: "Bc. Peter Németh",
    job: "fyzioterapeut",
    desc: "Venujem sa neurorehabilitácii detí a dospelých. Zameriavam sa na diagnostiku a terapiu posturálnych porúch pomocou metódy DNS – dynamickej neuromuskulárnej stabilizácie. Vo svojej práci využívam aj Redcord, SM-systém a kineziotejping.",
    fb_link: "www.facebook.com",
    ig_link: "www.instagram.com",
    photo:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/peter_foto.jpg",
  },
  {
    name: "Yuliia Bushmatova",
    job: "logopédia",
    desc: "Pracujem s deťmi, ktoré majú narušenú výslovnosť alebo ešte nerozprávajú. Venujem sa logopedickej masáži – orofaciálnej aj intraorálnej stimulácii. Používam sondy a vibračnú stimuláciu na podporu artikulačných svalov, aby som deťom pomohla lepšie rozvíjať reč.",
    fb_link: "www.facebook.com",
    ig_link: "www.instagram.com",
    photo:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/julia_foto.jpg",
  },
  {
    name: "Mgr. Miriam Garneková",
    job: "zraková stimulácia",
    desc: "Pôsobím v Špecializovanom centre poradenstva a prevencie, kde sa venujem deťom a žiakom so zrakovým postihnutím. Pomáham im rozvíjať zrakové schopnosti a podporujem ich v každodennom živote aj vzdelávaní.",
    fb_link: "www.facebook.com",
    ig_link: "www.instagram.com",
    photo:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/mariana_foto.jpg",
  },
  {
    name: "Miroslava Holubčíková",
    job: "Zdravotné pomôcky",
    desc: "Zameriavam sa na výrobu ortopedických vložiek, topánok, bandážových, redresných ortéz, ortéz na chôdzu a plastových ortéz po úrazoch.",
    fb_link: "www.facebook.com",
    ig_link: "www.instagram.com",
    photo:
      "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/mirka_foto.jpg",
  },
  {
    name: "Mgr. Lucia Kačmarčíková",
    job: "sociálna a nadačná sféra, zdravotné pomôcky",
    desc: "Vediem občianske združenie, zabezpečujem sociálne vybavanie pre klientov. Som obchodná reprezentantka zdravotných pomôcok - detský program. Riešim finančnú podporu pre dieťa. ",
    fb_link: "www.facebook.com",
    ig_link: "www.instagram.com",
    photo: "https://centrumvolazitopen.s3.eu-north-1.amazonaws.com/lucia.jpg",
  },
];

const HomePageTeam = () => {
  return (
    <div className="main_section m-auto justify-center items-center flex flex-col w-full gap-8 xl:gap-16 ">
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col ">
            <p>Tím</p>
            <h2 className="font-extrabold">Spoznajte náš tím</h2>
            <p className=" pt-4 mb-4 max-w-[700px]">
              V našom tíme sú fyzioterapeuti, psychológovia a logopédi. Všetci
              spoločne pracujeme na tom, aby Vaše dieťa dostalo individuálnu a
              kvalitnú starostlivosť.
            </p>
          </div>
          <div className=" flex-row gap-4 hidden md:flex">
            <div className="arrow-right ">
              <IconArrowLeftTeam />
            </div>
            <div className="arrow-left">
              <IconArrowRightTeam />
            </div>
          </div>
        </div>

        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          freeMode={true}
          modules={[Navigation, Autoplay]}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          speed={1000}
          className=" rounded-[16px] w-full h-auto mt-8"
        >
          {team_members.map((object, index) => (
            <SwiperSlide key={index}>
              <HomePageMember data={object} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex mt-8 flex-row gap-8 lg:gap-4 md:hidden justify-center items-center mb-16">
          <div className="arrow-right ">
            <IconArrowLeftTeam />
          </div>
          <div className="arrow-left">
            <IconArrowRightTeam />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default HomePageTeam;
