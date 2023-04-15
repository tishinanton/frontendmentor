import React from "react";

import styles from "./styles.module.scss";
import {
  NftPreviewCardComponent,
  NftPreviewCardComponentProps,
} from "./nft-preview-card-component";
import { useIsMobile } from "../breakpoints.hook";

import productImage from "./assets/image-equilibrium.jpg";
import authorImage from "./assets/image-avatar.png";

export const NftPreviewCardComponentWrapper = () => {
  const testProps: NftPreviewCardComponentProps = {
    author: {
      image: authorImage,
      name: "Jules Wyvern",
      url: "./",
    },
    description: "Our Equilibrium collection promotes balance and calm.",
    name: "Equilibrium #3429",
    image: productImage,
    price: "0.041 ETH",
    timeleft: "3 days left",
    url: "./",
  };

  const isMobile = useIsMobile();

  const wrapperClass = [
    styles.wrapper,
    isMobile ? styles.mobile : styles.desktop,
  ].join(" ");

  return (
    <div className={wrapperClass}>
      <NftPreviewCardComponent {...testProps} />
    </div>
  );
};

export default NftPreviewCardComponentWrapper;
