import { RiArrowDownSLine } from "react-icons/ri";

type props = {
  defaultValue?: string;
  options: { value: string; text: string }[];
  onChange?(e: React.ChangeEvent<HTMLSelectElement>): void;
  value?: string;
  isDark?: boolean;
};

export const CustomSelect = ({
  options,
  defaultValue,
  onChange,
  value,
  isDark,
}: props) => {
  return (
    <div className="relative w-full lg:max-w-sm">
      <select
        className={`w-full p-2.5 text-black  border dark:border-[#9DA3B1] rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 cursor-pointer ${
          isDark ? "text-white bg-black" : "text-black"
        }`}
        onChange={onChange}
        value={value}
      >
        {defaultValue && <option value="">{defaultValue}</option>}
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.text}
          </option>
        ))}
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
