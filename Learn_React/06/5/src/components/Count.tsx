import CountButton from "./CountButton";
import CountDisplay from "./CountDisplay";

type CountProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function Count({ count, setCount }: CountProps) {
  return (
    <div>
      <CountDisplay count={count} />
      <CountButton count={count} setCount={setCount} />
    </div>
  );
}
