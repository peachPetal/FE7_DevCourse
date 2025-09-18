// import { useState } from "react";

// export default function CheckBox() {
//   const [checked, setChecked] = useState(false);

//   return (
//     <div className="relative w-[292px] h-[77px] bg-black flex items-center">
//       <div
//         className="absolute w-[20.03px] h-[20.03px] left-[23px] top-[28px] border-[1.66917px] border-[#4F4F4F] rounded-[5.00752px] bg-[#4F4F4F] flex items-center justify-center cursor-pointer"
//         onClick={() => setChecked(!checked)}
//       >
//       {checked && (
//         <div className="absolute w-[19.2px] h-[19.2px] left-[0.83px] top-0 flex items-center justify-center">
//           <img
//             src="/check.svg"
//             alt="check"
//             className="w-[100%] h-[100%] object-contain"
//           />
//         </div>
//       )}
//       </div>
//       <span className="ml-[53px] font-inter font-medium text-[14px] leading-[17px] text-white">
//         I agree with <span className="font-bold">terms</span> and <span className="font-bold">policies</span>.
//       </span>
//     </div>
//   );
// }

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {type: "checkbox"};
export default function CheckBox (props: InputProps) {
  const {children = "I Agree", ...rest} = props;
  return (
    <>
      <div className="flex items-center gap-2">
        <input className="appearance-none w-5 h-5 rounded-[5px]
        border-[#4f4f4f] bg-[#4f4f4f] checked:bg-[url('/check.svg')]
        checked:bg-no-repeat checked:bg-center"
        {...rest}
        />
        <label htmlFor="">{children}</label>
      </div>
    </>
  );
}