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

const team_members: TeamMemberInterface[] = [
  {
    name: "Mrg. Alexandra Németh",
    job: "externý fyzioterapeut",
    desc: "Pomáham ako externý fyzioterapeut Bobath konceptu, poskytujem tiež reflexnú masáž a tejping.",
    fb_link: "www.facebook.com",
    ig_link: "www.instagram.com",
    photo: "none",
  },
  {
    name: "Bc. Peter Németh",
    job: "fyzioterapeut",
    desc: "Zameriavam sa na neurologických pacientov a pomáham ako fyzioterapeut.",
    fb_link: "www.facebook.com",
    ig_link: "www.instagram.com",
    photo: "none",
  },
  {
    name: "Júlia Priezivsko",
    job: "logopedička",
    desc: "Monsectetuer adipiscing elit cras elementum duis pulvinar temporibus autem quibusdam et aut officiis debitis",
    fb_link: "www.facebook.com",
    ig_link: "www.instagram.com",
    photo: "none",
  },
  {
    name: "Miriam Garneková",
    job: "zraková stimulácia",
    desc: "Monsectetuer adipiscing elit cras elementum duis pulvinar temporibus autem quibusdam et aut officiis debitis",
    fb_link: "www.facebook.com",
    ig_link: "www.instagram.com",
    photo: "none",
  },
  {
    name: "Lucia Kačmarčíková",
    job: "sociálna a nadačná sféra",
    desc: "Zabezpečujem sociálne vybavanie pre klientov, plus pomôccky.",
    fb_link: "www.facebook.com",
    ig_link: "www.instagram.com",
    photo: "/lucia.jpg",
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
