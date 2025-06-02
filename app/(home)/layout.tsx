import React from "react";
import { SimpleBottomNavigation } from "../components/BottomNavigation";
import BasicAppBar from "../components/AppBar";
import { Box } from "@mui/material";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{ p: "8px" }}>
      <BasicAppBar />
      {children} <SimpleBottomNavigation />
    </Box>
  );
}

export default layout;
