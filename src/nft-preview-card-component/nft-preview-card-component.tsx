import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

import ethIcon from "./assets/icon-ethereum.svg";
import viewIcon from "./assets/icon-view.svg";
import timeleftIcon from "./assets/icon-clock.svg";

export type NftPreviewCardComponentProps = {
  name: string;
  url: string;
  description: string;
  image: string;
  price: string;
  timeleft: string;
  author: {
    image: string;
    name: string;
    url: string;
  };
};

export const NftPreviewCardComponent = (
  props: NftPreviewCardComponentProps
) => {
  return (
    <div className={styles.card}>
      <Link to={props.url} className={styles.image}>
        <img src={props.image} alt="product" />
        <div className={styles.view}>
          <img src={viewIcon} alt="view" />
        </div>
      </Link>
      <Link to={props.url} className={styles.heading}>
        <h1>{props.name}</h1>
      </Link>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.info}>
        <div className={styles.price}>
          <img src={ethIcon} alt="currency" />
          <span>{props.price}</span>
        </div>
        <div className={styles.timeleft}>
          <img src={timeleftIcon} alt="clock icon" />
          <span>{props.timeleft}</span>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.author}>
        <img src={props.author.image} alt="author" />
        Creation of <Link to={props.author.url}>{props.author.name}</Link>
      </div>
    </div>
  );
};
