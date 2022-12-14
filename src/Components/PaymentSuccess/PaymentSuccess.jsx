import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

// ASSETS
import SUCCESS from '../../assets/SUCCESS.svg';

export default function PaymentSuccess(props){
    return (
        <section className="bg-[#EEEEEE] h-screen w-screen flex flex-col items-center justify-center">

            <div className="bg-white rounded-3xl pt-16  w-[500px]">
                <div className="mb-4 flex flex-col items-center justify-center">
                    <img src={SUCCESS} alt="SUCCESS_ICON" className="w-[90px]" />
                    <h1 className="mt-[20px] font-bold text-xl">Pembayaran Berhasil</h1>
                    <p className="text-sm text-[#9E9E9E]">Silahkan menuju kembali ke halaman utama.</p>
                </div>
                <button className="mt-8 w-full bg-[#0A6FCB] rounded-b-3xl py-3 text-center text-white font-semibold">
                    <Link to="/">
                        Back to Home
                    </Link>
                </button>
            </div>

        </section>
    )
}