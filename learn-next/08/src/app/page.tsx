import { revalidatePath, revalidateTag } from "next/cache";
import Link from "next/link";

async function getRandomNumber() {
  const res = await fetch("http://localhost:4000/random", {
    cache: "force-cache",
    next: {
      tags: ["random", "number", "num"],
    },
  });
  const randomNum = await res.json();
  return randomNum;
}

export async function generateMetadata() {
  const randomNum = await getRandomNumber();
  return {
    title: `${randomNum}`,
  };
}

const handle = async () => {
  "use server";
  revalidatePath("/");
  revalidateTag("random", "max");
};

export default async function Page() {
  const randomNum = await getRandomNumber();
  return (
    <>
      <h1>Page: {randomNum}</h1>

      <div style={{ height: "6000px" }}></div>

      <Link href={"/about"} prefetch={true}>
        About
      </Link>
      <form action={handle}>
        <button>초기화</button>
      </form>
    </>
  );
}

// a -> /item/1, /item/1
//    요청        Request Memoization    Data cache      Data Source
//    -->   ---->     MISS     -------->  MISSS   ------>  HIT
//         <------    SET      <--------  SET      <-------
//    --->  ----->   HIT
//    <---  <----

// b -> /item/1, /item/1
//    요청        Request Memoization    Data cache      Data Source
//    -->   ---->     MISS     -------->  HIT
//         <------    SET      <--------  SET
//    --->  ----->   HIT
//    <---  <----
