import { CustomButton } from "@common/component/custom-button";
import { CustomInput } from "@common/component/custom-input";
import { CustomTextArea } from "@common/component/custom-textarea";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

function RequestPayment() {
  return (
    <div className="">
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
          <p className="text-sm dark:text-slate-300 mb-1 text-slate-800">
            Your payment will arrive in 10 minutes
          </p>
        </div>

        <div className="flex flex-col gap-y-6">
          <div className="">
            <label
              htmlFor="amount"
              className=" dark:text-slate-300 mb-2 block text-slate-800"
            >
              Enter Amount
            </label>
            <div className="relative">
              <select
                name=""
                id=""
                className="absolute w-[3rem] top-[50%] left-3 h-[80%] -translate-y-[50%] dark:text-white text-slate-800 dark:bg-black  bg-white outline-none"
              >
                <option value="naira">₦</option>
                <option value="dollar">$</option>
              </select>
              <input
                type="number"
                name=""
                id=""
                className="w-full p-2.5 placeholder:text-gray-500 dark:bg-black  bg-white border dark:border-[#9DA3B1] rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 pl-20"
                placeholder="0.00"
              />
            </div>
          </div>
          <div className="">
            <CustomInput
              name="account"
              type="number"
              labelText="Bank account"
              placeholder="Select bank account"
              isDark
            />
            <p className="mt-2 text-sm">
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
          />
          <CustomButton buttonText="Continue" />
        </div>
      </div>
    </div>
  );
}

export default RequestPayment;
