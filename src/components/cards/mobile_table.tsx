import React from 'react'
import styles from '../../styles/mobile_table.module.scss'
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import Button_card from "./button_card";

const Mobile_table = () => {
  return (
    <div className={styles.container}>
      <table>
        <tbody>
          <tr>
            <th>محصول</th>
            <th></th>
            <th>قیمت</th>
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
            <td><p>50000</p>
              <p>تومان</p></td>
          </tr>
          <tr>
            <th>تعداد</th>
            <th>قیمت کل</th>
            <th></th>
          </tr>
          <tr>
          <td >
              <Button_card />
            </td>
            <td> <p>100000</p>
              <p>تومان</p></td>
            <td>
              <AiOutlineClose size={28} className={styles.icon} />
            </td>
          </tr>

          <tr>
            <th>محصول</th>
            <th></th>
            <th>قیمت</th>
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
            <td><p>50000</p>
              <p>تومان</p></td>
          </tr>
          <tr>
            <th>تعداد</th>
            <th>محصول</th>
            <th></th>
          </tr>
          <tr>
          <td >
              <Button_card />
            </td>
            <td> <p>100000</p>
              <p>تومان</p></td>
            <td>
              <AiOutlineClose size={28} className={styles.icon} />
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}

export default Mobile_table