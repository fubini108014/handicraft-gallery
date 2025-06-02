"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AdbIcon from "@mui/icons-material/Adb";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { usePathname } from "next/navigation";

export const appBarItems = [
  { title: "Handicarft", href: "/", backButton: false },
  { title: "Explore", href: "/explore", backButton: false },
  { title: "product detail", href: "/explore/:id", backButton: true },
  { title: "Artisan", href: "/artisan", backButton: false },
  { title: "Artisan Detail", href: "/artisan/:id", backButton: true },
];

function BasicAppBar() {
  const pathname = usePathname();
  console.log(pathname);
  const isHome = pathname === "/";
  const matchedItem = appBarItems.find((item) => item.href === pathname);
  const title = matchedItem?.title || "";
  const backButton = matchedItem?.backButton || false;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {isHome && <AdbIcon sx={{ mr: 1 }} />}
          {backButton && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <KeyboardBackspaceIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            component="div"
            sx={{
              position: "absolute",
              right: "50%",
              transform: "translateX(50%)",
              flexGrow: 1,
            }}
          >
            {title}
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default BasicAppBar;
