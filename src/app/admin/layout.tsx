"use client";
import React, { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import Link from "next/link";

import MenuContent from "../components/AdminComponents/MenuContent";
import MenuContentMobile from "../components/AdminComponents/MenuContextMobile";
import OptionsMenu from "../components/AdminComponents/OptionsMenu";
import useAuthUser from "../hooks/user-auth-user";
import IconHamburger from "../icons/IconHamburger";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const user = useAuthUser();

  const [openMobile, setOpenMobile] = useState(false);

  const handleClickedPage = () => {
    setOpenMobile(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
        <>
          <div
            className={`bg-[#384239] flex flex-row  justify-between p-4 pt-8 pb-8 md:hidden`}
          >
            <Link
              href="/admin"
              className="w-[130px] md:w-[150px] 2xl:w-[200px] "
            >
              <Image
                src={`/logo.svg`}
                alt="logo"
                width={100}
                height={10}
                priority={true}
                quality={100}
                className="w-[130px] md:w-[150px] 2xl:w-[200px]   object-contain"
              />
            </Link>
            <div className="flex flex-row gap-6 items-center">
              {" "}
              <div
                className={` xl:hidden cursor-pointer`}
                onClick={() => setOpenMobile(true)}
              >
                <IconHamburger />
              </div>
            </div>
          </div>

          <Drawer
            anchor="top"
            className="md:hidden "
            open={openMobile}
            onClose={() => setOpenMobile(false)}
            PaperProps={{
              sx: { width: "100%", height: "100%" },
            }}
          >
            <>
              <MenuContentMobile clickedMobile={handleClickedPage} />
              <Stack
                direction="row"
                className="!bg-primary"
                sx={{
                  p: 2,
                  gap: 1,
                  alignItems: "center",
                  borderTop: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Avatar
                  sizes="small"
                  alt={"A"}
                  src="/static/images/avatar/7.jpg"
                  sx={{ width: 36, height: 36 }}
                />
                <Box sx={{ mr: "auto" }}>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 500, lineHeight: "16px" }}
                  >
                    Admin
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#ffffff" }}>
                    {user && user.email}
                  </Typography>
                </Box>
                <OptionsMenu />
              </Stack>
            </>
          </Drawer>

          <Drawer
            variant="permanent"
            className="hidden md:block"
            sx={{
              [`& .${drawerClasses.paper}`]: {
                backgroundColor: "#384239",
              },

              "& .MuiDrawer-paper": {
                width: "300px",
                backgroundColor: "#384239",
              },
            }}
          >
            <Image
              src={`/logo.svg`}
              alt="logo"
              width={100}
              height={100}
              priority
              className=" w-full h-full max-h-[60px] mt-[16px] mb-[16px]"
            />

            <Divider />
            <MenuContent />

            <Stack
              direction="row"
              sx={{
                p: 2,
                gap: 1,
                alignItems: "center",
                borderTop: "1px solid",
                borderColor: "divider",
              }}
            >
              <Avatar
                sizes="small"
                alt={"A"}
                src="/static/images/avatar/7.jpg"
                sx={{ width: 36, height: 36 }}
              />
              <Box sx={{ mr: "auto" }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, lineHeight: "16px" }}
                  className="text-white"
                >
                  Admin
                </Typography>
                <Typography variant="caption" sx={{ color: "#ffffff" }}>
                  {user && user.email}
                </Typography>
              </Box>
              <OptionsMenu />
            </Stack>
          </Drawer>
        </>
        <div className="w-full p-8 md:p-16">{children}</div>
      </div>
    </>
  );
}
