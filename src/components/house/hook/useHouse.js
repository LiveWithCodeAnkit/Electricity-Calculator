import { houseSchema } from "../schema/houseSchema";
import { useRouter } from "next/navigation";

export const useHouse = () => {
  const router = useRouter();

  const initialValues = {
    id: new Date().getTime().toString(),
    houseNum: "",
    unit: "",
    totAmt: "",
    month: "",
  };

  // const handleUnit = () => {
  //   const storedData = localStorage.getItem("HouseList");
  //   const storedInfo = storedData ? JSON.parse(storedData) : [];

  //   const houseData = {};

  //   storedInfo.forEach((item) => {
  //     const { houseNum, unit, totAmt } = item;

  //     if (!houseData[houseNum]) {
  //       houseData[houseNum] = {
  //         houseNum: houseNum,
  //         unit: parseInt(unit),
  //         totAmt: parseInt(totAmt),
  //       };
  //     } else {
  //       houseData[houseNum].unit += parseInt(unit);
  //       houseData[houseNum].totAmt += parseInt(totAmt);
  //     }
  //   });

  //   const totalUnit = Object.values(houseData).reduce(
  //     (sum, item) => sum + item.unit,
  //     0
  //   );
  //   const totalTotAmt = Object.values(houseData).reduce(
  //     (sum, item) => sum + item.totAmt,
  //     0
  //   );

  //   houseData.totalUnit = totalUnit.toString();
  //   houseData.totalTotAmt = totalTotAmt.toString();

  //   const oneUnitCharge = (totalTotAmt / totalUnit).toFixed(2);
  //   console.log("one Unit charge :=", oneUnitCharge);

  //   houseData.oneUnitCharge = oneUnitCharge.toString();
  //   return houseData;
  // };

  const handleAddHome = (values, { resetForm }) => {
    const storedData = localStorage.getItem("HouseList");
    const storedInfo = storedData ? JSON.parse(storedData) : [];

    const houseEntry = {
      id: new Date().getTime().toString(),
      ...values,
    };

    const updatedInfo = [...storedInfo, houseEntry];
    localStorage.setItem("HouseList", JSON.stringify(updatedInfo));

    // const finalOutput = handleUnit();
    // localStorage.removeItem("FinalHouse")
    // localStorage.setItem("FinalHouse", JSON.stringify(finalOutput));
    // console.log("i am finalOutput:=", finalOutput);
    resetForm();
  };

  return {
    initialValues,
    handleSubmit: handleAddHome,
    schema: houseSchema,
  };
};
