import BackButton from "@/ui/buttons/BackButton";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Send = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/details", { state: data });
  };
  return (
    <div className="flex lg:items-center justify-center h-screen w-full bg-[#F5F5F5] px-5 lg:px-0">
      <div className=" mt-16 lg:mt-0 w-full lg:w-[500px]">
        <div className="w-full lg:w-[500px] flex items-center justify-between lg:justify-center">
          <BackButton/>
          <h1 className="font-bold text-center text-[20px] text-[#2B2B2B]">
            {" "}
            Send Money
          </h1>

          <p className="lg:hidden"></p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 rounded-2xl bg-[#FDFDFF] py-10 px-4 lg:px-8 flex flex-col gap-4 items-center"
        >
          <div className="flex flex-col gap-2 w-full">
            <label className="text-[#767676] font-normal text-base">
              Receiver’s Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className=" outline-0 text-base font-normal text-[#767676] border-[1px] border-[#E2E2E2] py-3 px-2 rounded-[8px]"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-[#767676] font-normal text-base">
              Amount
            </label>
            <input
              {...register("amount", { required: true })}
              type="text"
              placeholder="0.00"
              className=" outline-0 text-base font-normal text-[#767676] border-[1px] border-[#E2E2E2] py-3 px-2 rounded-[8px]"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-[#767676] font-normal text-base">
              Description
            </label>
            <input
              {...register("remark", { required: true })}
              type="text"
              placeholder="Reason for transaction"
              className=" outline-0 text-base font-normal text-[#767676] border-[1px] border-[#E2E2E2] py-3 px-2 rounded-[8px]"
            />
          </div>
          <button className="bg-[#474ED3] cursor-pointer mt-11 w-full rounded-[8px] py-3.5 px-6 font-bold text-base text-[#F3F3FF]">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Send;
