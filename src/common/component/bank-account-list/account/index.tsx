import { FaTimes } from "react-icons/fa";

type props = {
  accountName: string;
  bank: string;
  accountNumber: string;
  handleAccountDelete(accountNumber: string): void;
};

export const Account = ({
  accountName,
  accountNumber,
  bank,
  handleAccountDelete,
}: props) => {
  return (
    <div className="bg-[#D9D9D9]  dark:bg-opacity-[0.12] w-full rounded-md p-4 pr-8 pl-4 justify-between flex  items-center text-xs min-h-[5.2rem] relative">
      <div className="">
        <h4 className="text-xs mb-1 w-44 font-medium ">{accountName}</h4>
        <p>{bank}</p>
      </div>
      <div className="">
        <p>{accountNumber}</p>
      </div>
      <button
        className="absolute right-2 top-2"
        onClick={() => handleAccountDelete(accountNumber)}
      >
        <FaTimes className="dark:text-[#EDEDED] text-slate-800" />
      </button>
    </div>
  );
};
