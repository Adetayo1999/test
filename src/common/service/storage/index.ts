import { BankAccountType, TransactionHistoryType } from "src/types/index";
import { STORAGE_KEYS } from "../config/constants";

export const getItem = (key: string) => {
  return localStorage.getItem(key) || null;
};

export const setItem = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    localStorage.removeItem(key);
  }
};

export const removeBankAccount = (accountNumber: string) => {
  const bankAccountsINJSON = getItem(
    STORAGE_KEYS.CLIENT_BANK_ACCOUNT_STORAGE_KEY
  );
  if (bankAccountsINJSON) {
    const bankAccounts = JSON.parse(bankAccountsINJSON) as BankAccountType[];
    const updatedBankAccounts = bankAccounts.filter(
      (account) => account.accountNumber === accountNumber
    );
    setItem(STORAGE_KEYS.CLIENT_BANK_ACCOUNT_STORAGE_KEY, updatedBankAccounts);
  }
};

export const addBankAccount = (bankDetails: BankAccountType) => {
  let bankAccounts = [] as BankAccountType[];
  const bankAccountsInJSON = getItem(
    STORAGE_KEYS.CLIENT_BANK_ACCOUNT_STORAGE_KEY
  );
  if (bankAccountsInJSON) {
    bankAccounts = JSON.parse(bankAccountsInJSON) as BankAccountType[];
  }
  const bankAcountExists = bankAccounts.find(
    (account) => account.accountNumber === bankDetails.accountNumber
  );
  if (!bankAcountExists) {
    bankAccounts.push(bankDetails);
    setItem(STORAGE_KEYS.CLIENT_BANK_ACCOUNT_STORAGE_KEY, bankAccounts);
  }
};

export const addTransaction = (transaction: TransactionHistoryType) => {
  let transactionHistory = [] as TransactionHistoryType[];
  const transactionHistoryInJSON = getItem(
    STORAGE_KEYS.CLIENT_TRANSACTION_HISTORY_KEY
  );

  if (transactionHistoryInJSON) {
    transactionHistory = JSON.parse(
      transactionHistoryInJSON
    ) as TransactionHistoryType[];
  }
  transactionHistory.push(transaction);
  setItem(STORAGE_KEYS.CLIENT_TRANSACTION_HISTORY_KEY, transactionHistory);
};
