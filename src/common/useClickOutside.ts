import { useEffect, type RefObject } from "react";


export const useClickOutside = (
    ref: RefObject<HTMLElement | null >,
    callback: () => void
) => {
    useEffect(() => {
        const hadleClick = (event: MouseEvent) => {
            if(
                ref.current &&
                !ref.current.contains(event.target as Node)
            ) {
                callback();
            }
        };

        document.addEventListener("mousedown", hadleClick);

        return () => {
            document.removeEventListener("mousedown", hadleClick);
        };
    }, [ref, callback]);
};