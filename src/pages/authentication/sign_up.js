import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
//styles
import styles from "../../styles/auth.module.scss";
import Auth_Layout from "./auth_layout";

//icons
import { HiOutlineMailOpen } from "react-icons/hi";
import Button from "../../components/shared/button";
import validate from "../../components/helper/validation";
import My_popup from "../../components/shared/my_popup";

const Sign_up = () => {
  //popup controller state
  const [open, setOpen] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
    validate,
    onSubmit: (values) => {
      //  alert(JSON.stringify(values, null, 2));
      setOpen(!open);
    },
  });
  return (
    <Auth_Layout>
      <My_popup
        title="عملیات موفقیت آمیز بود"
        description="ایمیل تایید برای شما ارسال شد. لطفا وریفای نمایید"
        open={open}
        status="success"
      />

      <form className={styles.form_container} onSubmit={formik.handleSubmit}>
        <h1 className={styles.title}>فروشگاه کاکی</h1>

        <div className={styles.icon_inside}>
          <input
            className={styles.input}
            placeholder="نام خود را وارد نمایید"
            id="firstName"
            name="firstName"
            type="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <HiOutlineMailOpen size={20} />
        </div>
        {formik.errors.firstName ? (
          <div className={styles.error}>{formik.errors.firstName}</div>
        ) : null}
        <div className={styles.icon_inside}>
          <input
            className={styles.input}
            placeholder="نام خانوادگی خود را وارد نمایید"
            id="lastName"
            name="lastName"
            type="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <HiOutlineMailOpen size={20} />
        </div>
        {formik.errors.lastName ? (
          <div className={styles.error}>{formik.errors.lastName}</div>
        ) : null}
        <div className={styles.icon_inside}>
          <input
            className={styles.input}
            placeholder="شماره تلفن خود را وارد نمایید"
            id="phoneNumber"
            name="phoneNumber"
            type="phoneNumber"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
          <HiOutlineMailOpen size={20} />
        </div>
        {formik.errors.phoneNumber ? (
          <div className={styles.error}>{formik.errors.phoneNumber}</div>
        ) : null}
        <Button type="submit" width="100%" height="fit-content">
          ثبت نام
        </Button>
        <p>
          <Link href="/authentication/sign_in"> ورود</Link>
        </p>
      </form>
    </Auth_Layout>
  );
};

export default Sign_up;
