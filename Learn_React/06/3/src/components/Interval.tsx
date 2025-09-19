import { useEffect } from "react";

export default function Interval () {
    // 클린 업 함수
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Interval 코드 실행");
        }, 1000);
        return () => {
            clearInterval(interval);
            console.log("Interval 컴포넌트 제거됨");
        };
    }, [])
  return (
    <>
      <h1>Interval Component</h1>
    </>
  );
}