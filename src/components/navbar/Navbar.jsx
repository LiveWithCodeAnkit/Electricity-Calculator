import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className=" bg-red-400 flex justify-center items-center gap-32 h-16">
        <label className="font-Pacifico text-2xl font-extrabold">
          Calculate Your Electricity
        </label>
        <nav className="hidden md:flex">
          <ul className="flex gap-8 text-xl text-black font-bold font-Pacifico">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/house" className="hover:text-white">
                Add House
              </Link>
            </li>
            <li>
              <Link href="/user" className="hover:text-white">
                Add Tenant
              </Link>
            </li>
            <li>
              <Link href="/water" className="hover:text-white">
                Water
              </Link>
            </li>
            <li>
              <Link href="/final" className="hover:text-white">
                Bill
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
