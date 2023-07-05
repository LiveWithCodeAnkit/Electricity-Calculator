import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  userName: Yup.string()
    .max(40, "Max 40 size")
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .required("Name Required !"),
  newReading: Yup.number()
    .typeError("Enter Digits Only!")
    .test(
      "unit",
      "Must be exactly 3 Digits",
      (val) => val && val.toString().length >= 3
    )
    .required("New Reading Required !"),
  oldReading: Yup.number()
    .typeError("Enter Digits Only!")
    .test(
      "unit",
      "Must be exactly 3 Digits",
      (val) => val && val.toString().length >= 3
    )
    .required("Old Reading Required !"),
});
