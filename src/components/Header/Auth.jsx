import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);
  if (isLogin) {
    return (
      <a href="/user-dashboard">
        <button className="ml-5">Dashboard</button>
      </a>
    );
  }

  return (
    <a href="/login-user">
      <button className="ml-5">Masuk</button>
    </a>
  );
}
