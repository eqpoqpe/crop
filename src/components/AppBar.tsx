import { classNameConcat } from "@eqpoqpe/classname-utils";

import cropIcon from "../assets/crop.svg";

function AppBar(): JSX.Element {
  return (
    <div
      className={classNameConcat([
        "w-full",
        "h-[44px]",
        "bg-[#00000033]",
        "border-b-[1px]",
        "border-neutral-700",
        "sticky",
        "top-0"
      ])}
    >
      <div
        className={classNameConcat([
          "w-[24px]",
          "h-[24px]",
          "top-[50%]",
          "left-[50%]",
          "translate-x-[-50%]",
          "translate-y-[-50%]",
          "absolute"
        ])}
      >
        <img src={cropIcon} />
      </div>
    </div>
  );
}

export default AppBar;