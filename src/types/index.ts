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
}

export interface TransactionHistoryType {
  transactionType: "Credit" | "Debit";
  bankName: string;
  accountName: string;
  amount: number;
  transactionDate: string;
  accountNumber: string;
}
