import { HiArrowUpRight } from "react-icons/hi2";
import { Modal } from "..";
import { CustomInput } from "@common/component/custom-input";
import { CustomSelect } from "@common/component/custom-select";
import { CustomButton } from "@common/component/custom-button";
import { ModalProps } from "src/types/index";

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

const banks = [
  {
    text: "GT Bank",
    value: "gtb",
  },
  {
    text: "First Bank Plc",
    value: "first-bank",
  },
];

export const AddBankModal = ({ isOpen, toggleOpen }: ModalProps) => {
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
          <form className="flex gap-y-3 flex-col">
            <CustomSelect defaultValue="Currency" options={currencies} />
            <CustomSelect options={banks} />
            <CustomInput
              name="account-number"
              type="text"
              placeholder="Account number"
            />
            <CustomInput
              name="account-name"
              type="text"
              placeholder="Account name"
            />
            <CustomButton buttonText="Save & Continue" isDark />
          </form>
        </div>
      </div>
    </Modal>
  );
};
