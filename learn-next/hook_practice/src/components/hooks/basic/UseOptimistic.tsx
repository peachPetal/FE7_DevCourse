"use client";

import { useState } from "react";

export default function NonOptimisticCounter() {
  const [count, setCount] = useState(0);
  const [isSaving, setIsSaving] = useState(false);

  // 서버에 저장된다고 가정 (3초 지연)
  async function saveCountToServer(next: number) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("saved:", next);
    setCount(next);
  }

  const handleClick = async () => {
    if (isSaving) return; // 저장 중일 때 중복 클릭 방지

    const next = count + 1;

    // 1️⃣ UI는 그대로 두고
    setIsSaving(true);
    // 2️⃣ 서버에 저장 시작
    await saveCountToServer(next);
    setIsSaving(false);
  };

  return (
    <>
      <p>서버와 동기화된 값 (느린 UI): {count}</p>
      <button
        onClick={handleClick}
        disabled={isSaving}
        className="rounded border px-4 py-2"
      >
        {isSaving ? "저장 중..." : "증가"}
      </button>
      <p style={{ marginTop: 8, fontSize: 12, color: "gray" }}>
        버튼을 누르면 3초 뒤에야 숫자가 증가해요.
        <br />
        이게 “낙관적 업데이트 없이” 서버 응답을 기다렸다가 화면을 바꾸는
        패턴입니다.
      </p>
    </>
  );
}
