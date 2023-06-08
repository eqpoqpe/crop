import { classNameConcat } from "@eqpoqpe/classname-utils";
import { useMemo, useRef } from "react";
import { useModeContext } from "../app/provider/ControllerModeProvider";

function ScrollBlock(): JSX.Element {
  const { isDanceMode } = useModeContext();
  const scrollBlockRef = useRef<HTMLDivElement>(null);
  const prevValue = useMemo(() => ({
    upValueX: 0,
    upValueY: 0,
    downValueX: 0,
    downValueY: 0,
    resultX: 0,
    resultY: 0,
  }), []);

  return (
    <div
      className={classNameConcat([
        "w-[200px]",
        "h-[200px]",
        "bg-pink-400",
        "transition-all",
        "duration-700",
        "md:w-[360px]",
        "md:h-[360px]",
        isDanceMode ? "animate-bounce" : ""
      ])}
      draggable={false}
      onTouchStart={(event) => {
        const clientX = event.touches?.[0].clientX;
        const clientY = event.touches?.[0].clientY;

        prevValue.downValueX = clientX;
        prevValue.downValueY = clientY;
      }}
      onTouchEnd={(event) => {
        const clientX = event.changedTouches?.[0].clientX;
        const clientY = event.changedTouches?.[0].clientY;

        prevValue.upValueX = clientX;
        prevValue.upValueY = clientY;
        prevValue.resultX = prevValue.resultX + prevValue.upValueX - prevValue.downValueX;
        prevValue.resultY = prevValue.resultY + prevValue.upValueY - prevValue.downValueY;

        scrollBlockRef.current!.style.transform = `
          translate(${prevValue.resultX + "px"}, ${prevValue.resultY + "px"})
        `;
      }}
      onMouseDown={(event) => {
        prevValue.downValueX = event.clientX;
        prevValue.downValueY = event.clientY;
      }}
      onMouseUp={(event) => {
        prevValue.upValueX = event.clientX;
        prevValue.upValueY = event.clientY;
        prevValue.resultX = prevValue.resultX + prevValue.upValueX - prevValue.downValueX;
        prevValue.resultY = prevValue.resultY + prevValue.upValueY - prevValue.downValueY;

        scrollBlockRef.current!.style.transform = `
          translate(${prevValue.resultX + "px"}, ${prevValue.resultY + "px"})
        `;
      }}
      ref={scrollBlockRef}
    ></div>
  );
}

export default ScrollBlock;