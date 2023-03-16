import { useState, useEffect } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { Modal } from "..";
import { CustomInput } from "@common/component/custom-input";
import { CustomSelect } from "@common/component/custom-select";
import { CustomButton } from "@common/component/custom-button";
import { ModalProps } from "src/types/index";
import { addBankAccount, getBankAccounts } from "@common/service/storage";
import { errorFormatter } from "src/utils/error-formatter";
import service from "@common/service/requests";
import { useStore } from "@common/context";
import { customToast } from "src/utils/custom-toast";
import { verifyAccountAPI } from "@common/service/api";

export const AddBankModal = ({ isOpen, toggleOpen }: ModalProps) => {
  const {
    dispatch,
    state: {
      banks: { data: banks, loading: loadingBanks },
      fiats: { data: fiats, loading: loadingFiats },
    },
  } = useStore();

  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [accountNumber, setAccoutNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [loadingVerifyAccount, setLoadingVerifyAccount] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      ![accountName, accountNumber, selectedCurrency, selectedBank].every(
        (input) => Boolean(input)
      )
    ) {
      return customToast("All Fields Are Required", "error");
    }

    if (accountNumber.length !== 10) {
      return customToast("Account Number Must Be 10 digits", "error");
    }

    if (getBankAccounts().length === 10) {
      return customToast(
        "Max of 10 accounts exceeded, delete one to continue",
        "error"
      );
    }

    try {
      const [bank, bankCode] = selectedBank.split("%");
      addBankAccount({
        accountName,
        accountNumber,
        bank,
        bankCode,
        currency: selectedCurrency,
      });
      customToast("Bank Account Added 🎉", "success");
      setAccoutNumber("");
      setSelectedBank("");
      setAccountName("");
      setSelectedCurrency("");
      toggleOpen();
    } catch (error) {
      const message = errorFormatter(error);
      customToast(message, "error");
    }
  };

  useEffect(() => {
    if (banks.length === 0) {
      service.getBanks(dispatch);
    }
  }, [dispatch, banks]);

  useEffect(() => {
    if (fiats.length === 0) {
      service.getFiats(dispatch);
    }
  }, [fiats]);

  useEffect(() => {
    if (
      selectedCurrency &&
      selectedBank &&
      accountNumber &&
      accountNumber.length === 10
    ) {
      const [, country] = selectedCurrency.split("%");
      const [, bank_code] = selectedBank.split("%");
      const verifyAccount = async () => {
        setLoadingVerifyAccount(true);
        try {
          const { data } = await verifyAccountAPI({
            account_number: accountNumber,
            bank_code,
            country,
          });
          console.log(data?.data?.account_name, "here");
          setAccountName(data?.data?.account_name);
        } catch (error) {
          const message = errorFormatter(error);
          customToast(message, "error");
        } finally {
          setLoadingVerifyAccount(false);
        }
      };
      verifyAccount();
    }
  }, [selectedCurrency, selectedBank, accountNumber]);

  return (
    <Modal isOpen={isOpen} toggleOpen={toggleOpen}>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-y-2 mb-5">
          <div className="w-[3rem] h-[3rem] rounded-full bg-black flex justify-center items-center mb-2">
            <HiArrowUpRight className="text-white" fontSize={22} />
          </div>
          <h3 className="text-[#0B112F] font-bold text-xl">Add Bank Account</h3>
        </div>

        <div className="">
          <div className="mb-5">
            <p className="text-[#525869]">
              Add the account where all your payment will be paid into.
            </p>
          </div>
          <form className="flex gap-y-3 flex-col" onSubmit={handleSubmit}>
            <CustomSelect
              onChange={(e) => setSelectedCurrency(e.target.value)}
              value={selectedCurrency}
            >
              <option value="">
                {loadingFiats ? "Loading..." : "Select a currency"}
              </option>
              {fiats.map((fiat) => (
                <option
                  value={`${fiat._id}%${fiat.country}%${fiat.country_currency}`}
                  key={fiat._id}
                >
                  {fiat.country_currency}
                </option>
              ))}
            </CustomSelect>
            <CustomSelect
              onChange={(e) => setSelectedBank(e.target.value)}
              value={selectedBank}
            >
              <option value="">
                {loadingBanks ? "Loading..." : "Select a bank"}
              </option>
              {banks.map((bank) => (
                <option
                  key={`${bank.code}-${bank.bank_name}`}
                  value={`${bank.bank_name}%${bank.code}`}
                >
                  {bank.bank_name}
                </option>
              ))}
            </CustomSelect>
            <CustomInput
              name="account-number"
              type="text"
              placeholder="Account number"
              value={accountNumber}
              onChange={(e) => setAccoutNumber(e.target.value)}
            />
            <CustomInput
              name="account-name"
              type="text"
              placeholder="Account name"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              disabled
            />
            <CustomButton
              buttonText="Save & Continue"
              isDark
              loading={loadingVerifyAccount}
            />
          </form>
        </div>
      </div>
    </Modal>
  );
};
