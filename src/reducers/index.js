import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const initialState = {
    products: [],
    sizes: [],
    cartItems: []
}
const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RECIEVE_PRODUCTS:
            return {
                ...state,
                products: action.products
            }

        case types.GET_SIZES:
            return {
                ...state,
                sizes: action.sizes
            }

        case types.ADD_TO_CART:
            return {
                ...state,
                cartItems: addToCart(state.cartItems, action.cartItems)
            }

        case types.DELETE_FROM_CART:
            return {
                ...state,
                cartItems: removeFromCart(state.cartItems, action.cartItems)
            }

        default:
            return state
    }
}

const addToCart = (oldItems, newItem) => {
    const temp = [...oldItems];
    temp.push(newItem);
    return temp;
};

const removeFromCart = (oldItems, newItem) => {
    let temp = [...oldItems];
    temp = temp.filter(item => item.id !== newItem.id);
    debugger
    return temp;
}

export default combineReducers({
    shopReducer
})