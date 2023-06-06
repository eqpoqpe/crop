import { classNameConcat } from "@eqpoqpe/classname-utils";
import { MouseEventHandler } from "react";

type SwitchProps = {
  isOn: boolean;
  onClick?: MouseEventHandler;
};

function Switch(props: SwitchProps): JSX.Element {
  const { isOn, onClick } = props;

  return (
    <div
      className={classNameConcat([
        "w-[46px]",
        "h-[24px]",
        "rounded-2xl",
        "mx-3",
        "bg-neutral-800",
        "border-[1px]",
        "border-neutral-700",
        "flex",
        "flex-row",
        "items-center",
        isOn ? "justify-end" : "justify-start",
        "box-sizing",
        "p-[2px]"
      ])}
      onClick={onClick}
    >
      <div
        className={classNameConcat([
          "w-[18px]",
          "h-[18px]",
          isOn ? "bg-pink-400" : "bg-neutral-600",
          "rounded-[50%]",
          "transition-all",
          "duration-700"
        ])}
      ></div>
    </div>
  );
}

export default Switch;