interface MyFormValues {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  state?: string;
  city?: string;
  postal_code?: string;
  address?: string;
  detail?: string;
  verify_code?:string;
}

const validate = (values: MyFormValues) => {
  const errors: MyFormValues = {};

  if (!values.firstName) {
    errors.firstName = "این فیلد الزامی است";
  } else if (values.firstName.length > 15) {
    errors.firstName = "نام وارد شده معتبر نیست";
  }

  if (!values.state) {
    errors.state = "استان فیلد الزامی است";
  }

  if (!values.city) {
    errors.city = "شهر فیلد الزامی است";
  }

  if (!values.postal_code) {
    errors.postal_code = "این فیلد الزامی است";
  } else if (values.postal_code.length != 10) {
    errors.postal_code = "کد پستی وارد شده معتبر نیست";
  }

  if (!values.address) {
    errors.address = "این فیلد الزامی است";
  } else if (values.address.length < 8) {
    errors.address = "آدرس وارد شده معتبر نیست";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "این فیلد الزامی است";
  } else if (values.phoneNumber.length < 10 || values.phoneNumber.length > 11) {
    errors.phoneNumber = "شماره تلفن وارد شده معتبر نیست";
  }

  if (!values.verify_code) {
    errors.verify_code = "این فیلد الزامی است";
  } else if (values.verify_code.length < 10 || values.verify_code.length > 11) {
    errors.verify_code = "کد وارد شده معتبر نیست";
  }

  if (!values.lastName) {
    errors.lastName = "این فیلد الزامی است";
  } else if (values.lastName.length > 20) {
    errors.lastName = "نام خانوادگی وارد شده معتبر نیست";
  }

  if (!values.email) {
    errors.email = "این فیلد الزامی است";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "آدرس ایمیل وارد شده معتبر نیست";
  }

  return errors;
};
export default validate;
