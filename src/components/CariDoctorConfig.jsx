import React from "react";

export default function CariDokterConfig({ items }) {
  return (
    <div>
      {items.map((doctor) => {
        const { id, nama, spesialisasi, harga, imgdoctor } = doctor;
        return (
          <div key={id} className="flex border my-[10px] bg-putih">
            <div>
              <img
                src={imgdoctor}
                className=" w-[90px] h-[120px] border-2"
              ></img>
            </div>
            <div className="flex flex-col justify-between p-[18px] w-full">
              <div>
                <p className="font-bold text-[16px]">{nama}</p>
                <p>{spesialisasi}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[16px] font-medium">Rp{harga}</p>
                <button className="px-[16px] py-[3px] rounded-md text-[16px]">
                  Buat Janji
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
