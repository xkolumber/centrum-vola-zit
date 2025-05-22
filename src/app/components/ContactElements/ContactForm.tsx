"use client";
import { sendFormEmail } from "@/app/functions/functionsServer";
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
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await sendFormEmail(actualizeData);

    if (response === 200) {
      toast.success("Email bol úspešne odoslaný.");
      setActualizeData((prevData) => ({
        ...prevData,
        agree: false,
        name: "",
        email: "",
        phone: "",
        message: "",
      }));
    } else {
      toast.error("Pri odosielaní emailu nastala chyba, zavolajte nám.", {
        duration: 5000,
      });
    }
    setIsLoading(false);
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
    <div className="lg:w-[50%] mt-16 md:mt-0 mb-16">
      <Toaster />
      <Box
        component="form"
        gap={"16px"}
        flexDirection={"column"}
        display={"flex"}
        autoComplete="off"
        onSubmit={handleSubmit}
        className="sticky top-44"
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
          label="Správa"
          variant="outlined"
          multiline
          rows={8}
          name="message"
          value={actualizeData.message}
          onChange={handleChange}
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

        <FormControlLabel
          key={"1"}
          label={"Súhlasím so spracovaním osobných údajov"}
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
                  color: "#ADCA2A",
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
