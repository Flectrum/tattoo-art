import { Email } from "../../assets/svg/Email";
import { Instagram } from "../../assets/svg/Instagram";
import { Telegram } from "../../assets/svg/Telegram";
import { navItems } from "./components/NavItems";

export const Footer = () => {
  return (
    <footer className="section-max-w section-padding  bottom-0 py-10 z-30 relative page-surface border-t-1 border-white/10">
      <div>
        <div className="flex flex-col  text-center text-muted md:flex-row  md:items-stretch md:justify-between md:gap-4 lg:gap-5 container mx-auto">
          <div className="text-center md:text-left whitespace-nowrap">
            <p className="text-white font-medium uppercase tracking-widest">
              Tattoo Art
            </p>
            <p className="mt-0.5">Tallinn, Estonia</p>
          </div>
          <div className="flex align-center justify-center gap-3 mt-2 md:ml-55">
            <button>
              <Telegram className="w-7 hover:fill-red-600 " />
            </button>
            <button>
              <Instagram className="w-7 hover:fill-red-600 transition-colors" />
            </button>
            <button>
              <Email className="w-7 hover:text-red-600 transition-colors" />
            </button>
          </div>
          <div className="mt-2 whitespace-nowrap">
            © 2026 Beka Gokadze. All rights reserved.
          </div>
        </div>
        <div className="mt-3 ">
          <ul className="flex flex-wrap items-center justify-center gap-5 text-muted">
            {navItems.map(({ label, href }) => (
              <li key={label} className="block hover:text-white">
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
