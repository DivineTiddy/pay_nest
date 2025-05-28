import TransactionCard from "@/ui/Cards/TransactionCard";
import TransactionNull from "@/ui/null/TransactionNull";
import React from "react";
import { Link } from "react-router-dom";


const Transaction = ({transation}) => {
 
  return (
    <div className="w-full p-4 lg:p-0 flex flex-col gap-4 bg-[#FDFDFF] font-inter mt-5  lg:mt-14 lg:hidden ">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-base lg:text-[22px] text-[#242424]">
          Recent Transaction
        </h1>
        <Link className="font-normal text-xs underline">View all</Link>
      </div>
      <div className="flex flex-col gap-2  ">
        {transation.length > 0
          ? transation.map((item, index) => (
              <TransactionCard key={index + 1} item={item} />
            ))
          : <TransactionNull/>}
      </div>
    </div>
  );
};

export default Transaction;
