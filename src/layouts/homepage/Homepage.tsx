import { Hero } from "./Hero";
import { HeroBackground } from "./HeroBackground";

export const Homepage = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <HeroBackground />
        <div className="absolute w-full top-20 text-center mt-20 align-center justify-center ">
          <Hero />
        </div>
      </div>
    </>
  );
};
