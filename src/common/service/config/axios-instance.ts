import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.AUTH_BASE_URL!,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
