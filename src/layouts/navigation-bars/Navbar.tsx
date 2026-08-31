import logo from "./../../assets/logo.svg";
import { NavbarDesktop } from "./components/NavbarDesktop";
import { NavbarMobile } from "./components/NavbarMobile";
import { navItems } from "./components/NavItems";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg border-b-2 border-b-red-900">
      <nav className="flex h-18 items-center justify-between gap-10 px-5 md:px-0 md:container md:mx-auto">
        <div className="flex" aria-label="Tattoo Art">
          <div className="flex items-center justify-between gap-3">
            <img src={logo} alt="Tattoo Art" width={40} height={40} />
            <NavLink
              className="font-semibold uppercase tracking-widest text-white hover:text-red-800 transition-colors"
              to="/"
            >
              Tattoo Art
            </NavLink>
          </div>
        </div>
        <div className="flex items-center ">
          {/* Mobile */}
          <NavbarMobile navItems={navItems} />
          {/* Desktop */}
          <NavbarDesktop navItems={navItems} />
        </div>
      </nav>
    </header>
  );
};
