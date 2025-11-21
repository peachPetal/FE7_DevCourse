import { useState } from "react";

export default function UseTransition2() {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);

  const handleClick = async () => {
    try {
      setIsPending(true); // 수동 로딩 시작
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw new Error("Error");

      const result = await res.json();
      setData(result);
    } catch (e) {
      console.log(e instanceof Error && e.message);
    } finally {
      setIsPending(false); // 수동 로딩 종료
    }
  };

  return (
    <>
      <button onClick={handleClick}>데이터 패칭</button>
      {isPending ? <p>Loading</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  );
}
