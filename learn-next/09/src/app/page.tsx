import RandomNum from "@/components/RandomNum";
import RandomNumber from "@/components/RandomNumber";
import { Suspense } from "react";

export default async function Page() {
  return (
    <>
      <h1>Random Number</h1>
      <Suspense fallback={null}>
        <RandomNum />
      </Suspense>
      <Suspense fallback={null}>
        <RandomNumber />
      </Suspense>
    </>
  );
}
