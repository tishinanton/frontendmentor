import React from "react";
import styles from "./simple-button.module.scss";

export interface SimpleButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export const SimpleButton = ({ onClick, children }: SimpleButtonProps) => {
  return <button className={styles.button} onClick={onClick}>{children}</button>;
};
