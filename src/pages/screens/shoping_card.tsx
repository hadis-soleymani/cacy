import React, { useContext } from "react";
import styles from '../../styles/shoping_card.module.scss'
import Order_summery from "../../components/cards/order_summery";
import Header from "../../components/shared/header";
import Desktop_table from "../../components/cards/desktop_table";
import Mobile_table from "../../components/cards/mobile_table";

//Component

const Shoping_card = () => {
  return (
    <>
     <Header/>
    <div className={styles.container}>
     
      <div className={styles.desktop}><Desktop_table/></div>
      <div className={styles.mobile}><Mobile_table/></div>
    <Order_summery />
    </div>
    </>
  );
};

export default Shoping_card;