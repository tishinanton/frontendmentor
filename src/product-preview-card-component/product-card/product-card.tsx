import React from "react";
import styles from "./product-card.module.css";
import { useIsMobile } from "../../breakpoints.hook";
import cartIcon from "./../assets/icon-cart.svg";

export interface IProductCardProps {
  category: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: string;
  imageMobile?: string;
}

export const ProductCard = (props: IProductCardProps) => {
  const isMobile = useIsMobile();
  const cardClasses = [
    styles.card,
    isMobile ? styles.mobile : styles.desktop,
  ].join(" ");

  return (
    <div className={cardClasses}>
      <div className={styles.image}>
        <img
          src={
            isMobile && !!props.imageMobile ? props.imageMobile : props.image
          }
          alt={props.name}
        />
      </div>
      <section className={styles.productCardInfo}>
        <div className={styles.category}>{props.category}</div>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.prices}>
          <div className={styles.discount}>${props.discountedPrice}</div>
          <div className={styles.price}>${props.price}</div>
        </div>
        <button className={styles.button}>
          <img src={cartIcon} alt="icon-button" />
          Add to Cart
        </button>
      </section>
    </div>
  );
};
