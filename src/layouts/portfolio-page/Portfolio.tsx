import { useEffect, useState } from "react";

import Modal from "./components/Modal";
import { useLanguage } from "../../i18n/useLanguages";
import type { Image } from "./Image";

const staticImages = [
  { id: 1, path: "/pics/tattoo-2.avif" },
  { id: 2, path: "/pics/tattoo-11.avif" },
  { id: 3, path: "/pics/tattoo-1.avif" },
  { id: 4, path: "/pics/tattoo-11.avif" },
  { id: 5, path: "/pics/tattoo-2.avif" },
  { id: 6, path: "/pics/tattoo-1.avif" },
  { id: 7, path: "/pics/tattoo-1.avif" },
];

export const Portfolio = () => {
  const BASE_URL = "http://localhost:8080/api/image/file/";
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrrentIndex] = useState<number | null>(null);
  const [images, setImages] = useState<Image[]>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchUserCurrentLoans = async () => {
      const url = `http://localhost:8080/api/image/getAll`;
      const requestOptions = {
        method: "GET",
      };
      const imagesResponse = await fetch(url, requestOptions);
      if (!imagesResponse.ok) {
        throw new Error("Something went wrong!");
        setImages(staticImages);
      }

      const imagesResponseJson = await imagesResponse.json();
      setImages(imagesResponseJson);
      setIsLoaded(true);
    };
    fetchUserCurrentLoans();
  }, []);

  const handleOpen = (index: number) => {
    setOpen(true);
    setCurrrentIndex(index);
  };

  const { t } = useLanguage();

  return (
    <div className="py-10 px-5 md:px-0 md:container md:mx-auto lg:px-20">
      <div className="block mb-10">
        <h1 className="text-white text-4xl font-bold ">{t.portfolio.h1}</h1>
        <p className="text-muted">{t.portfolio.p}</p>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {images?.map((image, index) => (
          <div
            key={image.id}
            onClick={() => {
              handleOpen(index);
            }}
            className="flex items-center justify-center group relative aspect-square overflow-hidden rounded focus-visible:outline-none object-center"
          >
            <img
              src={isLoaded ? `${BASE_URL}${image.path}` : images[index].path}
              alt="tattoo"
            ></img>

            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30"></div>
          </div>
        ))}
        {open && (
          <Modal
            isOpen={open}
            isLoaded={isLoaded}
            onClose={() => setOpen(false)}
            pictures={images}
            setIndex={setCurrrentIndex}
            index={currentIndex !== null ? currentIndex : 0}
          ></Modal>
        )}
      </div>
    </div>
  );
};
