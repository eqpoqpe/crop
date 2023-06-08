import { classNameConcat } from "@eqpoqpe/classname-utils";
import Text from "../Text";

type ProjectLinkProps = {
  description?: string;
};

function ProjectLink(props: ProjectLinkProps): JSX.Element {
  const { description } = props;

  return (
    <div>
      <Text
        className="text-white text-sm"
        css={{
          "&::before": {
            content: "( "
          },
          "&::after": {
            content: " )"
          }
        }}
      >
        {description}
      </Text>
    </div>
  );
}

function SelectProject(): JSX.Element {
  return (
    <div
      className={classNameConcat([
        "self-end",
        "box-szing",
        "p-7"
      ])}
    >
      <div
        className={classNameConcat([
          "flex",
          "flex-col",
          "items-end",
          "space-y-3"
        ])}
      >
        <ProjectLink description="Source Code" />
        <ProjectLink description="Selected ?" />
        <ProjectLink description="1 - 3" />
      </div>
    </div>
  );
}

export default SelectProject;