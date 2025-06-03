import React, { useState } from "react";
import "../../styles/scroll-bar.css";
import TransactionNull from "@/ui/null/TransactionNull";
import { useUser } from "@/context/userContext";
import { TransactionRow } from "@/ui/Cards/Row";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DesktopTransa = () => {
  const { transation } = useUser();
  const showNullState = transation.length > 0;
  const location = useLocation();
  const pathName = location.pathname === "/dashboard/transaction";

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(transation.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedData = transation.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

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
              {selectedData.map((item, index) => (
                <TransactionRow key={index} item={item} />
              ))}
              <div className="flex items-center justify-between">
                <button
                  className={`${
                    currentPage === 1 ? "text-[#C7C7C7]" : "text-[#474ED3]"
                  } flex items-center gap-1 text-base font-semibold cursor-pointer`}
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft
                    color={currentPage === 1 ? "#C7C7C7" : "#474ED3"}
                  />
                  Previous
                </button>

                <span className="text-sm font-simebold">
                  {currentPage}/
                  <span
                    className={`${currentPage === 1 ? "text-[#C7C7C7]" : ""}`}
                  >
                    {totalPages}
                  </span>
                </span>

                <button
                  className={`${
                    currentPage === totalPages
                      ? "text-[#C7C7C7]"
                      : "text-[#474ED3]"
                  } flex items-center gap-1 text-base font-semibold cursor-pointer`}
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ChevronRight
                    color={currentPage === totalPages ? "#C7C7C7" : "#474ED3"}
                  />
                </button>
              </div>
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
