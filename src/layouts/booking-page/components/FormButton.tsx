import { GoDown } from "../../../assets/svg/GoDown";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const FormButton = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className="mt-8 h-10  bg-red-500 rounded-lg hover:bg-red-600"
      onClick={onClick}
    >
      <div className="flex mx-4 gap-3 justify-center items-center">
        <span className=" font-bold text-xl">{label}</span>{" "}
        <GoDown className="mt-1 rotate-270 w-4 h-4" />
      </div>
    </button>
  );
};
