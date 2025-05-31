import { format } from "date-fns";

export const TransactionRow = ({ item }) => {
  const isIncome =
    item.transation_type === "receive" || item.transation_type === "loan";
  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    const day = format(date, "do"); // '4th'
    const month = format(date, "MMM"); // 'Jan'
    const time = format(date, "hh:mmaaa"); // '05:34PM'
    return { day, month, time };
  };
  const { day, month, time } = formatDateTime(item.createdAt);

  const formattedAmount = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  }).format(item.amount);

  return (
    <>
      <div className="grid grid-cols-3 items-center  py-4 px-2 border-t-[1px] border-[#E6E6E6]  ">
        {/* Description */}
        <div className="flex  items-center w-[120%] gap-5 ">
          <div
            className={`${
              isIncome ? "bg-[#EDFFED]" : "bg-[#FFE8E8]"
            } p-3 rounded-full`}
          >
            <img
              className="w-6"
              src={isIncome ? "icon/arrow-down.svg" : "icon/arrow-up.svg"}
              alt={isIncome ? "Income" : "Expend"}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#242424] text-base tracking-wide">
              {item.transation_type === "loan" && "Loan"}
              {item.transation_type === "sent" && (
                <p>
                  Transfer to <strong>{item.to}</strong>
                </p>
              )}
              {item.transation_type === "receive" && (
                <p>
                  Receive from <strong>{item.from}</strong>
                </p>
              )}
            </span>
            <p className="text-[#767676] text-[15px] flex items-center gap-2">
              {day} {month} <img src="icon\dot.svg" alt="icon" /> {time}
            </p>
          </div>
        </div>

        {/* Amount */}
        <div className="text-center ml-20 ">
          <p
            className={`text-lg font-semibold tracking-wide ${
              isIncome ? "text-[#379216]" : "text-[#D41818]"
            }`}
          >
            {isIncome ? "+" : "-"} {formattedAmount}
          </p>
        </div>

        {/* Status */}
        <div className="text-right">
          <p className="text-lg text-[#767676]">Successful</p>
        </div>
      </div>
    </>
  );
};