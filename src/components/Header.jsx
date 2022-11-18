import React, { useState } from "react";
import DocinLogo from "../assets/images/logo-docin.svg";

import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[90px] bg-hijau-muda">
      <div className="px-[50px] md:px-[100px] lg:px-[100px] xl:px-[200px] mx-auto flex justify-between items-center h-full">
        <div className="flex items-center">
          <a href="#home">
            <img src={DocinLogo} alt="docin-logo" className="w-[65%] md:w-[100%] lg:w-[100%]"/>
          </a>
        </div>
        <div className="hidden md:flex">
          {/* <ul className="flex items-center font-medium">
            <li>
              <a href="#home" className="hover:text-hijau">
                Beranda
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-hijau">
                Cara Kerja
              </a>
            </li> */}
            <button className="ml-5">Sign In</button>
          {/* </ul> */}
        </div>

        {/* Responsive Section */}
        <div
          className={
            nav
              ? "w-full bg-putih text-hitam absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul className="font-medium">
            {/* <li className="border-b-2 border-zinc-300 w-full">
              <a href="#home" className="hover:text-hijau">
                Beranda
              </a>
            </li>
            <li className="border-b-2 border-zinc-300 w-full">
              <a href="#how-it-works" className="hover:text-hijau">
                Cara Kerja
              </a>
            </li> */}
            <button className="m-4 hover:bg-hitam">Sign In</button>
          </ul>
        </div>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <IoMdClose size={30} className="text-hitam" />
          ) : (
            <HiOutlineMenu size={30} className="text-hitam" />
          )}
        </div>
      </div>
    </div>
  );
}
