import React from "react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="bg-white rounded-lg shadow flex justify-center gap-8 items-center p-2">
        <span className="text-xl text-gray-500 sm:text-center ">© 2023 </span>
        <Link
          href="https://github.com/LiveWithCodeAnkit"
          className="hover:underline text-2xl text-amber-700  flex justify-center items-center gap-2 font-extrabold"
        >
          <BsGithub /> LiveWithCodeAnkit
        </Link>
        <span className="text-red-700 font-semibold">.Version Beta</span>
      </div>
    </>
  );
};

export default Footer;
