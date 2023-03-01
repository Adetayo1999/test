import { useState, useEffect } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { Modal } from "..";
import { CustomInput } from "@common/component/custom-input";
import { CustomSelect } from "@common/component/custom-select";
import { CustomButton } from "@common/component/custom-button";
import { BankType, ModalProps } from "src/types/index";
import { addBankAccount } from "@common/service/storage";
import { getAllBanks } from "@common/service/api";

const currencies = [
  {
    text: "Naira",
    value: "naira",
  },
  {
    text: "Dollar",
    value: "dollar",
  },
];

// const banks = [
//   {
//     text: "GT Bank",
//     value: "GT Bank",
//   },
//   {
//     text: "First Bank Plc",
//     value: "First Bank Plc",
//   },
// ];

export const AddBankModal = ({ isOpen, toggleOpen }: ModalProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [accountNumber, setAccoutNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [banks, setBanks] = useState<BankType[]>([]);
  const [loadingBanks, setBanksLoading] = useState(false);
  const [, setBanksError] = useState<null | string>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      ![accountName, accountNumber, selectedCurrency, selectedBank].every(
        (input) => Boolean(input)
      )
    ) {
      toast.error("All Fields Are Required");
      return;
    }

    if (accountNumber.length !== 10) {
      toast.error("Account Number Must Be 10 digits");
      return;
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
      toast.success("Bank Account Added 🎉");
      setAccoutNumber("");
      setSelectedBank("");
      setAccountName("");
      setSelectedCurrency("");
      toggleOpen();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setBanksLoading(true);
        const { data } = await getAllBanks();
        setBanks(data?.data || []);
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof AxiosError) {
          message = error.response?.data?.message || "Unknown Error";
        } else if (error instanceof Error) message = error.message;
        setBanksError(message);
      } finally {
        setBanksLoading(false);
      }
    })();
  }, []);

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
            <CustomSelect onChange={(e) => setSelectedCurrency(e.target.value)}>
              <option value="">Currency</option>
              {currencies.map((currency) => (
                <option value={currency.value} key={currency.value}>
                  {currency.text}
                </option>
              ))}
            </CustomSelect>
            <CustomSelect onChange={(e) => setSelectedBank(e.target.value)}>
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
            />
            <CustomButton buttonText="Save & Continue" isDark />
          </form>
        </div>
      </div>
    </Modal>
  );
};
