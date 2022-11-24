import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

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
        <a href="/user-dashboard">
          <button className="mx-5">Menu</button>
        </a>
      </>
    );
  } else if (isLoginDoctor) {
    <a href="/doctor-dashboard">
      <button className="mx-5">Menu</button>
    </a>;
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
