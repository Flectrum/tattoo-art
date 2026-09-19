import { Link, useParams } from "react-router-dom";
import artist from "./../../assets/artist.avif";
import { useLanguage } from "../../i18n/useLanguages";

export const About = () => {
  const { lang } = useParams();
  const { t } = useLanguage();

  const styles: string[] = [
    t.about.style1,
    t.about.style2,
    t.about.style3,
    t.about.style4,
    t.about.style5,
    t.about.style6,
    t.about.style7,
  ];
  return (
    <>
      <section className="section-padding py-16 px-10 lg:px-40">
        <div className="section-max-w">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg bg-surface-2 mx-auto lg:mx-0">
              <img src={artist} alt="Beka Gokadze" className="rounded"></img>
            </div>
            {/* </div> */}
            <div className="space-y-6 ">
              <p className="text-red-800 text-bold uppercase">
                {t.about.about}
              </p>
              <h1 className="font-bold text-white text-3xl">{t.about.name}</h1>
              <p className="text-muted text-lg">{t.about.description}</p>
              <div className="flex  gap-3">
                <div className="block border-r-1 border-white pr-5">
                  <p className="text-bold text-white">{t.about.years}</p>
                  <p className="text-muted">{t.about.experience}</p>
                </div>
                <div className="block">
                  <p className="text-white text-bold">
                    {" "}
                    {t.about.numberOfWorks}{" "}
                  </p>
                  <p className="text-muted">{t.about.worksCompleted}</p>
                </div>
              </div>
              <div>
                <p className="text-muted uppercase text-semibold">
                  {t.about.styles}
                </p>
                <div className="text-muted flex flex-wrap gap-1 gap-3 mt-2">
                  {styles.map((text: string, index: number) => (
                    <span
                      key={index}
                      className=" px-2 border-1 border-[#595858] text-sm rounded-lg flex justify-center items-center md:rounded-full"
                    >
                      {text}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-5">
                <Link
                  to={`/${lang}/booking`}
                  className="text-white border-2 border-red-800 p-3 rounded-xl"
                >
                  {t.about.bookAConsultation}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
