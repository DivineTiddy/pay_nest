import { useUser } from "@/context/userContext";
import BackButton from "@/ui/buttons/BackButton";
import TransactionCard from "@/ui/Cards/TransactionCard";
import TransactionNull from "@/ui/null/TransactionNull";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Transaction = () => {
  const { transation } = useUser();

  const showNullState = transation.length > 0;
  const location = useLocation();
  const pathName = location.pathname === "/dashboard/transaction";

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
            transation.map((item, index) => (
              <TransactionCard key={index + 1} item={item} />
            ))
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
