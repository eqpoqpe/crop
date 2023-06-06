import { classNameConcat } from "@eqpoqpe/classname-utils";
import { memo, useCallback, useEffect, useRef } from "react";
import { detectMob } from "../app/util";

const MouseBlock =  memo(function MouseBlock(): JSX.Element {
  const mouseBlockRef = useRef<HTMLDivElement>(null);
  const mouseVisibilityHandle = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;

    if (!detectMob()) {
      setTimeout(() => {
        mouseBlockRef.current!.style.visibility = "visible";
      }, 300);

      mouseBlockRef.current!.style.transform = `translate(${clientX + "px"}, ${clientY + "px"})`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", mouseVisibilityHandle, false);

    return () => window.removeEventListener("mousemove", mouseVisibilityHandle);
  }, []);

  return (
    <div
      className={classNameConcat([
        "w-[90px]",
        "h-[90px]",
        "fixed",
        "top-0",
        "bg-[#ffffff1a]",
        "backdrop-blur-xl",
        "flex",
        "justify-center",
        "items-center",
        "rounded-[50%]",
        "text-white",
        "text-sm",
        "overflow-hidden",
        "z-20"
      ])}
      style={{
        visibility: "hidden"
      }}
      ref={mouseBlockRef}
    >
      <p className="rotate-12 whitespace-nowrap	">{"( move )"}</p>
    </div>
  );
});

export default MouseBlock;