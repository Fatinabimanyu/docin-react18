import React from "react";
import HeroImg from "../assets/images/profile-logo.png";

export default function DashContent() {
  return (
    <section className="w-full bg-hijau-muda h-[100vh] flex justify-center ">
      <div className="absolute flex-col text-center font-bold text-[20px] mt-[100px] xl:text-[35px] text-hitam xl:mb-[10px]">Hi, (username)</div>
      <div className="items-center flex flex-row"></div>
        <img src={HeroImg} className="w-80 h-80 object-cover rounded-full mr-[90px] mt-[280px]" alt="" />
            <div className="h-[100vh] flex items-center justify-center ">
              <form className="flex-col flex px-[10px] w-[300px] py-[10px] xl:w-auto xl:px-[10px] xl:py-[45px] rounded-[18px]">
                  <div className="xl:gap-x-5 flex-col xl:flex-row flex">
                  </div>
                    <div className="font-bold text-[30px] text-hitam mb-[10px]">Name</div>
                      <p className="mb-[10px] text-hijau text-[20px]">Hari Irawan</p>
                    <div className="font-bold text-[30px] text-hitam mb-[10px]">Bio</div>
                      <p className="mb-[10px] text-hijau text-[20px]">Saya seorang dokter.</p>
                    <div className="font-bold text-[30px] text-hitam mb-[10px]">Speciality</div>
                      <p className="mb-[10px] text-hijau text-[20px]">Bedah</p>
                    <div className="font-bold text-[30px] text-hitam mb-[10px]">Email</div>
                      <p className="mb-[10px] text-hijau text-[20px]">doctor@gmail.com</p>
                
              </form>
      </div>
    </section>
  );
}
