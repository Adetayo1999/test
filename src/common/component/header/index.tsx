import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "@assets/icons";
import { GetNFCCardModal } from "../modals/get-nfc-card";

export const Header = () => {
  const [isNFCCardModalOpen, setModal] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center p-6">
        <Link to="/" className="flex flex-col gap-y-1">
          <LogoIcon className=" dark:fill-white fill-slate-800 h-[2rem] w-[2.3rem]" />
          <h4 className="font-bold text-sm">InPay</h4>
        </Link>
        <button
          className="dark:text-slate-300 text-slate-800 text-sm"
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
