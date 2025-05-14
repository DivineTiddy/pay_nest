import React from "react";

const CodeInput = ({ value, onChange }) => {
  console.log(value); // e.g., "      "
  return (
    <input
      type="number"
      min="0"
      max="9"
      value={value}
      onChange={onChange}
      className={`${value ? "border-[#474ED3]":"border-[#DBDBDB]"} border-[1px]  p-3 w-[48px] h-[48px] outline-0 rounded-[8px]  [appearance:textfield] [moz-appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none text-center`}
    />
  );
};

export default CodeInput;
