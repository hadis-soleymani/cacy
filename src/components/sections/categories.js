import React from "react";
import Image from "next/image";

//styles
import styles from "../../styles/categories.module.scss";

const Categories = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_card}>
        <h1>کاکتوس گل گلی</h1>
        <Image src="/cuctus2.png" alt="logo" width={150} height={200} />
      </div>

      <div className={styles.top_card}>
        <h1>کاکتوس من گل گلی</h1>
        <Image src="/cuctus3.png" alt="logo" width={100} height={100} />
      </div>

      <div className={styles.bottom_card}>
        <h1>کاکتوس تو گل گلی</h1>
        <Image src="/cuctus4.png" alt="logo" width={100} height={100} />
      </div>
    </div>
  );
};

export default Categories;
