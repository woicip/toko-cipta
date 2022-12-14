import { useState, useContext } from 'react';
import 'tailwindcss/tailwind.css';

// Components
import Suggestion from '../Suggestion/Suggestion';

// Context
import { Context } from '../../Context/Context'; 

export default function Search(props){

    const { items, suggestionItems, setSuggestionItems } = props;

    const { clearProducts, clearTotalPrices} = useContext(Context);
    
    const [ showSuggestion, setShowSuggestion ] = useState(false);

    function searchSuggestion(e){
        const foundProduct = [];
        
        if(!e.target.value.length) {
            return setShowSuggestion(false);
        }

        items.forEach((item) => {
            if(item.name.includes(e.target.value)){
                foundProduct.push(item);
                setSuggestionItems(foundProduct);

                setShowSuggestion(true);
            }
        });
    };

    function escHandler(e){
        if(e.keyCode === 27) setShowSuggestion(false);   
    }

    function clearBasketHandler(e){
        clearProducts();
        clearTotalPrices();
    }

    return (
        <div className="mt-3 bg-[#0E69BC] h-20 px-[40px] flex items-center justify-between text-white rounded-lg">
            <div>
                <h2 className="font-bold text-xl">Cari Barang</h2>
            </div>

            <div className="relative">
                <input type="text" placeholder="Search Item ..." className="bg-[#0F5493] border border-[#0b467c] w-[500px] placeholder:text-[#c5c5c5] font-medium color-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#c7c7c7]" onChange={searchSuggestion} onKeyDown={escHandler}/>
                <Suggestion show={showSuggestion} products={suggestionItems} setShowSuggestion={setShowSuggestion} />
            </div>

            <button className="bg-[#0A4D8A] border border-[#0b467c] text-white py-1 px-2 text-xs rounded-md hover:bg-red-600 hover:border-[#ac1212] focus:outline-none focus:bg-red-600 focus:border-[#ac1212]" onClick={clearBasketHandler}>Clear Basket</button>
        </div>
    );
};