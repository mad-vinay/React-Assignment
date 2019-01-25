import * as types from '../constants/ActionTypes';
import { getProducts, getSizes } from '../api/shoppingCart';

export const recieveProducts = products => ({
    type: types.RECIEVE_PRODUCTS,
    products
});

export const getAllProducts = () => {
    return dispatch => {
        const products = getProducts();
        // if (callBack) callBack(products);
        dispatch(recieveProducts(products));
    }
};

export const recieveSizes = sizes => ({
    type: types.GET_SIZES,
    sizes
});

export const getAllSizes = () => {
    return dispatch => {
        const sizes = getSizes();
        dispatch(recieveSizes(sizes));
    }
};

export const addToCart = cartItems => ({
    type: types.ADD_TO_CART,
    cartItems
});

export const deleteFromCart = (cartItems) =>({
    type: types.DELETE_FROM_CART,
    cartItems
});