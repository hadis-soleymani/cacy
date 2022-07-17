import React from "react";
import Link from 'next/link'

//styles
import styles from "../../styles/auth.module.scss";
import Auth_Layout from "./auth_layout";

//icons
import { HiOutlineMailOpen } from "react-icons/hi";

//libraries
import { useFormik } from "formik";

//function
import validate from "./validation";

const Sign_up = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    //call validation function
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Auth_Layout>
      <form onSubmit={formik.handleSubmit} className={styles.form_container}>
        <h1 className={styles.title}>فروشگاه کاکی</h1>

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

        <button className={styles.button} type="submit">
          ثبت نام
        </button>
        <Link href="/authentication/sign_in"><a> ورود</a></Link>
      </form>
    </Auth_Layout>
  );
};

export default Sign_up;
