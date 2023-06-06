import { classNameConcat } from "@eqpoqpe/classname-utils";
import Switch from "./Switch";
import { useModeContext } from "../app/provider/ControllerModeProvider";

function Controller(): JSX.Element {
  const { isDanceMode, setOnDance } = useModeContext();

  return (
    <div
      className={classNameConcat([
        "w-full",
        "fixed",
        "bottom-10",
        "left-[50%]",
        "translate-x-[-50%]",
        "flex",
        "justify-center",
        "items-center",
        "text-white",
        "text-sm",
        "flex",
        "flex-col",
        "z-10"
      ])}
    >
      <div
        className={classNameConcat([
          "flex",
          "flex-row",
          "items-center",
          "py-3"
        ])}
      >
        <p className={classNameConcat(["text-sm", "select-none"])}>scroll block dance mode?</p>
        <Switch isOn={isDanceMode} onClick={setOnDance} />
      </div>
      <p className="text-neutral-500 select-none">Try moving your mouse.</p>
      <p className="text-neutral-500 select-none">マウスを動かしてみてください。</p>
      <p className="text-neutral-500 select-none">嘗試移動滑鼠。</p>
    </div>
  );
}

export default Controller;