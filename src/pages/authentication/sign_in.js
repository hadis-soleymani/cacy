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
const validate = values => {

  const errors = {};

  if (!values.firstName) {

    errors.firstName = 'Required';

  } else if (values.firstName.length > 15) {

    errors.firstName = 'Must be 15 characters or less';

  }



  if (!values.lastName) {

    errors.lastName = 'Required';

  } else if (values.lastName.length > 20) {

    errors.lastName = 'Must be 20 characters or less';

  }



  if (!values.email) {

    errors.email = 'Required';

  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {

    errors.email = 'Invalid email address';

  }



  return errors;

};
const Sign_in = () => {
  //popup controller state
  const [open, setOpen] = useState(false);
  const formik = useFormik({

    initialValues: {

      firstName: '',

      lastName: '',

      email: '',

    },

    validate,

    onSubmit: values => {

      alert(JSON.stringify(values, null, 2));

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
            id="email"

            name="email"
   
            type="email"
   
            onChange={formik.handleChange}
   
            value={formik.values.email}
          />
          <HiOutlineMailOpen size={20} />
        </div>
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
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
