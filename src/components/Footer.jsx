import React from "react";
import DocinLogo from "../assets/images/logo-docin.svg";

export default function Footer() {
  return (
    <footer className="bg-white py-4 sm:py-6 px-[50px] md:px-[100px] lg:px-[100px] xl:px-[200px]">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a href="/" className="flex items-center">
            <img src={DocinLogo} className="h-8" alt="Doc.In Logo" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 font-semibold text-gray-900">About Us</h2>
            <ul className="text-gray-600">
              <li className="mb-4 py-1">
                <a href="#" className="hover:underline">
                  Our Team
                </a>
              </li>
              <li className="mb-4 py-1">
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 font-semibold text-gray-900">Legal</h2>
            <ul className="text-gray-600">
              <li className="mb-4 py-1">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4 py-1">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 font-semibold text-gray-900">
              Apakah Anda Seorang Dokter?
            </h2>
            <ul className="text-gray-600">
              <li className="mb-4 py-1 font-medium">
                <a href="/login-doctor">
                  <button>Register</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2022 Kelompok 18 - Pengembangan Aplikasi Web. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
