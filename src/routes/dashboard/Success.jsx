import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, amount } = location.state || {};

  return (
    <div className="flex items-center justify-center h-screen w-full bg-[#F5F5F5] px-3 lg:px-0">
      <div className="w-full lg:w-[500px]  rounded-2xl bg-[#FDFDFF] py-10 px-8 flex flex-col gap-5 items-center">
        <img src="icon\success.svg" alt="icon" />
        <div className="">
          <h1 className="font-semibold text-[28px] text-[#2B2B2B] text-center">
            Successful
          </h1>
          <p className="text-[#767676] text-base font-normal text-center">
            {email
              ? `  N${amount} has been successfully sent to ${email}`
            
              : `N${amount} has been credited to your account`}
          </p>
        </div>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-[#474ED3] mt-4 py-4 px-6 font-bold text-base text-[#F3F3FF] rounded-[8px] cursor-pointer"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Success;
