import { AnalysisChart } from "@/ui/chart/AnalysisChart";
import ReportNullState from "@/ui/null/ReportNullState";
import { Circle } from "lucide-react";
import React from "react";

const Analysis = ({ transation }) => {
  const incomeTypes = ["receive", "loan"];
  const expendTypes = ["sent"];
  const income = transation.filter((tx) =>
    incomeTypes.includes(tx.transation_type)
  );
  const expend = transation.filter((tx) =>
    expendTypes.includes(tx.transation_type)
  );
  const totalIncome = income.reduce((sum, tx) => sum + Number(tx.amount), 0);
  const totalExpend = expend.reduce((sum, tx) => sum + Number(tx.amount), 0);

  const showNullState = transation.length > 0;

  return (
    <div className="font-inte mt-10">
      <h1 className="font-semibold text-lg lg:text-[22px] text-[#282828]">
        Transaction Analysis
      </h1>
      <div className="border-[1px] border-[#E3E3E3] rounded-2xl mt-5 w-full p-4 lg:p-2 ">
        <select className="font-semibold mt-2 mb-4 text-xs lg:text-base text-[#949494]">
          <option>Last Month</option>
        </select>

        {showNullState ? (
          <>
            <AnalysisChart
              totalIncome={totalIncome}
              totalExpend={totalExpend}
            />
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <span className="flex items-center gap-2">
                <Circle width={12} height={12} fill="#9094E8" color="#9094E8" />
                <p className="text-[#767676] font-inter font-normal text-xs lg:text-base">
                  Transfer
                </p>
              </span>
              <span className="flex items-center gap-2">
                <Circle width={12} height={12} fill="#CA6720" color="#CA6720" />
                <p className="text-[#767676] font-inter font-normal text-xs lg:text-base">
                  Data Bundle
                </p>
              </span>
              <span className="flex items-center gap-2">
                <Circle width={12} height={12} fill="#333C04" color="#333C04" />
                <p className="text-[#767676] font-inter font-normal text-xs lg:text-base">
                  Airtime
                </p>
              </span>
              <span className="flex items-center gap-2">
                <Circle width={12} height={12} fill="#D22363" color="#D22363" />
                <p className="text-[#767676] font-inter font-normal text-xs lg:text-base">
                  Electricity
                </p>
              </span>
              <span className="flex items-center gap-2">
                <Circle width={12} height={12} fill="#D5C944" color="#D5C944" />
                <p className="text-[#767676] font-inter font-normal text-xs lg:text-base">
                  TV Subscription
                </p>
              </span>
            </div>
          </>
        ) : (
          <ReportNullState />
        )}
      </div>
    </div>
  );
};

export default Analysis;
