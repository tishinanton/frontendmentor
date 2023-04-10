import React from "react";
import styles from "./styles.module.css";
import { useIsMobile } from "../breakpoints.hook";
import { ResultBlock } from "./result-block";

export const ResultsSummaryComponent = () => {
  const isMobile = useIsMobile();

  const wrapperClasses = [
    styles.wrapper,
    isMobile ? styles.mobileWrapper : styles.desktopWrapper,
  ];

  return (
    <div className={wrapperClasses.join(" ")}>
      <ResultBlock />
    </div>
  );
};

export default ResultsSummaryComponent;
