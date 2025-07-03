"use client";
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Chip,
  Divider,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import { ArtisanDetail, CraftInfo } from "../../explore/[craftid]/page";

// Mock data for artisan details
const getArtisanData = (id: string) => {
  const artisans: Record<string, ArtisanDetail> = {
    a001: {
      id: "a001",
      name: "王小明",
      avatar: "/josh.jpg",
      specialty: "皮革工藝",
      description:
        "從事皮革工藝超過15年，專精於手工皮件製作。從選皮、裁切到縫製，每個步驟都堅持手工完成，作品充滿溫度與質感。",
      experience: "15年",
      location: "台北市",
      skills: ["手工縫製", "皮革染色", "皮件設計", "客製化製作"],
      contact: {
        phone: "0912-345-678",
        email: "ming@leathercraft.com",
        facebook: "王小明皮革工藝",
        instagram: "@ming_leather",
        website: "www.mingleather.com",
      },
      works: [
        {
          id: "w001",
          title: "手工皮夾",
          image: "/craft1.jpg",
          description: "經典款式，手工縫製，真皮材質，耐用實用。",
        },
        {
          id: "w002",
          title: "真皮背包",
          image: "/craft2.jpg",
          description: "大容量設計，適合日常使用，質感細膩。",
        },
        {
          id: "w003",
          title: "鑰匙圈",
          image: "/craft3.jpg",
          description: "小巧實用，皮革質感，送禮自用兩相宜。",
        },
      ],
    },
    a002: {
      id: "a002",
      name: "李美麗",
      avatar: "/kuma.jpg",
      specialty: "陶藝",
      description:
        "陶藝創作者，專注於生活器皿的製作。作品融合傳統技法與現代美學，讓日常用品也能成為藝術品。",
      experience: "12年",
      location: "台中市",
      skills: ["拉坯", "釉藥調配", "燒製技術", "器皿設計"],
      contact: {
        phone: "0923-456-789",
        email: "beautiful@pottery.com",
        facebook: "李美麗陶藝工作室",
        instagram: "@beautiful_pottery",
        website: "www.beautifulpottery.com",
      },
      works: [
        {
          id: "w004",
          title: "茶具組",
          image: "/craft4.jpg",
          description: "手拉坯製作，釉色溫潤，適合品茗。",
        },
        {
          id: "w005",
          title: "花瓶",
          image: "/craft5.jpg",
          description: "現代簡約設計，適合各種花藝搭配。",
        },
        {
          id: "w006",
          title: "餐具組",
          image: "/craft6.jpg",
          description: "實用美觀，適合日常餐桌使用。",
        },
      ],
    },
    a003: {
      id: "a003",
      name: "陳大華",
      avatar: "/susan.jpg",
      specialty: "鉤針編織",
      description:
        "鉤針編織藝術家，擅長製作各種毛線作品。從圍巾、帽子到玩偶，每一件作品都充滿溫暖與創意。",
      experience: "8年",
      location: "高雄市",
      skills: ["鉤針技法", "毛線配色", "圖案設計", "立體編織"],
      contact: {
        phone: "0934-567-890",
        email: "dahua@crochet.com",
        facebook: "陳大華鉤針編織",
        instagram: "@dahua_crochet",
        website: "www.dahuacrochet.com",
      },
      works: [
        {
          id: "w007",
          title: "毛線玩偶",
          image: "/craft7.jpg",
          description: "可愛造型，適合收藏或送禮。",
        },
        {
          id: "w008",
          title: "圍巾",
          image: "/craft8.jpg",
          description: "保暖舒適，手工編織，冬季必備。",
        },
        {
          id: "w009",
          title: "帽子",
          image: "/craft9.jpg",
          description: "多色可選，時尚百搭。",
        },
      ],
    },
  };
  return artisans[id as keyof typeof artisans] || artisans.a001;
};

export default function ArtisanPage({
  params,
}: {
  params: Promise<{ artisanid: string }>;
}) {
  const [artisanId, setArtisanId] = React.useState<string>("");
  const [artisan, setArtisan] = React.useState<ArtisanDetail | null>(null);

  React.useEffect(() => {
    const loadData = async () => {
      const resolvedParams = await params;
      const id = resolvedParams.artisanid;
      setArtisanId(id);
      setArtisan(getArtisanData(id));
    };
    loadData();
  }, [params]);

  if (!artisan) {
    return <div>載入中...</div>;
  }

  console.log(artisanId);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header Section */}
      <Card sx={{ mb: 4, p: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid>
            <Avatar
              src={artisan.avatar}
              alt={artisan.name}
              sx={{ width: 120, height: 120 }}
            />
          </Grid>
          <Grid>
            <Typography variant="h4" gutterBottom>
              {artisan.name}
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              {artisan.specialty}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <Chip label={`經驗 ${artisan.experience}`} color="secondary" />
              <Chip label={artisan.location} variant="outlined" />
            </Box>
            <Typography variant="body1" color="text.secondary">
              {artisan.description}
            </Typography>
          </Grid>
        </Grid>
      </Card>

      {/* Skills Section */}
      <Card sx={{ mb: 4, p: 3 }}>
        <Typography variant="h5" gutterBottom>
          專長技能
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {artisan.skills.map((skill: string, index: number) => (
            <Chip key={index} label={skill} variant="outlined" />
          ))}
        </Box>
      </Card>

      {/* Contact Section */}
      <Card sx={{ mb: 4, p: 3 }}>
        <Typography variant="h5" gutterBottom>
          聯絡方式
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <List>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary={artisan.contact.phone} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary={artisan.contact.email} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FacebookIcon />
            </ListItemIcon>
            <ListItemText primary={artisan.contact.facebook} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <InstagramIcon />
            </ListItemIcon>
            <ListItemText primary={artisan.contact.instagram} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText primary={artisan.contact.website} />
          </ListItem>
        </List>
      </Card>

      {/* Works Section */}
      <Card sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          作品展示
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Grid container spacing={3}>
          {artisan.works.map((work: CraftInfo) => (
            <Grid key={work.id}>
              <Card>
                <Box sx={{ position: "relative", height: 200 }}>
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" align="center">
                    {work.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {work.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Container>
  );
}
