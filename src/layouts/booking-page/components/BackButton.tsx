import { GoDown } from "../../../assets/svg/GoDown";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const BackButton = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className="mt-10 h-8 rounded-lg  hover:bg-[#2a2a2a]"
      onClick={onClick}
    >
      <div className="flex mx-6 gap-3 items-center justify-center">
        <GoDown className="w-3 h-3 rotate-90 " />
        <span className="font-semibold text-xl">{label} </span>
      </div>
    </button>
  );
};
