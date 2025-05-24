import React from "react";

const Reports = ({transation}) => {
    const incomeTypes = ["receive", "loan"];
const expendTypes = ["sent"];
const income = transation.filter(tx =>
  incomeTypes.includes(tx.transation_type)
);
const expend = transation.filter(tx =>
  expendTypes.includes(tx.transation_type)
);
const totalIncome = income.reduce((sum, tx) => sum + Number(tx.amount), 0);
const totalExpend = expend.reduce((sum, tx) => sum + Number(tx.amount), 0);

console.log(totalIncome , totalExpend)
  return (
    <div className="font-inter">
      <div>
        <h1 className="font-semibold text-base lg:text-[20px] text-[#282828]">
          Transaction Report
        </h1>
        <select className="font-semibold mt-2 text-xs lg:text-base  text-[#949494]">
          <option>Last Month</option>
        </select>
      </div>
      <div className="flex flex-col gap-6 mt-5 lg:mt-7">
        <div className="w-full p-4 lg:py-6 border-[1px] border-[#DFDFDF] rounded-2xl flex flex-col gap-4">
          <p className="text-[#767676] font-normal text-sm lg:text-base">Total Income</p>
          <h1 className="font-bold text-[20px] text-[#007E04] lg:text-[24px]">
            + NGN {totalIncome}
          </h1>
        </div>
        <div className="w-full p-4  lg:py-6  border-[1px] border-[#DFDFDF] rounded-2xl flex flex-col gap-4">
          <p className="text-[#767676] font-normal text-sm lg:text-base">
            Total Expenditure
          </p>
          <h1 className="font-bold text-[20px] lg:text-[24px] text-[#D41818]">
            - NGN {totalExpend}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Reports;
