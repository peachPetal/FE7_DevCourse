import Image from "next/image";
import { anton, jeju, nanumPenScript } from "./layout";
export default async function Page() {
  return (
    <>
      <h1 className={nanumPenScript.className}>Page</h1>
      <h1 className={anton.className}>anton</h1>
      <h1 className={jeju.className}>혼저옵서예</h1>

      <Image
        src={
          "https://cdn.pixabay.com/photo/2018/03/02/19/21/nature-3194001_1280.jpg"
        }
        alt="star"
        width={400}
        height={400}
        // fill
        priority
      />
    </>
  );
}
