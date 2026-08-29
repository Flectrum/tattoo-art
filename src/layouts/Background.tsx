import logo from "./../assets/logo.svg";

export const Background = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
    >
      <img
        src={logo}
        alt=""
        className="logo-bg h-[80vmax] w-[80vmax] max-h-none max-w-none select-none"
        style={{ opacity: "0.07" }}
      />
    </div>
  );
};
