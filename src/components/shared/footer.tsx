import React from "react";
import Image from "next/image";

//styles
import styles from "../../styles/footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.logo_container}>
        <Image src="/logo.svg" alt="logo" width={100} height={25} />
      </div>
      <section className={styles.footer}>
        <div className={styles.list}>
          <ul>
            <li className={styles.title_li}>تماس با ما</li>
            <li>
              <a>شماره تلفن</a>
            </li>
            <li>
              <a>ایمیل</a>
            </li>
          </ul>
        </div>
        <div className={styles.list}>
          <ul>
            <li className={styles.title_li}>محصولات</li>
            <li>
              <a>کاکتوس یک</a>
            </li>
            <li>
              <a> کاکتوس دو</a>
            </li>
          </ul>
        </div>
        <div className={styles.list}>
          <ul>
            <li className={styles.title_li}>سرویس ها</li>
            <li>
              <a>پشتیبانی</a>
            </li>
            <li>
              <a>سوالات متداول</a>
            </li>
          </ul>
        </div>

        <div className={styles.list}>
          <p className={styles.text}>
            اند درست مانند یک وب سایت معمولی استفاده کنید. علاوه بر این به شما
            اجازه می دهد تا از Node.js برای دسترسی به فایل ها و سایر عملیات های
            مربوط به سیستم استفاده کنید.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
