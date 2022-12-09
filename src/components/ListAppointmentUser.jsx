import React, { useState} from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import DeleteModal from "./DeleteModal";

export default function ListAppointmentUser({ appointment, _token, openModal }) {
  let [isDeleteOpen, setIsDeleteOpen] = useState(false);
  function closeDeleteModal() {
    setIsDeleteOpen(!isDeleteOpen);
  }

  function openDeleteModal() {

    setIsDeleteOpen(!isDeleteOpen);
    console.log(isDeleteOpen)
  }
  return (
    <>
      <div key={appointment._id} className="grid grid-cols-6 bg-white">
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
            className="inline-flex bg-red-700 items-center px-3 py-1 text-white rounded-md hover:bg-red-500"
          >
            <FaTrash className="mr-[7px]" />
            Hapus
          </button>
        </div>
        {isDeleteOpen ? <> <DeleteModal show={true} closeModal={closeDeleteModal} id={appointment._id} token={_token} /></> : <></>}
      </div>
    </>
  )
}
