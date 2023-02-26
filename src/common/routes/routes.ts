import { lazy } from "react";
import { PATHS } from "./paths";

const loadModules = (path: string) =>
  lazy(() => import(`./modules/pages/${path}.tsx`));

export const routes = [
  {
    path: PATHS.add_bank,
    Component: loadModules("add-bank/index"),
  },
  {
    path: PATHS.request_payment,
    Component: loadModules("request-payment/index"),
  },
  {
    path: PATHS.transaction_history,
    Component: loadModules("transaction-history/index"),
  },
];
