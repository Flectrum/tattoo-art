import type { ReactNode } from "react";
import type { Language } from "./index";
import { LanguageContext } from "./LanguageContext";
import { getTranslations, isLanguage } from "./index";
import { useParams } from "react-router-dom";

type Props = {
  lang: Language;
  children: ReactNode;
};

export const LanguageProvider = ({ children }: Props) => {
  const { lang } = useParams();
  const currentLang = isLanguage(lang) ? lang : "en";
  const t = getTranslations(currentLang);

  return (
    <LanguageContext.Provider value={{ t, lang: currentLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
