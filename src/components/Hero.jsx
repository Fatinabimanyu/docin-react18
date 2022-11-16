import React from "react";
import HeroImg from "../assets/images/hero-img.png";

export default function Hero() {
  return (
    <div className="w-full h-screen bg-[#DDEFEE] flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-8 py-8">
          <p className="py-3 text-[#162F3D] text-3xl leading-normal md:text-4xl md:leading-normal font-bold">
            Temukan Dokter Sesuai Kebutuhan Anda!
          </p>
          <p className="text-[#162F3D] leading-loose text-justify py-3">
            Doc.in membantu Anda untuk membuat janji temu dengan dokter yang
            sesuai dengan kebutuhan Anda dan dengan proses yang mudah dan
            terintegrasi antar kedua belah pihak.
          </p>
          <button className="py-3 px-6 sm:w-[40%] my-4">Mari Mulai</button>
        </div>
        <div>
          <img src={HeroImg} alt="hero-img" />
        </div>
      </div>
    </div>
  );
}
