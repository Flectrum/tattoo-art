import { Link, useParams } from "react-router-dom";
import artist from "./../../assets/artist.avif";

export const About = () => {
  const { lang } = useParams();

  const styles: string[] = [
    "Blackwork",
    "Геометрия",
    "Fine",
    "Line",
    "Реализм",
    "Орнаментал",
    "Trash Polka",
    "Акварель",
  ];
  return (
    <>
      <div className="relative px-5 md:px-0 container md:mx-auto">
        <div className="relative block md:flex md:flex-row md:justify-between my-10 ">
          <div className="w-full md:mr-50 object-contain">
            <img src={artist} className="rounded"></img>
          </div>
          <div className="right-part ">
            <p className="text-red-800 text-bold uppercase">About the Artist</p>
            <h1 className="font-bold text-white text-3xl mt-3">Beka Gokadze</h1>
            <p className="text-muted mt-10 text-xl">
              I'm a professional tattoo artist with over 7 years of experience.
              I specialise in creating unique, personalised designs that fit
              perfectly to your body and personality. I work to the strictest
              hygiene standards, using only the highest quality inks and
              equipment.
            </p>
            <div className="flex  gap-3 mt-10">
              <div className="block border-r-1 border-white pr-5">
                <p className="text-bold text-white">7+ лет</p>
                <p className="text-muted">Опыт</p>
              </div>
              <div className="block">
                <p className="text-white text-bold"> 300+ </p>
                <p className="text-muted">Работ сделано</p>
              </div>
            </div>
            <p className="text-muted mt-5 uppercase text-semibold">Стили</p>
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
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
