import 'tailwindcss/tailwind.css';

// Components
import ItemSuggestion from './ItemSuggestion';

export default function Suggestion(props){

    const { show, products, setShowSuggestion } = props;

    // console.log(show);
    if(!show) return null;

    const productsList = products.map((product, index) => {
        return <ItemSuggestion key={index+1} name={product.name} price={product.price} setShowSuggestion={setShowSuggestion} />
    });

    return (
        <section className="bg-white border border-blue-600 absolute mt-[5px] w-full py-1">
            { productsList }
        </section>
    );
}