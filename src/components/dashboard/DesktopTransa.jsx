import React from "react";
import "../../styles/scroll-bar.css";
import TransactionNull from "@/ui/null/TransactionNull";
import { useUser } from "@/context/userContext";
import { TransactionRow } from "@/ui/Cards/Row";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const DesktopTransa = () => {
  const { transation } = useUser();
  const showNullState = transation.length > 0;
  const location = useLocation();
  const pathName = location.pathname === "/dashboard/transaction";
  return (
    <div className=" font-inter max-w-3xl mx-auto mt-10 hidden lg:flex lg:flex-col lg:pb-10">
      {pathName ? (
        <h1 className="font-semibold  text-[22px] text-black mb-4">
          Transactions
        </h1>
      ) : (
        <div className="flex items-start justify-between">
          <h1 className="font-semibold text-[22px] text-black mb-4">
            Recent Transactions
          </h1>
          <Link to="/dashboard/transaction" className="underline font-medium">
            view all
          </Link>
        </div>
      )}
      {showNullState ? (
        <div className="border border-[#E6E6E6] py-5 rounded-xl  mt-2">
          <div className="flex justify-between px-2  items-center  py-2">
            <h2 className="text-black font-semibold text-[20px] text-center ">
              Description
            </h2>
            <h2 className="text-black font-semibold text-[20px]">Amount</h2>
            <h2 className="text-black font-semibold text-[20px]  ">Status</h2>
          </div>
          {pathName ? (
            <div className="">
              {transation.map((item, index) => (
                <TransactionRow key={index} item={item} />
              ))}
            </div>
          ) : (
            <div className="">
              {transation.slice(0, 4).map((item, index) => (
                <TransactionRow key={index} item={item} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <TransactionNull />
      )}
    </div>
  );
};

export default DesktopTransa;
