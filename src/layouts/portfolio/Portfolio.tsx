import tattoo from "./../../assets/tattoo-2.avif";

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
  return (
    <div className="py-10 container mx-auto">
      <div className="block mb-10">
        <div className="text-white text-4xl font-bold ">Portfolio</div>
        <div className="text-muted">Selected works</div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {pictures.map(({ id, pic }) => (
          <button
            key={id}
            type="button"
            className="group relative aspect-square overflow-hidden rounded  focus-visible:outline-none"
          >
            <img src={pic} alt="tattoo"></img>
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30"></div>
          </button>
        ))}
      </div>
    </div>
  );
};
