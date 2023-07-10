"use client";
import React, { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";

import { BsPencilFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import AddHouse from "../house/AddHouse";


const TABLE_HEAD = ["House Number", "Unit", "Amount", "Month", "Action"];

const View = () => {
  
 

    const storedData = localStorage.getItem("HouseList");
    const houseList = storedData ? JSON.parse(storedData) : [];
   


  
  // const handleDelete = (id) => {
  //   const updatedHouseList = houseList.filter((data) => data.id !== id);
  //   const result = window.confirm(`Are You Sure Delete This Record ?`);
  //   if (result) {
  //     localStorage.setItem("HouseList", JSON.stringify(updatedHouseList));
  //     setHouseList(updatedHouseList);
  //   }
  // };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className="flex justify-center items-center  p-16">
        <div className="bg-zinc-300 flex flex-col p-8 gap-6 justify-center items-center rounded-2xl">
          <div className="flex justify-between gap-48">
            <div className="flex flex-col justify-center items-start p-3 gap-2">
              <h1>House List</h1>
              <p>See information about all House</p>
            </div>
            <div className="flex justify-center items-center gap-8 p-3">
              <button
                className="flex justify-center items-center gap-2  text-white bg-blue-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center"
                type="button"
                onClick={handleOpen}
              >
                <FaUserPlus />
                Add House
              </button>
            </div>
          </div>

          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}{" "}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {houseList.map(({ id, houseNum, unit, totAmt, month }, index) => {
                const isLast = index === houseList.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={id}>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {houseNum}
                        </Typography>
                      </div>
                    </td>

                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {unit}
                        </Typography>
                      </div>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {totAmt}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {month}
                      </Typography>
                    </td>
                    <td className="flex justify-center items-center gap-8 ">
                      {/* <button
                              color="blue-gray"
                              onClick={handleDelete(id)}
                            >
                              <BsPencilFill className="h-4 w-4" />
                            </button> */}
                      {/* <button
                              color="blue-gray"
                              onClick={handleDelete(id)}
                            >
                              <MdDeleteForever className="h-4 w-4 text-xl" />
                            </button> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <AddHouse open={open} close={handleOpen} />
    </>
  );
};

export default View;
