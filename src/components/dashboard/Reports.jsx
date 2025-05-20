import React from "react";

const Reports = () => {
  return (
    <div className="font-inter">
      <div>
        <h1 className="font-semibold text-base text-[#282828]">
          Transaction Report
        </h1>
        <select className="font-semibold mt-2 text-xs text-[#949494]">
          <option>Last Month</option>
        </select>
      </div>
      <div className="flex flex-col gap-6 mt-5">
        <div className="w-full p-4 border-[1px] border-[#DFDFDF] rounded-2xl flex flex-col gap-4">
          <p className="text-[#767676] font-normal text-sm">Total Income</p>
          <h1 className="font-bold text-[20px] text-[#007E04]">
            + NGN 5,000,000
          </h1>
        </div>
        <div className="w-full p-4 border-[1px] border-[#DFDFDF] rounded-2xl flex flex-col gap-4">
          <p className="text-[#767676] font-normal text-sm">
            Total Expenditure
          </p>
          <h1 className="font-bold text-[20px] text-[#D41818]">
            - NGN 3,799,545
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Reports;
