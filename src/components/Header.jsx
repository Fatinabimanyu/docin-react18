import React, { useState } from "react";
import DocinLogo from "../assets/images/docin-logo.png";

import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[90px]">
      <div className="max-w-[1240px] px-4 mx-auto flex justify-between items-center h-full">
        <div className="flex items-center">
          <a href="#home">
            <img src={DocinLogo} alt="docin-logo" />
          </a>
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center font-medium">
            <li>
              <a href="#home" className="hover:text-[#006D77]">
                Beranda
              </a>
            </li>
            <li>
              <a href="#search-doctor" className="hover:text-[#006D77]">
                Cari Dokter
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-[#006D77]">
                Cara Kerja
              </a>
            </li>
            <button className="ml-5">Sign In</button>
          </ul>
        </div>

        {/* Responsive Section */}
        <div
          className={
            nav
              ? "w-full bg-zinc-200 text-black absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul className="font-medium">
            <li className="border-b-2 border-zinc-300 w-full">
              <a href="#home" className="hover:text-[#006D77]">
                Beranda
              </a>
            </li>
            <li className="border-b-2 border-zinc-300 w-full">
              <a href="#search-doctor" className="hover:text-[#006D77]">
                Cari Dokter
              </a>
            </li>
            <li className="border-b-2 border-zinc-300 w-full">
              <a href="#how-it-works" className="hover:text-[#006D77]">
                Cara Kerja
              </a>
            </li>
            <button className="m-4">Sign In</button>
          </ul>
        </div>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <IoMdClose size={30} className="text-black" />
          ) : (
            <HiOutlineMenu size={30} className="text-black" />
          )}
        </div>
      </div>
    </div>
  );
}
