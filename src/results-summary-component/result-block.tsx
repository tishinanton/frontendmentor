import React from "react";
import styles from "./result-block.module.css";
import { useIsMobile } from "../breakpoints.hook";

export const ResultBlock = () => {
  const isMobile = useIsMobile();

  const blockClasses = [
    styles.block,
    isMobile ? styles.mobile : styles.desktop,
  ];

  const scoreClasses = [styles.score];

  return (
    <div className={blockClasses.join(" ")}>
      <div className={styles.blockTitle}>Your Result</div>
      <div className={styles.score}>
        <span className={styles.scoreFont}>76</span>
        <span className={styles.scoreOutOfFont}>of 100</span>
      </div>
      <div className={styles.resultDescription}>
        <div className={styles.performance}>Great</div>
        <div className={styles.description}>
          Your performance exceed 65% of the people conducting the test here!
        </div>
      </div>
    </div>
  );
};
