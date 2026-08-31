import { Hero } from "./Hero";
import { HeroBackground } from "./HeroBackground";

export const Homepage = () => {
  return (
    <>
      <div
        className="relative isolate flex min-h-[calc(100svh-4rem)] md:min-h-[calc(100dvh-4rem)]
       items-center justify-center overflow-hidden text-center"
      >
        <HeroBackground />
        <div className="relative z-10">
          <Hero />
        </div>
      </div>
    </>
  );
};
