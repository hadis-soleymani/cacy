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
  verify_code: string;
}
const Verify_email = () => {
  //popup controller state
  const [open, setOpen] = useState<boolean>(false);
  const formik = useFormik<MyFormValues>({
    initialValues: {
      verify_code: "",
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
          placeholder="کد ارسال شده به ایمیل خود را وارد نمایید"
          onChange={formik.handleChange}
          value={formik.values.verify_code}
          name="verify_code"
          error={formik.errors.verify_code}
        />

        <Button type="submit" width="100%" height="fit-content">
          ورود
        </Button>
        <p>
          <Link href="/screens/identity_information/identity_information">ثبت نام</Link>
        </p>
      </form>
    </Auth_Layout>
  );
};

export default Verify_email;



