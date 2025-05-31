import { loanMoney, userCredential } from "@/hooks/users";
import BackButton from "@/ui/buttons/BackButton";
import Loarder from "@/ui/loader/Loarder";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, Zoom } from "react-toastify";

const Loan = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { amount } = data;
    const credential = {
      amount: parseFloat(amount),
      remarks: "loan money",
    };
    try {
      setLoading(true);
      await loanMoney(credential);
      navigate("/success", { state: data });
      await userCredential();
    } catch (error) {
      toast.error(`${error.response.data.error}`, {
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
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center py-5 lg:justify-center h-screen w-full bg-[#F5F5F5] px-5 lg:px-0">
      <div className=" mt-10 w-full lg:w-[500px] flex items-center justify-between lg:justify-center">
        <BackButton />
        <h1 className="font-bold text-center text-[20px] text-[#2B2B2B]">
          Loan
        </h1>

        <p className="lg:hidden"></p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full lg:w-[500px] lg:mt-9  mt-10 rounded-2xl bg-[#FDFDFF] py-5 px-5 flex flex-col gap-5 items-center"
      >
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[#767676] font-normal text-base">Amount</label>
          <input
            {...register("amount", { required: true })}
            type="text"
            placeholder="0.00"
            className=" outline-0 text-base font-normal text-[#767676] border-[1px] border-[#E2E2E2] py-3 px-2 rounded-[8px]"
          />
        </div>
        <button
          type="submit"
          className="bg-[#474ED3] flex justify-center cursor-pointer mt-7 w-full rounded-[8px] py-3.5 px-6 font-bold text-base text-[#F3F3FF]"
        >
          {loading ? <Loarder /> : "Get Loan"}
        </button>
      </form>
    </div>
  );
};

export default Loan;
