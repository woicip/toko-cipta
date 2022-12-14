import { DECREASE_TOTAL, INCREASE_TOTAL, ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_PRODUCT, CLEAR_TOTAL_PRICES } from './Names';

export default function Reducer(state, action){

    const { type, payload } = action;

    switch(type){

        case INCREASE_TOTAL:
            return { totalHarga: state.totalHarga + payload, products: state.products };

        case DECREASE_TOTAL:
            return { totalHarga: state.totalHarga - payload, products: state.products };

        case ADD_PRODUCT:
            return { totalHarga: state.totalHarga, products: [ ...state.products, payload] };

        case REMOVE_PRODUCT:
            let productChanging = state.products.filter(product => product.name != payload.name);
            return { totalHarga: state.totalHarga, products: productChanging };

        case CLEAR_PRODUCT:
            return { totalHarga: state.totalHarga, products: [] };

        case CLEAR_TOTAL_PRICES:
            return { totalHarga: 0, products: state.products };

        default:
            throw new Error();
    }
}