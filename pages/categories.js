import React from "react";
import Image from "next/image";
import styles from "../styles/categories.module.scss";

const Categories = () => {
  return (
    <div className={styles.container}>
     
        <div className={styles.left_card}>
          <h1>
            کاکتوس
            <br />
            گل گلی
          </h1>
          <Image src="/cuctus2.png" alt="logo" width={200} height={250} />
        </div>
    
        <div className={styles.top_card}>
          <h1>
            کاکتوس
            <br />
              من گل گلی
          </h1>
          <Image src="/cuctus3.png" alt="logo" width={150} height={150} />
        </div>
      
     
        <div className={styles.bottom_card}>
          <h1>
            کاکتوس
            <br />
            تو گل گلی
          </h1>
          <Image src="/cuctus4.png" alt="logo" width={150} height={150} />
        </div>
     
    </div>
  );
};

export default Categories;
