import { createContext } from "react";
import type { getTranslations } from ".";

type Translation = ReturnType<typeof getTranslations>;

export type LanguageContextType = {
  t: Translation;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);
