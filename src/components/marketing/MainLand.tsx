import { styled } from "@stitches/react";
import { classNameConcat } from "@eqpoqpe/classname-utils";

const Box = styled("div", {});

function MainLand(): JSX.Element {
  return (
    <Box>
      <div>
        <div>
          <p className={classNameConcat(["text-white"])}>UI/UX Experiments.</p>
        </div>
        <div>
          <p className={classNameConcat(["text-white"])}>UI/UXの実験。</p>
        </div>
        <div>
          <p className={classNameConcat(["text-white"])}>UI/UX實驗。</p>
        </div>
      </div>
    </Box>
  );
}

export default MainLand;