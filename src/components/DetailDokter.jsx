import React from 'react'

export default function DetailDokter() {
  return (
    <>
        <div className='bg-hijau-muda h-full py-[100px] px-5 lg:px-[100px] xl:px-[150px]'>
            <div className='text-hitam text-center mb-10 md:mb-[100px]'>
                <h2 className='xl:text-4xl'>Dr. Nama Dokter</h2>
                <h4 className='font-medium xl:text-2xl'>Spesialisasi</h4>
            </div>
            <div className='flex flex-col lg:flex-row md:justify-between'>
                <form className='bg-putih mb-10 lg:w-[450px] xl:w-[700px]'>
                    <div className='p-5 border-b-2 border-hitam'>
                        <h5 className='mb-1 text-hijau'>Bio Dokter</h5>
                        <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className='p-5 border-b-2 border-hitam'>
                        <h5 className='mb-1 text-hijau'>Alamat</h5>
                        <p>Sleman, Yogyakarta, Indonesia</p>
                    </div>
                    <div className='p-5 border-b-2 border-hitam'>
                        <h5 className='mb-1 text-hijau'>Email</h5>
                        <p>emaildokter@gmail.com</p>
                    </div>
                    <div className='p-5 border-b-2 border-hitam'>
                        <h5 className='mb-1 text-hijau'>Harga</h5>
                        <p>Rp 150.000</p>
                    </div>
                </form>
                <form className='bg-hitam p-5 lg:w-[450px] xl:w-[700px] h-full'>
                    <h5 className='text-putih text-center mb-8'>Buat Janji Temu</h5>
                    <div class="mb-6">
                        <label for="subjek" class="block mb-2 text-md font-semibold text-gray-900 dark:text-white">Subjek</label>
                        <input type="subjek" id="subjek" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Masukkan subjek atau tipe janji temu" required></input>
                    </div>
                    <div class="mb-6">
                        <label for="subjek" class="block mb-2 text-md font-semibold text-gray-900 dark:text-white">Deskripsi</label>
                        <input type="subjek" id="subjek" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Jelaskan detail keluhan kesehatan anda" required></input>
                    </div><div class="mb-6">
                        <label for="subjek" class="block mb-2 text-md font-semibold text-gray-900 dark:text-white">Pilih Waktu</label>
                        <input type="subjek" id="subjek" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Pilih tanggal dan waktu janji temu anda" required></input>
                    </div>
                    <div className='flex justify-between mb-8'>
                        <label className='text-md font-semibold text-white'>Harga</label>
                        <label className='text-md font-semibold text-[#24E8DE]'>Rp 150.000</label>
                    </div>
                    <button className='rounded-none w-full text-sm font-semibold'>Buat Janji Temu</button>
                </form>
            </div>
        </div>
    </>
  )
}
