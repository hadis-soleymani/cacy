import Link from "next/link";
import React from "react";
import styles from "./show_address_and_info.module.scss";

const Show_address_and_info = () => {
  return (
    <>
      <div className={styles.container}>
        <h3>آدرس اول</h3>
        <ul>
          <li>
            <p>
              نام :<span>حدیث</span>
            </p>
          </li>
          <li>
            <p>
              نام خانوادگی :<span>سلیمانی</span>
            </p>
          </li>
          <li>
            <p>
              شماره تماس :<span>09380457496</span>
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              آدرس:<span>هرمزگان ، بندر عباس ،خیابان هتل هما</span>
            </p>
          </li>
          <Link href="/screens/edit_information/edit_information">ویرایش</Link>
        </ul>
      </div>
      <h2 className={styles.add_adress}>
        <Link href="/screens/address_form/address_form">افزودن آدرس جدید</Link>{" "}
      </h2>
    </>
  );
};

export default Show_address_and_info;
