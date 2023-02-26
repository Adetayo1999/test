import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";
import { Modal } from "..";
import { ModalProps } from "src/types/index";

export const InpayPWAGuideModal = ({ isOpen, toggleOpen }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} toggleOpen={toggleOpen}>
      <div className="text-[#525869] flex flex-col gap-y-6 px-6 text-sm">
        <div className="text-center">
          <h3 className="text-[#0B112F] font-bold text-xl mb-1">Add InPay</h3>
          <p>
            Follow the instruction below to add InPay to your phone home screen
            for good user experience.
          </p>
        </div>
        <div className="">
          <p className="font-bold mb-3 flex gap-x-2 items-center ">
            For Android:
            <span className="border p-1  rounded-sm">
              <IoLogoGooglePlaystore />
            </span>
          </p>
          <ol className="list-decimal pl-3">
            <li>Click on the x button and select y button</li>
            <li>Select z and save</li>
          </ol>
        </div>
        <div className="">
          <p className="font-bold mb-3 flex gap-x-2 items-center">
            For iOS:
            <span className="border p-1 rounded-sm">
              <IoLogoApple />
            </span>
          </p>
          <ol className="list-decimal pl-3">
            <li>Click and open the link below on safari</li>
            <li>Select x button and click Save to home page.</li>
          </ol>
        </div>
        <div className="">
          <Link
            to="/"
            className="bg-[#F5F5F5] text-[#525869] border border-[#E4E4E4] rounded flex items-center gap-x-4 p-2"
          >
            <span className="p-1 bg-[#D9D9D9]">
              <HiArrowUpRight className="text-black" />
            </span>
            <span className="">www.instance.finance/shop-nfc</span>
          </Link>
        </div>
      </div>
    </Modal>
  );
};
