import { useCallback, useEffect, useRef } from "react";
import { GoDown } from "../../assets/svg/GoDown";
import type { Picture } from "./Pictures";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string; // Знак вопроса означает, что проп необязательный
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number | null>>;
  pictures: Picture[]; // Тип для содержимого внутри компонента
}

export default function Modal({
  isOpen,
  onClose,
  setIndex,
  pictures,
  index,
}: ModalProps) {
  const touchStartX = useRef(0);
  const minSwipeDistance: number = 50;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX: number = e.changedTouches[0].clientX;
    const distanceX: number = touchStartX.current - touchEndX;

    if (distanceX > minSwipeDistance) {
      showNext();
    }

    if (distanceX < -minSwipeDistance) {
      showPrev();
    }
  };

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
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      />
      <button
        className="absolute rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors right-0 rotate-270"
        onClick={showPrev}
      >
        <GoDown />
      </button>

      <button
        className="absolute rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors left-0 rotate-90"
        onClick={showNext}
      >
        <GoDown />
      </button>
      <button
        onClick={onClose}
        className="absolute rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors top-5 right-5"
      >
        ✕
      </button>

      <div
        className="relative max-w-3xl max-h-full transform overflow-hidden
       rounded-2xl align-middle shadow-xl transition-all duration-300 scale-100"
      >
        <img className="max-h-[85vh] w-auto" src={pictures[index].path} />{" "}
      </div>
    </div>
  );
}
