import { useState } from "react";
import { PlusIcon } from "@assets/icons";
import { AddBankModal } from "@common/component/modals/add-bank";

function AddBank() {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <h1 className="text-3xl mb-10">Hello,</h1>
      <h3 className="text-2xl mb-3">
        Add Bank <br /> Account
      </h3>
      <p className="font-light mb-4 dark:text-slate-300 text-slate-800">
        To receive your payment
      </p>
      <button
        className="flex justify-center items-center gap-x-2   border border-[#D0CCCC] rounded-md py-2 px-5"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>
          <PlusIcon className="h-[2.3rem]  w-[2.3rem] dark:stroke-[#EDEDED] stroke-slate-800" />
        </span>
        <span>Add Bank</span>
      </button>

      <AddBankModal isOpen={open} toggleOpen={() => setOpen((prev) => !prev)} />
    </div>
  );
}

export default AddBank;
