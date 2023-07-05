"use client";

import { Field, Formik, Form, ErrorMessage } from "formik";
import { useWater } from "./hook/useWater";

const CommonBill = () => {
  const { initialValues, handleSubmit, schema, data } = useWater();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="flex justify-center items-center p-16">
            <div className="bg-red-300 flex flex-col p-8 gap-6 justify-center items-start rounded-2xl">
              <h1 className="font-extrabold text-3xl">Common Bills</h1>
              <div className="flex flex-col gap-2 text-xl justify-center items-start">
                <label className="font-semibold">Water New Reading</label>
                <Field
                  type="text"
                  className="h-10 rounded-lg p-2"
                  name="newReading"
                  id="newReading"
                />
                <ErrorMessage
                  name="newReading"
                  component="div"
                  className="text-red-600 font-semibold"
                />
              </div>
              <div className="flex flex-col gap-2 text-xl justify-center items-start">
                <label className="font-semibold">Water old Reading</label>
                <Field
                  type="text"
                  className="h-10 rounded-lg p-2"
                  name="oldReading"
                  id="oldReading"
                />
                <ErrorMessage
                  name="oldReading"
                  component="div"
                  className="text-red-600 font-semibold"
                />
              </div>
              <div className="flex flex-col gap-2 text-xl justify-center items-start">
                <label className="font-semibold">Total Users</label>
                <span
                  className="h-10 rounded-lg p-2"
                  name="totUser"
                  id="totUser"
                >
                  {" "}
                  {data}
                </span>
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

export default CommonBill;
