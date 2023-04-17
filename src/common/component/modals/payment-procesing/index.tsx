import { PaymentProgess } from "@common/component/payment-progess";
import { Modal } from "..";
import { HiArrowDownLeft } from "react-icons/hi2";
import { ModalProps } from "src/types/index";

export const PaymentProcessingModal = ({ isOpen, toggleOpen }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} toggleOpen={toggleOpen}>
      <div className="px-6">
        <div className="flex flex-col justify-center items-center gap-y-3 mb-6">
          <div className="w-[3rem] h-[3rem] rounded-full bg-black flex justify-center items-center mb-2">
            <HiArrowDownLeft className="text-white" fontSize={22} />
          </div>
          <div className="text-center">
            <h3 className="text-[#0B112F] font-bold text-xl mb-1">
              Waiting for Authorization
            </h3>
            <p className="text-[#525869] text-xs">
              Inform the card owner to authorize this transaction on their
              Instance App.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-5 text-center">
          <PaymentProgess />
          <div className="">
            <p className="text-[#525869] text-sm">Authorization request sent</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
