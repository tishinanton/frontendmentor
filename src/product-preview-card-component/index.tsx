import React from "react";
import styles from "./styles.module.css";
import { ProductCard } from "./product-card/product-card";
import productImage from "./assets/image-product-desktop.jpg";
import productImageMobile from "./assets/image-product-mobile.jpg";

export const ProductPreviewCardComponent = () => {
  return (
    <div className={styles.wrapper}>
      <ProductCard
        category="PERFUME"
        description="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
        discountedPrice={149.99}
        image={productImage}
        imageMobile={productImageMobile}
        name="Gabrielle Essence Eau De Parfum"
        price={169.99}
      />
    </div>
  );
};

export default ProductPreviewCardComponent;
