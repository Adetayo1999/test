type props = {
  labelText?: string;
  name: string;
  placeholder: string;
  isOptional?: boolean;
  value?: string;
  onChange?(e: React.ChangeEvent<HTMLTextAreaElement>): void;
};

export const CustomTextArea = ({
  name,
  placeholder,
  isOptional,
  labelText,
  onChange,
  value,
}: props) => {
  return (
    <div className="">
      {labelText && (
        <label
          htmlFor=""
          className="dark:text-slate-300 mb-2 block text-slate-800"
        >
          {labelText}{" "}
          {isOptional && <span className="text-white">(Optional)</span>}
        </label>
      )}
      <textarea
        name={name}
        placeholder={placeholder}
        cols={30}
        rows={1}
        onChange={onChange}
        value={value}
        className="w-full p-2.5 placeholder:text-gray-500 dark:bg-black  bg-white border dark:border-[#9DA3B1] rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
      ></textarea>
    </div>
  );
};
