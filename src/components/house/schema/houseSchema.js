import * as Yup from "yup";

export const houseSchema = Yup.object().shape({
  houseNum: Yup.string()
    .required("House Number  Required !")
    .max(10, { message: "House Number Max 10 !" }),
  unit: Yup.number()
    .typeError("Enter Digits Only!")
    .test(
      "unit",
      "Must be exactly 3  Digit",
      (val) => val && val.toString().length >= 3
    )
    .required("Unit  Required !"),
  totAmt: Yup.number()
    .typeError("Enter Digits Only!")
    .required("Total Amount  Required !"),
});
