import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react"; // Lucide icon library
import { login } from "@/hooks/auth";
import { toast, Zoom } from "react-toastify";
import Loarder from "@/ui/loader/Loarder";
import { accessTokenCookie } from "@/manager/cookies";

const Login = () => {
  const [showBalance, setShowBalance] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, watch } = useForm();
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      const responses = await login(data);
      accessTokenCookie(responses.accessToken);

      toast.success("Login successfully", {
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
      const { response } = error;

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
      if (
        response.data.error === "Please verify your email before logging in"
      ) {
        navigate("/verify");
      }
    } finally {
      setIsLoading(false);
    }
  };
  const email = watch("email");
  const password = watch("password");
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-black h-screen bg-[#F5F5F5] px-3 flex flex-col justify-center items-center "
    >
      <div className="flex flex-col w-full px-3 md:w-[600px] py-5 md:px-10 bg-[#FDFDFD] border-[1px] border-[#F2F2F2] rounded-[16px]">
        <div className="w-full flex justify-center">
          <img
            src="\image\payNestLogo.svg"
            alt="logo"
            className="md:w-[85px] w-[60px]"
          />
        </div>
        <div className="mt-7">
          <h1 className="font-inter font-bold text-2xl md:text-[30px] text-black text-center ">
            Welcome Back!
          </h1>
          <div className="space-y-[30px] mt-5 text-base">
            <div className="flex flex-col  gap-2">
              <label>Email Address</label>
              <input
                {...register("email", { required: true })}
                type="text"
                placeholder="abc@gmail.com"
                className={`duration-300 ease-in-out border-[1px] text-[#2B2B2B] rounded-[8px] outline-0 py-3.5 px-4 ${
                  email ? "border-[#474ED3]" : "border-[#DBDBDB]"
                }`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Password</label>
              <div
                className={`flex items-center gap-1 duration-300 ease-in-out border-[1px] text-[#2B2B2B] rounded-[8px] px-4 ${
                  password ? "border-[#474ED3]" : "border-[#DBDBDB]"
                }`}
              >
                <input
                  {...register("password", { required: true })}
                  type={showBalance ? "text" : "password"}
                  placeholder="xxxxxxxxxxxxx"
                  className="w-full outline-0 py-3.5"
                />
                <button
                  type="button"
                  onClick={() => setShowBalance((prev) => !prev)}
                  className="text-[#949494]"
                  aria-label="Toggle password visibility"
                >
                  {showBalance ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <Link className="text-end underline">Forgot password?</Link>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className={`${
            isLoading ? " cursor-not-allowed " : " cursor-pointer"
          } text-[#F0F1FF] bg-[#474ED3] flex justify-center items-center py-4 rounded-[8px] w-full text-center text-base font-normal `}
        >
          {isLoading ? <Loarder /> : "Login"}
        </button>
        <span className="text-base font-normal text-center mt-10">
          Don’t have an account?
          <Link to="/register" className="font-semibold ml-2">
            Create Account
          </Link>
        </span>
      </div>
    </form>
  );
};

export default Login;
