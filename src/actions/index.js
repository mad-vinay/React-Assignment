import * as types from '../constants/ActionTypes';
import getProducts from '../api/shoppingCart';

export const recieveProducts = (products) => ({
    type: types.RECIEVE_PRODUCTS,
    products
});

export const getAllProducts = () => {
    return dispatch => {
        const products = getProducts();
        dispatch(recieveProducts(products));
    }
}