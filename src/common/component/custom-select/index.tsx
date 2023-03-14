import { RiArrowDownSLine } from "react-icons/ri";

type props = {
  children: React.ReactNode;
  onChange?(e: React.ChangeEvent<HTMLSelectElement>): void;
  isDark?: boolean;
  value?: string;
};

export const CustomSelect = ({ children, onChange, isDark, value }: props) => {
  return (
    <div className="relative w-full">
      <select
        value={value}
        className={`w-full p-2.5 text-black  border dark:border-[#9DA3B1] rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 placeholder:text-[#686868] cursor-pointer ${
          isDark ? "text-white bg-black" : "text-black"
        }`}
        onChange={onChange}
      >
        {children}
      </select>
      <span className="absolute top-[50%] -right-1 -translate-x-[50%] -translate-y-[50%] pointer-events-none">
        <RiArrowDownSLine
          fontSize={25}
          className="dark:text-[#7286C2] text-slate-800"
        />
      </span>
    </div>
  );
};
