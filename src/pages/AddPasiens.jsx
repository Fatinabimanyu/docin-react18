import React from "react";
import AddPasien from "../components/AddPasien";
import UserSidebar from "../components/UserSidebar";

export default function AddPasiens() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <UserSidebar />
      <AddPasien />
    </div>
  );
}
