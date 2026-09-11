import { Outlet, useParams } from "react-router-dom";
import { Footer } from "./navigation-bars/Footer";
import { Navbar } from "./navigation-bars/Navbar";
import { PageNotFound } from "./not-found-page/PageNotFound";
import { languages } from "../common/Languages";

export const Layout = () => {
  const { lang } = useParams();

  const language = lang ?? "en";

  const allLanguages = languages.map((language) => language.lang);

  return (
    <>
      {!allLanguages.includes(language) ? (
        <PageNotFound />
      ) : (
        <div className="flex min-h-dvh flex-col">
          <Navbar />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};
