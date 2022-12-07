import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";
import MyModal from "./Modal";
import DeleteModal from "./DeleteModal";
import jwt_decode from "jwt-decode";

export default function UserAppoinment() {
  const [appointments, setAppointments] = useState([]);

  const token = atob(Cookies.get("token"));
  var decoded = jwt_decode(token);

  const client = axios.create({
    baseURL: "http://localhost:5000/appointments",
  });

  useEffect(() => {
    client.get().then((response) => {
      setAppointments(idFilter(response.data, decoded.id));
    });
  }, []);

  const [isActivebtn1, setIsActivebtn1] = useState(false);
  const [isActivebtn2, setIsActivebtn2] = useState(false);
  const [isActivebtn3, setIsActivebtn3] = useState(false);
  const [isActivebtnall, setIsActivebtnall] = useState(true);
  const [filter, setFilter] = useState("");

  const handleClickbtnAll = () => {
    setIsActivebtnall(!isActivebtnall);
    setIsActivebtn1(false);
    setIsActivebtn2(false);
    setIsActivebtn3(false);
    setFilter("");
  };
  const handleClickbtn1 = () => {
    setIsActivebtnall(false);
    setIsActivebtn1(!isActivebtn1);
    setIsActivebtn2(false);
    setIsActivebtn3(false);
    setFilter("pending");
  };
  const handleClickbtn2 = () => {
    setIsActivebtnall(false);
    setIsActivebtn1(false);
    setIsActivebtn2(!isActivebtn2);
    setIsActivebtn3(false);
    setFilter("accepted");
  };
  const handleClickbtn3 = () => {
    setIsActivebtnall(false);
    setIsActivebtn1(false);
    setIsActivebtn2(false);
    setIsActivebtn3(!isActivebtn3);
    setFilter("rejected");
  };

  const statusFilter = (appointments, filter) => {
    return appointments.filter((appointment) =>
      appointment.status.includes(filter)
    );
  };

  const idFilter = (appointments, filter) => {
    return appointments.filter((appointment) =>
      appointment.creator_id.includes(filter)
    );
  };

  return (
    <>
      <section className="w-full bg-hijau-muda h-[100vh] flex justify-center ">
        <div className="px-[100px] overflow-x-scroll w-full mt-[70px]">
          <div className="grid grid-cols-4">
            <button
              className={` ${
                isActivebtnall ? "bg-hitam" : "bg-abu"
              } rounded-none bg-hitam hover:bg-hijaugelap`}
              onClick={handleClickbtnAll}
            >
              {" "}
              All
            </button>
            <button
              className={` ${
                isActivebtn1 ? "bg-hitam" : "bg-abu"
              } rounded-none hover:bg-hijaugelap`}
              onClick={handleClickbtn1}
            >
              {" "}
              Pending Request
            </button>
            <button
              className={` ${
                isActivebtn2 ? "bg-hitam" : "bg-abu"
              } rounded-none hover:bg-hijaugelap`}
              onClick={handleClickbtn2}
            >
              Accepted Request
            </button>
            <button
              className={` ${
                isActivebtn3 ? "bg-hitam" : "bg-abu"
              } rounded-none hover:bg-hijaugelap`}
              onClick={handleClickbtn3}
            >
              Rejected Request
            </button>
          </div>
          <div className="grid grid-cols-6 mt-[30px]">
            <p className="text-center bg-hitam text-white py-[10px]">Subject</p>
            <p className="text-center bg-hitam text-white py-[10px]">Doctor</p>
            <p className="text-center bg-hitam text-white py-[10px]">Time</p>
            <p className="text-center bg-hitam text-white py-[10px]">Date</p>
            <p className="text-center bg-hitam text-white py-[10px]">Status</p>
            <p className="text-center bg-hitam text-white py-[10px]">Action</p>
          </div>
          <AppointmentConfig
            appointments={statusFilter(appointments, filter)}
          />
        </div>
      </section>
    </>
  );
}

function AppointmentConfig({ appointments }) {
  console.log(appointments);
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  let [isDeleteOpen, setIsDeleteOpen] = useState(false);
  function closeDeleteModal() {
    setIsDeleteOpen(false);
  }

  function openDeleteModal() {
    setIsDeleteOpen(true);
  }
  return (
    <div>
      <DeleteModal show={isDeleteOpen} closeModal={closeDeleteModal} />
      <MyModal show={isOpen} closeModal={closeModal} />
      {appointments.map((appointment) => {
        return (
          <div key={appointment.key} className="grid grid-cols-6 bg-white">
            <p className="text-center py-[26px]">{appointment.subject}</p>
            <p className="text-center py-[26px]">
              {appointment.receiver_name.name}
            </p>
            <p className="text-center py-[26px]">{appointment.date}</p>
            <p className="text-center py-[26px]">{appointment.time}</p>
            <p className="text-center py-[26px]">{appointment.status}</p>
            <div className="flex justify-center items-center gap-x-3">
              <button
                onClick={openModal}
                className="inline-flex bg-[#11F26B] items-center px-3 py-1 text-black rounded-md"
              >
                <FaEdit className="mr-[7px]" /> Edit
              </button>
              <button
                onClick={openDeleteModal}
                className="inline-flex bg-[#E74343] items-center px-3 py-1 text-white rounded-md"
              >
                <FaTrash className="mr-[7px]" />
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
