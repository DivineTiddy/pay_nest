import CodeInput from "@/ui/input/CodeInput";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const [code, setCode] = useState("");
  const [activeCodeField, setActiveCodeField] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const [registerData, setRegisterData] = useState();
  const firstName = watch("first_Name");
  const lastName = watch("last_Name");
  const email = watch("email");
  const password = watch("password");

  const handleChange = (index) => (e) => {
    const val = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (val.length > 1) return;

    const newCode = code.substring(0, index) + val + code.substring(index + 1);
    setCode(newCode);
  };

  const onSubmit = (data) => {
    setRegisterData(data);
    setActiveCodeField(false);
  };
  const codeSubmit = (e) => {
    e.preventDefault();
    console.log(registerData, code);
    setCode("");
  };

  return (
    <div className="bg-[#F5F5F5] px-3   lg:px-10 h-screen w-full flex justify-center items-center">
      {/* Registration Form */}
      <div
        className={`${
          activeCodeField ? "flex" : "hidden"
        } flex-col py-5 px-5 md:px-10 bg-[#FDFDFD]  border-[1px] border-[#F2F2F2] rounded-[16px] w-full md:w-[600px]`}
      >
        <div className="w-full flex justify-center">
          <img
            src="/image/payNestLogo.svg"
            alt="logo"
            className="w-[60px] md:w-[85px]"
          />
        </div>
        <div className="flex flex-col justify-center mt-7">
          <h1 className="font-inter font-bold text-2xl md:text-[30px] text-black text-center">
            Welcome to PayNest
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full mt-5 space-y-[30px] font-inter font-normal text-base"
          >
            <div className="text-[#2B2B2B] w-full space-y-4 md:space-y-0  md:flex items-center justify-between">
              <div className="  flex flex-col gap-2 lg:w-[200px]">
                <label>First Name</label>
                <input
                  type="text"
                  {...register("first_Name", { required: true })}
                  aria-invalid={errors.first_Name ? "true" : "false"}
                  placeholder="Divine"
                  className={`duration-300 ease-in-out border-[1px] text-[#2B2B2B] rounded-[8px] outline-0 py-3.5 px-4 ${
                    firstName ? "border-[#474ED3]" : "border-[#DBDBDB]"
                  }`}
                />
                {errors.first_Name?.type === "required" && (
                  <p role="alert" className="text-sm text-red-400">
                    *
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2 lg:w-[200px]">
                <label>Last Name</label>
                <input
                  type="text"
                  {...register("last_Name", { required: true })}
                  aria-invalid={errors.last_Name ? "true" : "false"}
                  placeholder="Tiddy"
                  className={`duration-300 ease-in-out border-[1px] text-[#2B2B2B] rounded-[8px] outline-0 py-3.5 px-4 ${
                    lastName ? "border-[#474ED3]" : "border-[#DBDBDB]"
                  }`}
                />
                {errors.last_Name?.type === "required" && (
                  <p role="alert" className="text-sm text-red-400">
                    *
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Email Address</label>
              <input
                type="email"
                {...register("email", { required: true })}
                aria-invalid={errors.email ? "true" : "false"}
                placeholder="example@gmail.com"
                className={`duration-300 ease-in-out border-[1px] text-[#2B2B2B] rounded-[8px] outline-0 py-3.5 px-4 ${
                  email ? "border-[#474ED3]" : "border-[#DBDBDB]"
                }`}
              />
              {errors.email?.type === "required" && (
                <p role="alert" className="text-sm text-red-400">
                  *
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Create Password</label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 20 })}
                aria-invalid={errors.password ? "true" : "false"}
                placeholder="********"
                className={`duration-300 ease-in-out border-[1px] text-[#2B2B2B] rounded-[8px] outline-0 py-3.5 px-4 ${
                  password ? "border-[#474ED3] " : "border-[#DBDBDB]"
                }`}
              />
              {errors.password?.type === "required" && (
                <p role="alert" className="text-sm text-red-400">
                  *
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-[#474ED3] text-[#F0F1FF] py-4 rounded-[8px] w-full text-center text-base font-normal cursor-pointer"
            >
              Create Account
            </button>
          </form>
          <span className="mt-10 md:mt-3 text-center">
            Have an account?
            <Link to="/login" className="font-semibold ml-1">
              Login
            </Link>
          </span>
        </div>
      </div>

      {/* Email Confirmation */}
      <form
        onSubmit={codeSubmit}
        className={`${
          activeCodeField ? "hidden" : "flex"
        } font-inter flex-col items-center py-5 px-10 bg-[#FDFDFD] border-[1px] border-[#F2F2F2] rounded-[16px]`}
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
        <button className="bg-[#474ED3] text-[#F0F1FF] mt-5 py-4 rounded-[8px] w-full text-base font-normal cursor-pointer">
          Verify & Continue
        </button>
      </form>
    </div>
  );
};

export default Register;
