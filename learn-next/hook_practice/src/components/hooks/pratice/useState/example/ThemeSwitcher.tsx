import { useState } from "react";

const themes = [
  { name: "Light", bg: "bg-gray-100", text: "text-gray-800" },
  { name: "Dark", bg: "bg-gray-800", text: "text-white" },
  { name: "Blue", bg: "bg-blue-500", text: "text-white" },
  { name: "Green", bg: "bg-green-500", text: "text-white" },
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [message, setMessage] = useState("Hello, World!");
  const theme = themes[currentTheme];

  const switchTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  return (
    <div
      className={`${theme.bg} ${theme.text} p-4 rounded-lg transition-colors duration-200`}
    >
      <div className="space-y-4">
        {/* 메시지 입력 */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 rounded border text-gray-800 bg-white"
          placeholder="Enter your message"
        />

        {/* 메시지 표시 */}
        <div className="text-center text-xl font-semibold">{message}</div>

        {/* 테마 변경 버튼 */}
        <button
          onClick={switchTheme}
          className="w-full px-4 py-2 bg-white text-gray-800 rounded hover:bg-gray-100 transition-colors"
        >
          Switch Theme ({themes[currentTheme].name})
        </button>
      </div>
    </div>
  );
}