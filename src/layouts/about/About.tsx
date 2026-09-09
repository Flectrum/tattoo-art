import artist from "./../../assets/artist.avif";

export const About = () => {
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
            <div className="text-red-800 text-bold uppercase">
              About the Artist
            </div>
            <div className="font-bold text-white text-3xl mt-3">
              Beka Gokadze
            </div>
            <div className="text-muted mt-10 text-xl">
              I'm a professional tattoo artist with over 7 years of experience.
              I specialise in creating unique, personalised designs that fit
              perfectly to your body and personality. I work to the strictest
              hygiene standards, using only the highest quality inks and
              equipment.
            </div>
            <div className="flex  gap-3 mt-10">
              <div className="block border-r-1 border-white pr-5">
                <div className="text-bold text-white">7+ лет</div>
                <div className="text-muted">Опыт</div>
              </div>
              <div className="block">
                <div className="text-white text-bold"> 300+ </div>
                <div className="text-muted">Работ сделано</div>
              </div>
            </div>
            <div className="text-muted md:mt-5 uppercase text-semibold">
              Стили
            </div>
            <div className="text-muted flex flex-wrap gap-1 gap-3 mt-2">
              {styles.map((text: string, index: number) => (
                <div
                  key={index}
                  className=" px-2 border-1 border-[#595858] rounded-lg flex justify-center items-center md:rounded-full"
                >
                  {text}
                </div>
              ))}
            </div>
            <button
              className="text-white mt-10 border-2 border-red-800 p-4 rounded-xl"
              type="button"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
