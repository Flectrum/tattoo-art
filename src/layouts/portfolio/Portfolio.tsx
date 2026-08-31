import { useState } from "react";
import tattoo from "./../../assets/tattoo-2.avif";
import tattoo1 from "./../../assets/tattoo-1.avif";
import tattoo11 from "./../../assets/tattoo-11.avif";
import Modal from "./Modal";

export const Portfolio = () => {
  const pictures = [
    { id: "1", pic: tattoo1 },
    { id: "2", pic: tattoo11 },
    { id: "3", pic: tattoo },
    { id: "4", pic: tattoo11 },
    { id: "5", pic: tattoo1 },
    { id: "6", pic: tattoo },
    { id: "7", pic: tattoo11 },
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState<number>(-1);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="py-10 px-5 md:px-0 md:container md:mx-auto">
      <div className="block mb-10">
        <div className="text-white text-4xl font-bold ">Portfolio</div>
        <div className="text-muted">Selected works</div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {pictures.map((picture, index) => (
          <div
            key={picture.id}
            onClick={() => {
              handleOpen();
              setIndex(index);
            }}
            className="group relative aspect-square overflow-hidden rounded  focus-visible:outline-none"
          >
            <img src={picture.pic} alt="tattoo"></img>
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30"></div>
          </div>
        ))}
        {open && (
          <Modal isOpen={open} onClose={() => setOpen(false)}>
            <img id={pictures[index].id} src={pictures[index].pic} />
            {index > 0 && (
              <>
                <button
                  className="text-white"
                  onClick={() => setIndex(index - 1)}
                >
                  PREV
                </button>
              </>
            )}
            {index < pictures.length - 1 && (
              <>
                <span className="text-white">
                  {index + 1} of {pictures.length}
                </span>
                <button
                  className="text-white"
                  onClick={() => setIndex(index + 1)}
                >
                  NEXT
                </button>
              </>
            )}
          </Modal>
        )}
      </div>
    </div>
  );
};
