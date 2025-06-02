import React from "react";
import { SimpleBottomNavigation } from "../components/BottomNavigation";
import BasicAppBar from "../components/AppBar";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <BasicAppBar />
      {children} <SimpleBottomNavigation />
    </div>
  );
}

export default layout;
