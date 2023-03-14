import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";
import StoreProvider from "@common/context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <StoreProvider>
    <Router>
      <Toaster position="top-right" />
      <App />
      <ToastContainer />
    </Router>
  </StoreProvider>
  // </React.StrictMode>
);
