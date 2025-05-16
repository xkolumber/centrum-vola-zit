"use client";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Drawer, Typography } from "@mui/material";
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
  },
  { id: 2, icon: <IconPhone />, text: "0915 653 553" },
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
          <IconInstagram />
          <IconFacebook />
          <IconYoutube />
        </div>
        <div className="flex flex-row gap-8">
          {navbar_right_part.map((object, index) => (
            <div className="flex flex-row gap-4 items-center" key={index}>
              {object.icon} <p className="2xl:text-[16px]">{object.text}</p>
            </div>
          ))}
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
            <MenuIcon />
          </div>

          <Link href={"/"}>
            {" "}
            <Image
              src={`/logo.svg`}
              width={40}
              height={40}
              className="w-full h-20 md:h-28  object-cover"
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
          <div className="hidden lg:flex flex-row items-center gap-20">
            <div className="flex flex-row gap-4 items-center">
              <IconSponsorUs />
              <div className="flex flex-col">
                <p className="font-bold">Prispej</p>
                <p>Podpor nás</p>
              </div>
            </div>

            <ButtonMui color="#ADCA2A" text="Darovať 2%" link="/" />
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
              <div className="flex flex-row items-center w-full justify-between pl-[1.2rem] pr-[1.2rem] ">
                <div
                  className={`lg:hidden cursor-pointer `}
                  onClick={() => setOpenMobile(false)}
                >
                  <CloseIcon />
                </div>

                <Link href={"/"}>
                  {" "}
                  <Image
                    src={`/logo.svg`}
                    width={90}
                    height={90}
                    className="w-full h-20 md:h-28  object-cover"
                    alt="Logo"
                  />
                </Link>
              </div>

              {navbar_data.map(
                (object, index) =>
                  object.slug != "/e-shop" && (
                    <Link
                      href={object.slug}
                      key={index}
                      className={`   padding_mobile                  `}
                      onClick={() => setOpenMobile(false)}
                      style={{
                        borderTop: "1px solid rgba(0, 0, 0, 0.10)",
                      }}
                    >
                      <Typography variant="body2" fontWeight={"600"}>
                        {object.title}
                      </Typography>
                    </Link>
                  )
              )}
            </>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Navbar;
