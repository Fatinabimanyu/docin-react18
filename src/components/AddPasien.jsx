import React, { useState, useRef } from "react";
import { setAddPasien } from "../services/auth";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AddPasien() {
  const [nik, setNik] = useState("");
  const [name, setName] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [address, setAddress] = useState("");
  const [noHandphone, setNoHandphone] = useState("");
  //   const [pekerjaan, setPekerjaan] = useState("");

  const dateInputRef = useRef(null);

  const navigate = useNavigate();

  const onSubmit = async () => {
    const data = {
      nik,
      name,
      tempatLahir,
      tanggalLahir,
      //   jenisKelamin,
      address,
      noHandphone,
      //   pekerjaan,
    };
    if (
      !nik ||
      !name ||
      !tempatLahir ||
      !tanggalLahir ||
      //   !jenisKelamin ||
      !address ||
      !noHandphone
      //   !pekerjaan
    ) {
      toast.error("Semua form wajib diisi!");
    } else {
      const response = await setAddPasien(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success("Penambahan pasien sukses!");
        navigate("/user-dashboard");
      }
    }
  };

  return (
    <>
      {/* <div
        className="h-[100vh] flex items-center justify-center "
        style={{
          background: "linear-gradient(90deg, #0199A7 0%, #B4DCDA 100%)",
        }}
      > */}
      <section className="w-full bg-hijau-muda h-[100vh] flex justify-center">
        <form className="flex-col flex px-[30px] w-[350px] py-[30px] xl:w-[100vh] xl:px-[90px] xl:py-[45px]">
          <h5 className="text-center font-bold text-[20px] mb-[20px] xl:text-[35px] text-black xl:mb-[50px]">
            Tambah Pasien
          </h5>
          <p className="font-bold text-[12px] text-black mb-[10px]">
            Nomor Induk Kependudukan
          </p>
          <input
            type="number"
            id="NIK"
            placeholder="NIK"
            className="mb-[10px] bg-[#878FB533] xl:p-[10px] text-black p-[5px] w-auto"
            value={nik}
            onChange={(event) => setNik(event.target.value)}
          ></input>
          <p className="font-bold text-[12px] text-black mb-[10px]">
            Nama Lengkap
          </p>
          <input
            id="nama"
            placeholder="Nama Lengkap"
            className="mb-[10px] bg-[#878FB533] xl:p-[10px] text-black p-[5px] w-auto"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
          <div className="xl:gap-x-5 flex-col xl:flex-row flex">
            <div className="flex flex-col w-[25rem]">
              <p className="font-bold text-[12px] text-black mb-[10px]">
                Tempat Lahir
              </p>
              <input
                id="tempatlahir"
                placeholder="Tempat Lahir"
                className="bg-[#878FB533] xl:p-[10px] p-[5px] mb-[10px] text-black"
                value={tempatLahir}
                onChange={(event) => setTempatLahir(event.target.value)}
              ></input>
            </div>
            <div className="flex flex-col w-[25rem]">
              <p className="font-bold text-[12px] text-black mb-[10px]">
                Tanggal Lahir
              </p>
              <input
                id="tanggallahir"
                type="date"
                placeholder="Tanggal Lahir"
                className="bg-[#878FB533] xl:p-[10px] p-[5px] mb-[10px] text-black"
                value={tanggalLahir}
                ref={dateInputRef}
                onChange={(event) => setTanggalLahir(event.target.value)}
              ></input>
            </div>
          </div>
          <p className="font-bold text-[12px] text-black mb-[10px]">
            Jenis Kelamin
          </p>
          <select
            id="jeniskelamin"
            placeholder="Pilih Jenis Kelamin"
            className="mb-[10px] bg-[#878FB533] xl:p-[10px] p-[5px] text-black border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:border-gray-600 dark:placeholder-gray-400 dark:focus:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={jenisKelamin}
            onChange={(event) => setJenisKelamin(event.target.value)}
          >
            {/* <option selected>Jenis Kelamin</option> */}
            <option value="Laki-Laki">Laki-Laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
          {/* <p className="font-bold text-[12px] text-putih mb-[10px]">
            Jenis Kelamin
          </p>
          <input
            type="username"
            placeholder="Enter your username"
            className="mb-[10px] bg-[#878FB533] xl:p-[10px] p-[5px] text-putih"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></input> */}
          <p className="font-bold text-[12px] text-black mb-[10px]">Alamat</p>
          <input
            id="alamat"
            type="address"
            placeholder="Alamat"
            className="mb-[10px] bg-[#878FB533] p-[10px] text-black"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          ></input>
          <p className="font-bold text-[12px] text-black mb-[10px]">
            Nomor Telepon
          </p>
          <input
            id="nohp"
            type="number"
            placeholder="No Handphone"
            className="mb-[10px] bg-[#878FB533] p-[10px] text-black"
            value={noHandphone}
            onChange={(event) => setNoHandphone(event.target.value)}
          ></input>
          <button
            id="btnsubmit"
            onClick={onSubmit}
            type="button"
            className="rounded-none my-[20px] xl:my-[40px] text-[#EDF6F9] bg-[#0199A7] px-[44px] py-[9px]
            hover:shadow-lg"
          >
            Tambah Pasien
          </button>
          {/* <p className="text-center text-[#83C5BE] text-[12px] xl:text-[15px]">
            Already have an account?{" "}
            <span className="text-putih">
              <a href="/login-user">Login</a>
            </span>
          </p> */}
        </form>
        {/* </div> */}
      </section>
    </>
  );
}
