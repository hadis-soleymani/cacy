import React from "react";
import Image from "next/image";
import styles from "../styles/product.module.scss";

const Product = () => {
  return (
    <div className={styles.product_container}>
      <div className={styles.image_container}>
        <Image src="/cuctus2.png" alt="logo" width={80} height={110} />
      </div>
      <div className={styles.detail}>
        <h1>کاکتوس پهلوون</h1>
        <p>$2500</p>
      </div>
      <button className={styles.button}>افزودن به سبد خرید</button>
    </div>
  );
};

export default Product;
