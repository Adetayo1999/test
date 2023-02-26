import { Outlet } from "react-router-dom";
import { Header } from "../header";

const Layout = () => (
  <>
    <Header />
    <div className="p-6">
      <Outlet />
    </div>
  </>
);

export default Layout;
