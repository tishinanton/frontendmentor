import React from "react";
import styles from "./circle-button.module.css";
import { useIsMobile } from "../../../breakpoints.hook";

export interface ICircleButtonProps {
  children: React.ReactNode;
  size: number;
  isActive?: boolean;
  onClick?: () => void;
}

export const CircleButton = (props: ICircleButtonProps) => {
  const isMobile = useIsMobile();

  const buttonClasses = [
    styles.button,
    props.isActive ? styles.active : "",
    isMobile ? styles.mobile : styles.desktop,
    !!props.onClick ? styles.hoverable : "",
  ].join(" ");

  return (
    <button
      className={buttonClasses}
      style={{
        width: `${props.size}px`,
        height: `${props.size}px`,
        lineHeight: `${props.size}px`,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
