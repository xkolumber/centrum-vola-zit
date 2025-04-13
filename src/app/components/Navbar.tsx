"use client";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navbar_data } from "../functions/functionsClient";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Drawer, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { usePathname, useRouter } from "next/navigation";
import IconUser from "../icons/IconUser";
import { handleSignOut } from "../lib/awsCognitoActions";
import BadgeElement from "./BadgeElement";
import IconCalendar from "./icons/IconCalendar";
import IconClose from "./icons/IconClose";
import IconEshop from "./icons/IconEshop";
import IconLogout from "./icons/IconLogout";
import IconStar from "./icons/IconStar";

import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const [openMobile, setOpenMobile] = useState(false);

  const handleClickProfile = () => {
    setAnchorEl(null);
    router.push("/clenska-zona");
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await handleSignOut();
  };

  return (
    <div
      className={`own_edge navbar_stroke bg-white sticky top-0 !pt-0 !pb-0 ${
        open ? "z-10" : "z-[12]"
      } ${
        (pathname.startsWith("/admin") || pathname.startsWith("/vins")) &&
        "!hidden"
      }`}
    >
      <div className="flex flex-row w-full main_section justify-between items-center !pt-0 !pb-0">
        <div
          className={`lg:hidden cursor-pointer `}
          onClick={() => setOpenMobile(true)}
        >
          <MenuIcon />
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

        <Link href={"/clenska-zona"} className="lg:hidden">
          <IconStar width="24px" />
        </Link>

        <div className="flex-row gap-[16px] xl:gap-[24px] justify-between hidden lg:flex items-center">
          {navbar_data.map((object, index) => (
            <div className="flex flex-row items-center gap-4" key={index}>
              {object.slug === "eshop" && <IconEshop />}

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
        <div className="hidden lg:flex flex-row items-center gap-4">
          <Link
            className="flex flex-row items-center gap-4"
            href={"/clenska-zona"}
          >
            <IconStar />
            Členská zóna
          </Link>
          {user && (
            <div className="flex flex-row items-center gap-4 relative">
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                endIcon={
                  <KeyboardArrowDownIcon
                    sx={{
                      transform: open ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s",
                    }}
                  />
                }
                sx={{
                  color: "#000000",
                  textTransform: "none",
                  fontSize: "none",
                }}
              >
                {user.name}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  onClick={handleClickProfile}
                  sx={{
                    borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
                  }}
                >
                  <IconUser padding="mr-[8px]" /> Môj profil
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <IconLogout /> Odhlásiť sa
                </MenuItem>
              </Menu>
            </div>
          )}

          <Link className="flex flex-row items-center gap-4" href={"/kosik"}>
            <BadgeElement />

            <p>Košík</p>
          </Link>

          <Link href={"/konzultacie"}>
            <Button
              variant="contained"
              startIcon={<IconCalendar />}
              sx={{
                paddingTop: "10.5px",
                paddingBottom: "10.5px",
                boxShadow: "none",
                textTransform: "capitalize",
              }}
              style={{ background: "#76AE4D", borderRadius: "8px" }}
            >
              Rezervácia
            </Button>
          </Link>
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
                <IconClose />
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

              <Link href={"/clenska-zona"} className="lg:hidden">
                <IconStar width="24px" />
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

            <Link
              className="flex flex-row items-center gap-2 padding_mobile"
              href={"/e-shop"}
              style={{
                borderTop: "1px solid rgba(0, 0, 0, 0.10)",
                borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
              }}
              onClick={() => setOpenMobile(false)}
            >
              <IconEshop />

              <Typography variant="body2" fontWeight={"600"}>
                E-Shop
              </Typography>
            </Link>
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
                <IconStar />
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

              <Link
                className="flex flex-row items-center gap-4 padding_mobile"
                href={"/kosik"}
                onClick={() => setOpenMobile(false)}
              >
                <BadgeElement />

                <Typography variant="body2" fontWeight={"600"}>
                  Košík
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
                startIcon={<IconCalendar />}
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
  );
};

export default Navbar;
