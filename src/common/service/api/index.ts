import { instance } from "@common/service/config/axios-instance";

export const getAllBanks = async () => {
  return instance.get("/api/v1/no-auth/payment/banks");
};

export const initializeNFCTransaction = (data: { token: string }) => {
  return instance.post("/api/v1/no-auth/nfc/transaction/initiate", data);
};

export const getAllAssets = () => {
  return instance.get("/api/v1/no-auth/wallets/assets");
};

export const getConversion = (data: { amount: string; from: string }) => {
  return instance.post("/api/v1/no-auth/payment/exchange-rate", {
    ...data,
    to: "usdt",
  });
};

export const verifyAccountAPI = (data: {
  country: string;
  bank_code: string;
  account_number: string;
}) => {
  return instance.post("/api/v1/no-auth/payment/account/verify", data);
};
