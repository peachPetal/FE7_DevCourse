"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="px-3 py-1 border rounded"
    >
      {pending ? "저장 중..." : "저장하기"}
    </button>
  );
}
