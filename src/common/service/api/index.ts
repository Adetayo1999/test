import { instance } from "@common/service/config/axios-instance";

export const getAllBanks = async () => {
  return instance.get("/api/v1/no-auth/payment/banks");
};

export const initializeNFCTransaction = (data: { token: string }) => {
  return instance.post("/api/v1/no-auth/nfc/transaction/initiate", data);
};
