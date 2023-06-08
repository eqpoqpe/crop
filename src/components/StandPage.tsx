import { classNameConcat } from "@eqpoqpe/classname-utils";
import { PropsWithChildren } from "react";

function StandPage(props: PropsWithChildren): JSX.Element {
  const { children } = props;

  return (
    <div
      className={classNameConcat([
        "w-full",
        "h-full",
        "absolute",
        "top-0",
        "left-0",
        "overflow-auto"
      ])}
    >
      {children}
    </div>
  );
}

export default StandPage;