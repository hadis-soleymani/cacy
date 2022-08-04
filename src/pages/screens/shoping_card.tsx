import React, { useContext } from "react";
import styles from '../../styles/shoping_card.module.scss'
import Cart from "../../components/cards/cart";
import Order_summery from "../../components/cards/order_summery";
import Header from "../../components/shared/header";

//Component

const Shoping_card = () => {
  return (
    <>
     <Header/>
    <div className={styles.container}>
     
      <Cart />
      <Order_summery />
    </div>
    </>
  );
};

export default Shoping_card;
