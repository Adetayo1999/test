import { useEffect } from "react";
import "./styles.css";
import { ModalProps } from "src/types";

export const Modal = ({ children, isOpen, toggleOpen }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [isOpen]);

  return (
    <div
      className={`modal z-50 ${isOpen ? "modal__active" : ""}  `}
      onClick={toggleOpen}
    >
      <div
        className="modal__container pb-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4">
          <button
            className="w-[5.625rem] h-[0.5rem] bg-[#9DA3B1] rounded-[999px] cursor-pointer"
            onClick={toggleOpen}
          >
            <span className="sr-only">Close Button</span>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
