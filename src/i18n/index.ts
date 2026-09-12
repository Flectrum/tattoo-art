import { en } from "../locales/en";
import { es } from "../locales/es";
import { et } from "../locales/et";
import { ru } from "../locales/ru";

export const translations ={
    en,
    ru,
    es,
    et
} as const;

export type Language = keyof typeof translations;

export const getTranslations = (lang: Language) => {
    return translations[lang] ?? translations.en;
}

export const isLanguage = (lang: string | undefined): lang is Language => {
    return lang !== undefined && lang in translations;
}