import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

// Components
import Navigations from '../Navigations/Navigations';
import Search from './Search';
import Item from './Item';

// Context
import { Context } from '../../Context/Context';

const items = [
    { name: "INDOMIE GORENG", price: 3500 },
    { name: "INDOMIE SOTO", price: 3000 },
    { name: "INDOMIE AYAM BAWANG", price: 3000 },
    { name: "INDOMIE KARI AYAM", price: 3000 },
    { name: "INDOMIE GORENG ACEH", price: 3500 },
    { name: "TELUR (1 Kg)", price: 23000 },
    { name: "SOSIS SO NICE", price: 1000 },
    { name: "BENG BENG", price: 2000 },
    { name: "MINYAK BIMOLI (1 Ltr)", price: 22000 },
];

export default function Home(props){

    const { setHomeActive, setPaymentMethodActive } = props;

    const { totalHarga, products } = useContext(Context);

    const [ suggestionItems, setSuggestionItems ] = useState([ ]);

    const productsDOM = products.map((product, index) => {
        return <Item key={index+1} name={product.name} amount={1} price={product.price} />
    });

    function checkoutHandler(e){
        if(!products.length){
            return alert("MOHON UNTUK MENGISI SETIDAKNYA 1 PRODUK KEDALAM BASKET");
        };
    };

    return(
        <main className="w-[80%] mx-auto">
            <Navigations />

            <section>
                {/* Cari Barang Component */}
                <Search items={items} suggestionItems={suggestionItems} setSuggestionItems={setSuggestionItems} />

                <section className="mt-[12px] mb-[30px] flex flex-col justify-between">

                    <table className="w-full text-center">
                        <thead>
                            <tr className="h-14">
                                <th className="bg-[#1481E5] text-white font-bold px-10 text-left rounded-tl-lg">PRODUCTS</th>
                                <th className="bg-[#1A77CC] text-white font-bold">ACTION</th>
                                <th className="bg-[#1481E5] text-white font-bold">QUANTITY</th>
                                <th className="bg-[#1A77CC] text-white font-bold rounded-tr-lg">PRICE</th>
                            </tr>
                        </thead>

                        <tbody className="border border-slate-300">{productsDOM}</tbody>
                    </table>

                    { !products.length && <p className="w-full py-4 text-center text-slate-400 border border-slate-300">No Produts Available ...</p> }

                    {/* Total Value */}
                    <section className="h-16 flex items-center justify-between w-full bg-[#0E69BC] rounded-b-sm">
                        <div className="text-white pl-10 flex items-end">
                            <p className="leading-4">Total<br/>Barang</p>
                            <p className="ml-4 font-semibold text-2xl">{products.length} Barang</p>
                        </div>

                        <section className="h-full flex items-center">
                            <div className="mr-10 text-white flex items-end">
                                <p className="leading-4">Total<br/>Harga</p>
                                <p className="ml-4 font-semibold text-2xl">Rp. {totalHarga.toLocaleString()}</p>
                            </div>

                            { !products.length &&
                                <button className="h-full w-[160px] font-semibold text-lg text-center bg-[#bebebe] text-[#8a8a8a] rounded-br-sm cursor-not-allowed">
                                    <p className="h-full w-full flex items-center justify-center">Checkout</p>
                                </button>
                            }

                            { products.length > 0 && 
                                <button className="h-full w-[160px] font-semibold text-lg text-center bg-[#1A77CC] text-white rounded-br-sm" onClick={checkoutHandler}>
                                    <Link to="/paymentMethod">
                                        <p className="h-full w-full flex items-center justify-center">Checkout</p>
                                    </Link>
                                </button>
                            }
                        </section>
                    </section>
                </section>
            </section>

        </main>
    );
};