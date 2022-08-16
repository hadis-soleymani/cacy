import React from "react";
import Link from "next/link";
import Order_summery from "../../../components/cards/order_summery";
import Show_address_and_info from "../../../components/cards/show_address_and_info/show_address_and_info";
import styles from "./payment.module.scss";
import Button from "../../../components/shared/button";
const Payment = () => {
  return (
    <div className={styles.container}>
      <Show_address_and_info />
      <Order_summery />

      <div className={styles.about_payment}>
      <p>
        پرداخت امن به وسیله ی کلیه ی کارت های عضو شتاب از طریق درگاه زرین پال
      </p>
      <div className={styles.rules_div}>
        <p>
          من<span> قوانین و مقررات </span>را خوانده ام و آن را می پذیرم
        </p>
        <input type="checkbox" />
      </div>
      
      </div>  
      <Button width="240px" height="fit-content">
        <Link href="/screens/payment/payment">تسویه حساب</Link>
      </Button>
    </div>
  );
};

export default Payment;
