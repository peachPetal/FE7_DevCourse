import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increase = () => {
    setCount((prev) => prev + step);
  };

  const decrease = () => {
    setCount((prev) => prev - step);
  };

  const reset = () => {
    setCount(0);
  };

  const changeStep = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStep(Number(e.target.value));
  };

  return (
    <div className="space-y-4">
      {/* 카운트 표시 */}
      <div className="text-center">
        <span className="text-4xl font-bold text-blue-600">{count}</span>
      </div>

      {/* 버튼 그룹 */}
      <div className="flex justify-center space-x-2">
        <button
          onClick={decrease}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Decrease
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
        <button
          onClick={increase}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Increase
        </button>
      </div>

      {/* Step 선택 */}
      <div className="flex items-center justify-center space-x-2">
        <span className="text-sm text-gray-600">Step:</span>
        <select
          value={step}
          onChange={changeStep}
          className="border rounded px-2 py-1"
        >
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
}