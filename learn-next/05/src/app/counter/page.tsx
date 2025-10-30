import Counter from "@/components/Counter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter Page",
};
export default function Page() {
  return (
    <>
      <Counter />
    </>
  );
}
