import SuspsenseFallBack from "../Suspensefallback";

type props = {
  buttonText: string;
  clickHandler?(): void;
  isDark?: boolean;
  loading?: boolean;
};

export const CustomButton = ({
  buttonText,
  clickHandler,
  isDark,
  loading,
}: props) => {
  return (
    <button
      onClick={clickHandler}
      className={`w-full p-2.5  ${
        loading && "cursor-not-allowed"
      }  rounded-md shadow-sm outline-none text-sm appearance-none focus:border-indigo-600 font-bold ${
        !isDark ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      {loading ? "Loading..." : buttonText}
    </button>
  );
};
