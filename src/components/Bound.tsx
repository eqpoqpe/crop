import { classNameConcat } from "@eqpoqpe/classname-utils";
import { PropsWithChildren } from "react";

function Bound(props: PropsWithChildren): JSX.Element {
  const { children } = props;

  return (
    <div className={classNameConcat([
      "w-full",
      "h-full",
      "flex",
      "flex-col",
      "justify-center",
      "items-center",
      "overflow-hidden",
      "z-20"
    ])}
    >
      {children}
    </div>
  );
}

export default Bound;