import TransactionCard from "@/ui/Cards/TransactionCard";
import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    type: "expend",
    name: "Ocian ",
    date: "Wenessday,14th 2025",
    amount: 4000,
    status: "Successful",
  },
  {
    type: "income",
    name: "John Akpan",
    date: "Friday,1st 2025",
    amount: 8000,
    status: "Successful",
  },
  {
    type: "expend",
    name: "John ",
    date: "Monday,4th 2025",
    amount: 350,
    status: "Successful",
  },
  {
    type: "income",
    name: "Divine Akpan",
    date: "Friday,4th 2025",
    amount: 4021,
    status: "Successful",
  },
];

const Transaction = () => {
  return (
    <div className="w-full p-4 flex flex-col gap-4 bg-[#FDFDFF] font-inter mt-5">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-base text-[#242424]">
          Recent Transaction
        </h1>
        <Link className="font-normal text-xs underline">View all</Link>
      </div>
      <div className="flex flex-col gap-2">
        {data.map((item, index) => (
          <TransactionCard
            key={index + 1}
            type={item.type}
            name={item.name}
            date={item.date}
            amount={item.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default Transaction;
