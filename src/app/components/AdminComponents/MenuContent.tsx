"use client";
import CollectionsIcon from "@mui/icons-material/Collections";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { usePathname } from "next/navigation";

import PeopleIcon from "@mui/icons-material/People";

import HandshakeIcon from "@mui/icons-material/Handshake";

export const mainListItems = [
  {
    text: "Aktuality",
    icon: <MenuBookIcon />,
    link: "/admin/aktuality",
  },
  {
    text: "Články",
    icon: <MenuBookIcon />,
    link: "/admin/clanky",
  },
  { text: "Domov", icon: <HomeRoundedIcon />, link: "/admin" },
  {
    text: "Galéria",
    icon: <CollectionsIcon />,
    link: "/admin/galeria",
  },
  {
    text: "Sponzori",
    icon: <PeopleIcon />,
    link: "/admin/sponzori",
  },
  {
    text: "Spolupracujeme",
    icon: <HandshakeIcon />,
    link: "/admin/spolupracujeme",
  },
];

export default function MenuContent() {
  const pathname = usePathname();
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <Link href={item.link}>
              <ListItemButton
                selected={
                  item.link != "/admin"
                    ? pathname.startsWith(item.link)
                    : pathname === "/admin"
                }
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "rgba(0, 161, 101, 0.15)",
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: "rgba(0, 161, 101, 0.25)",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#ffffff" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} className="text-white" />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
