interface ButtonProps {
  label?: string;
  bgColor?: string;
  hoverColor?: string;
  onClick?: () => void;
}

export default function Button({
  label = "Add",
  bgColor = "#4F4F4F",
  hoverColor = "#6F6F6F", // 기본 hover 색
  onClick = () => alert("Button clicked!"), // 기본 클릭 이벤트
}: ButtonProps) {
  return (
    <button
      className="
        flex justify-center items-center
        px-[20px] py-[14px] gap-[10px]
        w-[77px] h-[44px]
        rounded-[8px]
        font-inter font-medium text-[14px] leading-[17px]
        text-[#F5F5F5]
        transition-colors duration-200
      "
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = hoverColor;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = bgColor;
      }}
    >
      {label}
    </button>
  );
}
