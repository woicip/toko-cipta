import { useContext } from 'react';
import 'tailwindcss/tailwind.css';

// Context
import { Context } from '../../Context/Context';

export default function ItemSuggestion(props){

    const { name, price, setShowSuggestion } = props;

    const { products, addProduct, increaseTotalHarga } = useContext(Context);

    function addProductHandler(e){
        let foundSameProduct = products.filter(product => product.name === name)[0];
        
        if(foundSameProduct){
            alert("PRODUK TELAH ADA DI BASKET!");
        } else {
            addProduct({ name, price });
            increaseTotalHarga(price);
            setShowSuggestion(false);
        }

    }

    return (
        <button className="w-full py-3 px-4 text-black flex items-center justify-between border-b border-slate-400 hover:bg-slate-200 focus:outline-none focus:bg-[#1481E5] focus:text-white" onClick={addProductHandler}>
            <p className="font-medium">{name}</p>
            <p className="font-medium">Rp. {price.toLocaleString()}</p>
        </button>
    )
}