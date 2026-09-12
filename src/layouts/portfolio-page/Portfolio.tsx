import { useState } from "react";

import Modal from "./components/Modal";
import { pictures, type Picture } from "./Pictures";
import { useLanguage } from "../../i18n/useLanguages";

export const Portfolio = (props: { pictures: Picture[] }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrrentIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setOpen(true);
    setCurrrentIndex(index);
  };

  const { t } = useLanguage();

  return (
    <div className="py-10 px-5 md:px-0 md:container md:mx-auto">
      <div className="block mb-10">
        <h1 className="text-white text-4xl font-bold ">{t.portfolio.h1}</h1>
        <p className="text-muted">{t.portfolio.p}</p>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {props.pictures?.map((pic, index) => (
          <div
            key={pic.id}
            onClick={() => {
              handleOpen(index);
            }}
            className="flex items-center justify-center group relative aspect-square overflow-hidden rounded focus-visible:outline-none object-center"
          >
            <img src={props.pictures[index].path} alt="tattoo"></img>

            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30"></div>
          </div>
        ))}
        {open && (
          <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
            pictures={pictures}
            setIndex={setCurrrentIndex}
            index={currentIndex !== null ? currentIndex : 0}
          ></Modal>
        )}
      </div>
    </div>
  );
};
