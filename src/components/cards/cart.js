import React from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../../styles/cart.module.scss";
import Button from "../shared/button";
import Button_card from "./button_card";

const Cart = () => {
  return (
    <div className={styles.container}>
      <table>
        <tbody>
          <tr>
            <th>محصول</th>
            <th> </th>
            <th>قیمت</th>
            <th>تعداد</th>
            <th>جمع کل</th>
            <th> </th>
          </tr>
          <tr>
            <td>
              <div className={styles.img}>
                <Image src="/cuctus2.png" alt="logo" width={40} height={60} />
              </div>
            </td>
            <td>
              <p>کاکتوس گلدان قرمز</p>
              <p>قرمز</p>
            </td>
            <td>50000</td>
            <td >
              <Button_card />
            </td>
            <td> 100,000</td>
            <td>
              <AiOutlineClose size={28} className={styles.icon} />
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.img}>
                <Image src="/cuctus2.png" alt="logo" width={40} height={60} />
              </div>
            </td>
            <td>
              <p>کاکتوس گلدان قرمز</p>
              <p>قرمز</p>
            </td>
            <td>50000</td>
            <td>
              <Button_card />
            </td>
            <td> 100,000</td>
            <td>
              <AiOutlineClose size={28} className={styles.icon} />
            </td>
          </tr>
           <tr>
            <td>
              <div className={styles.img}>
                <Image src="/cuctus2.png" alt="logo" width={40} height={60} />
              </div>
            </td>
            <td>
              <p>کاکتوس گلدان قرمز</p>
              <p>قرمز</p>
            </td>
            <td>50000</td>
            <td>
              <Button_card />
            </td>
            <td> 100,000</td>
            <td>
              <AiOutlineClose size={28} className={styles.icon} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
