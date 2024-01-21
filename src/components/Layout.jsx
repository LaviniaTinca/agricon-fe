import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header/Header";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
