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
          "font-sans",
          "leading-[56px]",
          "md:leading-[96px]",
          "md:text-7xl",
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
    <div
      className={classNameConcat([
        "w-full",
        "mt-20",
        "flex",
        "flex-col",
        "items-center",
        "overflow-hidden"
      ])}
    >
      <TextHero description="UI/UX Experiments." />
      <TextHero description="UI/UXの実験。" />
      <TextHero description="UI/UX實驗。" />
    </div>
  );
}

export default MainHero;