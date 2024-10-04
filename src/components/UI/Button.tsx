import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { LinkProps } from "react-router-dom";

interface BaseProps {
  children: ReactNode;
  isTextOnly?: boolean;
}

interface ButtonProps extends BaseProps, ComponentPropsWithoutRef<"button"> {
    to? : never
}

interface ButtonLinkProps extends LinkProps, BaseProps {
    to: string;
}

function is
