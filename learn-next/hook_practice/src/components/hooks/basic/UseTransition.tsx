import { useState } from "react";
const generateItems = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
    description: `Description for Item ${i}`,
  }));
};
const items = generateItems(50000);

export default function UseTransition() {
  const [input, setInput] = useState("");
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(input.toLowerCase())
  );
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <>
      <h1>UseTranstion</h1>
      <input type="text" value={input} onChange={onChange} />
      <ul>
        {filteredItems.map((d) => (
          <li key={d.id}>
            {d.name} - {d.description}
          </li>
        ))}
      </ul>
    </>
  );
}
