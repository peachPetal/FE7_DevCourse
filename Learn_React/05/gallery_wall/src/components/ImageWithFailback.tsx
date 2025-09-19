import { useState } from "react";

type ImageWithFailbackProps = React.ComponentPropsWithoutRef<"img">;
const ERROR_IMG_SRC = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

export default function ImageWithFailback(props: ImageWithFailbackProps) {
  const [didError, setDidError] = useState(false);
  const { src, alt, style, className, ...rest } = props;

  const handleError = () => {
    setDidError(true);
  };

  return didError ? (
    <div className={`inline-block bg-grey-100 text-center align-middle ${className ?? ""}`} 
    style = {style}>
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt={alt} {...rest} className={className} />
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center w-full h-full">
      <img
        src={src}
        alt={alt}
        style={style}
        {...rest}
        className={className}
        onError={handleError}
      />
    </div>
  );
}