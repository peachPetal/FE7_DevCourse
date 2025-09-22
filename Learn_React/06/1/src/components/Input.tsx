import type { Dispatch, SetStateAction } from "react";
type InputPropps = Omit<React.ComponentPropsWithoutRef<"input">, "value">
 & {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
};
export default function Input (props: InputPropps) {
    const {value, setValue, ...rest} = props;
    return (
    <>
      <input {...rest}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
    </>
  );
}