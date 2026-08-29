import { useRef, useState } from "react";
import { Dropdown } from "./Dropdown";
import { useClickOutside } from "../../../common/useClickOutside";
import { NavLink, useParams } from "react-router-dom";

export const NavbarMobile = (props: {
  navItems: { label: string; href: string }[];
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { lang } = useParams();

  useClickOutside(dropdownRef, () => {
    setIsNavOpen(false);
  });

  return (
    <>
      {isNavOpen ? (
        <div ref={dropdownRef}>
          <div className="absolute z-60 top-0 right-0 w-1/3  md:hidden h-[100dvh] bg-black/90 ">
            <div className="flex h-18 text-gray-500 uppercase border-b-2 border-red-500/50 items-center justify-between px-6 font-semibold">
              <div>Menu</div>
              <button
                className="mx-5 hover:text-white"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                ✕
              </button>
            </div>
            <ul className="items-center justify-between text-white">
              {props.navItems.map((item) => (
                <NavLink
                  className={({ isActive }) =>
                    ` font-medium hover:!text-white ${
                      isActive ? "text-red-500" : "text-muted"
                    }`
                  }
                  to={`/${lang}/${item.href}`}
                  end={item.href === ""}
                  onClick={() => setIsNavOpen(false)}
                >
                  <li
                    key={item.label}
                    className="section-max-w font-semibold hover:bg-gray-500/90 px-6 py-4"
                  >
                    {item.label}
                  </li>
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="md:hidden flex items-center gap-5">
          <Dropdown />
          <button
            className="text-white text-2xl hover:text-red-800"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>
      )}
    </>
  );
};
