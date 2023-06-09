import Box from "../Box";
import { classNameConcat } from "@eqpoqpe/classname-utils";
import { Link, LinkProps } from "react-router-dom";
import { PropsWithChildren } from "react";

type ProjectLinkProps = {
  description?: string;
  asLink?: boolean;
  to?: string;
} & Omit<LinkProps, "to">;
type LinkTextProps = {
  asLink?: boolean;
} & PropsWithChildren;

function LinkText(props: LinkTextProps): JSX.Element {
  const { children, asLink } = props;

  return (
    <Box
      className={classNameConcat([
        "transition-all",
        "duration-300",
        asLink ? "opacity-60" : "",
        asLink ? "hover:opacity-100" : ""
      ])}
      css={{
        borderBottom: "1px solid",
        "p::before": {
          content: "( "
        },
        "p::after": {
          content: " )"
        },
        ...asLink && {
          "&:hover": {
            content: "",
            borderBottom: "1px solid white"
          }
        }
      }}
    >
      <p
        className={classNameConcat([
          "text-white",
          "text-sm",
          "select-none"
        ])}
      >{children}</p>
    </Box>
  );
}

function ProjectLink(props: ProjectLinkProps): JSX.Element {
  const { description, to, target, asLink } = props;

  if (!!to && asLink) {
    return (
      <Link to={to} target={target}>
        <LinkText asLink={asLink}>{description}</LinkText>
      </Link>
    );
  } else {
    return (
      <div>
        <LinkText asLink={asLink}>{description}</LinkText>
      </div>
    );
  }
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
        <ProjectLink
          description="SOURCE CODE"
          to={"https://github.com/eqpoqpe/crop/tree/main"}
          target="_blank"
          asLink={true}
        />
        <ProjectLink
          description="SELECTED ?"
          asLink={false}
        />
        <ProjectLink
          description="1 - 3"
          asLink={false}
        />
      </div>
    </div>
  );
}

export default SelectProject;