import React from "react";
import HeroImg from "../assets/images/doctor1.png";

export default function Hero() {
  return (
    <>
      <div className='h-full md:h-[100vh] bg-hijau-muda px-[50px] py-[50px] md:px-[100px] xl:px-[200px] xl:pb-[100px] flex flex-col-reverse md:grid md:grid-cols-2 md:gap-[100px] lg:gap-[200px] items-center'>
        <div className="text-center text-hitam md:text-justify justify-center">
          <p className="text-2xl font-bold lg:text-4xl">Temukan Dokter Pilihan Sesuai Kebutuhan Anda!</p>
          <p className="mt-5 lg:text-xl">
            Doc.in membantu Anda untuk membuat janji temu dengan dokter yang
            sesuai dengan kebutuhan Anda dan dengan proses yang mudah dan
            terintegrasi antar kedua belah pihak.
          </p>
          <button className="py-3 px-[50px] lg:px-[75px] my-5" onClick={() => window.location.replace("/#carakerja")}>Lihat Cara Kerja</button>
        </div>
        <img src={HeroImg} className='p-5 pt-0 md:p-0 xl:pt-30 xl:pb-10 xl:pr-0'></img>
      </div>
    </>
  );
}
