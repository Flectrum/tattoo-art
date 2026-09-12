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
      <span className="mx-8 font-bold text-xl">{label}</span>
    </button>
  );
};
