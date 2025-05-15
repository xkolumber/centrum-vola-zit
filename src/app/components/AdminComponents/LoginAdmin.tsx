"use client";

import { handleSignInAdmin } from "@/app/lib/awsCognitoActions";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function LoginAdmin() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const [isLoading, setIsLoading] = useState(false);

  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStayLoggedIn(event.target.checked);
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setIsLoading(true);

    try {
      const response = await handleSignInAdmin(formData);

      console.log(response);

      if (response === "isAdmin") {
        window.location.href = "/admin";
      } else if (response === "isClient") {
        window.location.href = "/clenska-zona";
      } else {
        setErrorMessage(response);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      component="form"
      gap={"16px"}
      flexDirection={"column"}
      display={"flex"}
      width={400}
      margin={"auto"}
      sx={{
        backgroundColor: "white",
        borderRadius: "16px",
      }}
      // autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Box className="flex flex-col">
        <Box className="flex flex-row gap-[24px] m-auto items-center">
          <Typography
            variant="h4"
            sx={{ fontWeight: 500 }}
            className="text-center"
          >
            Admin zóna
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            margin: "auto",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        >
          Prihlásenie
        </Typography>
      </Box>
      <TextField
        label="Emailová adresa"
        name="email"
        type="email"
        required
        id="email"
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
      <FormControl variant="outlined">
        <InputLabel
          htmlFor="outlined-adornment-password"
          sx={{
            color: "gray",
            "&.Mui-focused": {
              color: "#000000",
            },
          }}
        >
          Heslo
        </InputLabel>
        <OutlinedInput
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Heslo"
          required
          sx={{
            borderRadius: "8px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(0, 0, 0, 0.10)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#000000",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#000000",
            },
          }}
        />
      </FormControl>
      <Box className="flex flex-row justify-between items-center">
        <FormControlLabel
          label="Ostať prihlásený"
          control={
            <Checkbox
              checked={stayLoggedIn}
              onChange={handleCheckboxChange}
              sx={{
                borderRadius: "4px",
                color: "rgba(0, 0, 0, 0.50)",
                "&.Mui-checked": {
                  color: "rgba(0, 161, 101, 0.85)",
                },
              }}
            />
          }
        />
      </Box>
      <Button
        variant="contained"
        type="submit"
        sx={{
          fontWeight: "600",
          textTransform: "none",
          paddingTop: "10.5px",
          paddingBottom: "10.5px",
          "&:disabled": {
            backgroundColor: "#e0e0e0",
            color: "#ffffff",
            cursor: "not-allowed",
            opacity: "80%",
          },
          boxShadow: "none",
        }}
        style={{ background: "#00A165", borderRadius: "8px" }}
        disabled={isLoading}
      >
        {isLoading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Prihlásiť sa"
        )}
      </Button>

      {errorMessage && (
        <div
          className="flex h-4 items-end space-x-1 m-auto"
          aria-live="polite"
          aria-atomic="true"
        >
          <>
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        </div>
      )}
    </Box>
  );
}
