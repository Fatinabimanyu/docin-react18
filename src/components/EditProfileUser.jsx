import React from "react";

export default function EditProfileUser() {
  return (
    <div className="bg-hijau-muda w-full items-center justify-center flex">
      <div className="bg-hitam p-10 rounded-[20px]">
        <h1 className="text-center text-3xl text-putih" style={{"text-shadow": "0px 0px 8.75px #FFDDD2"}}>Edit Profile</h1>
        <div className="grid grid-cols-2 gap-x-5 mt-5">
          <p className="font-poppins font-bold text-base text-putih">First Name</p>
          <p className="font-poppins font-bold text-base text-putih">Last Name</p>
          <input
            placeholder="Enter your first name"
            className="w-[350px] h-[40px] text-base px-5 mt-3 bg-[#878FB533] text-putih"
          ></input>
          <input
            placeholder="Enter your last name"
            className="w-[350px] h-[40px] text-base px-5 mt-3 bg-[#878FB533] text-putih"
          ></input>
        </div>
        <p className="font-poppins font-bold text-base text-putih mt-3">Email</p>
        <input
          placeholder="Enter your email address"
          className="w-full h-[40px] text-base px-5 my-3 bg-[#878FB533] text-putih"
        ></input>
        <p className="font-poppins font-bold text-base text-putih">Username</p>
        <input
          placeholder="Enter your username"
          className="w-full h-[40px] text-base px-5 my-3 bg-[#878FB533] text-putih"
        ></input>
        <p className="font-poppins font-bold text-base text-putih">Address</p>
        <input
          placeholder="Enter your address"
          className="w-full h-[40px] text-base px-5 my-3 bg-[#878FB533] text-putih"
        ></input>
        <p className="font-poppins font-bold text-base text-putih">Password</p>
        <input
          placeholder="Enter your password"
          className="w-full h-[40px] text-base px-5 my-3 bg-[#878FB533] text-putih"
        ></input>
        <p className="font-poppins font-bold text-base text-putih">Confirm Password</p>
        <input
          placeholder="Enter your password"
          className="w-full h-[40px] text-base px-5 my-3 bg-[#878FB533] text-putih"
        ></input>
        <button className="w-full rounded-none mt-[30px]">Save</button>
      </div>
    </div>
  );
}
