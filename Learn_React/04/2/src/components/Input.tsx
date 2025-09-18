// export default function Input() {
//   return (
//     <div className="relative w-[278px] h-[110px] bg-black">
//       <div className="absolute left-[19px] top-[33px] w-[240px] h-[44px] flex flex-col gap-[16px]">
//         <input
//           type="text"
//           placeholder="Enter Todo List"
//           className="
//             flex flex-row items-center
//             px-[16px] py-[14px] gap-[10px]
//             w-[240px] h-[44px]
//             bg-white border border-[#4F4F4F] rounded-[8px]
//             font-inter font-medium text-[14px] leading-[17px]
//             text-[#ACACAC] placeholder-[#ACACAC]
//             box-border
//           "
//         />
//       </div>
//     </div>
//   );
// }

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & { type: "text" | "password" | "email" | "number" | "date" };
export default function Input (props: InputProps) {
  const { ...rest } = props;
  return (
    <>
      <input className="inter w-60 h-11 text-sm rounded-lg placeholder:text-[#acacac] bg-white border 
       border-[#4f4f4f] px-4"
      {...rest} 
      />
    </>
  );
}
