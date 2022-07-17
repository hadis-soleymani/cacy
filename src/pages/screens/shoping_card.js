import React, { useContext } from "react";

import Cart from "../../components/cards/cart";

//Component

import styles from "../../styles/shoping_card.module.scss";

const Shoping_card = () => {
 
  
  return (
    <div className={styles.container}>
      <div>
<Cart/>
      </div>
      
        <div className={styles.purchase_details}>
          <p>
            <span>Total Items: </span>
            
          </p>
          <p>
            <span>Total Payments: </span>
            
          </p>
          <div>
            <button
              className={styles.check_out}
             
            >
              Check out
            </button>
            <br />
            <button
              className={styles.clear}
              
            >
              clear
            </button>
          </div>
        </div>
      
      {/* {state.checkout && (
        <div className={styles.clear_checkout_div}>
          <h3>Check Out Successfully</h3>
          <Link to="/products">Buy More</Link>
        </div>
      )} */}

      {/* {!state.checkout && state.itemsCounter === 0 && (
        <div className={styles.clear_checkout_div}>
          <h3>Want To Buy?</h3>
          <Link to="/products">Go To Shop</Link>
        </div>
      )} */}
    </div>
  );
};

export default Shoping_card;
