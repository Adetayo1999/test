import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import { getBankAccounts, removeBankAccount } from "@common/service/storage";
import { Account } from "./account";

export const BankAccountList = () => {
  const [bankAccounts, setBankAccounts] = useState(getBankAccounts());

  const handleAccountDelete = useCallback((number: string) => {
    try {
      removeBankAccount(number);
      toast.success("Account Removed Successfully");
      setBankAccounts((prev) =>
        prev.filter((account) => account.accountNumber !== number)
      );
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }, []);

  return (
    <div className="flex flex-col gap-y-5">
      {bankAccounts.map(({ accountName, accountNumber, bank }) => (
        <Account
          key={accountNumber}
          accountName={accountName}
          accountNumber={accountNumber}
          bank={bank}
          handleAccountDelete={handleAccountDelete}
        />
      ))}
    </div>
  );
};
