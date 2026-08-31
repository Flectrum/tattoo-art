import { Outlet } from "react-router-dom";
import { Footer } from "./navigation-bars/Footer";
import { Navbar } from "./navigation-bars/Navbar";

export const Layout = () => {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
