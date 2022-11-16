import React from "react";
import HeroImg from "../assets/images/doctor1.png";

export default function Hero() {
  return (
    <div>
        <div className='h-[100vh] bg-hijau-muda'>
            <div className='px-[200px] flex items-center justify-between'>
                <div className='flex-row justify-center w-[650px]'>
                    <p className='text-justify my-[25px] space-y-5 py-3 text-hitam text-5xl leading-normal md:text-5xl md:leading-normal font-bold'>
                      Temukan Dokter Sesuai Kebutuhan Anda!</p>
                    <p className='text-[1.375rem] font-[500] text-hitam text-justify leading-loose'>
                      Doc.in membantu Anda untuk membuat janji temu dengan dokter yang
                      sesuai dengan kebutuhan Anda dan dengan proses yang mudah dan
                      terintegrasi antar kedua belah pihak.</p>
                    <button className="py-3 px-6 sm:w-[40%] my-4 text-lg">Mari Mulai</button>
                </div>
                <img src={HeroImg} className='pt-[80px]'></img>
            </div>
        </div>
    </div>
  );
}
