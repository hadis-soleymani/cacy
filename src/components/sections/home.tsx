import React from "react";
import Image from "next/image";
import Button from "../shared/button";
//libraries
import ScrollAnimation from "react-animate-on-scroll";

//styles
import styles from "../../styles/home.module.scss";

const Home = () => {
  return (
    <div className={styles.container} id="خانه">
      <main>
        <ScrollAnimation animateIn="fadeIn">
          <h1>
            به فروشگاه
            <br />
            <span> کاکی</span>
            خوش آمدید
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          <p>
            فریم ورک الکترون به شما اجازه می دهد تا از جاوا اسکریپت در بخش فرانت
            اند درست مانند یک وب سایت معمولی استفاده کنید. علاوه بر این به شما
            اجازه می دهد تا از Node.js برای دسترسی به فایل ها و سایر عملیات های
            مربوط به سیستم استفاده کنید.
          </p>
        </ScrollAnimation>
        <Button width="fit-content" height="fit-content"> سبد خرید</Button>
      </main>
      <div className={styles.green_section}>
        <div>
          <Image
            src="/plant.png"
            alt="plant"
            style={{ width: "30vw", height: "auto" }}
            width={200}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
