import React from "react";
import SimpleBottomNavigation from "../components/BottomNavigation";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children} <SimpleBottomNavigation />
    </div>
  );
}

export default layout;
