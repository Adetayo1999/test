import { AxiosError } from "axios";

export const errorFormatter = (error: unknown) => {
  let message = "Unknown Error";

  if (error instanceof AxiosError) {
    message = error.response?.data?.message || "Unknown Error";
  } else if (error instanceof Error) message = error.message;

  return message;
};
