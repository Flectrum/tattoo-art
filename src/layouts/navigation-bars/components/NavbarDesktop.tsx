import { Dropdown } from "./Dropdown";
import { type NavItem } from "./NavItems";
import { NavLink, useParams } from "react-router-dom";

export const NavbarDesktop = (props: { navItems: NavItem[] }) => {
  const { lang } = useParams();

  return (
    <ul className="hidden text-muted md:flex lg:gap-6 md:gap-2">
      {props.navItems.map((navItem) => (
        <li key={navItem.href}>
          <NavLink
            className={({ isActive }) =>
              `inline-block font-medium hover:!text-white ${
                isActive ? "text-red-500" : "text-muted"
              }`
            }
            to={`/${lang}/${navItem.href}`}
            end={navItem.href === ""}
          >
            {navItem.label}
          </NavLink>
        </li>
      ))}
      <div className="flex gap-1 items-center text-gray-500 font-semibold hover:text-white tracking-wide">
        <Dropdown />
      </div>
    </ul>
  );
};
