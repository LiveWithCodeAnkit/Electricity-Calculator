import * as Yup from "yup";

export const waterSchema = Yup.object().shape({
  oldReading: Yup.number()
    .typeError("Enter Digits Only!")
    .test(
      "unit",
      "Must be exactly 3 Digits",
      (val) => val && val.toString().length >= 3
    )
    .required("Old Reading Required !"),
  newReading: Yup.number()
    .typeError("Enter Digits Only!")
    .test(
      "unit",
      "Must be exactly 3 Digits",
      (val) => val && val.toString().length >= 3
    )
    .required("New Reading Required !"),
});
