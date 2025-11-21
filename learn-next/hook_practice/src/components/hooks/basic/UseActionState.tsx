import { useState } from "react";

export default function UseActionState() {
  const [name, setName] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // 기본 제출 막기
    setPending(true);

    // FormData 읽기
    const formData = new FormData(e.currentTarget);
    await new Promise((r) => setTimeout(r, 1000));

    const newName = formData.get("name") as string;
    setName(newName);

    setPending(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="이름 입력" />
      <button disabled={pending}>{pending ? "Saving..." : "Save"}</button>
      <p>Saved: {name}</p>
    </form>
  );
}
