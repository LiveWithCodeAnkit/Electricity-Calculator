import { useRouter } from "next/navigation";
import { userSchema } from "../schema/userSchema";

export const useUser = () => {
  const router = useRouter();

  const initialValues = {
    id: new Date().getTime().toString(),
    userName: "",
    newReading: "",
    oldReading: "",
  };


  const handleAddHome = (values, { resetForm }) => {
    const usedUnit = Number(values.newReading) - Number(values.oldReading);
    const storedData = localStorage.getItem("UserList");
    const storedInfo = storedData ? JSON.parse(storedData) : [];

    const UserEntry = {
      id: new Date().getTime().toString(),
      usedUnit: Math.abs(usedUnit),
      ...values,
    };

    const updatedInfo = [...storedInfo, UserEntry];
    localStorage.setItem("UserList", JSON.stringify(updatedInfo));
    resetForm();

    const result = window.confirm(`Are You Add More User ?`);
    if (result) {
      router.push("/user");
    } else {
      router.push("/water");
    }
  };

  return {
    initialValues,
    handleSubmit: handleAddHome,
    schema: userSchema,
  };
};
