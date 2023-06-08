import { classNameConcat } from "@eqpoqpe/classname-utils";
import Box from "../Box";
import SelectProject from "./SelectProject";

function TextHero({ description }: { description: string }): JSX.Element {
  return (
    <div
      className={classNameConcat([
        "opacity-100",
        "md:hover:opacity-50",
        "transition-all",
        "duration-300"
      ])}
    >
      <p
        className={classNameConcat([
          "text-[40px]",
          "text-[#ffffffE6]",
          "font-sans",
          "leading-[56px]",
          "md:leading-[114px]",
          "md:text-[78px]",
          "whitespace-nowrap",
          "transition-all",
          "duration-300",
          "select-none"
        ])}
      >
        {description}
      </p>
    </div>
  );
}

function MainHero(): JSX.Element {
  return (
    <Box
      className={classNameConcat([
        "w-full",
        "flex",
        "flex-col",
        "justify-between",
        "items-center",
        "overflow-hidden",
        "box-sizing",
        "pt-20",
      ])}
      css={{
        height: 654,
        "@bph1": {
          height: "calc(100vh - $appBarFefaultHeight)"
        }
      }}
    >
      <Box
        className={classNameConcat([
          "w-full",
          "flex",
          "flex-col",
          "items-center",
          "overflow-hidden"
        ])}
      >
        <TextHero description="UI/UX Experiments." />
        <TextHero description="UI/UXの実験。" />
        <TextHero description="UI/UX實驗。" />
      </Box>
      <SelectProject />
    </Box>
  );
}

export default MainHero;