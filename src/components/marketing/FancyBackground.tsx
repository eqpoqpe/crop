import { css } from "@stitches/react";
import { PropsWithChildren } from "react";

const background = css({
  background: "radial-gradient(50% 50% at 50% 50%, #4031E8 0%, rgba(94, 34, 34, 0) 64.58%)",
  width: "100%",
  height: "100vw"
});

function FancyBackground(props: PropsWithChildren): JSX.Element {
  const { children } = props;

  return (
    <div className={background()}>
      {children}
    </div>
  );
}

export default FancyBackground;