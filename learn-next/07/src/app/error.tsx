"use client";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void; // 에러가 발생한 라우트 경로를 재렌더링 하는 역할을 하는 함수
}) {
  return (
    <>
      <h1>{error.message}</h1>
      <button onClick={reset}>다시 시도하기</button>
    </>
  );
}
