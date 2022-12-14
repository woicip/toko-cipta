import React from 'react';
import 'tailwindcss/tailwind.css';

// Assets
import Banana from '../../assets/banana.jpg';

export default function Navigations(props){
    return (
        <section className="flex items-center justify-between py-6">
            <div className="flex items-center">
                <h1 className="font-bold text-2xl">Toko Cipta</h1>

                <nav className="ml-12">
                    <a href="#laporan-penjualan" className="mx-4 text-xs hover:underline">Laporan Hari Ini</a>
                    <a href="#laporan-penjualan" className="mx-4 text-xs hover:underline">Laporan Bulan Ini</a>
                </nav>
            </div>

            <button className="py-2 px-2 rounded-lg group hover:bg-[#e4eaec] cursor-pointer">
                <div className="flex items-center">
                    <p className="font-semibold ml-2 text-sm text-[#111]">Kasir Cipta</p>
                    <img src={Banana} alt="profile picture" className="ml-5 w-10 h-10 rounded-md"/>
                </div>
            </button>
        </section>
    )
}