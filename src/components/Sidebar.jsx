import React from "react";
import DocinLogo from "../assets/images/docin-logo.png";
import { BiEdit, BiLogOut } from "react-icons/bi";
import { HiOutlineHome, HiOutlineClipboardCheck } from "react-icons/hi";

export default function Sidebar() {
  const menu = [
    { name: "Home", icon: <HiOutlineHome /> },
    { name: "Appointments", icon: <HiOutlineClipboardCheck /> },
  ];
  const settings = [
    { name: "Edit Profile", icon: <BiEdit /> },
    { name: "Logout", icon: <BiLogOut /> },
  ];
  return (
    <div className="h-screen border-r border-gray-200 w-64 px-9 py-9 space-y-16">
      <div className="flex flex-col items-center space-y-3">
        <img src={DocinLogo} alt="" />
        <div>Doctor Dashboard</div>
      </div>

      <div className="space-y-16">
        <div>
          <div className="mb-7">Menu</div>
          <ul className="space-y-3">
            {menu.map((val, index) => {
              return (
                <li
                  className="px-2 py-2 flex flex-row items-center"
                  key={index}
                >
                  <div className="mr-5">{val.icon}</div>
                  <div className="text-sm">{val.name}</div>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <div className="mb-7">Settings</div>
          <ul className="space-y-3">
            {settings.map((val, index) => {
              return (
                <li
                  className="px-2 py-2 flex flex-row items-center"
                  key={index}
                >
                  <div className="mr-5">{val.icon}</div>
                  <div className="text-sm">{val.name}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
