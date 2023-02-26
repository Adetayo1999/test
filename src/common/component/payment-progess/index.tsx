import { FiMoreHorizontal } from "react-icons/fi";

export const PaymentProgess = () => {
  return (
    <ol className="flex items-center w-full  justify-center">
      <li className="flex w-full items-center  after:content-[''] after:w-full after:h-[0.1rem] after:border-b after:border-[#44CF95] after:border-2 after:inline-block dark:after:border-[#44CF95]">
        <span className="flex items-center justify-center w-8 h-8  rounded-full  bg-[#44CF95] shrink-0">
          <FiMoreHorizontal fontSize={20} className="text-black" />
        </span>
      </li>
      <li className="flex w-full items-center text-white after:content-[''] after:w-full after:h-[0.1rem] after:border-b after:border-black after:border-2 after:inline-block dark:after:border-black">
        <span className="flex items-center justify-center w-8 h-8 bg-[#0B112F] rounded-full  dark:bg-[#0B112F] shrink-0">
          1
        </span>
      </li>
      <li className="flex items-center">
        <span className="flex items-center justify-center w-8 h-8 bg-[#0B112F] rounded-full  dark:bg-[#0B112F] shrink-0">
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
