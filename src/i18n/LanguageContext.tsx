import { createContext } from "react";
import type { getTranslations, Language } from ".";

type Translation = ReturnType<typeof getTranslations>;

export type LanguageContextType = {
  t: Translation;
  lang: Language;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);
