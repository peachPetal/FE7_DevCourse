import { useState } from "react";

type CheckboxProps = {
  label: string;
};

export default function Checkbox({ label }: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  return (
    <label
      className="flex flex-row items-center gap-[8px] w-[240px] h-[20px] cursor-pointer relative"
    >
      {/* CheckboxContainer */}
      <div
        className={`relative flex items-center justify-center
        w-[20px] h-[20px] rounded-md border 
        ${checked ? "bg-[#4F4F4F] border-[#4F4F4F]" : "bg-white border-[#4F4F4F]"}`}
        onClick={() => setChecked(!checked)}
      >
        {checked && (
          <img
            src="/check.svg"
            alt="check"
            className="absolute w-[19.2px] h-[19.2px] left-[0.83px] top-0"
          />
        )}
      </div>

      {/* Label Text */}
      <span
        className="w-[212px] h-[17px] font-inter font-medium text-[14px]
        leading-[17px] text-[#4F4F4F] flex items-center"
      >
        {label}
      </span>
    </label>
  );
}