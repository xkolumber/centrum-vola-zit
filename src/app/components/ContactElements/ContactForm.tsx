"use client";
import { ContactFormInterface } from "@/app/lib/interface";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setActualizeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [actualizeData, setActualizeData] = useState<ContactFormInterface>({
    agree: false,
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChangeBoolean =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;
      const updatedData = { ...actualizeData, [name]: checked };
      setActualizeData(updatedData);
    };

  return (
    <div className="lg:w-[50%]">
      <Box
        paddingTop={"24px"}
        component="form"
        gap={"16px"}
        flexDirection={"column"}
        display={"flex"}
        // autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Box className="flex flex-col md:flex-row" gap={"16px"}>
          <TextField
            label="Meno a priezvisko"
            name="name"
            onChange={handleChange}
            value={actualizeData.name}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                "& fieldset": {
                  borderColor: "rgba(0, 0, 0, 0.10)",
                },
                "&:hover fieldset": {
                  borderColor: "#000000",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#000000",
                },
              },
              "& .MuiInputLabel-root": {
                color: "gray",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#000000",
              },
              width: "100%",
            }}
          />
        </Box>
        <TextField
          label="Telefónne číslo"
          name="phone"
          onChange={handleChange}
          value={actualizeData.phone}
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              "& fieldset": {
                borderColor: "rgba(0, 0, 0, 0.10)",
              },
              "&:hover fieldset": {
                borderColor: "#000000",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#000000",
              },
            },
            "& .MuiInputLabel-root": {
              color: "gray",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#000000",
            },
            width: "100%",
          }}
        />
        <TextField
          label="Emailová adresa"
          name="email"
          onChange={handleChange}
          value={actualizeData.email}
          type="email"
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              "& fieldset": {
                borderColor: "rgba(0, 0, 0, 0.10)",
              },
              "&:hover fieldset": {
                borderColor: "#000000",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#000000",
              },
            },
            "& .MuiInputLabel-root": {
              color: "gray",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#000000",
            },
            width: "100%",
          }}
        />

        <TextField
          label="Poznámka"
          variant="outlined"
          multiline
          rows={8}
          name="message"
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              "& fieldset": {
                borderColor: "rgba(0, 0, 0, 0.10)",
              },
              "&:hover fieldset": {
                borderColor: "#000000",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#000000",
              },
            },
            "& .MuiInputLabel-root": {
              color: "gray",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#000000",
            },
            width: "100%",
          }}
        />

        <FormControlLabel
          key={"1"}
          label={"Súhlasím s VOP a so spracovaním osobných údajov"}
          required
          control={
            <Checkbox
              checked={actualizeData.agree}
              value={actualizeData.agree}
              onChange={handleChangeBoolean("agree")}
              sx={{
                borderRadius: "4px",
                color: "rgba(0, 0, 0, 0.50)",
                "&.Mui-checked": {
                  color: "#76AE4D",
                },
              }}
            />
          }
        />

        <div className="flex justify-end">
          <Button
            variant="contained"
            type="submit"
            sx={{
              fontWeight: "600",
              textTransform: "none",
              paddingTop: "10.5px",
              paddingBottom: "10.5px",
              width: "100%",
              "&:disabled": {
                background: "#ADCA2A",
                color: "#ffffff",
                cursor: "not-allowed",
                opacity: "80%",
              },
            }}
            style={{
              background: "#ADCA2A",
              borderRadius: "8px",
              minWidth: "180px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "none",
            }}
            disabled={isLoading}
            className="!text-[14px] 2xl:!text-[16px]"
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              <span style={{ visibility: isLoading ? "hidden" : "visible" }}>
                Odoslať správu
              </span>
            )}
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default ContactForm;
