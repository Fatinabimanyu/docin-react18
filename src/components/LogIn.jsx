import React from "react";

export default function LogIn() {
  return (
    <>
      <div className="h-[100vh] flex items-center justify-center " style={{background: "linear-gradient(90deg, #0199A7 0%, #B4DCDA 100%)"}}>
        <form className="flex-col flex px-[30px] w-[350px] py-[30px] xl:w-auto xl:px-[90px] xl:py-[45px] rounded-[18px]" style={{background:" linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), rgba(22, 47, 61, 0.6)"}}>
          <h5 className="text-center font-bold text-[20px] mb-[20px] xl:text-[35px] text-white xl:mb-[50px]">Log In</h5>
          <div className="xl:gap-x-5 flex-col xl:flex-row flex">
          </div>
          <p className="font-bold text-[12px] text-putih mb-[10px]">Username</p>
          <input placeholder="Enter your username"  className="mb-[10px] bg-[#878FB533] xl:p-[10px] p-[5px] text-putih"></input>
          <p className="font-bold text-[12px] text-putih mb-[10px]">Password</p>
          <input placeholder="Enter your password" className="mb-[10px] bg-[#878FB533] p-[10px] text-putih"></input>
          <button className="rounded-none my-[20px] xl:my-[40px]">Log In</button>
          <a className="text-center text-[#83C5BE] text-[12px] xl:text-[15px]">Don't have an account? <span className="text-putih">Sign Up</span></a>
        </form>
      </div>
    </>
  );
}
