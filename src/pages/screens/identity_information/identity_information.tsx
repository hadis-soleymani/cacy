import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import validate from "../../../components/helper/validation";
import styles from "./identity_information.module.scss";
import Input from "../../../components/shared/input/input";
import Dropdown from "../../../components/shared/dropdown/dropdown";
import Button from "../../../components/shared/button";

interface MyFormValues {
    firstName: string;
    lastName: string;
    phoneNumber: string;
}
const Identity_information = () => {
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
    <div className={styles.full_container}>
    <div className={styles.container}>
      <form className={styles.form_container}>
        <h1 className={styles.title}>فروشگاه کاکی</h1>
        <h3> اطلاعات هویتی</h3>

          <div className={styles.inputs_container}>
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
          </div>
        <Button type="submit" width="90%" height="fit-content">
          افزودن اطلاعات هویتی
        </Button>
      </form>
    </div>
    </div>
  );
};

export default Identity_information;
