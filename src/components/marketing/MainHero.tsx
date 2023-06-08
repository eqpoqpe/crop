import { classNameConcat } from "@eqpoqpe/classname-utils";

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
          "text-4xl",
          "text-[#ffffffE6]",
          "font-bold",
          "text-center",
          "leading-[56px]",
          "md:leading-[96px]",
          "md:text-7xl",
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
    <div>
      <TextHero description="UI/UX Experiments." />
      <TextHero description="UI/UXの実験。" />
      <TextHero description="UI/UX實驗。" />
    </div>
  );
}

export default MainHero;