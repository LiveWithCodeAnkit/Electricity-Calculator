"use client";
import React, { useState } from "react";
import {
  Card,
  Typography,
  CardBody,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

import { BsPencilFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";

import { MdDeleteForever } from "react-icons/md";
import AddHouse from "../house/AddHouse";
import AddUsers from "../users/AddUsers";

const TABLE_HEAD = ["Tenant Name", "New Reading", "Old Reading", "Action"];

const TABLE_ROWS = [
  {
    name: "Jack",
    newReading: "205",
    oldReading: "5000",
  },

  {
    name: "James",
    newReading: "6005",
    oldReading: "4000",
  },
];
const ViewUser = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Card className="h-full w-full">
        <div className="flex justify-center items-center  p-16">
          <div className="bg-zinc-300 flex flex-col p-8 gap-6 justify-center items-center rounded-2xl">
            <div className="flex justify-between gap-48">
              <div className="flex flex-col justify-center items-start p-3 gap-2">
                <h1>Tenant List</h1>
                <p>See information about all Tenant</p>
              </div>
              <div className="flex justify-center items-center gap-8 p-3">
                <button
                  className="flex justify-center items-center gap-2  text-white bg-blue-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center"
                  type="button"
                  onClick={handleOpen}
                >
                  <FaUserPlus />
                  Add Tenant
                </button>
              </div>
            </div>

            <CardBody className=" px-0">
              <table className="mt-4 w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head, index) => (
                      <th
                        key={index}
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
                  {TABLE_ROWS.map(({ name, newReading, oldReading }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
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
                              {newReading}
                            </Typography>
                          </div>
                        </td>

                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {oldReading}
                          </Typography>
                        </td>

                        <td className=" flex justify-center items-center gap-8 ">
                          <Tooltip
                            content="Edit Tenant"
                            className="bg-red-500 p-1"
                          >
                            <IconButton variant="text" color="blue-gray">
                              <BsPencilFill className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>

                          <Tooltip
                            content="Delete Tenant"
                            className="bg-red-500 p-1"
                          >
                            <IconButton variant="text" color="blue-gray">
                              <MdDeleteForever className="h-4 w-4 text-xl" />
                            </IconButton>
                          </Tooltip>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </CardBody>
          </div>
        </div>
      </Card>

      <AddUsers open={open} close={handleOpen} />
    </>
  );
};

export default ViewUser;
