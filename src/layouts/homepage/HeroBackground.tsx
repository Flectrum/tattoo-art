import background from "./../../assets/background.mp4";

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        src={background}
        autoPlay
        muted
        loop
        preload="auto"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
};
