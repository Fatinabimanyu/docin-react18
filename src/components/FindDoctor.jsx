import React, { useCallback, useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { getDoctor } from "../services/doctor";
import { toast } from "react-toastify";

export default function FindDoctor() {
  const [doctorList, setDoctorList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await getDoctor();
      if (response.error) {
        toast.error(response.message);
      } else {
        setDoctorList(response.data);
      }
      console.log(response.data);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="bg-hijau-muda md:px-[200px] pb-[50px]">
        <h1 className="flex py-5 leading-10 font-bold text-2xl text-center justify-center md:text-3xl">
          Cari Dokter Sesuai Kebutuhan Anda!
        </h1>
        <div className="flex justify-between mx-[20px] md:mx-0 my-[20px]">
          <input
            className="w-[80%] border-2 border-hijau rounded-lg px-[10px] md:w-[90%]"
            type="text"
            placeholder="Nama Dokter atau Spesialisasi"
          ></input>
          <button
            className={`rounded-lg px-[20px] items-center gap-x-2 hidden md:inline-flex`}
          >
            <BiSearch />
            <span>Cari</span>
          </button>
          <button className="rounded-lg px-[20px] flex items-center gap-x-2 md:hidden">
            <BiSearch />
          </button>
        </div>
        <div className="mx-[20px] md:mx-0">
          <div>
            {doctorList?.map((item) => {
              return (
                <div key={item._id} className="flex border my-[10px] bg-putih">
                  <div>
                    <img
                      src="https://assets.coingecko.com/coins/images/279/large/ethereum.png"
                      className=" w-[180px] h-[210px] border-2"
                    ></img>
                  </div>
                  <div className="flex flex-col justify-between p-[18px] w-full">
                    <div>
                      <p className="font-bold text-[16px]">{item.name}</p>
                      <p>{item.speciality}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-[16px] font-medium">
                        Rp{item.appointmentFee}
                      </p>
                      <button className="px-[16px] py-[3px] rounded-md text-[16px]">
                        Buat Janji
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            
          </div>
        </div>
      </div>
    </>
  );
}
