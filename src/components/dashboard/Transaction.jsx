import { useUser } from "@/context/userContext";
import BackButton from "@/ui/buttons/BackButton";
import TransactionCard from "@/ui/Cards/TransactionCard";
import TransactionNull from "@/ui/null/TransactionNull";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Transaction = () => {
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
    <div
      className={`${
        pathName ? "" : "bg-[#FDFDFF]"
      } w-full p-4 lg:p-0 flex flex-col gap-4  font-inter   lg:mt-14 lg:hidden`}
    >
      {pathName ? (
        <div className="flex justify-between">
          <BackButton />
          <h1 className="font-semibold text-center text-base lg:text-[22px] text-[#242424]">
            Transaction
          </h1>
          <p></p>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-base lg:text-[22px] text-[#242424]">
            Recent Transaction
          </h1>
          {showNullState ? (
            <Link
              to="/dashboard/transaction"
              className="font-normal text-xs underline"
            >
              View all
            </Link>
          ) : (
            ""
          )}
        </div>
      )}
      <div className="flex flex-col gap-2  ">
        {showNullState ? (
          pathName ? (
            <div>
              {selectedData.map((item, index) => (
                <TransactionCard key={index + 1} item={item} />
              ))}
               <div className="flex items-center justify-between">
                <button
                  className={`${
                    currentPage === 1 ? "text-[#C7C7C7]" : "text-[#474ED3]"
                  } flex items-center gap-1 text-base font-semibold cursor-pointer`}
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                >
                  {/* <img
                    src="\icon\arrow-left.svg"
                    alt="icon"
                    className="w-5 !text-[#474ED3]"
                  /> */}
                  Previous
                </button>

                <span className="text-sm font-simebold">
                  {currentPage}/{totalPages}
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
                  {/* <img
                    src="\icon\arrow-right.svg"
                    alt="icon"
                    className="w-5 !text-[#C7C7C7]"
                  /> */}
                  Next
                </button>
              </div>
            </div>
          ) : (
            transation
              .slice(0, 4)
              .map((item, index) => (
                <TransactionCard key={index + 1} item={item} />
              ))
          )
        ) : (
          <TransactionNull />
        )}
      </div>
    </div>
  );
};

export default Transaction;
