import React, { useState } from "react";
import CodeInput from "@/ui/input/CodeInput";
import { Link, useNavigate } from "react-router-dom";
import { verification } from "@/hooks/auth";
import { toast, Zoom } from "react-toastify";
import Loarder from "@/ui/loader/Loarder";

const Verify = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleChange = (index) => (e) => {
    const val = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (val.length > 1) return;

    const newCode = code.substring(0, index) + val + code.substring(index + 1);
    setCode(newCode);
  };
  const codeSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      await verification(code);
      toast.success("verify success", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
      navigate("/dashboard");
    } catch (error) {
      const {response} = error;
      toast.error(`${response.data.error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
    } finally {
      setIsLoading(false);
    }
    setCode("");
  };
  return (
    <div className="bg-[#F5F5F5] px-3   lg:px-10 h-screen w-full flex justify-center items-center">
      <form
        onSubmit={codeSubmit}
        className={` flex font-inter flex-col items-center py-5 px-10 bg-[#FDFDFD] border-[1px] border-[#F2F2F2] rounded-[16px]`}
      >
        <h1 className="font-inter font-bold text-2xl text-black text-center">
          Verify Your Email
        </h1>
        <p className="text-[#767676] font-normal text-base mt-3 text-center">
          Enter the six(6) digit code sent to abcxxx@gmail.com
        </p>
        <div className="flex gap-4 mt-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <CodeInput
              key={index}
              value={code[index] || ""}
              onChange={handleChange(index)}
            />
          ))}
        </div>
        <span className="font-normal text-base text-center mt-5">
          Didn’t receive code?
          <Link className="font-semibold ml-2">Resend.</Link>
        </span>

        <button
          type="submit"
          className={`${
            isLoading ? " cursor-not-allowed " : " cursor-pointer"
          } text-[#F0F1FF] bg-[#474ED3] flex justify-center items-center py-4 rounded-[8px] w-full text-center text-base font-normal `}
        >
          {isLoading ? <Loarder /> : "  Verify & Continue"}
        </button>
      </form>
    </div>
  );
};

export default Verify;
