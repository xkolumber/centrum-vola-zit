"use client";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainListItems } from "./MenuContent";

interface Props {
  clickedMobile: () => void;
}

export default function MenuContentMobile({ clickedMobile }: Props) {
  const pathname = usePathname();
  return (
    <Stack
      sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}
      className="!bg-primary"
    >
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
                onClick={clickedMobile}
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
