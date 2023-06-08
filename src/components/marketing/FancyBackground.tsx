import { classNameConcat } from "@eqpoqpe/classname-utils";
import { css } from "@stitches/react";
import { PropsWithChildren } from "react";

const background = css({
  width: "100vw",
  minWidth: 1500,
  left: "50%",
  transform: "translateX(-50%)",
  position: "absolute",
  top: 0,
  bottom: 0,
  backgroundRepeat: "no-repeat",
  backgroundImage: `
    radial-gradient(45% 50% at 45% 26%, #4031E880 0%, rgba(94, 34, 34, 0) 64.58%),
    radial-gradient(45% 50% at 55% 37%, #F93C3C80 0%, rgba(94, 34, 34, 0) 64.58%)
  `
});

function FancyBackground(props: PropsWithChildren): JSX.Element {
  const { children } = props;

  return (
    <>
      <div className={classNameConcat(["relative", "z-0", "w-full", "h-full"])}>
        <div className={background()}>
        </div>
      </div>
      {children}
    </>
  );
}

export default FancyBackground;