"use client";
import React, { useState } from "react";
import CraftCard from "@/app/components/CraftCard";
import FilterTabs from "@/app/components/FilterTabs";
import { Grid, TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// Mock data for crafts
const craftsData = [
  {
    id: "c001",
    title: "手工皮革錢包",
    image: "/camera.jpg",
    description: "精緻手工縫製，真皮材質",
    category: "leather",
  },
  {
    id: "c002",
    title: "陶藝茶杯組",
    image: "/cat.jpg",
    description: "傳統拉坯技法製作",
    category: "clay",
  },
  {
    id: "c003",
    title: "鉤針編織圍巾",
    image: "/camera.jpg",
    description: "溫暖舒適，手工編織",
    category: "crochet",
  },
  {
    id: "c004",
    title: "手工皮帶",
    image: "/cat.jpg",
    description: "耐用實用，可客製化",
    category: "leather",
  },
  {
    id: "c005",
    title: "陶藝花瓶",
    image: "/camera.jpg",
    description: "現代簡約設計風格",
    category: "clay",
  },
  {
    id: "c006",
    title: "毛線帽子",
    image: "/cat.jpg",
    description: "保暖時尚，多種顏色",
    category: "crochet",
  },
  {
    id: "c007",
    title: "皮革鑰匙圈",
    image: "/camera.jpg",
    description: "實用美觀，送禮首選",
    category: "leather",
  },
  {
    id: "c008",
    title: "陶藝餐具組",
    image: "/cat.jpg",
    description: "生活美學，實用器皿",
    category: "clay",
  },
  {
    id: "c009",
    title: "編織玩偶",
    image: "/camera.jpg",
    description: "可愛造型，適合收藏",
    category: "crochet",
  },
  {
    id: "c010",
    title: "皮革背包",
    image: "/cat.jpg",
    description: "大容量設計，實用美觀",
    category: "leather",
  },
  {
    id: "c011",
    title: "陶藝茶壺",
    image: "/camera.jpg",
    description: "傳統工藝，泡茶必備",
    category: "clay",
  },
  {
    id: "c012",
    title: "毛線手套",
    image: "/cat.jpg",
    description: "保暖防寒，手工編織",
    category: "crochet",
  },
];

function Explore() {
  const [condition, setCondition] = useState<string>("all");
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  // Filter crafts based on condition and search keyword
  const filteredCrafts = craftsData.filter((craft) => {
    const matchesCategory = condition === "all" || craft.category === condition;
    const matchesSearch =
      searchKeyword === "" ||
      craft.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      craft.description.toLowerCase().includes(searchKeyword.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <FilterTabs
        onChange={(val) => {
          setCondition(val);
        }}
      />

      {/* Search Bar */}
      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          placeholder="搜尋作品名稱或描述..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ maxWidth: 600 }}
        />
      </Box>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {filteredCrafts.map((craft) => (
          <Grid key={craft.id} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
            <CraftCard
              craftInfo={{
                id: craft.id,
                title: craft.title,
                image: craft.image,
                description: craft.description,
              }}
            />
          </Grid>
        ))}
      </Grid>

      {filteredCrafts.length === 0 && (
        <Box sx={{ textAlign: "center", py: 4 }}>
          <p>沒有找到符合條件的作品</p>
        </Box>
      )}
    </div>
  );
}

export default Explore;
