// CSS Modules -> classNames
// Tailwind CSS -> tailwind-merge
import { twMerge } from "tailwind-merge";
export default function App() {
  const isBlue = true;
  return (
    <>
      {/* 유틸리티 클래스를 언제 외우고 있지.. */}
      {/* twMerge('px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]')
       */}
      <div className="center">
        <button className="btn-primary">버튼</button>
        <button className={twMerge(`bg-amber-500`, isBlue && `bg-blue-500`)}>
          버튼
        </button>
      </div>
    </>
  );
}
