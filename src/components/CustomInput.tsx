import React from "react";
import { Input } from "@/components/ui/input";

type Props = {
  placeholder?: string;
  type?: string;
  className?: string;
};

const CustomInput: React.FC<Props> = ({
  placeholder = "placeholder",
  type = "text",
  className,
}) => {
  return (
    <div className="flex flex-col">
      {/* <p className="ml-3 mb-1 text-[#62697E] text-xs"> {placeholder}</p> */}
      <Input className={className} placeholder={placeholder} type={type} />
    </div>
  );
};

export default CustomInput;
