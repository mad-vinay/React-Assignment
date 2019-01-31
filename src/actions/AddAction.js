import { SIDEBAR, SIZE_FILTER, PRICE_FILTER, CLEAR_FILTER, ADD_AND_DELETE_CART, UPDATE_PROD_COUNT, FREE_SHIPPING } from '../constants/actionTypes';

export function fetchProdDetails() {
    
    return (dispatch, getState) => {
        
    }
}

export const sidebar = (data) => {
    return{
        type: SIDEBAR,
        data
    }
};


export const sizeFilter = (data) => {
    return{
        type: SIZE_FILTER,
        data
    }
};

export const priceFilter = (data) => {
    return{
        type: PRICE_FILTER,
        data
    }
};

export const clearFilter = (data) => {
    return{
        type: CLEAR_FILTER,
        data
    }
};

export const addAndDeleteCart = (data) => {
    return{
        type: ADD_AND_DELETE_CART,
        data
    }
};

export const updateProductCount = (data) => {
    return{
        type: UPDATE_PROD_COUNT,
        data
    }
};

export const freeShippingFilter = (data) => {
    return{
        type: FREE_SHIPPING,
        data
    }
};



