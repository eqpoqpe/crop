import { classNameConcat } from "@eqpoqpe/classname-utils";
import { css } from "@stitches/react";
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

const background = css({
  width: "100vw",
  minWidth: 1_500,
  height: 900,
  left: "50%",
  transform: "translateX(-50%)",
  position: "fixed",
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
      <motion.div
        className={classNameConcat(["relative", "z-0", "w-full", "h-full"])}
        initial={{ opacity: 0, scale: 0.5, rotate: 72 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <div className={background()}>
        </div>
      </motion.div>
      {children}
    </>
  );
}

export default FancyBackground;