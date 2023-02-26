import { Suspense } from "react";
import SuspsenseFallBack from "@common/component/Suspensefallback";
import { Route } from "react-router-dom";
import { GenerateRoute } from "src/types/index";

export const generateRoute = ({ Component, path }: GenerateRoute) => {
  return (
    <Route
      element={
        <Suspense fallback={<SuspsenseFallBack />}>
          <Component />
        </Suspense>
      }
      path={path}
      key={path}
    />
  );
};
