import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, Zoom } from "react-toastify";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { verification } from "@/hooks/auth";
import Loarder from "@/ui/loader/Loarder";
import { getCookie } from "@/manager/cookies";

const Verify = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  // const email = getCookie();
    const {email } = getCookie();
  

  const codeSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      await verification(otp); // Make sure this expects a string or number
      toast.success("verify success", {
        position: "top-right",
        autoClose: 5000,
        transition: Zoom,
      });
      navigate("/dashboard");
    } catch (error) {
      const { response } = error;
      toast.error(`${response?.data?.error || "Verification failed"}`, {
        position: "top-right",
        autoClose: 5000,
        transition: Zoom,
      });
    } finally {
      setIsLoading(false);
    }
    setOtp("");
  };

  return (
    <div className="bg-[#F5F5F5] px-5 lg:px-10 h-screen w-full flex justify-center items-center">
      <form
        onSubmit={codeSubmit}
        className="flex font-inter flex-col items-center py-5 px-10 bg-[#FDFDFD] border-[1px] border-[#F2F2F2] rounded-[16px]"
      >
        <h1 className="font-inter font-bold text-2xl text-black text-center">
          Verify Your Email
        </h1>
        <p className="text-[#767676] font-normal text-base mt-3 text-center">
          Enter the six(6) digit code sent to {email}
        </p>

        <div className="flex gap-4 mt-5">
          <InputOTP
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS}
            value={otp}
            onChange={(val) => setOtp(val)}
          >
            <InputOTPGroup className="gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <InputOTPSlot className="border-[1px] border-[#DBDBDB] rounded-[8px]" key={i} index={i} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>

        <span className="font-normal text-base text-center mt-5">
          Didn’t receive code?
          <Link className="font-semibold ml-2" to="#">
            Resend.
          </Link>
        </span>

        <button
          type="submit"
          className={`${
            isLoading ? "cursor-not-allowed" : "cursor-pointer"
          } text-[#F0F1FF] bg-[#474ED3] flex justify-center items-center py-4 rounded-[8px] w-full text-center text-base font-normal mt-6`}
        >
          {isLoading ? <Loarder /> : "Verify & Continue"}
        </button>
      </form>
    </div>
  );
};

export default Verify;
