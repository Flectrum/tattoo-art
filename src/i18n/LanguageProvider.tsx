import type { ReactNode } from "react";
import type { Language } from "./index";
import { LanguageContext } from "./LanguageContext";
import { getTranslations } from "./index";

type Props = {
  lang: Language;
  children: ReactNode;
};

export const LanguageProvider = ({ lang, children }: Props) => {
  const t = getTranslations(lang);

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};
