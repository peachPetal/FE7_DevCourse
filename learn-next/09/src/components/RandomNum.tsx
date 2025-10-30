import { cacheLife, cacheTag } from "next/cache";

async function getRandomNumber() {
  "use cache";
  cacheTag("random");
  const res = await fetch("http://localhost:4000/random");
  const randomNumber = await res.json();
  return randomNumber;
}
export default async function RandomNum() {
  const randomNumber = await getRandomNumber();
  return (
    <>
      <h1>{randomNumber}</h1>
    </>
  );
}
