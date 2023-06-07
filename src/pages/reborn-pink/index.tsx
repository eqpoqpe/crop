import { lazy } from "react";
import Bound from "../../components/Bound";
import Controller from "../../components/Controller";
import MouseBlock from "../../components/MouseBlock";
import { classNameConcat } from "@eqpoqpe/classname-utils";

const ScrollBlock = lazy(() => import("../../components/ScrollBlock"));

function RebornPink(): JSX.Element {
  return (
    <div className={classNameConcat(["w-full", "h-full"])}>
      <Bound>
        <ScrollBlock />
      </Bound>
      <MouseBlock />
      <Controller />
      reborn-pink
    </div>
  );
}

export default RebornPink;