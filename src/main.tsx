import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { BrowserView, MobileView } from "react-device-detect";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";
import StoreProvider from "@common/context/store";
import SocketProvider from "@common/context/socket-context";
import { BrowserScreen } from "@common/component/browser-screen";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <MobileView>
      <React.StrictMode>
        <SocketProvider>
          <StoreProvider>
            <Router>
              <Toaster position="top-right" />
              <App />
              <ToastContainer />
            </Router>
          </StoreProvider>
        </SocketProvider>
      </React.StrictMode>
    </MobileView>
    <BrowserView>
      <BrowserScreen />
    </BrowserView>
  </>
);
