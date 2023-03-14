import { toast } from "react-toastify";

export const customToast = (
  data: string,
  type: "success" | "error" | "info" | "warning"
) => {
  return toast(data, {
    type,
    position: "top-right",
    autoClose: 2000,
    draggable: false,
  });
};
