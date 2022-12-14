import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

// CONTEXT
import { Context } from '../../Context/Context';

// ASSETS
import CLOSE from '../../assets/CLOSE_BTN.svg';

export default function PaymentMethod(props){

    const [ customerMoney, setCustomerMoney ] = useState(0);
    const [ showReturn, setShowReturn ] = useState(false);
    const { totalHarga, clearProducts, clearTotalPrices } = useContext(Context);

    function customerMoneyHandler(e){
        if(e.keyCode === 13){
            setShowReturn(true);
        }
    }

    function clearAllbasket(){
        clearProducts();
        clearTotalPrices();
    }

    return (
        <section className="bg-[#EEEEEE] h-screen w-screen flex flex-col items-center justify-center">

            <div className="bg-white rounded-3xl pt-4 pb-7 w-[500px]">

                <div className="px-8 flex items-center justify-between pb-3 border-b border-[#BFBFBF]">
                    <h1 className="font-bold text-lg">Final Checkout</h1>
                    <Link to="/">
                        <img src={CLOSE} alt="CLOSE_BUTTON" className="w-[40px] cursor-pointer" />
                    </Link>
                </div>

                <div className="px-8 mt-6">
                    <div className="flex items-center justify-between">
                        <p>Total Tagihan</p>
                        <p className="font-semibold text-lg">Rp. {totalHarga.toLocaleString()}</p>
                    </div>

                    <div className="mt-1 flex items-center justify-between">
                        <p>Bayar</p>
                        { !customerMoney.length && <p className="font-semibold text-lg">Rp. -,</p> }
                        { customerMoney.length > 0 && <p className="font-semibold text-lg">Rp. {customerMoney.toLocaleString()}</p> }
                    </div>

                    <div className="mt-8">
                        <p className="text-lg font-semibold">Uang Pembeli</p>
                        <div className="flex items-center w-full mt-1 py-3 px-4 rounded-xl bg-[#DFDFDF]">
                            <p className="font-semibold text-xl">Rp.</p>
                            <input type="number" value={customerMoney} className="ml-1 text-xl h-full w-full font-semibold bg-[#DFDFDF] focus:outline-none" onChange={(e) => setCustomerMoney(e.target.value)} onKeyDown={customerMoneyHandler}/>
                        </div>
                    </div>
                </div>

            </div>

            { showReturn &&
                <div className="rounded-3xl py-6 w-[500px]">
                    <div className="bg-[#0C7EE7] px-8 py-4 rounded-t-3xl flex items-center justify-between text-white ">
                        <p className="font-medium">Kembali</p>
                        { !customerMoney.length && <p className="font-bold text-2xl">Rp. -,</p> }
                        { customerMoney.length > 0 && <p className="font-bold text-2xl">Rp. {(customerMoney - totalHarga).toLocaleString()}</p> }
                        
                    </div>
                    <button className="w-full bg-[#0A6FCB] rounded-b-3xl py-3 text-center text-white font-semibold" onClick={clearAllbasket}>
                        <Link to="/paymentSuccess">
                            Simpan Pembayaran
                        </Link>
                    </button>
                </div>
            }
        </section>
    )
}