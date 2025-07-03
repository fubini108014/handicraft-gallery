import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export interface MemberCardProps {
  avatar: string; // image url
  name: string;
  specialty: string;
  onClick?: () => void;
}

export const MemberCard = ({
  avatar,
  name,
  specialty,
  onClick,
}: MemberCardProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        p: 2,
        cursor: onClick ? "pointer" : "default",
      }}
      onClick={onClick}
    >
      <Avatar src={avatar} alt={name} sx={{ width: 64, height: 64, mr: 2 }} />
      <CardContent sx={{ flex: 1, p: 0 }}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {specialty}
        </Typography>
      </CardContent>
    </Card>
  );
};
