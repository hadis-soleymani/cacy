//note: products container component

import React from "react";

//components
import Product from "../cards/product";

//styles
import styles from "../../styles/product.module.scss";

//libraries
import ScrollAnimation from "react-animate-on-scroll";

const Store = () => {
  return (
    <div className={styles.products_container} id="فروشگاه">
      {/* call  products card */}
      <ScrollAnimation animateIn="fadeIn">
        <Product />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Product />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Product />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Product />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Product />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Product />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Product />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Product />
      </ScrollAnimation>
    </div>
  );
};

export default Store;
