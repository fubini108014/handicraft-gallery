"use client";
import React from "react";
import { MemberCard } from "@/app/components/MemberCard";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";

const artisans = [
  {
    id: "a001",
    avatar: "/josh.jpg",
    name: "王小明",
    specialty: "皮革工藝",
  },
  {
    id: "a002",
    avatar: "/kuma.jpg",
    name: "李美麗",
    specialty: "陶藝",
  },
  {
    id: "a003",
    avatar: "/susan.jpg",
    name: "陳大華",
    specialty: "鉤針編織",
  },
];

const ArtisanListPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>藝術家列表</h1>
      <Stack spacing={2}>
        {artisans.map((artisan) => (
          <MemberCard
            key={artisan.id}
            avatar={artisan.avatar}
            name={artisan.name}
            specialty={artisan.specialty}
            onClick={() => router.push(`/artisan/${artisan.id}`)}
          />
        ))}
      </Stack>
    </div>
  );
};

export default ArtisanListPage;
