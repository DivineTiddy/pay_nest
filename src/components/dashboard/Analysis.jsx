import { AnalysisChart } from "@/ui/chart/AnalysisChart";
import { Circle } from "lucide-react";
import React from "react";

const Analysis = () => {
  return (
    <div className="font-inte mt-10">
      <h1 className="font-semibold text-lg text-[#282828]">
        Transaction Analysis
      </h1>
      <div className="border-[1px] border-[#E3E3E3] rounded-2xl w-full p-4">
        <select className="font-semibold mt-2 mb-4 text-xs text-[#949494]">
          <option>Last Month</option>
        </select>
        <AnalysisChart />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span className="flex items-center gap-2">
            <Circle width={15} height={15} fill="#9094E8" color="#9094E8" />
            <p className="text-[#767676] font-inter font-normal text-base">Transfer</p>
          </span>
          <span className="flex items-center gap-2">
            <Circle width={15} height={15} fill="#CA6720" color="#CA6720" />
            <p className="text-[#767676] font-inter font-normal text-base">Transfer</p>
          </span>
          <span className="flex items-center gap-2">
            <Circle width={15} height={15} fill="#333C04" color="#333C04" />
            <p className="text-[#767676] font-inter font-normal text-base">Transfer</p>
          </span>
          <span className="flex items-center gap-2">
            <Circle width={15} height={15} fill="#D22363" color="#D22363" />
            <p className="text-[#767676] font-inter font-normal text-base">Transfer</p>
          </span>
          <span className="flex items-center gap-2">
            <Circle width={15} height={15} fill="#D5C944" color="#D5C944" />
            <p className="text-[#767676] font-inter font-normal text-base">Transfer</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
