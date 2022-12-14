import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

// ASSETS
import ARROW_RIGHT from '../../assets/ARROW_RIGHT.svg';
import CLOSE from '../../assets/CLOSE_BTN.svg';
import Rp from '../../assets/Rp.png';
import BCA from '../../assets/BCA.png';

export default function PaymentMethod(props){
    return (
        <section className="bg-[#EEEEEE] h-screen w-screen flex flex-col items-center justify-center">

            <div className="bg-white rounded-3xl pt-4 pb-6 w-[500px]">

                <div className="px-8 flex items-center justify-between pb-3 border-b border-[#BFBFBF]">
                    <h1 className="font-bold text-lg">Pilih Metode Pembayaran</h1>
                    <Link to="/">
                        <img src={CLOSE} alt="CLOSE_BUTTON" className="w-[40px] cursor-pointer" />
                    </Link>
                </div>

                <div className="mt-7">

                    <Link to="/cashPayment">
                        <div className=" px-8 py-3 flex items-center justify-between hover:bg-[#EEEEEE] cursor-pointer">
                            <img src={Rp} alt="Rupiah" className="w-[70px] rounded-full" />
                            <div className="mx-6">
                                <h1 className="font-semibold">Cash/Tunai</h1>
                                <p className="text-xs text-[#A0A0A0]">Pembayaran via cash bisa langsung membayar ke penjual.</p>
                            </div>
                            <img src={ARROW_RIGHT} alt="ARROW_RIGHT" className="w-[14px]"/>
                        </div>
                    </Link>

                    <Link to="/bankTransferPayment">
                        <div className="mt-4 px-8 py-3 flex items-center justify-between hover:bg-[#EEEEEE] cursor-pointer">
                            <img src={BCA} alt="BCA" className="w-[70px] rounded-full" />
                            <div className="mx-6">
                                <h1 className="font-semibold">Transfer ke Bank BCA </h1>
                                <p className="text-xs text-[#A0A0A0]">Pembeli memasukkan nomor rekening penjual untuk membayar bills.</p>
                            </div>
                            <img src={ARROW_RIGHT} alt="ARROW_RIGHT" className="w-[14px]"/>
                        </div>
                    </Link>

                </div>
            </div>
        </section>
    )
}