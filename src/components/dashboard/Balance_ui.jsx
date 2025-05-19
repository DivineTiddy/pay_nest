import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Lucide icon library

const Balance_ui = () => {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <div className="bg-[#FDFDFF] p-4 w-full mt-4 font-inter">
      <span className=" space-y-2">
        <p className="text-xs text-[#767676] font-medium">Hello, Ocean</p>
        <h1 className="text-lg text-[#2B2B2B] font-semibold">Welcome back</h1>
      </span>
      <div className="bg-[#474ED3] border-[1px] border-[#E9E9E9] px-6 py-4 rounded-[16px] mt-4">
        <div className="flex justify-between items-center">
          <span>
            <p className="font-normal text-xs text-[#E2E3FF]">
              Available balance
            </p>
            {showBalance ? (
              <h1 className="font-bold text-2xl text-[#E8E9FF]">
                NGN 1,200,455{" "}
                <span className="text-[#E2E3FF] font-normal">.00</span>{" "}
              </h1>
            ) : (
              <h1 className="font-bold text-2xl text-[#E8E9FF]">******</h1>
            )}
          </span>
          <button
            type="button"
            onClick={() => setShowBalance((prev) => !prev)}
            className=" transform -translate-y-1/2 text-[#E2E3FF]"
            aria-label="Toggle password visibility"
          >
            {showBalance ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <span className="flex flex-col gap-1.5 mt-7">
          <p className="font-normal text-xs text-[#E2E3FF]">Account Number</p>
          <span className="flex items-center gap-2">
            <h1 className="font-normal text-base tracking-[3px] text-[#E2E3FF]">
              2174740175{" "}
            </h1>
            <img
              src="icon\copyIcon.svg"
              alt="icon"
              className="cursor-pointer"
            />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Balance_ui;
