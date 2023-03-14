import { useState } from "react";
import { RxPlusCircled } from "react-icons/rx";
import { currencyConverter } from "src/utils/currency-converter";
import { BankAccountList } from "@common/component/bank-account-list";
import { TransactionHistoryList } from "@common/component/transaction-history-list";
import { getTransactionHistory } from "@common/service/storage";
import { useNavigate } from "react-router-dom";
import { PATHS } from "@common/routes/paths";

type props = {
  toggleModal(): void;
};

function TransactionHistory({ toggleModal }: props) {
  const [active, setActive] = useState<"account" | "history">("account");
  const navigate = useNavigate();

  const goToRequestPayment = () => navigate(PATHS.request_payment);

  const totalReceived =
    getTransactionHistory().reduce(
      (initialAmount, { amount }) => initialAmount + amount,
      0
    ) || 0;

  return (
    <div className="">
      <div className="flex justify-between items-center mb-9">
        <div className="">
          <p className="dark:text-slate-300 mb-1 text-slate-800 text-sm">
            Total Received
          </p>
          <h3 className="text-2xl">
            {currencyConverter("en-NG", "NGN", totalReceived)}
          </h3>
        </div>
        <div className="flex gap-x-5">
          <button
            className="flex items-center justify-center gap-x-2 bg-white   text-slate-800  rounded-sm px-3 py-1 text-sm font-semibold"
            onClick={goToRequestPayment}
          >
            Request Payment
          </button>
          <button
            className="flex items-center justify-center gap-x-2   border border-[#D0CCCC] rounded-sm px-3 py-1"
            onClick={toggleModal}
          >
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
        {active === "history" && <TransactionHistoryList />}
        {active === "account" && <BankAccountList />}
      </div>
    </div>
  );
}

export default TransactionHistory;
