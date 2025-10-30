export default async function Header() {
  await new Promise((resolve) => setTimeout(resolve, 12000));

  return (
    <>
      <h1>Header</h1>
    </>
  );
}
