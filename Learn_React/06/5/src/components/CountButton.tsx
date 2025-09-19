type CountButtonProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function CountButton({ count, setCount }: CountButtonProps) {
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>감소</button>
      <button onClick={() => setCount(0)}>0</button>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}
