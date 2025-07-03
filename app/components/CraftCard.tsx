"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Title = styled("div")(({ theme }) => ({
  color: "#000",
  ...theme.typography.subtitle1,
  paddingTop: "4px",
}));

const Description = styled("div")(({ theme }) => ({
  color: "#999",
  ...theme.typography.subtitle2,
  paddingBottom: "4px",
}));

interface CraftInfo {
  id: string;
  title: string;
  description: string;
  image: string;
}

function CraftCard({ craftInfo = null }: { craftInfo: CraftInfo | null }) {
  const router = useRouter();
  if (!craftInfo) return null;
  const { id, title, description, image } = craftInfo;
  return (
    <Box>
      <Box
        sx={{ width: "100%", height: "160px", position: "relative" }}
        onClick={() => {
          router.push(`/explore/${id}`);
        }}
      >
        <Image
          src={image}
          fill
          style={{ borderRadius: "8px", cursor: "pointer" }}
          alt="Picture of the author"
        />
      </Box>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Box>
  );
}

export default CraftCard;
