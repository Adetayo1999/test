import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserView, MobileView } from "react-device-detect";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <BrowserView>
      <p>App Can Only Be Opened On Mobile</p>
    </BrowserView> */}
    {/* <MobileView> */}
    <App />
    {/* </MobileView> */}
  </React.StrictMode>
);
