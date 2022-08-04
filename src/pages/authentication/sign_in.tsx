import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from 'formik';
//styles
import styles from "../../styles/auth.module.scss";
import Auth_Layout from "./auth_layout";

//icons
import { HiOutlineMailOpen } from "react-icons/hi";

//components
import My_popup from "../../components/shared/my_popup";
import Button from "../../components/shared/button";
import validate from "../../components/helper/validation";

interface MyFormValues {

  email: string;

}
const Sign_in = () => {
  //popup controller state
  const [open, setOpen] = useState<boolean>(false);
  const formik = useFormik<MyFormValues>({

    initialValues: {
      email: '',
    },
    validate,
    onSubmit: values => {
    //  alert(JSON.stringify(values, null, 2));
      setOpen(!open);
    },

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
      <form className={styles.form_container} onSubmit={formik.handleSubmit}>
        <h1 className={styles.title}>فروشگاه کاکی</h1>

        {/* email input */}
        <div className={styles.icon_inside}>
          <input
            className={styles.input}
            placeholder="ایمیل خود را وارد نمایید"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <HiOutlineMailOpen size={20} />
        </div>
        {formik.errors.email ? <div className={styles.error}>{formik.errors.email}</div> : null}
        <Button type="submit" width="100%" height="fit-content">
          ورود
        </Button>
        <p>
          <Link href="/authentication/sign_up">ثبت نام</Link>
        </p>
      </form>
    </Auth_Layout>
  );
};

export default Sign_in;
