import React from "react";
import styles from "./result-item.module.css";

import reactionIcon from "./assets/icon-reaction.svg";
import memoryIcon from "./assets/icon-memory.svg";
import verbalIcon from "./assets/icon-verbal.svg";
import visualIcon from "./assets/icon-visual.svg";
import { useIsMobile } from "../breakpoints.hook";

export interface IResultItemProps {
  color: "red" | "yellow" | "green" | "blue";
  name: string;
  score: number;
  icon: "reaction" | "memory" | "verbal" | "visual";
}

export const ResultItem = (props: IResultItemProps) => {
  const icon =
    props.icon === "memory"
      ? memoryIcon
      : props.icon === "reaction"
      ? reactionIcon
      : props.icon === "verbal"
      ? verbalIcon
      : visualIcon;

  const isMobile = useIsMobile();

  const wrapperClass = [
    styles.wrapper,
    isMobile ? styles.mobile : styles.desktop,
    styles[props.color],
  ].join(" ");

  return (
    <div className={wrapperClass}>
      <div className={styles.info}>
        <img src={icon} alt="icon" />
        <div className={styles.name}>{props.name}</div>
      </div>
      <div className={styles.score}>
        {props.score}
        <span className={styles.outOf}>&nbsp; / 100</span>
      </div>
    </div>
  );
};
