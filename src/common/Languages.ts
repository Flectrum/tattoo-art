import type { Language } from "../i18n";

interface SupportedLanguage {
    labelShort: string,
    labelFull: string,
    lang: string
}

export const supportedLanguages: SupportedLanguage[] = [
{ labelShort: "EN", labelFull: "English", lang: "en" },
    { labelShort: "ET", labelFull: "Eesti", lang: "et" },
    { labelShort: "RU", labelFull: "Русский", lang: "ru" },
    { labelShort: "ES", labelFull: "Español", lang: "es" },
]

export const getUserLanguage = () => {
    const browserLanguage = navigator.language
    .toLowerCase()
    .split("-")[0];

    const supported = supportedLanguages.some(
        ({ lang }) => lang === browserLanguage
    );

    return supported ? (browserLanguage as Language) : "en";

}