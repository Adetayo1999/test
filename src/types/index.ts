export interface GenerateRoute {
  Component: React.LazyExoticComponent<React.ComponentType<any>>;
  path: string;
}

export interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  toggleOpen(): void;
}

export interface BankAccountType {
  accountName: string;
  accountNumber: string;
  bank: string;
  currency: string;
  bankCode: string;
}

export interface TransactionHistoryType {
  transactionType: "Credit" | "Debit";
  bankName: string;
  accountName: string;
  amount: number;
  transactionDate: string;
  accountNumber: string;
}

export interface BankType {
  bank_name: string;
  code: string;
}
