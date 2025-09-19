type ButtonProps = {
  label: string;
  bg?: string; // Tailwind 색상 클래스 (예: "bg-[#4F4F4F]")
};

export default function Button({ label, bg = "bg-[#4F4F4F]" }: ButtonProps) {
  return (
    <button
      className={`flex flex-row justify-center items-center 
        px-[20px] py-[14px] gap-[10px]
        w-[325px] h-[44px] rounded-lg ${bg}`}
    >
      {/* Label */}
      <span
        className="flex items-center w-[41px] h-[17px]
        font-inter font-medium text-[14px] leading-[17px]
        text-[#F5F5F5]"
      >
        {label}
      </span>
    </button>
  );
}