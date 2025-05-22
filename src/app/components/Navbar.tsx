"use client";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Drawer } from "@mui/material";
import { usePathname } from "next/navigation";

import CloseIcon from "@mui/icons-material/Close";
import { navbar_data } from "../functions/functionsClient";
import IconFacebook from "../icons/IconFacebook";
import IconInstagram from "../icons/IconInstagram";
import IconLocation from "../icons/IconLocation";
import IconPhone from "../icons/IconPhone";
import IconSponsorUs from "../icons/IconSponsorUs";
import IconTime from "../icons/IconTime";
import IconYoutube from "../icons/IconYoutube";
import ButtonMui from "./ButtonMui";

const navbar_right_part = [
  {
    id: 1,
    icon: <IconLocation />,
    text: "Dr. Alexandra 42 060 01 Kežmarok, Slovensko",
    address: "yes",
    link: "https://www.google.com/maps/place/Dr.+Alexandra+139%2F42,+060+02+Ke%C5%BEmarok/@49.1378685,20.4279255,3a,75y,49.29h,83.8t/data=!3m7!1e1!3m5!1sOos3Erhb-0-N2evAb_S6Ig!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D6.200787104741508%26panoid%3DOos3Erhb-0-N2evAb_S6Ig%26yaw%3D49.28589491242888!7i13312!8i6656!4m6!3m5!1s0x473e3c3343317eed:0x4f78caad87ef6a06!8m2!3d49.1379652!4d20.4280159!16s%2Fg%2F11snqxcmrh?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoASAFQAw%3D%3D",
  },
  { id: 2, icon: <IconPhone />, text: "0915 653 553", phone: "yes" },
  { id: 3, icon: <IconTime />, text: "8:00 - 16:00" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [anchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const [openMobile, setOpenMobile] = useState(false);

  return (
    <>
      <div
        className={`hidden md:flex !justify-between  navbar_section m-auto !pt-4 !pb-4 items-center w-full ${
          pathname.startsWith("/admin") && "!hidden"
        }`}
        style={{
          borderBottom: "1px solid #F7F7F7",
        }}
      >
        <div className="flex flex-row gap-4">
          <Link
            href={"https://www.facebook.com/profile.php?id=100079550524517"}
            target="_blank"
            rel="noreferrer"
          >
            <IconFacebook />
          </Link>
          <Link
            href={"https://www.instagram.com/centrumvolazit"}
            target="_blank"
            rel="noreferrer"
          >
            <IconInstagram />
          </Link>

          <Link
            href={"https://www.youtube.com/watch?v=yr6Xx1BDj40"}
            target="_blank"
            rel="noreferrer"
          >
            <IconYoutube />
          </Link>
        </div>
        <div className="flex flex-row gap-8">
          {navbar_right_part.map((object, index) => {
            if (object.phone === "yes") {
              return (
                <a
                  className="flex flex-row gap-4 items-center"
                  key={index}
                  href="tel:+421915653553"
                >
                  {object.icon}
                  <p className="2xl:text-[16px]">{object.text}</p>
                </a>
              );
            }

            if (object.address === "yes") {
              return (
                <Link
                  className="flex flex-row gap-4 items-center"
                  key={index}
                  href={object.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {object.icon}
                  <p className="2xl:text-[16px]">{object.text}</p>
                </Link>
              );
            }

            return (
              <div className="flex flex-row gap-4 items-center" key={index}>
                {object.icon}
                <p className="2xl:text-[16px]">{object.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`own_edge navbar_stroke bg-white sticky top-0 !pt-2 !pb-2 ${
          open ? "z-10" : "z-[12]"
        } ${
          (pathname.startsWith("/admin") || pathname.startsWith("/vins")) &&
          "!hidden"
        }`}
        style={{
          borderBottom: "1px solid #F7F7F7",
        }}
      >
        <div className="flex flex-row w-full navbar_section justify-between items-center !pt-2 !pb-2 m-auto">
          <div
            className={`lg:hidden cursor-pointer `}
            onClick={() => setOpenMobile(true)}
          >
            <MenuIcon
              style={{
                height: "20px",
                width: "20px",
              }}
            />
          </div>

          <Link href={"/"}>
            {" "}
            <Image
              src={`/logo.svg`}
              width={40}
              height={40}
              className="w-full h-24 md:h-28  object-cover"
              alt="Logo"
            />
          </Link>

          <div className="flex-row gap-[16px] xl:gap-[36px] justify-between hidden lg:flex items-center">
            {navbar_data.map((object: any, index) => (
              <div className="flex flex-row items-center gap-4" key={index}>
                <Link
                  href={object.slug === "/domov" ? "/" : object.slug}
                  key={index}
                  className={`  ${
                    pathname.includes(object.slug)
                      ? "!font-bold"
                      : "item_navbar"
                  } ${
                    object.slug === "/domov" &&
                    pathname === "/" &&
                    "active_navbar"
                  }  `}
                >
                  {object.title}
                </Link>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex flex-row items-center gap-16">
            <Link
              className="flex flex-row gap-4 items-center"
              href={"/sponzori"}
            >
              <IconSponsorUs />
              <div className="flex flex-col">
                <p>Sponzori</p>
              </div>
            </Link>

            <ButtonMui
              color="#ADCA2A"
              text="Spolupracujeme"
              link="/spolupracujeme"
            />
          </div>

          <Drawer
            anchor="top"
            open={openMobile}
            onClose={() => setOpenMobile(false)}
            PaperProps={{
              sx: { width: "100%", height: "100%" },
            }}
          >
            <>
              <div className="flex flex-row items-center w-full  navbar_section justify-between !pt-2 !pb-2 !m-0 ">
                <div
                  className={`lg:hidden cursor-pointer`}
                  onClick={() => setOpenMobile(false)}
                >
                  <CloseIcon
                    style={{
                      height: "24px",
                      width: "24px",
                    }}
                  />
                </div>

                <Link href={"/"} onClick={() => setOpenMobile(false)}>
                  {" "}
                  <Image
                    src={`/logo.svg`}
                    width={40}
                    height={40}
                    className="w-full h-24 md:h-28  object-cover"
                    alt="Logo"
                  />
                </Link>
              </div>

              {navbar_data.map((object, index) => (
                <Link
                  href={object.slug === "/domov" ? "/" : object.slug}
                  key={index}
                  className={`   padding_mobile                  `}
                  onClick={() => setOpenMobile(false)}
                  style={{
                    borderTop: "1px solid rgba(0, 0, 0, 0.10)",
                  }}
                >
                  <p> {object.title}</p>
                </Link>
              ))}
              <div
                className="flex flex-col items-center gap-4"
                style={{
                  borderTop: "1px solid rgba(0, 0, 0, 0.10)",
                }}
              >
                <Link
                  className="flex flex-row gap-4 items-center pt-8"
                  href={"/sponzori"}
                  onClick={() => setOpenMobile(false)}
                >
                  <Image
                    src={`/yellow_heart.svg`}
                    width={40}
                    height={40}
                    className="w-full h-20  object-cover"
                    alt="Logo"
                  />
                  <div className="flex flex-col">
                    <p>Sponzori</p>
                  </div>
                </Link>

                <div className="" onClick={() => setOpenMobile(false)}>
                  <ButtonMui
                    color="#ADCA2A"
                    text="Spolupracujeme"
                    link="/spolupracujeme"
                  />
                </div>
              </div>
            </>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Navbar;
