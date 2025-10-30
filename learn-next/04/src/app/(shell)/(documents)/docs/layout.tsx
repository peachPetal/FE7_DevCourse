export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <h1>Docs Root Header</h1>
        {children}
        <h1>Docs Root Footer</h1>
      </header>
    </>
  );
}
