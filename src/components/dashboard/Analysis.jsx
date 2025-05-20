import { AnalysisChart } from "@/ui/chart/AnalysisChart";
import React from "react";

const Analysis = () => {
  return (
    <div className="font-inte mt-10">
      <h1 className="font-semibold text-lg text-[#282828]">
        Transaction Analysis
      </h1>
      <div className="border-[1px] border-[#E3E3E3] rounded-2xl w-full p-4">
        <select className="font-semibold mt-2 text-xs text-[#949494]">
          <option>Last Month</option>
        </select>
        <AnalysisChart />
      </div>
    </div>
  );
};

export default Analysis;
