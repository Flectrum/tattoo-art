import { useState } from "react";
import tattoo from "./../../assets/tattoo-2.avif";
import Modal from "./Modal";

export const Portfolio = () => {
  const pictures = [
    { id: "1", pic: tattoo },
    { id: "2", pic: tattoo },
    { id: "3", pic: tattoo },
    { id: "4", pic: tattoo },
    { id: "5", pic: tattoo },
    { id: "6", pic: tattoo },
    { id: "7", pic: tattoo },
  ];

  const [open, setOpen] = useState(false);
  const [currentPic, setCurrentPic] = useState<string>("");

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
        {pictures.map(({ id, pic }) => (
          <div
            key={id}
            onClick={() => {
              handleOpen();
              setCurrentPic(pic);
            }}
            className="group relative aspect-square overflow-hidden rounded  focus-visible:outline-none"
          >
            <img src={pic} alt="tattoo"></img>
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30"></div>
          </div>
        ))}
        {open && (
          <Modal isOpen={open} onClose={() => setOpen(false)}>
            <img src={currentPic} />
          </Modal>
        )}
      </div>
    </div>
  );
};
