"use client";
import React, { useRef } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { TABLE_HEAD } from "../contants/TABLE_HEAD";
import { useFinal } from "./hook/useFinal";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const GeneratedBill = () => {
  const { Users, housesInfo, waterInfo } = useFinal();
  const pdfRef = useRef();

  const handlePdf = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

      const imgX = (pdfWidth - imgWidth * ratio) / 2;

      const imgY = 30;

      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("bill.pdf");
    });
  };

  return (
    <>
      <div ref={pdfRef}>
        <Card className="overflow-scroll h-full w-full">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Users.map(
                (
                  {
                    userName,
                    newReading,
                    oldReading,
                    usedUnit,
                    water,
                    totalUnit,
                    totAmount,
                  },
                  index
                ) => (
                  <tr key={index} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {userName}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {newReading}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {oldReading}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {usedUnit}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {water}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {totalUnit}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {totAmount}
                      </Typography>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </Card>
        <div className="flex gap-10 p-10">
          <div className="flex flex-col">
            {housesInfo &&
              Object.keys(housesInfo).map((key) => {
                if (key === "totalUnit") {
                  return <p key={key}>Total Unit: {housesInfo[key]}</p>;
                } else if (key === "totalTotAmt") {
                  return <p key={key}>Total Amount: {housesInfo[key]}</p>;
                } else if (key === "oneUnitCharge") {
                  return <p key={key}>One Unit Charge: {housesInfo[key]}</p>;
                } else {
                  const houseData = housesInfo[key];
                  return (
                    <div key={key} className="flex p-2">
                      <div>
                        <p>House Number: {houseData.houseNum}</p>
                        <p>Unit: {houseData.unit}</p>
                        <p>Total Amount: {houseData.totAmt}</p>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
          <div>
            {waterInfo.map((item, index) => (
              <div key={index} className="p-2">
                <h1>Water Bill Details</h1>
                <p>Distributed Unit: {item.distributeUnit}</p>
                <p>Old Reading: {item.oldReading}</p>
                <p>New Reading: {item.newReading}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-7">
        <button
          className="bg-red-400 p-2 rounded-md font-bold"
          onClick={handlePdf}
        >
          Download PDF
        </button>
      </div>
    </>
  );
};

export default GeneratedBill;
