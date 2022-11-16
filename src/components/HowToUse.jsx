import React from 'react'
import Icon1 from '../assets/images/icon1.svg'
import Icon2 from '../assets/images/icon2.svg'
import Icon3 from '../assets/images/icon3.svg'
import Icon4 from '../assets/images/icon4.svg'

export default function HowToUse() {
  return (
    <>
        <div className='h-[100vh] bg-putih items-center' id='carakerja'>
          <div className='py-[250px]'>
            <p className='text-4xl font-poppins text-hitam text-center font-bold'>4 Langkah Mudah Menggunakan Doc.in</p>
            <div className='grid grid-cols-4 mx-[200px] mt-[80px] text-center'>
              <div className='flex flex-col items-center'>
                <img src={Icon1} className='w-[125px]'></img>
                <p className='text-xl text-hijau font-poppins font-bold mt-10'>Masuk ke Akun Anda</p>
                <p className='text-base text-hitam font-poppins font-[500] mt-3 w-[280px]'>Masuk atau buat akun dengan email agar dapat mengakses fitur Doc.In secara lengkap.</p>
              </div>
              <div className='flex flex-col items-center'>
                <img src={Icon2} className='w-[125px]'></img>
                <p className='text-xl text-hijau font-poppins font-bold mt-10'>Cari Dokter yang Sesuai</p>
                <p className='text-base text-hitam font-poppins font-[500] mt-3 w-[280px]'>Cari dokter dengan spesialisasi sesuai dengan kebutuhan Anda melalui fitur Search Doctor.</p>
              </div>
              <div className='flex flex-col items-center'>
                <img src={Icon3} className='w-[125px]'></img>
                <p className='text-xl text-hijau font-poppins font-bold mt-10'>Rencanakan Janji Temu</p>
                <p className='text-base text-hitam font-poppins font-[500] mt-3 w-[280px]'>Rencanakan janji temu dengan dokter pilihan Anda melalui fitur Create Appointment.</p>
              </div>
              <div className='flex flex-col items-center'>
                <img src={Icon4} className='w-[125px]'></img>
                <p className='text-xl text-hijau font-poppins font-bold mt-10'>Isi Form Janji Temu</p>
                <p className='text-base text-hitam font-poppins font-[500] mt-3 w-[280px]'>Lengkapi formulir dan pantau respon terkait janji temu Anda pada menu My Appointment.</p>
              </div>
            </div>
          </div>          
        </div>
    </>
  )
}
