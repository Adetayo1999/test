import { useState } from "react";
import { LogoIcon } from "@assets/icons";
import { GetNFCCardModal } from "../modals/get-nfc-card";

export const Header = () => {
  const [isNFCCardModalOpen, setModal] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center p-6">
        <div className="flex flex-col gap-y-1">
          <LogoIcon className=" dark:fill-white fill-slate-800 h-[2.5rem] w-[2.6rem]" />
          <h4 className="font-bold">InPay</h4>
        </div>
        <button
          className="dark:text-slate-300 text-slate-800"
          onClick={() => setModal((prev) => !prev)}
        >
          Get Instance Card
        </button>
      </header>
      <GetNFCCardModal
        isOpen={isNFCCardModalOpen}
        toggleOpen={() => setModal((prev) => !prev)}
      />
    </>
  );
};
