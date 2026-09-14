import { getTranslations, type Language } from "../../../i18n";

export type NavItem = {
  label: string;
  href: string;
};


export const getNavItems = (lang: Language): NavItem[] => {
  const t = getTranslations(lang);
  return [
  { label: t.navItems.home , href: "" },
  { label: t.navItems.portfolio, href: "portfolio" },
  { label: t.navItems.about, href: "about" },
  // {label: t.navItems.blog, href: "blog"},
  { label: t.navItems.booking, href: "booking" },
  { label: t.navItems.contacts, href: "contacts" },
  ];
};