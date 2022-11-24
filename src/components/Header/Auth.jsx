import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Dropdown } from "flowbite-react";

export default function Auth() {
  const [isLoginUser, setIsLoginUser] = useState(false);
  const [isLoginDoctor, setIsLoginDoctor] = useState(false);
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      if (payload.user.role === "User") {
        setIsLoginUser(true);
      } else if (payload.doctor.role === "Doctor") {
        setIsLoginDoctor(true);
      }
    }
  }, []);
  if (isLoginUser) {
    return (
      <>
        <li className="border-b-2">
          <a href="find-doctor" className="hover:text-hijau">
            Cari Dokter
          </a>
        </li>
        <div className="bg-hijau rounded-lg mx-5">
          <Dropdown label="Menu" color="" className="">
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block text-sm font-medium truncate">
                bonnie@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Edit Profile</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </>
    );
  } else if (isLoginDoctor) {
    return (
      <div className="bg-hijau rounded-lg mx-5">
        <Dropdown label="Menu" color="" className="">
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block text-sm font-medium truncate">
              bonnie@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Edit Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    );
  }

  return (
    <>
      <li className="border-b-2">
        <a href="find-doctor" className="hover:text-hijau">
          Cari Dokter
        </a>
      </li>
      <a href="/login-user">
        <button className="mx-5">Masuk</button>
      </a>
    </>
  );
}
