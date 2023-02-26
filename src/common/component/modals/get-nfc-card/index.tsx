import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import { NFCSlider } from "@common/component/nfc-slider";
import { Modal } from "..";
import googleStore from "@assets/images/googlestore.png";
import appleStore from "@assets/images/applestore.png";
import { ModalProps } from "src/types/index";

export const GetNFCCardModal = ({ isOpen, toggleOpen }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} toggleOpen={toggleOpen}>
      <div className="">
        <div className="text-center mb-5">
          <h3 className="text-[#0B112F] font-bold text-xl mb-1">
            Get your own NFC Card
          </h3>
          <p className="text-[#525869] text-sm">
            To apply for Instance NFC card follow instruction below.
          </p>
        </div>
        <div className="mb-12">
          <NFCSlider />
        </div>
        <div className="">
          <ul className="text-[#525869] mb-6 flex gap-y-6 flex-col">
            <li>
              <div className="flex items-center gap-x-4 mb-3">
                <span className="h-[1.875rem] w-[1.875rem] rounded-full bg-[#0B112F] text-white flex justify-center items-center text-sm">
                  1
                </span>
                <p className="">Download Instance App</p>
              </div>
              <div className="flex gap-x-5">
                <Link to="/">
                  <img src={appleStore} alt="Apple Store" />
                </Link>
                <Link to="/">
                  <img src={googleStore} alt="Google Store" />
                </Link>
              </div>
            </li>
            <li className="flex items-center gap-x-4">
              <span className="h-[1.875rem] w-[1.875rem] rounded-full bg-[#0B112F] text-white flex justify-center items-center text-sm">
                2
              </span>
              <p>Sign up in 2 minutes</p>
            </li>
            <li className="flex items-center gap-x-4">
              <span className="h-[1.875rem] w-[1.875rem] rounded-full bg-[#0B112F] text-white flex justify-center items-center text-sm">
                3
              </span>
              <p>Order for instance NFC card</p>
            </li>
          </ul>

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
      </div>
    </Modal>
  );
};
