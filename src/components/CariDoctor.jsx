import React from "react";
import CariDokterConfig from "./CariDoctorConfig";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import Footer from "./Footer";

export default function CariDoctor() {
  const [isMobile, setMobile] = useState(true);
  const datadoctor = [
    {
      id: 1,
      nama: "Johnysins",
      spesialisasi: "Gizi",
      harga: 250000,
      imgdoctor:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    },
    {
      id: 2,
      nama: "Johnysins",
      spesialisasi: "Gigi",
      harga: 250000,
      imgdoctor:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    },
    {
      id: 3,
      nama: "Johnysins",
      spesialisasi: "Gizi",
      harga: 250000,
      imgdoctor:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    },
    {
      id: 4,
      nama: "Johnysins",
      spesialisasi: "Gizi",
      harga: 250000,
      imgdoctor:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    },
    {
      id: 5,
      nama: "Johnysins",
      spesialisasi: "Gizi",
      harga: 250000,
      imgdoctor:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    },
    {
      id: 6,
      nama: "Johnysins",
      spesialisasi: "Gizi",
      harga: 250000,
      imgdoctor:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    },
    {
      id: 7,
      nama: "Johnysins",
      spesialisasi: "Gizi",
      harga: 250000,
      imgdoctor:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    },
    {
      id: 8,
      nama: "Johnysins",
      spesialisasi: "Gizi",
      harga: 250000,
      imgdoctor:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    },
  ];

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
        <button className={`rounded-lg px-[20px] items-center gap-x-2 hidden md:inline-flex`}><BiSearch /><span>Cari</span></button>
        <button className="rounded-lg px-[20px] flex items-center gap-x-2 md:hidden"><BiSearch /></button>
      </div>
      <div className="mx-[20px] md:mx-0">
        <CariDokterConfig items={datadoctor} />
      </div>
    </div>
    <Footer />
    </>
  );
}
