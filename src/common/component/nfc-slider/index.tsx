import { useState, useEffect } from "react";
import nfcFront from "@assets/images/nfc-front.png";
import nfcBack from "@assets/images/nfc-back.png";

const NFC_CARDS = [nfcFront, nfcBack];

export const NFCSlider = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev === NFC_CARDS.length - 1) return 0;
        else return ++prev;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {counter === 0 && (
        <div className=" transition duration-[1s]  w-[20rem] h-[10rem] overflow-hidden rounded-md mb-3">
          <img
            src={NFC_CARDS[0]}
            alt="INPAY NFC CARD"
            className="w-full h-full object-contain"
          />
        </div>
      )}
      {counter === 1 && (
        <div className="transition duration-[1s]  w-[20rem] h-[10rem] overflow-hidden rounded-md mb-3">
          <img
            src={NFC_CARDS[1]}
            alt="INPAY NFC CARD"
            className="w-full h-full object-contain"
          />
        </div>
      )}
      <div className="">
        <ul className="flex gap-x-2">
          {new Array(NFC_CARDS.length).fill("active").map((_, idx) => (
            <li
              key={idx}
              className={`${
                idx === counter ? "bg-[#1B1711]" : "bg-[#D9D9D9]"
              } rounded-sm h-[0.25rem] w-[1rem]`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
