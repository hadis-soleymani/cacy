import React, { useState } from "react";
import Link from "next/link";

//styles
import styles from "../../styles/auth.module.scss";
import Auth_Layout from "./auth_layout";

//icons
import { HiOutlineMailOpen } from "react-icons/hi";

//libraries
import { useFormik } from "formik";

//function
import validate from "./validation";

//components
import My_popup from "../my_popup";

const Sign_in = () => {
  //popup controller state
  const [open, setOpen] = useState(false);

  //formik state
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    //call validation function
    validate,
    
  });

  //form submit button
  const sign_in = (event) => {
    event.preventDefault();

    setOpen(!open);
  };

  return (
    <Auth_Layout>
      {/* popup */}
      <My_popup
        title="عملیات موفقیت آمیز بود"
        description="ایمیل تایید برای شما ارسال شد. لطفا وریفای نمایید"
        open={open}
        status="success"
      />

      {/* sign in form */}
      <form className={styles.form_container}>
        <h1 className={styles.title}>فروشگاه کاکی</h1>

        {/* email input */}
        <div className={styles.icon_inside}>
          <input
            className={styles.input}
            placeholder="email"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <HiOutlineMailOpen size={20} />
        </div>

        {formik.touched.email && formik.errors.email ? (
          <div className={styles.error}>{formik.errors.email}</div>
        ) : null}
        <button className={styles.button} onClick={sign_in}>
          ورود
        </button>
        <p>
          <Link href="/authentication/sign_up">ثبت نام</Link>
        </p>
      </form>
    </Auth_Layout>
  );
};

export default Sign_in;
