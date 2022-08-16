import React from "react";
import Button from "../shared/button";
import styles from "../../styles/order_summery.module.scss";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
const Order_summery = () => {
  return (
    <div className={styles.container}>
      <table>
        <caption>رسید خرید</caption>
        <tbody>
          <tr>
            <th>مجموع</th>
            <td>
              100<span>تومان</span>
            </td>
          </tr>
          <tr>
            <th>هزینه ی ارسال</th>
            <td>
              100<span>تومان</span>
            </td>
          </tr>
          <tr>
            <th className={styles.discount_code}>
              وارد کردن کد تخفیف
              <BiArrowBack />
            </th>
          </tr>
          <tr>
            <th>جمع کل</th>
            <td>
              100<span>تومان</span>
            </td>
          </tr>
        </tbody>
      </table>
      <Button width="100%" height="fit-content">
        <Link href="/screens/payment/payment">تسویه حساب</Link>
      </Button>
    </div>
  );
};

export default Order_summery;
