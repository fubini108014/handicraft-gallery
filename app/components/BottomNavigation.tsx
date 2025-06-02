"use client";
import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { Link, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { usePathname } from "next/navigation";

export const navigationItems = [
  { label: "首頁", href: "/", icon: <HomeIcon /> },
  { label: "探索", href: "/explore", icon: <ExploreIcon /> },
  { label: "藝術家", href: "/artisan", icon: <PersonSearchIcon /> },
];
const BottomNavigaionWrapper = styled(Paper)({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  "& a.Mui-selected": {
    color: "#1976d2 !important",
  },
});
export function SimpleBottomNavigation() {
  const pathname = usePathname();

  const value =
    navigationItems.find((item) => {
      if (item.href === "/") {
        return pathname === "/";
      }
      return pathname.startsWith(item.href);
    })?.href || pathname;

  return (
    <BottomNavigaionWrapper elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        /*onChange={(event, newValue) => {
          setValue(newValue);
        }}*/
      >
        {navigationItems.map((_) => (
          <BottomNavigationAction
            key={_.label}
            label={_.label}
            icon={_.icon}
            value={_.href}
            LinkComponent={Link}
            href={_.href}
          />
        ))}
      </BottomNavigation>
    </BottomNavigaionWrapper>
  );
}
