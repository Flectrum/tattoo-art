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
      <div className="relative px-5 md:px-0 container md:mx-auto">
        <div className="relative block md:flex md:flex-row md:justify-between my-10 ">
          <div className="w-full md:mr-50 object-contain">
            <img src={artist} className="rounded"></img>
          </div>
          <div className="right-part ">
            <p className="text-red-800 text-bold uppercase">{t.about.about}</p>
            <h1 className="font-bold text-white text-3xl mt-3">
              {t.about.name}
            </h1>
            <p className="text-muted mt-10 text-xl">{t.about.description}</p>
            <div className="flex  gap-3 mt-10">
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
            <p className="text-muted mt-5 uppercase text-semibold">
              {t.about.styles}
            </p>
            <div className="text-muted flex flex-wrap gap-1 gap-3 mt-2">
              {styles.map((text: string, index: number) => (
                <span
                  key={index}
                  className=" px-2 border-1 border-[#595858] rounded-lg flex justify-center items-center md:rounded-full"
                >
                  {text}
                </span>
              ))}
            </div>
            <div className="mt-10">
              <Link
                to={`/${lang}/booking`}
                className="text-white mt-10 border-2 border-red-800 p-4 rounded-xl"
              >
                {t.about.bookAConsultation}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
