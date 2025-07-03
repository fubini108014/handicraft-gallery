"use client";
import CraftCard from "../components/CraftCard";
import { MemberCard } from "../components/MemberCard";
import Grid from "@mui/material/Grid";
import { Box, Typography, Button, Container, Divider } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // Mock data for featured crafts
  const featuredCrafts = [
    {
      id: "c001",
      title: "手工皮革錢包",
      image: "/camera.jpg",
      description: "精緻手工縫製，真皮材質",
    },
    {
      id: "c002",
      title: "陶藝茶杯組",
      image: "/cat.jpg",
      description: "傳統拉坯技法製作",
    },
    {
      id: "c003",
      title: "鉤針編織圍巾",
      image: "/camera.jpg",
      description: "溫暖舒適，手工編織",
    },
    {
      id: "c004",
      title: "手工皮帶",
      image: "/cat.jpg",
      description: "耐用實用，可客製化",
    },
    {
      id: "c005",
      title: "陶藝花瓶",
      image: "/camera.jpg",
      description: "現代簡約設計風格",
    },
    {
      id: "c006",
      title: "毛線帽子",
      image: "/cat.jpg",
      description: "保暖時尚，多種顏色",
    },
  ];

  // Mock data for latest crafts
  const latestCrafts = [
    {
      id: "c007",
      title: "皮革鑰匙圈",
      image: "/camera.jpg",
      description: "實用美觀，送禮首選",
    },
    {
      id: "c008",
      title: "陶藝餐具組",
      image: "/cat.jpg",
      description: "生活美學，實用器皿",
    },
    {
      id: "c009",
      title: "編織玩偶",
      image: "/camera.jpg",
      description: "可愛造型，適合收藏",
    },
    {
      id: "c010",
      title: "皮革背包",
      image: "/cat.jpg",
      description: "大容量設計，實用美觀",
    },
    {
      id: "c011",
      title: "陶藝茶壺",
      image: "/camera.jpg",
      description: "傳統工藝，泡茶必備",
    },
    {
      id: "c012",
      title: "毛線手套",
      image: "/cat.jpg",
      description: "保暖防寒，手工編織",
    },
  ];

  // Mock data for featured artisans
  const featuredArtisans = [
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

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
          手工藝品展示平台
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          發現獨特的手工藝品，感受藝術家的匠心之作
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => router.push("/explore")}
          sx={{ mr: 2 }}
        >
          探索作品
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => router.push("/artisan")}
        >
          認識藝術家
        </Button>
      </Box>

      {/* Featured Crafts Section */}
      <Box sx={{ mb: 6 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            熱門推薦
          </Typography>
          <Button
            variant="text"
            onClick={() => router.push("/explore")}
            sx={{ textTransform: "none" }}
          >
            查看更多 →
          </Button>
        </Box>
        <Divider sx={{ mb: 3 }} />
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {featuredCrafts.map((craft) => (
            <Grid key={craft.id} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CraftCard craftInfo={craft} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Latest Crafts Section */}
      <Box sx={{ mb: 6 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            最新作品
          </Typography>
          <Button
            variant="text"
            onClick={() => router.push("/explore")}
            sx={{ textTransform: "none" }}
          >
            查看更多 →
          </Button>
        </Box>
        <Divider sx={{ mb: 3 }} />
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {latestCrafts.map((craft) => (
            <Grid key={craft.id} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CraftCard craftInfo={craft} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Featured Artisans Section */}
      <Box sx={{ mb: 6 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            精選藝術家
          </Typography>
          <Button
            variant="text"
            onClick={() => router.push("/artisan")}
            sx={{ textTransform: "none" }}
          >
            查看更多 →
          </Button>
        </Box>
        <Divider sx={{ mb: 3 }} />
        <Grid container spacing={2}>
          {featuredArtisans.map((artisan) => (
            <Grid key={artisan.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <MemberCard
                avatar={artisan.avatar}
                name={artisan.name}
                specialty={artisan.specialty}
                onClick={() => router.push(`/artisan/${artisan.id}`)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action Section */}
      <Box
        sx={{ textAlign: "center", py: 6, bgcolor: "grey.50", borderRadius: 2 }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          開始你的手工藝品探索之旅
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          發現更多獨特的手工藝品，支持台灣在地藝術家
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => router.push("/explore")}
        >
          立即探索
        </Button>
      </Box>
    </Container>
  );
}
