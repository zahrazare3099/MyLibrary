import { useEffect } from "react";

export default function useOutsideclick(ref, exeption, cb) {
  useEffect(() => {
    function handleOutSideClick(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.id !== exeption
      ) {
        cb();
      }
    }
    document.addEventListener("mousedown", handleOutSideClick);
    () => document.removeEventListener("mousedown", handleOutSideClick);
  }, [ref, cb]);
}
