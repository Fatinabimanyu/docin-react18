import React from "react";
import DashContent from "../components/DashContent";
import Sidebar from "../components/Sidebar";

export default function DoctorDashboard() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <Sidebar />
      <DashContent />
    </div>
  );
}
