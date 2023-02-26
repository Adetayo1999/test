import SuspsenseFallBack from "@common/component/Suspensefallback";
import Layout from "@common/component/layout";
// import { GetNFCCardModal } from "@common/component/modals/get-nfc-card";
// import { InpayPWAGuideModal } from "@common/component/modals/inpay-pwa";
// import { PaymentProcessingModal } from "@common/component/modals/payment-procesing";
import { PATHS } from "@common/routes/paths";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const AddBank = lazy(() => import(`./modules/pages/add-bank`));
const RequestPayment = lazy(() => import("./modules/pages/request-payment"));
const TransactionHistory = lazy(
  () => import("./modules/pages/transaction-history")
);

function App() {
  return (
    <Suspense fallback={<SuspsenseFallBack />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={PATHS.request_payment} element={<RequestPayment />} />
          <Route
            path={PATHS.transaction_history}
            element={<TransactionHistory />}
          />
          <Route path={PATHS.add_bank} element={<AddBank />} />
          <Route path="*" element={<AddBank />} />
        </Route>
      </Routes>
      {/* <GetNFCCardModal /> */}
      {/* <InpayPWAGuideModal /> */}
      {/* <PaymentProcessingModal /> */}
    </Suspense>
  );
}

export default App;
