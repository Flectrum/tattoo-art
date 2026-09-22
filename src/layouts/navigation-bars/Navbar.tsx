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
      <nav className="flex h-15 items-center justify-between gap-10 md:px-5 lg:px-20">
        <div className="flex" aria-label="Tattoo Art">
          <NavLink
            className="font-semibold text-nowrap uppercase tracking-widest"
            to="/"
          >
            <div className="flex items-center justify-between gap-2  transition-colors text-white hover:text-red-800 pl-5">
              <Logo className="w-10 h-10" />
              Tattoo Art
            </div>
          </NavLink>
        </div>
        <div className="flex items-center pr-5">
          {/* Mobile */}
          <NavbarMobile navItems={navItems} />
          {/* Desktop */}
          <NavbarDesktop navItems={navItems} />
        </div>
      </nav>
    </header>
  );
};
