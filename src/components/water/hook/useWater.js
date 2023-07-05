import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { waterSchema } from "../schema/waterSchema";

export const useWater = () => {
  const router = useRouter();

  const [numUser, setNumUser] = useState();
  useEffect(() => {
    const storedData = localStorage.getItem("UserList");
    const storedInfo = storedData ? JSON.parse(storedData) : [];
    setNumUser(storedInfo.length);
  }, []);

  const initialValues = {
    oldReading: "",
    newReading: "",
  };

  const handleAddUserBill = () => {
    const commonBill = localStorage.getItem("CommonBill");
    const commonBillInfo = commonBill ? JSON.parse(commonBill) : [];

    const storedData = localStorage.getItem("UserList");
    const storedInfo = storedData ? JSON.parse(storedData) : [];

    const updatedArray = storedInfo.map((element) => ({
      ...element,
      water: commonBillInfo[0].distributeUnit,
    }));

    localStorage.setItem("UserList", JSON.stringify(updatedArray));
  };

  const handleAddCommonBill = (values, { resetForm }) => {
    const storedData = localStorage.getItem("CommonBill");
    const storedInfo = storedData ? JSON.parse(storedData) : [];

    const distributeUnit =
      (Number(values.newReading) - Number(values.oldReading)) / numUser;
    const waterEntry = {
      distributeUnit: Math.abs(distributeUnit).toFixed(2),
      ...values,
    };

    const updatedInfo = [...storedInfo, waterEntry];
    localStorage.setItem("CommonBill", JSON.stringify(updatedInfo));
    handleAddUserBill();
    resetForm();
    router.push("/final");
  };

  return {
    initialValues,
    handleSubmit: handleAddCommonBill,
    schema: waterSchema,
    data: numUser,
  };
};
