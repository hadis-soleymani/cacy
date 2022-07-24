const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "این فیلد الزامی است";
  } else if (values.firstName.length > 15) {
    errors.firstName = "نام وارد شده معتبر نیست";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "این فیلد الزامی است";
  } else if (values.phoneNumber.length < 10 || values.phoneNumber.length > 11) {
    errors.phoneNumber = "شماره تلفن وارد شده معتبر نیست";
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
