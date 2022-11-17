import React from "react";
import HeroImg from "../assets/images/doctor1.png";

export default function Hero() {
  return (
    <div>
      <div className="h-[100vh] bg-hijau-muda">
        <div className="grid md:grid-cols-2 px-[200px] items-center justify-between">
          <div className="flex flex-col justify-center w-[650px] md:items-start">
            <p className="text-justify space-y-5 py-3 text-hitam text-4xl leading-normal md:text-5xl md:leading-normal font-bold">
              Temukan Dokter Sesuai Kebutuhan Anda!
            </p>
            <p className="text-[20px] font-[500] text-hitam text-justify leading-loose">
              Doc.in membantu Anda untuk membuat janji temu dengan dokter yang
              sesuai dengan kebutuhan Anda dan dengan proses yang mudah dan
              terintegrasi antar kedua belah pihak.
            </p>
            <button className="py-3 px-6 sm:w-[40%] my-4 text-lg">
              Mari Mulai
            </button>
          </div>
          <img src={HeroImg} className="pt-[80px]" alt="" />
        </div>
      </div>
    </div>
  );
}
