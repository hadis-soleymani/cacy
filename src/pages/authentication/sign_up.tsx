import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
//styles
import styles from "../../styles/auth.module.scss";
import Auth_Layout from "./auth_layout";

import Button from "../../components/shared/button";
import validate from "../../components/helper/validation";
import My_popup from "../../components/shared/my_popup";
import Input from "../../components/shared/input/input";

interface MyFormValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}
const Sign_up = () => {
  //popup controller state
  const [open, setOpen] = useState(false);
  const formik = useFormik<MyFormValues>({
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
        <Input
          placeholder="نام خود را وارد نمایید"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          name="firstName"
          error={formik.errors.firstName}
        />
        <Input
          placeholder="نام خانوادگی خود را وارد نمایید"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          name="lastName"
          error={formik.errors.lastName}
        />
        <Input
          placeholder="شماره تلفن خود را وارد نمایید"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          name="phoneNumber"
          error={formik.errors.phoneNumber}
        />

        <Button type="submit" width="100%" height="fit-content">
          ثبت نام
        </Button>
        <p>
          <Link href="/authentication/detail_information"> ورود</Link>
        </p>
      </form>
    </Auth_Layout>
  );
};

export default Sign_up;
