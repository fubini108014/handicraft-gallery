export default async function HandicraftsPage({
  params,
}: {
  params: Promise<{ craftid: string }>;
}) {
  const craftId = (await params).craftid;

  return (
    <div>
      <h1>Handicrafts作品:{craftId}</h1>
    </div>
  );
}
