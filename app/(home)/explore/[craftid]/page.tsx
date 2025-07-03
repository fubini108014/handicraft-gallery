"use client";
import React from "react";
import {
  Box,
  Card,
  Typography,
  Grid,
  Chip,
  Divider,
  Container,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Mock data for craft details
const getCraftData = (id: string) => {
  const crafts: Record<string, CraftDetail> = {
    c001: {
      id: "c001",
      title: "手工皮革錢包",
      image: "/camera.jpg",
      description:
        "精緻手工縫製的真皮錢包，採用優質牛皮製作，內部有多個卡槽和零錢袋，實用美觀。每個細節都經過精心處理，確保品質與耐用性。",
      price: 2800,
      originalPrice: 3200,
      category: "leather",
      artist: {
        name: "王小明",
        avatar: "/josh.jpg",
        id: "a001",
      },
      materials: ["優質牛皮", "銅質拉鍊", "棉線"],
      dimensions: "長 12cm x 寬 9cm x 高 2cm",
      weight: "約 150g",
      productionTime: "7-10 個工作天",
      features: ["手工縫製", "真皮材質", "多卡槽設計", "可客製化"],
      images: ["/camera.jpg", "/cat.jpg", "/camera.jpg", "/cat.jpg"],
    },
    c002: {
      id: "c002",
      title: "陶藝茶杯組",
      image: "/cat.jpg",
      description:
        "傳統拉坯技法製作的茶杯組，包含 4 個茶杯和 1 個茶壺。採用天然陶土燒製，釉色溫潤，適合品茶使用。",
      price: 1800,
      originalPrice: 2200,
      category: "clay",
      artist: {
        name: "李美麗",
        avatar: "/kuma.jpg",
        id: "a002",
      },
      materials: ["天然陶土", "天然釉藥"],
      dimensions: "茶杯直徑 8cm，茶壺高 12cm",
      weight: "約 800g",
      productionTime: "14-21 個工作天",
      features: ["傳統拉坯", "天然釉色", "適合高溫", "可微波"],
      images: ["/cat.jpg", "/camera.jpg", "/cat.jpg", "/camera.jpg"],
    },
    c003: {
      id: "c003",
      title: "鉤針編織圍巾",
      image: "/camera.jpg",
      description:
        "溫暖舒適的手工編織圍巾，採用優質羊毛線製作，花紋精緻，保暖效果佳。適合秋冬配戴，也可作為禮物。",
      price: 1200,
      originalPrice: 1500,
      category: "crochet",
      artist: {
        name: "陳大華",
        avatar: "/susan.jpg",
        id: "a003",
      },
      materials: ["優質羊毛線", "鉤針"],
      dimensions: "長 180cm x 寬 25cm",
      weight: "約 200g",
      productionTime: "5-7 個工作天",
      features: ["手工編織", "羊毛材質", "保暖舒適", "多色可選"],
      images: ["/camera.jpg", "/cat.jpg", "/camera.jpg", "/cat.jpg"],
    },
  };
  return crafts[id as keyof typeof crafts] || crafts.c001;
};

// 單一手工作品
export interface CraftInfo {
  id: string;
  title: string;
  image: string;
  description: string;
}

// 作品詳細頁（含更多細節）
export interface CraftDetail extends CraftInfo {
  price?: number;
  originalPrice?: number;
  category?: string;
  artist: ArtisanInfo;
  materials: string[];
  dimensions: string;
  weight: string;
  productionTime: string;
  features: string[];
  images: string[];
}

// 藝術家卡片/列表
export interface ArtisanInfo {
  id: string;
  avatar: string;
  name: string;
  specialty?: string;
}

// 藝術家詳細頁
export interface ArtisanDetail extends ArtisanInfo {
  description: string;
  experience: string;
  location: string;
  skills: string[];
  contact: {
    phone: string;
    email: string;
    facebook?: string;
    instagram?: string;
    website?: string;
  };
  works: CraftInfo[];
}

export default function HandicraftsPage({
  params,
}: {
  params: Promise<{ craftid: string }>;
}) {
  const [craftId, setCraftId] = React.useState<string>("");
  const [craft, setCraft] = React.useState<CraftDetail | null>(null);
  const router = useRouter();

  React.useEffect(() => {
    const loadData = async () => {
      const resolvedParams = await params;
      const id = resolvedParams.craftid;
      setCraftId(id);
      setCraft(getCraftData(id));
    };
    loadData();
  }, [params]);

  if (!craft) {
    return <div>載入中...</div>;
  }
  console.log(craftId);
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Left Column - Images */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ position: "relative", height: 400, mb: 2 }}>
            <Image
              src={craft.image}
              alt={craft.title}
              fill
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </Box>
          <Grid container spacing={1}>
            {craft.images.slice(1).map((img: string, index: number) => (
              <Grid size={{ xs: 3 }} key={index}>
                <Box sx={{ position: "relative", height: 80 }}>
                  <Image
                    src={img}
                    alt={`${craft.title} ${index + 2}`}
                    fill
                    style={{ objectFit: "cover", borderRadius: "4px" }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right Column - Product Info */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 2,
            }}
          >
            <Typography variant="h4" gutterBottom>
              {craft.title}
            </Typography>
            <Button
              variant="outlined"
              size="small"
              startIcon={<FavoriteIcon />}
            >
              收藏
            </Button>
          </Box>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {craft.description}
          </Typography>

          {/* Artist Info */}
          <Card sx={{ mb: 3, p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Avatar src={craft.artist.avatar} sx={{ mr: 2 }} />
              <Box>
                <Typography variant="h6">{craft.artist.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  藝術家
                </Typography>
              </Box>
            </Box>
            <Button
              variant="outlined"
              size="small"
              onClick={() => router.push(`/artisan/${craft.artist.id}`)}
            >
              查看藝術家頁面
            </Button>
          </Card>

          {/* Product Details */}
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              商品詳情
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <List dense>
              <ListItem>
                <ListItemIcon>
                  <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText
                  primary="製作時間"
                  secondary={craft.productionTime}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="尺寸" secondary={craft.dimensions} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="重量" secondary={craft.weight} />
              </ListItem>
            </List>

            <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
              材質
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
              {craft.materials.map((material: string, index: number) => (
                <Chip
                  key={index}
                  label={material}
                  variant="outlined"
                  size="small"
                />
              ))}
            </Box>

            <Typography variant="subtitle1" gutterBottom>
              特色
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {craft.features.map((feature: string, index: number) => (
                <Chip
                  key={index}
                  label={feature}
                  color="primary"
                  size="small"
                />
              ))}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
