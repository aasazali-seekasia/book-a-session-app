import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

interface BaseProps {
  children: ReactNode;
  isTextOnly?: boolean;
}

type ButtonProps = BaseProps &
  ComponentPropsWithoutRef<"button"> & { to?: never };

type ButtonLinkProps = BaseProps & LinkProps & { to: string };

function isRouterLink(
  props: ButtonProps | ButtonLinkProps
): props is ButtonLinkProps {
  return "to" in props;
}

export default function Button(props: ButtonProps | ButtonLinkProps) {
  if (isRouterLink(props)) {
    const { children, isTextOnly, ...elementSpecificProps } = props;
    return (
      <Link
        className={`button ${isTextOnly ? "button--text-only" : ""}`}
        {...elementSpecificProps}
      >
        {children}
      </Link>
    );
  }

  const { children, isTextOnly, ...elementSpecificProps } = props;

  return (
    <button
      className={`button ${isTextOnly ? "button--text-only" : ""}`}
      {...elementSpecificProps}
    >
      {children}
    </button>
  );
}
