export default function GlobalError({ error }: { error: Error }) {
  return (
    <>
      <h1>GlobalError Component</h1>
      <p>{error.message}</p>
    </>
  );
}
