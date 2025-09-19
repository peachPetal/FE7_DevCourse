type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & { type: "text" | "password" | "email" };
export default function Input (props: InputProps) {
    const {placeholder} = props;
    return (
        <div className="box-border flex flex-row items-center
        p-[14px] px-[16px] gap-[10px] w-[325px] h-[44px]
        bg-white border border-[#4f4f4f] rounded-lg">
            <input placeholder={placeholder}
            className="w-[165px] h-[17px]
            font-inter font-medium text-[14px]
            leading-[17px] text-[#acacac">
            </input>
        </div>
    );
}

