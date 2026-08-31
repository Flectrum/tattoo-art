import background from "./../../assets/background.mp4";

export const HeroBackground = () => {
  return (
    <div
      className="relative isolate flex min-h-[calc(100dvh-4rem)]
          flex-col items-center justify-center overflow-hidden
          py-20 text-center sm:px-6"
    >
      <video
        src={background}
        autoPlay
        muted
        loop
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover p-0"
      ></video>
      <div className="absolute inset-0 z-10 bg-black opacity-60"></div>
    </div>
  );
};
