import { Logo } from "../../assets/svg/Logo";
import { useLanguage } from "../../i18n/useLanguages";
import { NavbarDesktop } from "./components/NavbarDesktop";
import { NavbarMobile } from "./components/NavbarMobile";
import { getNavItems } from "./components/NavItems";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const { lang } = useLanguage();
  const navItems = getNavItems(lang);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg border-b-2 border-b-red-900">
      <nav className="flex h-18 items-center justify-between gap-10 md:px-0 md:container md:mx-auto lg:px-20">
        <div className="flex" aria-label="Tattoo Art">
          <div className="flex items-center justify-between gap-3 transition-colors text-white hover:text-red-800 px-5">
            <Logo className="w-10 h-10" />
            <NavLink
              className="font-semibold text-nowrap uppercase tracking-widest"
              to="/"
            >
              Tattoo Art
            </NavLink>
          </div>
        </div>
        <div className="flex items-center px-5">
          {/* Mobile */}
          <NavbarMobile navItems={navItems} />
          {/* Desktop */}
          <NavbarDesktop navItems={navItems} />
        </div>
      </nav>
    </header>
  );
};
