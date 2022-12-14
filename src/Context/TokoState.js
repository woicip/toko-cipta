import { useReducer } from 'react';
import { ContextProvider } from './Context';

import Reducer from './Reducer';

import { DECREASE_TOTAL, INCREASE_TOTAL, ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_PRODUCT, CLEAR_TOTAL_PRICES } from './Names';

export default function TokoState({ children }){

    const AppState = { totalHarga: 0, products: [] };
    
    const [ state, dispatch ] = useReducer(Reducer, AppState);
    
    const increaseTotalHarga = (price) => {
        dispatch({ type: INCREASE_TOTAL, payload: price });
    };

    const decreaseTotalHarga = (price) => {
        dispatch({ type: DECREASE_TOTAL, payload: price });
    };

    const addProduct = (product) => {
        dispatch({ type: ADD_PRODUCT, payload: product });
    };

    const removeProduct = (product) => {
        dispatch({ type: REMOVE_PRODUCT, payload: product });
    };

    const clearProducts = () => {
        dispatch({ type: CLEAR_PRODUCT });
    }

    const clearTotalPrices = () => {
        dispatch({ type: CLEAR_TOTAL_PRICES });
    }
    
    const { totalHarga, products } = state;

    return (
        <ContextProvider value={{ totalHarga, products, increaseTotalHarga, decreaseTotalHarga, addProduct, removeProduct, clearProducts, clearTotalPrices }}>
            { children }
        </ContextProvider>
    );
};