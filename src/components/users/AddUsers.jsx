"use client";
import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { AiFillCloseCircle } from "react-icons/ai";
import { useUser } from "./hook/useUser";

const AddUsers = ({ open, close }) => {
  const { initialValues, handleSubmit, schema } = useUser();
  if (!open) return null;
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          {/* <div className="flex justify-center items-center p-16"> */}
          <div className="fixed inset-0 backdrop-blur flex flex-col p-3 items-center justify-center">
            <div className="relative">
              <AiFillCloseCircle
                className="text-2xl absolute mt-2 left-40 cursor-pointer"
                onClick={close}
              />
            </div>
            <div className="bg-red-300 flex flex-col p-8 gap-6 justify-center items-start rounded-2xl">
              <h1 className="font-extrabold text-3xl">Add Tenant</h1>
              <div className="flex flex-col gap-2 text-xl justify-center items-start">
                <label className="font-semibold">Tenant Name</label>
                <Field
                  type="text"
                  className="h-10 rounded-lg p-2"
                  name="userName"
                  id="userName"
                  required
                />
                <ErrorMessage
                  name="userName"
                  component="div"
                  className="text-red-600 font-semibold"
                />
              </div>
              <div className="flex flex-col gap-2 text-xl justify-center items-start">
                <label className="font-semibold">New Reading</label>
                <Field
                  type="text"
                  className="h-10 rounded-lg p-2"
                  name="newReading"
                  id="newReading"
                  required
                />
                <ErrorMessage
                  name="newReading"
                  component="div"
                  className="text-red-600 font-semibold"
                />
              </div>
              <div className="flex flex-col gap-2 text-xl justify-center items-start">
                <label className="font-semibold">Old Reading</label>
                <Field
                  type="text"
                  className="h-10 rounded-lg p-2"
                  name="oldReading"
                  id="oldReading"
                  required
                />
                <ErrorMessage
                  name="oldReading"
                  component="div"
                  className="text-red-600 font-semibold"
                />
              </div>
              <div className="flex justify-around items-center gap-5">
                <button className="bg-blue-400 p-3 rounded-xl" type="submit">
                  Save
                </button>
                <button className="bg-blue-400 p-3 rounded-xl" type="reset">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default AddUsers;
