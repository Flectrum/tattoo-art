import { useRef, useState } from "react";
import { GoDown } from "../../../assets/svg/GoDown";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useClickOutside } from "../../../common/useClickOutside";

export const Dropdown = () => {
  const dropdownItems = [
    { labelShort: "EN", labelFull: "English", lang: "en" },
    { labelShort: "ET", labelFull: "Eesti", lang: "et" },
    { labelShort: "RU", labelFull: "Русский", lang: "ru" },
    { labelShort: "ES", labelFull: "Español", lang: "es" },
  ];

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
        <div role="menu" className="absolute right-0 mt-2">
          <div
            role="none"
            className="py-1 rounded-md border border-border border-gray-100/20 py-1 shadow-lg  bg-black"
          >
            {dropdownItems.map((item) => (
              <button
                type="button"
                key={item.lang}
                onClick={() => changeLanguage(item.lang)}
                className={`block px-4 py-2 hover:bg-gray-500/20 ${
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
