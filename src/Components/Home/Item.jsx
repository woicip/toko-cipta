import 'tailwindcss/tailwind.css';
import { useState, useContext } from 'react';
import { Context } from '../../Context/Context';

// ASSETS
import ADD_ICON from '../../assets/ADD_ICON.png';
import DEC_ICON from '../../assets/DEC_ICON.png';

export default function Item(props){

    const { products, increaseTotalHarga, decreaseTotalHarga, removeProduct } = useContext(Context);

    const { name, price } = props;

    const [ amount, setAmount ] = useState(1);
    const [ changingPrice, setChangingPrice ] = useState(price);

    // console.log(changingPrice);
    console.log(products);

    function decreaseAmount(e){
        if(amount > 1){
            setAmount(amount - 1);
            setChangingPrice(changingPrice - price);
            decreaseTotalHarga(price);
        }
    }

    function increaseAmount(e){
        setAmount(amount + 1);
        setChangingPrice(changingPrice + price);
        increaseTotalHarga(price);
    }

    function removeHandler(e){
        removeProduct({ name, price });
        decreaseTotalHarga(price * amount);
        setAmount(1);
    }

    return (
        <tr className="w-full justify-between border-b border-r border-l border-[#BFBFBF]">
            <td className="py-4 px-10 font-medium text-left">{name}</td>

            <td className="w-[140px]">
                <button className="py-1 px-2 font-medium text-[#FF4949] text-xs bg-[#FFB2B2] rounded-sm" onClick={removeHandler}>Remove</button>
            </td>

            <td className="w-[200px] py-0 px-0">
                <div className="flex items-center justify-center">
                    <button className="h-[35px] px-3 bg-[#e02828] text-white text-xl rounded-sm border border-[#c52020]" onClick={decreaseAmount}>
                        <img src={DEC_ICON} alt="DEC_ICON" className="w-[12px]" />
                    </button>

                    <p className="mx-6 font-medium">{amount}</p>

                    <button className="h-[35px] px-3 bg-[#1C91FC] text-white text-xl rounded-sm border border-[#1373ce]" onClick={increaseAmount}>
                        <img src={ADD_ICON} alt="ADD_ICON" className="w-[12px]" />
                    </button>
                </div>
            </td>

            <td className="w-[200px] font-medium">Rp. {changingPrice.toLocaleString()}</td>
        </tr>
    )
}