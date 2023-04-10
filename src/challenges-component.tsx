import React from "react";
import { Link } from "react-router-dom";

import { CHALLENGES } from "./challenges";
import styles from "./challenges.module.css";

export const Challenges = () => {
  return (
    <div className={styles.challenges}>
      {CHALLENGES.map((c) => (
        <Link key={c.url} to={`${c.url}`}>
          {c.name}
        </Link>
      ))}
    </div>
  );
};
