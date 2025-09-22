type CountOutsideProps = {
  count: number;
};

export default function CountOutside({ count }: CountOutsideProps) {
  return (
    <div>
      <h1>Count Outside: {count}</h1>
    </div>
  );
}
