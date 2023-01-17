import React, { ReactNode } from "react";
import { useStyles } from "./styles";

interface Props {
  children: ReactNode;
}

export const Wrapper = ({ children }: Props) => {
  const classes = useStyles();
  return <div className={classes.wrapper}>{children}</div>;
};
