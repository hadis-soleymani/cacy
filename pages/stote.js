import React from 'react'
import Product from './product'
import styles from '../styles/product.module.scss';
import ScrollAnimation from "react-animate-on-scroll";
const Stote = () => {
  return (
    <div className={styles.products_container}>
 <ScrollAnimation animateIn="fadeIn">
        <Product/>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
        <Product/>
        </ScrollAnimation><ScrollAnimation animateIn="fadeIn">
        <Product/>
        </ScrollAnimation><ScrollAnimation animateIn="fadeIn">
        <Product/>
        </ScrollAnimation><ScrollAnimation animateIn="fadeIn">
        <Product/>
        </ScrollAnimation><ScrollAnimation animateIn="fadeIn">
        <Product/>
        </ScrollAnimation><ScrollAnimation animateIn="fadeIn">
        <Product/>
        </ScrollAnimation><ScrollAnimation animateIn="fadeIn">
        <Product/>
        </ScrollAnimation>
        
    </div>
  )
}

export default Stote