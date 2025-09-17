import Button from "./Button";

export default function InputWithButton() {
  return (
    <div className="relative w-[363px] h-[110px] bg-black flex justify-center items-center">
      <div className="absolute left-[19px] top-[33px] w-[325px] h-[44px] flex flex-row gap-[8px]">
        <input
          type="text"
          placeholder="Enter Todo List"
          className="
            flex-1
            px-[16px] py-[14px] gap-[10px]
            bg-white border border-[#4F4F4F] rounded-[8px]
            font-inter font-medium text-[14px] leading-[17px]
            text-[#ACACAC] placeholder-[#ACACAC]
            box-border
          "
        />
        <Button />
      </div>
    </div>
  );
}
