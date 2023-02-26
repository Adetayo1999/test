import { useState } from "react";
import { PlusIcon } from "@assets/icons";
import { Account } from "@common/component/account";
import { History } from "@common/component/history";
import { RxPlusCircled } from "react-icons/rx";
import { currencyConverter } from "src/utils/currency-converter";

function TransactionHistory() {
  const [active, setActive] = useState<"account" | "history">("account");

  return (
    <div className="">
      <div className="flex justify-between items-center mb-9">
        <div className="">
          <p className="dark:text-slate-300 mb-1 text-slate-800 text-sm">
            Total Received
          </p>
          <h3 className="text-2xl">{currencyConverter("en-NG", "NGN", 0)}</h3>
        </div>
        <div className="">
          <button className="flex items-center justify-center gap-x-2   border border-[#D0CCCC] rounded-sm px-3 py-1">
            <span>
              <RxPlusCircled className="h-[2rem]  w-[2rem] dark:text-[#EDEDED] text-slate-800" />
            </span>
            <span className="text-xs"> Add bank </span>
          </button>
        </div>
      </div>

      <div className="">
        <div className="flex gap-x-8 mb-6 text-sm items-end">
          <button
            onClick={() => setActive("account")}
            className={` transition duration-200 ${
              active === "account"
                ? "text-lg"
                : "text-sm dark:text-slate-300  text-slate-800  "
            }`}
          >
            Account
          </button>
          <button
            onClick={() => setActive("history")}
            className={`transition duration-200 ${
              active === "history"
                ? "text-lg"
                : "text-sm dark:text-slate-300  text-slate-800  "
            }`}
          >
            History
          </button>
        </div>

        {active === "history" && (
          <div className="flex flex-col gap-y-5">
            {new Array(100).fill("account").map((_, idx) => (
              <History
                key={idx}
                accountName="Avis Charles A"
                accountNumber="0226660175"
                amount={140.199}
                bankName="GTB"
                transactionDate="12:35 24 Jan"
                transactionType="Credit"
              />
            ))}
          </div>
        )}

        {active === "account" && (
          <div className="flex flex-col gap-y-5">
            {new Array(100).fill("account").map((_, idx) => (
              <Account
                key={idx}
                accountName="Charles Avis Ayodeji"
                accountNumber="0226660175"
                bank="GT Bank Plc"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TransactionHistory;
