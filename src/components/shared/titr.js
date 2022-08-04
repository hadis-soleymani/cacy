import React from "react";

//styles
import styles from '../../styles/titr.module.scss';

//libraries
import ScrollAnimation from "react-animate-on-scroll";


//title is prop for titr that sends from index.js
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
