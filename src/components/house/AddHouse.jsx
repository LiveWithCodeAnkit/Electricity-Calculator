"use client";
import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useHouse } from "./hook/useHouse";

const AddHouse = () => {
  const { initialValues, handleSubmit, schema } = useHouse();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="flex justify-center items-center  p-16">
            <div className="bg-red-300 flex flex-col p-8 gap-6 justify-center items-start rounded-2xl">
              <h1 className="font-extrabold text-3xl">Add House</h1>
              <div className="flex flex-col gap-2 text-xl justify-center items-start">
                <label className="font-semibold">House Number</label>
                <Field
                  type="text"
                  className="h-10 rounded-lg p-2"
                  name="houseNum"
                  id="houseNum"
                  required
                />
                <ErrorMessage
                  name="houseNum"
                  component="div"
                  className="text-red-600 font-semibold"
                />
              </div>
              <div className="flex flex-col gap-2 text-xl justify-center items-start">
                <label className="font-semibold">Unit</label>
                <Field
                  type="text"
                  className="h-10 rounded-lg p-2"
                  name="unit"
                  id="unit"
                  required
                />
                <ErrorMessage
                  name="unit"
                  component="div"
                  className="text-red-600 font-semibold"
                />
              </div>
              <div className="flex flex-col gap-2 text-xl justify-center items-start">
                <label className="font-semibold">Total Amount</label>
                <Field
                  type="text"
                  className="h-10 rounded-lg p-2"
                  name="totAmt"
                  id="totAmt"
                  required
                />
                <ErrorMessage
                  name="totAmt"
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

export default AddHouse;
