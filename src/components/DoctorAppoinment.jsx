import React, { useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import MyModal from "./Modal";
import DeleteModal from "./DeleteModal";

const appoinmentdata = [
  {
    id: 1,
    subject: "Cek Kolesterol",
    applicant: "Bambang",
    date: "20 / 11 / 2022",
    status: "Accepted",
  },
  {
    id: 2,
    subject: "Cek Kolesterol",
    applicant: "Joko",
    date: "20 / 11 / 2022",
    status: "Accepted",
  },
  {
    id: 3,
    subject: "Cek Kolesterol",
    applicant: "Yanto",
    date: "20 / 11 / 2022",
    status: "Rejected",
  },
  {
    id: 4,
    subject: "Cek Kolesterol",
    applicant: "Budi",
    date: "20 / 11 / 2022",
    status: "Accepted",
  },
  {
    id: 5,
    subject: "Cek Kolesterol",
    applicant: "Wawan",
    date: "20 / 11 / 2022",
    status: "Pending",
  },
];

export default function DoctorAppoinment() {
  const [isActivebtn1, setIsActivebtn1] = useState(false);
  const [isActivebtn2, setIsActivebtn2] = useState(false);
  const [isActivebtn3, setIsActivebtn3] = useState(false);
  const [isActivebtnall, setIsActivebtnall] = useState(true);
  const [filter, setFIlter] = useState("")

  const handleClickbtnAll = () => {
    setIsActivebtnall(!isActivebtnall);
    setIsActivebtn1(false);
    setIsActivebtn2(false);
    setIsActivebtn3(false);
    setFIlter("")
  };
  const handleClickbtn1 = () => {
    setIsActivebtnall(false)
    setIsActivebtn1(!isActivebtn1);
    setIsActivebtn2(false);
    setIsActivebtn3(false);
    setFIlter("Pending")
  };
  const handleClickbtn2 = () => {
    setIsActivebtnall(false)
    setIsActivebtn1(false);
    setIsActivebtn2(!isActivebtn2);
    setIsActivebtn3(false);
    setFIlter("Accepted")
  };
  const handleClickbtn3 = () => {
    setIsActivebtnall(false)
    setIsActivebtn1(false);
    setIsActivebtn2(false);
    setIsActivebtn3(!isActivebtn3);
    setFIlter("Rejected")
  };
  const statusFilter = (data,filter) =>{
    return data.filter((item) => item.status.includes(filter))
  }

  return (
    <>
      <section className="w-full bg-hijau-muda h-[100vh] flex justify-center ">
        <div className="px-[100px] w-full mt-[70px]">
          <div className="grid grid-cols-4">
            <button className={` ${isActivebtnall ? "bg-hitam":"bg-abu"} rounded-none bg-hitam hover:bg-hijaugelap`} onClick={handleClickbtnAll}> All</button>
            <button className={` ${isActivebtn1 ? "bg-hitam":"bg-abu"} rounded-none hover:bg-hijaugelap`} onClick={handleClickbtn1}> Pending Request</button>
            <button className={` ${isActivebtn2 ? "bg-hitam":"bg-abu"} rounded-none hover:bg-hijaugelap`} onClick={handleClickbtn2} >Accepted Request</button>
            <button className={` ${isActivebtn3 ? "bg-hitam":"bg-abu"} rounded-none hover:bg-hijaugelap`} onClick={handleClickbtn3} >Rejected Request</button>
          </div>
          <div className="grid grid-cols-5 mt-[30px]">
            <p className="text-center bg-hitam text-white py-[10px]">Subject</p>
            <p className="text-center bg-hitam text-white py-[10px]">
              Applicants
            </p>
            <p className="text-center bg-hitam text-white py-[10px]">Date</p>
            <p className="text-center bg-hitam text-white py-[10px]">Status</p>
            <p className="text-center bg-hitam text-white py-[10px]">Action</p>
          </div>
          <AppoinmentConfig items={statusFilter(appoinmentdata, filter)} />
        </div>
      </section>
    </>
  );
}

function AppoinmentConfig({ items }) {
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
      <DeleteModal show={isDeleteOpen} closeModal={closeDeleteModal}/>
      <MyModal show={isOpen} closeModal={closeModal} />
      {/* {appoinmentdata.filter(id => id.contains("Accepted")).map(appoinment => { */}
      {items.map((appoinment) => {
        return (
          <div key={appoinment.key} className="grid grid-cols-5 bg-white">
            <p className="text-center py-[26px]">{appoinment.subject}</p>
            <p className="text-center py-[26px]">{appoinment.applicant}</p>
            <p className="text-center py-[26px]">{appoinment.date}</p>
            <p className="text-center py-[26px]">{appoinment.status}</p>
            <div className="flex justify-center items-center gap-x-5">
              <button
                onClick={openModal}
                className="inline-flex bg-[#11F26B] items-center px-3 py-1 text-black rounded-md"
              >
                <FaEye className="mr-[10px]" /> View
              </button>
              <button onClick={openDeleteModal} className="inline-flex bg-[#E74343] items-center px-3 py-1 text-white rounded-md">
                <FaTrash className="mr-[10px]" />
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
