import DesktopTransa from "@/components/dashboard/DesktopTransa";
import Transaction from "@/components/dashboard/Transaction";

import React from "react";

const TransactionPage = () => {
  return (
    <div className=" lg:bg-[#FDFDFF] lg:w-[80%]  lg:h-auto lg:px-4 rounded-lg h-screen overflow-auto">
      <Transaction />
      <DesktopTransa />
    </div>
  );
};

export default TransactionPage;
