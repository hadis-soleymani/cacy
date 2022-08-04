// note: product card container

import React from "react";
import Image from "next/image";
import Button from "../shared/button";
//styles
import styles from "../../styles/product.module.scss";

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
      <Button width="fit-content" height="fit-content">افزودن به سبد خرید</Button>
    </div>
  );
};

export default Product;
