import { useRef, useState } from "react";
import { GoDown } from "../../../assets/svg/GoDown";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useClickOutside } from "../../../common/useClickOutside";
import { languages } from "../../../common/Languages";

export const Dropdown = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => {
    setIsOpen(false);
  });

  const changeLanguage = (newLang: string) => {
    const segments = location.pathname.split("/");
    segments[1] = newLang;

    navigate(segments.join("/"));
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block " ref={dropdownRef}>
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex"
        >
          <div className="flex gap-1 items-center text-muted font-semibold hover:!text-white tracking-wide">
            {lang?.toUpperCase()}
            <small
              className={`transition duration-150 ${
                isOpen ? "rotate-180 " : "rotate-0"
              }`}
            >
              <GoDown />{" "}
            </small>
          </div>
        </button>
      </div>
      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 mt-2 opacity-100 transition-opacity duration-400 starting:opacity-0"
        >
          <div
            role="none"
            className="py-1 rounded-md border border-border border-gray-100/20 py-1 shadow-lg  bg-black"
          >
            {languages.map((item) => (
              <button
                type="button"
                key={item.lang}
                onClick={() => changeLanguage(item.lang)}
                className={`block px-4 py-2 hover:bg-gray-500/20 w-full text-left ${
                  item.lang === lang
                    ? "text-red-500"
                    : "text-gray-400 hover:text-red-600"
                }`}
              >
                <div>
                  <span className="text-gray-500">{item.labelShort}</span>
                  <span className=" gap-2 px-2">{item.labelFull}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
