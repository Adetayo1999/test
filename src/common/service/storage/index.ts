import { BankAccountType, TransactionHistoryType } from "src/types/index";
import { STORAGE_KEYS } from "../config/constants";

export const getItem = (key: string) => {
  return localStorage.getItem(key);
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
      (account) => account.accountNumber !== accountNumber
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

  if (bankAcountExists) {
    throw new Error("Bank Account Exists");
  }

  bankAccounts.push(bankDetails);
  setItem(STORAGE_KEYS.CLIENT_BANK_ACCOUNT_STORAGE_KEY, bankAccounts);
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

export const getBankAccounts = () => {
  let bankAccounts = [] as BankAccountType[];
  const bankAccountsINJSON = getItem(
    STORAGE_KEYS.CLIENT_BANK_ACCOUNT_STORAGE_KEY
  );
  if (bankAccountsINJSON)
    bankAccounts = JSON.parse(bankAccountsINJSON) as BankAccountType[];
  return bankAccounts;
};

export const getTransactionHistory = () => {
  let transactionHistory = [] as TransactionHistoryType[];
  const transactionHistoryInJSON = getItem(
    STORAGE_KEYS.CLIENT_TRANSACTION_HISTORY_KEY
  );

  if (transactionHistoryInJSON) {
    transactionHistory = JSON.parse(
      transactionHistoryInJSON
    ) as TransactionHistoryType[];
  }

  return transactionHistory;
};

export const getNFCToken = () => {
  return sessionStorage.getItem(STORAGE_KEYS.CLIENT_NFC_TOKEN);
};

export const setNFCToken = (token: string) => {
  sessionStorage.setItem(STORAGE_KEYS.CLIENT_NFC_TOKEN, token);
};

export const removeNFCToken = () => {
  sessionStorage.removeItem(STORAGE_KEYS.CLIENT_NFC_TOKEN);
};
