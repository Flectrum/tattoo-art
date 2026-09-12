import { Outlet, useParams } from "react-router-dom";
import { Footer } from "./navigation-bars/Footer";
import { Navbar } from "./navigation-bars/Navbar";
import { isLanguage } from "../i18n";
import { LanguageProvider } from "../i18n/LanguageProvider";
import { PageNotFound } from "./not-found-page/PageNotFound";

export const Layout = () => {
  const { lang } = useParams();

  if (!isLanguage(lang)) {
    return <PageNotFound />;
  }

  return (
    <>
      <LanguageProvider lang={lang}>
        <div className="flex min-h-dvh flex-col">
          <Navbar />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </>
  );
};
