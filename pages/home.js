import React from "react";
import styles from "../styles/home.module.scss";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <main>
        <h1>
          به فروشگاه
          <br />
          <span> کاکی</span>
          خوش آمدید
        </h1>
        <p>
          فریم ورک الکترون به شما اجازه می دهد تا از جاوا اسکریپت در بخش فرانت
          اند درست مانند یک وب سایت معمولی استفاده کنید. علاوه بر این به شما
          اجازه می دهد تا از Node.js برای دسترسی به فایل ها و سایر عملیات های
          مربوط به سیستم استفاده کنید.
        </p>
        <button className={styles.button}>Discover</button>
      </main>
      <div className={styles.green_section}>
        <div>
          <Image
            src="/plant.png"
            alt="plant"
            layout="responsive"
            width={400}
            height={550}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;