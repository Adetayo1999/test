import SuspsenseFallBack from "@common/component/Suspensefallback";
import Layout from "@common/component/layout";
import { PATHS } from "@common/routes/paths";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const RequestPayment = lazy(() => import("./modules/pages/request-payment"));
const Home = lazy(() => import("./modules/pages/home"));

function App() {
  return (
    <Suspense fallback={<SuspsenseFallBack />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={PATHS.request_payment} element={<RequestPayment />} />
          <Route path={PATHS.add_bank} element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
