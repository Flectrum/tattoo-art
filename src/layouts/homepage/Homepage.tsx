import { Hero } from "./Hero";
import { HeroBackground } from "./HeroBackground";

export const Homepage = () => {
  return (
    <>
      <div className="relative w-full top-0 text-center align-center justify-center overflow-hidden">
        <HeroBackground />
        <div className="absolute ">
          <Hero />
        </div>
      </div>
    </>
  );
};
