import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import validate from "../../../components/helper/validation";
import styles from "./address_form.module.scss";
import Input from "../../../components/shared/input/input";
import Dropdown from "../../../components/shared/dropdown/dropdown";
import Button from "../../../components/shared/button";

interface MyFormValues {
  state: string;
  city: string;
  postal_code: string;
  address: string;
  detail: string;
}
const Address_form = () => {
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
  return (
    <div className={styles.full_container}>
    <div className={styles.container}>
      <form className={styles.form_container}>
        <h1 className={styles.title}>فروشگاه کاکی</h1>
        <h3>افزودن آدرس <span>*</span> </h3>
        <div className={styles.inputs_container}>
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
          <br />
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
        </div>
        <Button type="submit" width="90%" height="fit-content">
        <Link href="/screens/payment/payment"> افزودن آدرس</Link>
        </Button>
      </form>
    </div>
    </div>
  );
};

export default Address_form;
