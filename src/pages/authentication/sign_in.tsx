import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
//styles
import styles from "../../styles/auth.module.scss";
import Auth_Layout from "./auth_layout";

//components
import My_popup from "../../components/shared/my_popup";
import Button from "../../components/shared/button";
import validate from "../../components/helper/validation";
import Input from "../../components/shared/input/input";

interface MyFormValues {
  email: string;
}
const Sign_in = () => {
  //popup controller state
  const [open, setOpen] = useState<boolean>(false);
  const formik = useFormik<MyFormValues>({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      //  alert(JSON.stringify(values, null, 2));
      setOpen(!open);
    },
  });

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

        <Input
          placeholder="ایمیل خود را وارد نمایید"
          onChange={formik.handleChange}
          value={formik.values.email}
          name="email"
          error={formik.errors.email}
        />

        <Button type="submit" width="100%" height="fit-content">
          <Link href="/authentication/verify_email"> ورود</Link>
        </Button>
      </form>
    </Auth_Layout>
  );
};

export default Sign_in;
