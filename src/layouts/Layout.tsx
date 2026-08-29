import { Outlet } from "react-router-dom";
import { Footer } from "./navigation-bars/Footer";
import { Navbar } from "./navigation-bars/Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
