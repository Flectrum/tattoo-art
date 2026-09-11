import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <>
      <div className="block relative max-w-xl mx-auto space-y-6 align-center justify-center text-white tracking-wide">
        <p className="text-sm font-semibold uppercase tracking-[0.25em]  text-muted">
          Beka Gokadze · Tallinn
        </p>
        <h1 className="text-4xl  font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl mt-1">
          A tattoo that tells your story
        </h1>
        <p className="mx-auto text-2xl text-semibold max-w-lg text-base text-muted text-balance sm:text-lg mt-5">
          Professional tattoo artist in Tallinn, Estonia. Unique designs, safe
          process.
        </p>

        <div className="flex align-center justify-center gap-3  text-white mt-10">
          <Link
            to={"booking"}
            className=" rounded-xl bg-red-500 hover:bg-red-400 p-5"
          >
            Book a session
          </Link>
          <Link
            to={"portfolio"}
            className="border-1 border-black rounded-xl hover:border-red-500 hover:text-red-500 p-5"
          >
            View portfolio
          </Link>
        </div>
      </div>
    </>
  );
};
