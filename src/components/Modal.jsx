import { Dialog, Transition, Listbox } from "@headlessui/react";
import { Fragment, useState, useEffect, setState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export default function MyModal(props) {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [obat, setObat] = useState([]);
  let [isOpen, setIsOpen] = useState(true);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // const handleDropdownChange = (event) => {
  //   setSelectedOptions(event.target.value);
  // };

  const rejectAppointment = (e) => {
    e.preventDefault();
    const reqHeaders = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "x-access-token",
        "x-access-token": token,
      },
    };
    axios.defaults.headers.common["x-auth-token"] = token;
    axios.put(
      `http://localhost:5000/appointments/reject/${props.id}`,
      {
        status: "rejected",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "x-access-token",
          "x-access-token": token,
        },
      }
    );
    props.closeModal();
    toast.success("Appointment berhasil ditolak!");
    setTimeout(() => window.location.reload(), 2000);
  };

  const [isLoginDoctor, setIsLoginDoctor] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const token = atob(Cookies.get("token"));

  const handleChange = (text) => (e) => {
    setQuery({ ...query, [text]: e.target.value });
  };

  const handleSubmit = (e) => {
    const id = props.item._id;
    console.log(props.id);
    console.log(query);
    e.preventDefault();
    if (query.patient_name && query.explanation && query.date && query.time) {
      axios
        .put(
          `http://localhost:5000/appointments/${props.id}`,
          {
            patient_name: query.patient_name,
            explanation: query.explanation,
            explanation_doctor: query.explanation_doctor,
            date: query.date,
            time: query.time,
          },
          {
            headers: {
              "x-auth-token": token,
            },
          }
        )
        .then((response) => setQuery(response.data));
      toast.success("Janji temu berhasil diedit!");
    } else {
      console.log("Isikan seluruh informasi yang dibutuhkan");
    }
    props.closeModal();
    setTimeout(() => window.location.reload(), 2000);
  };

  const [query, setQuery] = useState({
    patient_name: props.item.patient_name,
    explanation: props.item.explanation,
    explanation_doctor: props.item.explanation_doctor,
    date: props.item.date,
    time: props.item.time,
  });

  const fetchData = async (selectedValue) => {
    try {
      const response = await axios.get(
        `http://localhost:9000/${selectedValue}`
      );
      // Lakukan sesuatu dengan data yang diperoleh dari GET request
      const obat = response.data;
      setObat(obat);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleDropdownChange = (event) => {
  //   setSelectedOptions(event.target.value);
  //   fetchData(event.target.value); // Panggil fungsi GET saat nilai dropdown berubah
  // };

  useEffect(() => {
    if (token) {
      const payload = jwtDecode(token);
      if (payload.role === "User") {
        setIsLoginDoctor(false);
      } else if (payload.role === "Doctor") {
        setIsLoginDoctor(true);
        setIsDisabled(true);
      } else {
      }
    }
    axios
      .get("http://localhost:9000/")
      .then((response) => {
        setOptions(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`http://localhost:9000/${selectedOptions._id}`)
      .then((responseObat) => {
        setObat(responseObat.data);
        console.log(responseObat.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(query);
  }, [selectedOptions]);

  const acceptAppointment = (e) => {
    e.preventDefault();
    axios.put(
      `http://localhost:9000/636e5d68db78c09599305139/log`,
      {
        stock: 1,
        description: "add from docin",
        total_payment: 20000,
      },
      {
        headers: {
          "Content-Type": "application/json",
          // "Access-Control-Allow-Headers": "x-access-token",
          // "x-access-token": token,
        },
      }
    );
    const reqHeaders = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "x-access-token",
        "x-access-token": token,
      },
    };
    axios.defaults.headers.common["x-auth-token"] = token;
    axios.put(
      `http://localhost:5000/appointments/accept/${props.id}`,
      {
        status: "accepted",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "x-access-token",
          "x-access-token": token,
        },
      }
    );
    axios
      .put(
        `http://localhost:5000/appointments/${props.id}`,
        {
          patient_name: query.patient_name,
          explanation: query.explanation,
          explanation_doctor: query.explanation_doctor,
          date: query.date,
          time: query.time,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => setQuery(response.data));
    props.closeModal();
    toast.success("Appointment berhasil diterima!");
    setTimeout(() => window.location.reload(), 2000);
  };

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
                      <p className="text-xl text-hijaugelap font-bold">
                        Nama Pasien
                      </p>
                      <input
                        className={`mt-1 mb-4 p-2 w-full border-2 border-hijau rounded-md ${
                          isLoginDoctor ? "border-0 p-0" : ""
                        }`}
                        value={query.patient_name}
                        disabled={isDisabled}
                        onChange={handleChange("patient_name")}
                      ></input>
                      <p className="text-xl text-hijaugelap font-bold">
                        Explanation
                      </p>
                      <input
                        className={`mt-1 mb-4 p-2 w-full border-2 border-hijau rounded-md ${
                          isLoginDoctor ? "border-0 p-0" : ""
                        }`}
                        value={query.explanation}
                        disabled={isDisabled}
                        onChange={handleChange("explanation")}
                      ></input>
                      <p
                        className={`text-xl text-hijaugelap font-bold ${
                          isLoginDoctor ? "" : "hidden"
                        }`}
                      >
                        Obat yang Dibutuhkan
                      </p>
                      <Listbox
                        value={selectedOptions}
                        onChange={setSelectedOptions}
                        className={`text-xl text-hijaugelap font-bold ${
                          isLoginDoctor ? "" : "hidden"
                        } mt-1 mb-4`}
                      >
                        <div className="relative">
                          <Listbox.Button className="w-full bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm py-2 px-4 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            {selectedOptions.length === 0
                              ? "Pilih opsi"
                              : `${selectedOptions}`}
                          </Listbox.Button>
                          <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute z-10 mt-2 w-full bg-white border text-gray-700 border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none sm:text-sm">
                              {options.map((option) => (
                                <Listbox.Option
                                  key={option._id}
                                  value={option.name}
                                >
                                  {({ active }) => (
                                    <div
                                      className={`${
                                        active
                                          ? "text-black bg-blue-600"
                                          : "text-gray-900"
                                      } cursor-default select-none relative py-2 pl-8 pr-4`}
                                    >
                                      <span
                                        className={`${
                                          selectedOptions.includes(option.name)
                                            ? "bg-gray-200"
                                            : "font-normal"
                                        } block truncate`}
                                      >
                                        {option.name}
                                      </span>
                                    </div>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </Listbox>
                      {/* <p className="text-xl text-hijaugelap font-bold">
                        Jumlah Obat
                      </p> */}
                      {/* <input
                        className={`mt-1 mb-4 p-2 w-full border-2 border-hijau rounded-md ${
                          isLoginDoctor ? "" : "border-0 p-0"
                        }`}
                        // value={query.patient_name}
                        // disabled={isDisabled}
                        onChange={handleChange("explanation_doctor")}
                      ></input> */}
                      <p
                        className={`text-xl text-hijaugelap font-bold ${
                          isLoginDoctor ? "" : "hidden"
                        }`}
                      >
                        Catatan Dokter
                      </p>
                      <input
                        className={`mt-1 mb-4 p-2 w-full border-2 border-hijau rounded-md ${
                          isLoginDoctor ? "" : "hidden"
                        }`}
                        value={query.explanation_doctor}
                        // disabled={isDisabled}
                        onChange={handleChange("explanation_doctor")}
                      ></input>
                      <p className="text-xl text-hijaugelap font-bold">Date</p>
                      <input
                        className={`mt-1 mb-4 p-2 w-full border-2 border-hijau rounded-md ${
                          isLoginDoctor ? "border-0 p-0" : ""
                        }`}
                        value={query.date}
                        disabled={isDisabled}
                        type="date"
                        onChange={handleChange("date")}
                      ></input>
                      <p className="text-xl text-hijaugelap font-bold">Time</p>
                      <input
                        className={`mt-1 mb-4 p-2 w-full border-2 border-hijau rounded-md ${
                          isLoginDoctor ? "border-0 p-0" : ""
                        }`}
                        value={query.time}
                        disabled={isDisabled}
                        type="time"
                        onChange={handleChange("time")}
                      ></input>
                      <p className="text-xl text-hijaugelap font-bold">
                        Status
                      </p>
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
                        isLoginDoctor ? "" : "hidden"
                      }`}
                      onClick={rejectAppointment}
                    >
                      Reject
                    </button>
                    <button
                      type="button"
                      className={`w-[300px] bg-hijau rounded-none hover:bg-none ${
                        isLoginDoctor ? "" : "hidden"
                      }`}
                      onClick={acceptAppointment}
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      className={`w-[300px] bg-hijau rounded-none hover:bg-none ${
                        isLoginDoctor ? "hidden" : ""
                      }`}
                      onClick={handleSubmit}
                    >
                      Simpan
                    </button>
                    <button
                      type="button"
                      className={`w-[300px] bg-gray-500 rounded-none hover:bg-gray-400 ${
                        isLoginDoctor ? "hidden" : ""
                      }`}
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
