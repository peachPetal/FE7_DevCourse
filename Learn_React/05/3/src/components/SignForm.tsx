import Input from "./Input";
import Checkbox from "./Checkbox";
import Button from "./Button";

export default function SignForm() {
  return (
    <div
      className="absolute box-border flex flex-col items-start
      p-[40px_25px] gap-[20px]
      w-[375px] h-[495px]
      left-[calc(50%-375px/2+248.5px)] top-[103px]
      bg-white border border-[#D1D1D1] rounded-lg"
    >
      {/* Frame 7 : 제목 + 설명 */}
      <div className="flex flex-col items-start gap-[10px] w-[325px] h-[58px]">
        <h1 className="font-inter font-bold text-[20px] leading-[28px] text-[#4F4F4F]">
          Sign Up
        </h1>
        <p className="font-inter font-normal text-[14px] leading-[17px] text-[#4F4F4F]">
          Please enter your details to create a new account.
        </p>
      </div>

      {/* Frame 2 : 입력 영역 */}
      <div className="flex flex-col items-start gap-[32px] w-[325px] h-[337px]">
        {/* Frame 5 : 인풋 */}
        <div className="flex flex-col gap-[16px] w-[325px] h-[200px]">
          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </div>

        {/* CheckBox */}
        <Checkbox label="I agree with terms and policies." />

        {/* Frame 6 : 버튼 */}
        <div className="flex flex-col gap-[16px] w-[325px] h-[105px]">
          <Button label="Sign Up" bg="bg-[#4F4F4F]" text="text-[#F5F5F5]" />
          <Button label="Already have an account?" bg="bg-white border border-[#4F4F4F]" text="text-[#4F4F4F]" />
        </div>
      </div>
    </div>
  );
}
