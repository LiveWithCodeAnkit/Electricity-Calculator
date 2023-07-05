import React, { useEffect, useState } from "react";

export const useFinal = () => {
  const [storedInfo, setStoredInfo] = useState([]);
  const [finalHouseInfo, setFinalHouseInfo] = useState();
  const [waterInfo, setWaterInfo] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("UserList");
    const storedInfo = storedData ? JSON.parse(storedData) : [];
    setStoredInfo(storedInfo);

    const finalHouse = localStorage.getItem("FinalHouse");
    const finalHouseInfo = finalHouse ? JSON.parse(finalHouse) : [];
    setFinalHouseInfo(finalHouseInfo);

    const water = localStorage.getItem("CommonBill");
    const waterInfo = water ? JSON.parse(water) : [];

    setWaterInfo(waterInfo);
  }, []);

  const updatedArray = storedInfo.map((element) => {
    const totalUnit = element.usedUnit + Number(element.water);
    const totAmount = totalUnit * Number(finalHouseInfo.oneUnitCharge);

    return {
      ...element,
      totalUnit: totalUnit.toFixed(2),
      totAmount: totAmount.toFixed(2),
    };
  });

  return { Users: updatedArray, housesInfo: finalHouseInfo, waterInfo };
};
