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
      <div style={{ paddingBottom: "60px" }}>{children}</div>
      <SimpleBottomNavigation />
    </Box>
  );
}

export default layout;
