import { Hero } from "./Hero";
import { HeroBackground } from "./HeroBackground";

export const Homepage = () => {
  return (
    <>
      <div className="relative isolate min-h-[calc(100dvh-4rem)] overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 flex min-h-[calc(100dvh-4rem)] items-center justify-center text-center">
          <Hero />
        </div>
      </div>
    </>
  );
};
