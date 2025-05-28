import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

interface Props {
  color: string;
  text: string;
  link: string;
}

const ButtonMui = ({ color, text, link }: Props) => {
  return (
    <Link href={link}>
      <Button
        variant="contained"
        sx={{
          paddingTop: "10.5px",
          paddingBottom: "10.5px",
          paddingLeft: "32px",
          paddingRight: "32px",
          boxShadow: "none",
          textTransform: "none",
          backgroundColor: color,
          borderRadius: "8px",
          "&:hover": {
            boxShadow: "none",
            backgroundColor: "#b5d132",
          },
        }}
        className="!text-[14px] 3xl:!text-[16px]"
      >
        {text}
      </Button>
    </Link>
  );
};

export default ButtonMui;
