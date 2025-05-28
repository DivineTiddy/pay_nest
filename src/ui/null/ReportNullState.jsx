import React from "react";

const ReportNullState = () => {
  return (
    <div className="w-full flex flex-col items-center py-16">
      <img src="icon\report-null.svg" />
      <div className="space-y-3 w-full">
        <h1 className="font-semibold text-lg tracking-wide text-[#242424] text-center">
          No Report!
        </h1>
        <p className="font-normal text-sm tracking-wide text-[#767676] text-center">
          Your transactions analysis will show here.
        </p>
      </div>
    </div>
  );
};

export default ReportNullState;
