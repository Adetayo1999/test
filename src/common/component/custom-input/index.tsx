type props = {
  labelText?: string;
  type: "text";
  placeholder?: string;
  name: string;
  isDark?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export const CustomInput = ({
  type,
  labelText,
  placeholder,
  name,
  isDark,
  onChange,
  disabled,
  defaultValue,
  value,
}: props) => {
  return (
    <div>
      {labelText && (
        <label
          htmlFor={name}
          className=" dark:text-slate-300 mb-2 block text-slate-800"
        >
          {labelText}
        </label>
      )}
      <input
        type={type}
        value={value}
        defaultValue={defaultValue}
        name={name}
        onChange={onChange}
        className={`w-full p-2.5 text-sm placeholder:text-gray-500  border dark:border-[#9DA3B1] rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 ${
          isDark ? "text-white bg-black" : "text-black"
        } `}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};
