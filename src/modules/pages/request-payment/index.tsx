import { useEffect, useState, useCallback } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CustomButton } from "@common/component/custom-button";
import { CustomSelect } from "@common/component/custom-select";
import { CustomTextArea } from "@common/component/custom-textarea";
import {
  getBankAccounts,
  getNFCToken,
  removeNFCToken,
} from "@common/service/storage";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  getConversion,
  initializeNFCTransaction,
  requestNFCTransaction,
} from "@common/service/api";
import { errorFormatter } from "src/utils/error-formatter";
import { useStore } from "@common/context/store";
import service from "@common/service/requests";
import { customToast } from "src/utils/custom-toast";
import { PATHS } from "@common/routes/paths";
import { useSocket } from "@common/context/socket-context";
import { PaymentProcessingModal } from "@common/component/modals/payment-procesing";

function RequestPayment() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [description, setDescription] = useState("");
  const [accountDetails, setAccountDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [isProcessingModalOpen, setIsProcessingModalOpen] = useState(false);
  const navigate = useNavigate();

  const { socket, socketConnected, handleTxRef, txn_status } = useSocket();

  const {
    state: {
      fiats: { data: fiats },
    },
    dispatch,
  } = useStore();

  useEffect(() => {
    if (fiats.length === 0) {
      service.getFiats(dispatch);
    }
  }, [dispatch]);

  useEffect(() => {
    if (fiats.length && !currency) {
      setCurrency(`${fiats[0]._id}%${fiats[0].country_currency}`);
    }
  }, [currency, fiats]);

  const initializeTransaction = useCallback(async () => {
    const { data } = await initializeNFCTransaction({
      token: getNFCToken()!,
    });

    return data?.data?.reference;
  }, []);

  const handlePaymentRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ([currency, accountDetails, amount].some((item) => item === "")) {
      customToast("All Fields Required", "error");
      return;
    }

    const [asset_id, currencySymbol] = currency.split("%");
    const [account_number, bank_name, account_name, bank_code] =
      accountDetails.split("%");

    const data = {
      amount: +amount,
      asset_id,
      txn_reference: "",
      conversion_id: "",
      bank_data: {
        account_number,
        bank_name,
        account_name,
        bank_code,
      },
    };

    try {
      setLoading(true);
      const [txn_reference, { data: conversionData }] = await Promise.all([
        initializeTransaction(),
        getConversion({
          amount,
          from: currencySymbol,
        }),
      ]);
      const conversion_id = conversionData?.data?._id;

      data.txn_reference = txn_reference;
      data.conversion_id = conversion_id;

      const { data: txRequestResponse } = await requestNFCTransaction(data);

      customToast("Payment Requested", "success");

      if (socketConnected) {
        socket.emit("customer:join", {
          txn_reference: txRequestResponse?.data?.txn_reference,
        });
        handleTxRef(txRequestResponse?.data?.txn_reference);
      }
    } catch (error) {
      const message = errorFormatter(error);
      customToast(message.replace("_", " "), "error");

      if (message === "NFC card not found") {
        removeNFCToken();
        navigate("/");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!getNFCToken()) {
      customToast("Error: Restart the connection Process", "error");
    }
  }, []);

  useEffect(() => {
    if (txn_status) {
      setIsProcessingModalOpen(true);
    }
  }, [txn_status]);

  if (!getNFCToken()) {
    return <Navigate to={PATHS.add_bank} />;
  }

  return (
    <div className="min-h-screen">
      <div className="mb-8">
        <Link to="/" className="flex gap-x-2 items-center w-fit text-sm">
          <span>
            <HiArrowNarrowLeft />
          </span>
          <span>Home</span>
        </Link>
      </div>
      <div className="">
        <div className="mb-6">
          <h2 className="text-xl mb-1">Request Payment</h2>
          <p className="text-xs dark:text-slate-300 mb-1 text-slate-800">
            Your payment will arrive in 10 minutes
          </p>
        </div>

        <form className="flex flex-col gap-y-6" onSubmit={handlePaymentRequest}>
          <div className="">
            <label
              htmlFor="amount"
              className=" dark:text-slate-300 mb-2 block text-slate-800 text-sm"
            >
              Enter Amount
            </label>
            <div className="relative">
              <select
                name=""
                id=""
                className="absolute w-fit top-[50%] left-3 h-[80%] -translate-y-[50%] dark:text-white text-slate-800 dark:bg-black  bg-white outline-none text-sm"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                {fiats.map((item) => (
                  <option
                    key={item._id}
                    value={`${item._id}%${item.country_currency}`}
                  >
                    {item.country_currency}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name=""
                id=""
                className="w-full p-2.5 placeholder:text-gray-500 dark:bg-black  bg-white border dark:border-[#9DA3B1] rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 pl-28 text-sm"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor="account"
              className=" dark:text-slate-300 mb-2 block text-slate-800 text-sm"
            >
              Bank Account
            </label>
            <CustomSelect
              isDark
              value={accountDetails}
              onChange={(e) => {
                setAccountDetails(e.target.value);
              }}
            >
              <option value="" hidden>
                Select bank account
              </option>
              {getBankAccounts().map(
                ({ accountName, accountNumber, bank, bankCode }) => (
                  <option
                    key={`${accountNumber}`}
                    value={`${accountNumber}%${bank}%${accountName}%${bankCode}`}
                  >
                    {`${accountNumber}`}
                  </option>
                )
              )}
            </CustomSelect>

            <p className="mt-2 text-xs text-[#EDEDED]">
              Haven&apos;t added Bank details?{" "}
              <Link className="font-bold" to="/">
                Click here
              </Link>
            </p>
          </div>
          <CustomTextArea
            name="description"
            placeholder="Description"
            isOptional
            labelText="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <CustomButton buttonText="Continue" loading={loading} />
        </form>
      </div>

      <PaymentProcessingModal
        isOpen={isProcessingModalOpen}
        toggleOpen={() => setIsProcessingModalOpen((prev) => !prev)}
      />
    </div>
  );
}

export default RequestPayment;
