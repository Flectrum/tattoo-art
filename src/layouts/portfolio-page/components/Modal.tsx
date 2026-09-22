import { useCallback, useEffect } from "react";
import { GoDown } from "../../../assets/svg/GoDown";
import type { Image } from "./../Image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number | null>>;
  isLoaded: boolean;
  pictures: Image[];
}

export default function Modal({
  isOpen,
  onClose,
  setIndex,
  pictures,
  index,
  isLoaded,
}: ModalProps) {
  const BASE_URL = "http://localhost:8080/api/image/file/";

  const showNext = useCallback(() => {
    setIndex((prev) =>
      prev === null || prev === pictures.length - 1 ? 0 : prev + 1,
    );
  }, [pictures.length, setIndex]);

  const showPrev = useCallback(() => {
    setIndex((prev) =>
      prev === null || prev === 0 ? pictures.length - 1 : prev - 1,
    );
  }, [pictures.length, setIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showNext, showPrev, onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <button
        onClick={onClose}
        className="absolute rounded-full h-7 w-7 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors top-5 right-5"
      >
        ✕
      </button>

      <div
        className="relative max-w-3xl max-h-full transform overflow-hidden
       rounded-2xl align-middle shadow-xl transition-all duration-300 scale-100"
      >
        <img
          className="max-h-[85vh] w-auto"
          src={
            isLoaded
              ? `${BASE_URL}${pictures[index].path}`
              : pictures[index].path
          }
        />{" "}
      </div>
      <button
        className="absolute rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-800 transition-colors right-0 rotate-270"
        onClick={showPrev}
      >
        <GoDown className="m-2 h-5 w-5" />
      </button>

      <button
        className="absolute rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors left-0 rotate-90"
        onClick={showNext}
      >
        <GoDown className="m-2 h-5 w-5" />
      </button>
    </div>
  );
}
