export const PageNotFound = () => {
  return (
    <div className=" relative h-screen w-full bg-cover bg-center">
      <div className="absolute inset-0 bg-black z-10">
        <div className="relative flex h-screen items-center text-white justify-center ">
          <div className="border-r-1 border-white">
            <div className="text-xl mr-5">404</div>
          </div>
          <div className="text-lg pl-4">This page could not be found.</div>
        </div>
      </div>
    </div>
  );
};
