"use client";
import Box from "@mui/material/Box";

import LoginAdmin from "@/app/components/AdminComponents/LoginAdmin";

const page = () => {
  return (
    <div>
      <Box className="own_edge">
        <Box className="main_section min-h-screen flex items-center justify-center m-auto">
          <LoginAdmin />
        </Box>
      </Box>
    </div>
  );
};

export default page;
