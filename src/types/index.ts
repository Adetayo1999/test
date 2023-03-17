import { Socket } from "socket.io-client";

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

export interface FiatType {
  _id: string;
  country: string;
  country_currency: string;
}

export interface StoreType {
  banks: {
    loading: boolean;
    data: BankType[];
  };
  fiats: {
    loading: boolean;
    data: FiatType[];
  };
}

export interface ActionType {
  type: string;
  payload?: any;
}

export type DispatchType = React.Dispatch<ActionType>;

export interface ContextType {
  state: StoreType;
  dispatch: DispatchType;
}

export interface SocketContextType {
  socketConnected: boolean;
  socket: Socket;
  handleTxRef(txRef: string): void;
}

export interface RequestNFCTransactionType {
  amount: number;
  conversion_id: string;
  asset_id: string;
  txn_reference: string;
  bank_data: {
    account_number: string;
    bank_name: string;
    account_name: string;
    bank_code: string;
  };
}
