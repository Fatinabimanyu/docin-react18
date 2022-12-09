import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect, setState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export default function MyModal(props) {
  let [isOpen, setIsOpen] = useState(true);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [isLoginDoctor, setIsLoginDoctor] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const token = atob(Cookies.get("token"));

  const handleSubmit = (e) => {
    const id = props.id;
    e.preventDefault();
    if (props.item.subject && props.item.explanation && props.item.date && props.item.time) {
      axios.put(
          `http://localhost:5000/appointments/${id}`,
          {
            subject: query.subject
          },
          {
            headers: {
              "x-auth-token": token
            },
          }
        )
        .then(response => setQuery(response.data));
      toast.success("Janji temu berhasil diedit!");
      console.log(id)
      console.log(token)
      console.log(query)
    } else {
      console.log("Isikan seluruh informasi yang dibutuhkan");
    }
  };

  const [query, setQuery] = useState({
    subject: props.item.subject,
    explanation: props.item.explanation,
    date: props.item.date,
    time: props.item.time
  });

  useEffect(() => {
    if (token) {
      const payload = jwtDecode(token);
      if (payload.role === "User") {
        setIsLoginDoctor(false);
      } else if (payload.role === "Doctor") {
        setIsLoginDoctor(true);
        setIsDisabled(true)
      } else {
      }
    }
    console.log(query);
  }, []);
  return (
    <>
      <Transition appear show={props.show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" transform overflow-hidden rounded-2xl bg-white p-9 w-[700px] text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl mb-9 font-blod leading-6 text-black text-center"
                  >
                    Detail Appoinment
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit}>
                      <p className="text-xl text-hijaugelap font-bold">Subject</p>
                      <input className={`mt-1 mb-4 p-2 w-full border-2 border-hijau rounded-md ${
                        isLoginDoctor? "border-0 p-0" : ""}`} 
                        value={query.subject} disabled={isDisabled}
                        onChange={(e) => setQuery(e.target.value)}>
                      </input>
                      <p className="text-xl text-hijaugelap font-bold">
                        Explanation
                      </p>
                      <input className={`mt-1 mb-4 p-2 w-full border-2 border-hijau rounded-md ${
                        isLoginDoctor? "border-0 p-0" : ""}`} 
                        value={query.explanation} disabled={isDisabled}
                        onChange={(e) => setQuery(e.target.value)}>
                      </input>
                      <p className="text-xl text-hijaugelap font-bold">Date</p>
                      <input className={`mt-1 mb-4 p-2 w-full border-2 border-hijau rounded-md ${
                        isLoginDoctor? "border-0 p-0" : ""}`} 
                        value={query.date} disabled={isDisabled} type="date"
                        onChange={(e) => setQuery(e.target.value)}>
                      </input>
                      <p className="text-xl text-hijaugelap font-bold">Time</p>
                      <input className={`mt-1 mb-4 p-2 w-full border-2 border-hijau rounded-md ${
                        isLoginDoctor? "border-0 p-0" : ""}`} 
                        value={query.time} disabled={isDisabled} type="time"
                        onChange={(e) => setQuery(e.target.value)}>
                      </input>
                      <p className="text-xl text-hijaugelap font-bold">Status</p>
                      <p className="mb-4">{props.item.status}</p>
                      <p className="text-xl text-hijaugelap font-bold">
                        Appointment Fee
                      </p>
                      <p className="mb-4">{props.item.appointmentFee}</p>
                    </form>
                  </div>

                  <div className="flex justify-between mt-10">
                    <button
                      type="button"
                      className={`w-[300px] bg-red-800 rounded-none hover:bg-red-500 ${
                        isLoginDoctor? "" : "hidden"}`}
                      onClick={props.closeModal}
                    >
                      Reject
                    </button>
                    <button
                      type="button"
                      className={`w-[300px] bg-hijau rounded-none hover:bg-none ${
                        isLoginDoctor? "" : "hidden"}`}
                      onClick={props.closeModal}
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      className={`w-[300px] bg-hijau rounded-none hover:bg-none ${
                        isLoginDoctor? "hidden" : ""}`}
                      onClick={handleSubmit}
                    >
                      Simpan
                    </button>
                    <button
                      type="button"
                      className={`w-[300px] bg-gray-500 rounded-none hover:bg-gray-400 ${
                        isLoginDoctor? "hidden" : ""}`}
                      onClick={props.closeModal}
                    >
                      Tutup
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
