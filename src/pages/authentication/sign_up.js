import React from "react";
import Link from 'next/link'

//styles
import styles from "../../styles/auth.module.scss";
import Auth_Layout from "./auth_layout";

//icons
import { HiOutlineMailOpen } from "react-icons/hi";
import Button from "../../components/shared/button";



const Sign_up = () => {
 

  return (
    <Auth_Layout>
      <form  className={styles.form_container}>
        <h1 className={styles.title}>فروشگاه کاکی</h1>

        <div className={styles.icon_inside}>
          <input
            className={styles.input}
            placeholder="email"
            id="email"
            name="email"
            type="email"
            
          />
          <HiOutlineMailOpen size={20} />
        </div>

       
          <div className={styles.icon_inside}>
          <input
            className={styles.input}
            placeholder="email"
            id="email"
            name="email"
            type="email"
           
          />
          <HiOutlineMailOpen size={20} />
        </div>

      
         <div className={styles.icon_inside}>
          <input
            className={styles.input}
            placeholder="email"
            id="email"
            name="email"
            type="email"
           
          />
          <HiOutlineMailOpen size={20} />
        </div>

      

        <Button  type="submit" width="fit-content" height="fit-content">
          ثبت نام
        </Button>
        <p><Link href="/authentication/sign_in"> ورود</Link></p>
      </form>
    </Auth_Layout>
  );
};

export default Sign_up;
