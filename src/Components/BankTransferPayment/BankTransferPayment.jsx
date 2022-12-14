import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

// ASSETS
import CLOSE from '../../assets/CLOSE_BTN.svg';

export default function BankTransferPayment(props){
    return (
        <section className="bg-[#EEEEEE] h-screen w-screen flex flex-col items-center justify-center">

            <div className="bg-white rounded-3xl pt-4 w-[500px]">

                <div className="px-8 flex items-center justify-between pb-3 border-b border-[#BFBFBF]">
                    <h1 className="font-bold text-lg">Final Checkout</h1>
                    <Link to="/">
                        <img src={CLOSE} alt="CLOSE_BUTTON" className="w-[40px] cursor-pointer" />
                    </Link>
                </div>

                <div className="px-8 mt-6">
                    <div className="flex items-center justify-between">
                        <p>Total Tagihan</p>
                        <p className="font-semibold text-2xl">Rp. 38.500</p>
                    </div>

                    <div>
                        <p className="mt-16 font-semibold">Nomor Rekening Tujuan</p>
                        <div className="flex items-center justify-between">
                            <p className="text-[#0874D7] font-medium">BCA - Gunawan Cipta</p>
                            <p className="text-[#0874D7] font-medium">2180299796</p>
                        </div>
                    </div>
                </div>

                <button className="mt-8 w-full bg-[#0A6FCB] rounded-b-3xl py-3 text-center text-white font-semibold">
                    <Link to="/paymentSuccess">
                        Konfirmasi Pembayaran
                    </Link>
                </button>
            </div>
        </section>
    )
}