"use client";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Drawer, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { usePathname } from "next/navigation";

import CloseIcon from "@mui/icons-material/Close";
import { navbar_data } from "../functions/functionsClient";
import IconFacebook from "../icons/IconFacebook";
import IconInstagram from "../icons/IconInstagram";
import IconYoutube from "../icons/IconYoutube";
import IconLocation from "../icons/IconLocation";
import IconPhone from "../icons/IconPhone";
import IconTime from "../icons/IconTime";
import IconSponsorUs from "../icons/IconSponsorUs";
import ButtonMui from "./ButtonMui";

const navbar_right_part = [
  {
    id: 1,
    icon: <IconLocation />,
    text: "Dr. Alexandra 42 060 01 Kezmarok, Slovensko",
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
        className="hidden md:flex !justify-between  navbar_section m-auto !pt-4 !pb-4 items-center w-full"
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
        <div className="flex flex-row w-full navbar_section justify-between items-center !pt-0 !pb-0 m-auto">
          <div
            className={`lg:hidden cursor-pointer `}
            onClick={() => setOpenMobile(true)}
          >
            <MenuIcon />
          </div>

          <Link href={"/"}>
            {" "}
            <Image
              src={`logo.svg`}
              width={40}
              height={40}
              className="w-full h-28  object-cover"
              alt="Logo"
            />
          </Link>

          <div className="flex-row gap-[16px] xl:gap-[24px] justify-between hidden lg:flex items-center">
            {navbar_data.map((object, index) => (
              <div className="flex flex-row items-center gap-4" key={index}>
                <Link
                  href={object.slug === "/domov" ? "/" : object.slug}
                  key={index}
                  className={`  ${
                    pathname.includes(object.slug)
                      ? "active_navbar"
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
            <div className="flex flex-row gap-4">
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
                    src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/logo_navbar.svg`}
                    width={90}
                    height={90}
                    className="w-32 h-24 md:w-32 md:h-32"
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

              <div
                className="m-[1.2rem] rounded-[8px]"
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                }}
              >
                <Link
                  className="flex flex-row items-center gap-4 padding_mobile"
                  href={"/clenska-zona"}
                  style={{
                    borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
                  }}
                  onClick={() => setOpenMobile(false)}
                >
                  <Typography variant="body2" fontWeight={"600"}>
                    Členská zóna
                  </Typography>
                </Link>
                <Link
                  className="flex flex-row items-center gap-4 padding_mobile"
                  href={"/clenska-zona"}
                  style={{
                    borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
                  }}
                  onClick={() => setOpenMobile(false)}
                >
                  <Typography variant="body2" fontWeight={"600"}>
                    Váš profil
                  </Typography>
                </Link>
              </div>
              <Link
                href={"/konzultacie"}
                className="padding_mobile !pt-0"
                onClick={() => setOpenMobile(false)}
              >
                <Button
                  variant="contained"
                  // startIcon={<IconCalendar />}
                  sx={{
                    paddingTop: "10.5px",
                    paddingBottom: "10.5px",
                    boxShadow: "none",
                    width: "100%",
                    textTransform: "capitalize",
                  }}
                  style={{ background: "#76AE4D", borderRadius: "8px" }}
                >
                  Rezervácia
                </Button>
              </Link>
            </>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Navbar;
