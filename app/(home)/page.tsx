import CraftCard from "../components/CraftCard";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <div>
      <h1>熱門推薦</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={6}>
          <CraftCard
            craftInfo={{
              title: "我是title",
              image: "/camera.jpg",
              description: "我是description",
            }}
          />
        </Grid>
        <Grid size={6}>
          <CraftCard
            craftInfo={{
              title: "sdf",
              image: "/cat.jpg",
              description: "asdas",
            }}
          />
        </Grid>
      </Grid>
      <h1>最新作品</h1>
      <h1>藝術家列表</h1>
    </div>
  );
}
