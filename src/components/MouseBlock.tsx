import { classNameConcat } from "@eqpoqpe/classname-utils";
import { memo, useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../app/hook/UseFollowPointer";

const MouseBlock = memo(function MouseBlock(): JSX.Element {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    // <div
    // className={classNameConcat([
    //   "w-[90px]",
    //   "h-[90px]",
    //   "fixed",
    //   "top-0",
    //   "bg-[#ffffff1a]",
    //   "backdrop-blur-xl",
    //   "flex",
    //   "justify-center",
    //   "items-center",
    //   "rounded-[50%]",
    //   "text-white",
    //   "text-sm",
    //   "overflow-hidden",
    //   "z-20"
    // ])}
    //   style={{
    //     visibility: "hidden"
    //   }}
    //   ref={mouseBlockRef}
    // >
    //   <p className="rotate-12 whitespace-nowrap	">{"( move )"}</p>
    // </div>
    <motion.div
      ref={ref}
      className={classNameConcat([
        "w-[112px]",
        "h-[112px]",
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
        "z-20",
        "select-none"
      ])}
      animate={{ x, y }}
      transition={{
        type: "just",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001
      }}
    >
      <p className="rotate-12 whitespace-nowrap	">{"( move )"}</p>
    </motion.div>
  );
});

export default MouseBlock;