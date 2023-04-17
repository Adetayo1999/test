import { useSocket } from "@common/context/socket-context";
import { FiMoreHorizontal } from "react-icons/fi";

export const PaymentProgess = () => {
  const { txn_status } = useSocket();

  return (
    <ol className="flex items-center w-full  justify-center">
      <li
        className={`flex w-full items-center  after:content-[''] after:w-full after:h-[0.1rem] after:border-b  after:border-2 after:inline-block ${
          txn_status ? "after:border-[#44CF95]" : "after:border-black"
        } `}
      >
        <span
          className={`flex items-center justify-center w-8 h-8  rounded-full  ${
            txn_status ? "bg-[#44CF95]" : "bg-[#0B112F]"
          }  shrink-0`}
        >
          <FiMoreHorizontal
            fontSize={20}
            className={` ${txn_status ? "bg-[#44CF95]" : "bg-[#0B112F]"} `}
          />
        </span>
      </li>
      <li
        className={`flex w-full items-center text-white after:content-[''] after:w-full after:h-[0.1rem] after:border-b  after:border-2 after:inline-block 
       ${
         txn_status && txn_status !== "customer_joined"
           ? "after:border-[#44CF95]"
           : "after:border-black"
       }
      `}
      >
        <span
          className={`flex items-center justify-center w-8 h-8 ${
            txn_status && txn_status !== "customer_joined"
              ? "bg-[#44CF95]"
              : "bg-[#0B112F]"
          } rounded-full   shrink-0`}
        >
          1
        </span>
      </li>
      <li className="flex items-center">
        <span
          className={`flex items-center justify-center w-8 h-8 ${
            txn_status === "customer__completed"
              ? "bg-[#44CF95]"
              : txn_status === "customer_cancelled"
              ? "bg-red-500"
              : "bg-[#0B112F]"
          } rounded-full   shrink-0`}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white  "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </li>
    </ol>
  );
};
