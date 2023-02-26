type props = {
  buttonText: string;
  clickHandler?(): void;
  isDark?: boolean;
};

export const CustomButton = ({ buttonText, clickHandler, isDark }: props) => {
  return (
    <button
      onClick={clickHandler}
      className={`w-full p-2.5   rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 font-bold ${
        !isDark ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      {buttonText}
    </button>
  );
};
