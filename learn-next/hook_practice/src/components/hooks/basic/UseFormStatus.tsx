import { useActionState } from "react";
import SubmitButton from "./ui/SubmitButton";
async function action(prev: string, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return formData.get("title") as string;
}
export default function UseFormStatus() {
  const [title, createPost] = useActionState(action, "");
  return (
    <>
      <form action={createPost} className="space-y-3">
        <input
          name="title"
          className="border px-2 py-1"
          placeholder="제목 입력"
        />
        <SubmitButton />
        <p>Saved title: {title}</p>
      </form>
    </>
  );
}
