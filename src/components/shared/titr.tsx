import React from "react";

//styles
import styles from '../../styles/titr.module.scss';

//libraries
import ScrollAnimation from "react-animate-on-scroll";

interface Props{
  title:String;
}
//title is prop for titr that sends from index.js
const Titr :React.FC<Props>= ({ title }) => {
  return (
    <div className={styles.container}>
      <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        {title}
      </ScrollAnimation>
    </div>
  );
};

export default Titr;
