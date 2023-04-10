import React from "react";
import styles from "./styles.module.css";
import { useIsMobile } from "../breakpoints.hook";
import { ResultBlock } from "./result-block";
import { ResultDetails } from "./result-details";

export const ResultsSummaryComponent = () => {
  const isMobile = useIsMobile();

  const wrapperClasses = [
    styles.wrapper,
    isMobile ? styles.mobile : styles.desktop,
  ];

  return (
    <div className={wrapperClasses.join(" ")}>
      <div className={styles.container}>
        <ResultBlock />
        <ResultDetails />
      </div>
    </div>
  );
};

export default ResultsSummaryComponent;
