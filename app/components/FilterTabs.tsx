import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Options = [
  { title: "All", value: "all" },
  { title: "Leather", value: "leather" },
  { title: "Clay", value: "clay" },
  { title: "Crochet", value: "crochet" },
];

function FilterTabs({ onChange }: { onChange: (val: string) => void }) {
  const [value, setValue] = React.useState(Options[0].value);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{ mb: 2 }}
      >
        {Options.map((_) => (
          <Tab value={_.value} key={_.value} label={_.title} />
        ))}
      </Tabs>
    </div>
  );
}

export default FilterTabs;
