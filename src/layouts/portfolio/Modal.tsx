import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string; // Знак вопроса означает, что проп необязательный
  children: React.ReactNode; // Тип для содержимого внутри компонента
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
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
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Задний фон (Overlay) */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-80 max-h-200 transform overflow-hidden rounded-2xl   align-middle shadow-xl transition-all duration-300 scale-100">
        <div className="flex items-center justify-between border-b border-gray-200">
          <button
            onClick={onClose}
            className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="h-full w-full">{children}</div>
        {/* Подвал (Кнопки действия) */}
        <div className="mt-6 flex justify-end gap-3"></div>
      </div>
    </div>
  );
}
