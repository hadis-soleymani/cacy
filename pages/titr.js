import React from "react";
import styles from "../styles/titr.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

const Titr = ({ title }) => {
  return (
    <div className={styles.container}>
      <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        {title}
      </ScrollAnimation>
    </div>
  );
};

export default Titr;
