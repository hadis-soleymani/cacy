import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
//styles
import styles from "../../styles/auth.module.scss";
import Auth_Layout from "./auth_layout";

import Button from "../../components/shared/button";
import validate from "../../components/helper/validation";
import My_popup from "../../components/shared/my_popup";
import Dropdown from "../../components/shared/dropdown/dropdown";
import Input from "../../components/shared/input/input";

interface MyFormValues {
  state: string;
  city: string;
  postal_code: string;
  address: string;
  detail: string;
}
const Detail_information = () => {
  //popup controller state
  const [open, setOpen] = useState(false);
  const formik = useFormik<MyFormValues>({
    initialValues: {
      state: "",
      city: "",
      postal_code: "",
      address: "",
      detail: "",
    },
    validate,
    onSubmit: (values) => {
      //  alert(JSON.stringify(values, null, 2));
      setOpen(!open);
    },
  });

  console.log(formik.values.state);
  return (
    <Auth_Layout>
      <My_popup
        title="عملیات موفقیت آمیز بود"
        description="ایمیل تایید برای شما ارسال شد. لطفا وریفای نمایید"
        open={open}
        status="success"
      />

      <form className={styles.form_container} onSubmit={formik.handleSubmit}>
        <h1 className={styles.title}>افزودن اطلاعات تکمیلی</h1>
        <Dropdown
          options={[{ value: "Hormuzgan", label: "هرمزگان" }]}
          name={"state"}
          value={formik.values.state}
          onChange={formik.setFieldValue}
          error={formik.errors.state}
        />

        <Dropdown
          options={[{ value: "Bandar Abbas", label: "بندرعباس" }]}
          name={"city"}
          value={formik.values.city}
          onChange={formik.setFieldValue}
          error={formik.errors.city}
        />

        <Input
          placeholder="کد پستی خود را وارد نمایید"
          onChange={formik.handleChange}
          value={formik.values.postal_code}
          name="postal_code"
          error={formik.errors.postal_code}
        />
        <Input
          textarea={true}
          placeholder="آدرس خود را وارد نمایید"
          onChange={formik.handleChange}
          value={formik.values.address}
          name="address"
          error={formik.errors.address}
        />

        <Input
          textarea={true}
          placeholder="توضیحات تکمیلی خود را وارد نمایید(اختیاری)"
          onChange={formik.handleChange}
          value={formik.values.detail}
          name="detail"
          error={formik.errors.detail}
        />

        <Button type="submit" width="100%" height="fit-content">
          تکمیل خرید
        </Button>
        <p>
          <Link href="/authentication/sign_in"> بازگشت به فروشگاه</Link>
        </p>
      </form>
    </Auth_Layout>
  );
};

export default Detail_information;
