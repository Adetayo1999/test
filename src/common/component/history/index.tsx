import { CreditIcon } from "@assets/icons";
import { currencyConverter } from "src/utils/currency-converter";

type props = {
  transactionType: "Credit" | "Debit";
  bankName: string;
  accountName: string;
  amount: number;
  transactionDate: string;
  accountNumber: string;
};

export const History = ({
  accountName,
  amount,
  accountNumber,
  bankName,
  transactionDate,
  transactionType,
}: props) => {
  return (
    <div className="flex justify-between items-center text-sm">
      <div className="flex gap-x-3 items-center">
        <div className="dark:bg-[#DBDBDB91] bg-opacity-[0.57]  h-[2.5rem] w-[2.5rem] rounded-full flex justify-center items-center">
          <CreditIcon className="h-[1.4rem] w-[1.4rem] opacity-[1]" />
        </div>
        <div className="">
          <h3 className="dark:text-[#E0E0E0] text-base text-slate-800 font-medium mb-2">
            {transactionType}
          </h3>
          <p className="text-xs dark:text-slate-300  text-slate-800">
            {bankName} {accountNumber} {accountName}
          </p>
        </div>
      </div>
      <div className="">
        <h3 className="dark:text-[#E0E0E0] text-base text-slate-800 font-medium mb-2">
          {currencyConverter("en-NG", "NGN", amount)}
        </h3>
        <small className="text-xs dark:text-slate-300  text-slate-800">
          {transactionDate}
        </small>
      </div>
    </div>
  );
};
