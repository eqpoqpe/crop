import { createStitches } from "@stitches/react";

const { css, styled } = createStitches({
  theme: {
    space: {},
    sizes: {
      appBarFefaultHeight: "44px"
    },
  },
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
    bph1: "(min-height: 610px)"
  },
});

export {
  css,
  styled
};