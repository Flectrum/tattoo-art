import { Hero } from "./Hero";
import { HeroBackground } from "./HeroBackground";

export const Homepage = () => {
  return (
    <>
      <div className="relative isolate flex min-h-[600px] items-center justify-center overflow-hidden text-center">
        <HeroBackground />
        <div className="relative z-10">
          <Hero />
        </div>
      </div>
    </>
  );
};
