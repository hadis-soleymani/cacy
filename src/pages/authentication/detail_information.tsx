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
import Dropdown from "../../components/shared/dropdown/dropdown";

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
        />
        {formik.errors.state ? (
          <div className={styles.error}>{formik.errors.state}</div>
        ) : null}

        <Dropdown
          options={[{ value: "Bandar Abbas", label: "بندرعباس" }]}
          name={"city"}
          value={formik.values.city}
          onChange={formik.setFieldValue}
        />
        {formik.errors.city ? (
          <div className={styles.error}>{formik.errors.city}</div>
        ) : null}
        <div className={styles.icon_inside}>
          <input
            className={styles.input}
            placeholder="کد پستی خود را وارد نمایید"
            id="postal_code"
            name="postal_code"
            type="postal_code"
            onChange={formik.handleChange}
            value={formik.values.postal_code}
          />
          <HiOutlineMailOpen size={20} />
        </div>
        {formik.errors.postal_code ? (
          <div className={styles.error}>{formik.errors.postal_code}</div>
        ) : null}
        <div className={styles.icon_inside}>
          <textarea
            className={styles.textarea}
            placeholder="آدرس خود را وارد نمایید"
            id="address"
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          <HiOutlineMailOpen size={20} />
        </div>
        {formik.errors.address ? (
          <div className={styles.error}>{formik.errors.address}</div>
        ) : null}

        <div className={styles.icon_inside}>
          <textarea
            className={styles.textarea}
            placeholder="توضیحات تکمیلی خود را وارد نمایید(اختیاری)"
            id="detail"
            name="detail"
            onChange={formik.handleChange}
            value={formik.values.detail}
          />
          <HiOutlineMailOpen size={20} />
        </div>
        {formik.errors.detail ? (
          <div className={styles.error}>{formik.errors.detail}</div>
        ) : null}
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
