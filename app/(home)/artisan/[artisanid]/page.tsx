import React from "react";

export default async function ArtisanPage({
  params,
}: {
  params: Promise<{ artisanid: string }>;
}) {
  const artisanId = (await params).artisanid;
  return <div>藝術家頁面:{artisanId}</div>;
}
