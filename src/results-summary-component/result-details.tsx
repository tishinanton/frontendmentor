import { ResultItem } from "./result-item";
import styles from "./result-details.module.css";
import { useIsMobile } from "../breakpoints.hook";

export const ResultDetails = () => {
  const isMobile = useIsMobile();
  const resultDetailsClass = [
    styles.wrapper,
    isMobile ? styles.mobile : styles.desktop,
  ].join(" ");

  return (
    <div className={resultDetailsClass}>
      <div className={styles.title}>Summary</div>
      <div className={styles.items}>
        <ResultItem color="red" icon="reaction" name="Reaction" score={80} />
        <ResultItem color="yellow" icon="memory" name="Memory" score={92} />
        <ResultItem color="green" icon="verbal" name="Verbal" score={61} />
        <ResultItem color="blue" icon="visual" name="Visual" score={73} />
      </div>
      <div role="button" className={styles.button}>
        Continue
      </div>
    </div>
  );
};
