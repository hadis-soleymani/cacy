import React from 'react'
import Product from './product'
import styles from '../styles/product.module.scss';

const Stote = () => {
  return (
    <div className={styles.products_container}>
        <Product/>
        <Product/>
        <Product/>
        <Product/>

        <Product/>
        <Product/>
        <Product/>
        <Product/>
    </div>
  )
}

export default Stote