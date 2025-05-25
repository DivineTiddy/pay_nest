import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Lucide icon library
import { getCookie } from "@/manager/cookies";

const Balance_ui = () => {
  const [showBalance, setShowBalance] = useState(true);
  const {first_Name , balance} = getCookie();
 
    const formattedAmount = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  }).format(balance);
  return (
    <div className="bg-[#FDFDFF] lg:p-0 p-4 w-full font-inter lg:mt-8">
      <span className=" space-y-2">
        <p className="text-xs text-[#767676] font-medium lg:text-lg">Hello, {first_Name}</p>
        <h1 className="text-lg text-[#2B2B2B] font-semibold lg:text-2xl">Welcome back</h1>
      </span>
      <div className="bg-[#474ED3] border-[1px] border-[#E9E9E9] lg:w-[80%] px-6 py-4 lg:py-8 lg:px-10 lg:rounded-[30px] rounded-[20px] mt-4 lg:mt-7">
        <div className="flex justify-between items-center">
          <span>
            <p className="font-normal text-xs text-[#E2E3FF] lg:text-base">
              Available balance
            </p>
            {showBalance ? (
              <h1 className="font-bold text-2xl text-[#E8E9FF] lg:text-3xl lg:mt-5 lg:tracking-wide">
               {formattedAmount}
                
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
            {showBalance ? <EyeOff className="cursor-pointer" size={20} /> : <Eye className="cursor-pointer"  size={20} />}
          </button>
        </div>
        <span className="flex flex-col gap-1.5 mt-7">
          <p className="font-normal text-xs text-[#E2E3FF] lg:text-base">Account Number</p>
          <span className="flex items-center gap-2">
            <h1 className="font-normal text-base tracking-[3px] lg:tracking-[7px] text-[#E2E3FF]">
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
