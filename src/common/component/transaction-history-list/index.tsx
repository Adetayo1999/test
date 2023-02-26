import { getTransactionHistory } from "@common/service/storage";
import { History } from "./history";

export const TransactionHistoryList = () => {
  const transactionHistory = getTransactionHistory();

  return (
    <div className="flex flex-col gap-y-5">
      {transactionHistory.map(
        ({
          accountName,
          accountNumber,
          amount,
          bankName,
          transactionDate,
          transactionType,
        }) => (
          <History
            key={accountNumber}
            accountName={accountName}
            accountNumber={accountNumber}
            amount={amount}
            bankName={bankName}
            transactionDate={transactionDate}
            transactionType={transactionType}
          />
        )
      )}
    </div>
  );
};
