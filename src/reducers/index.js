import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const initialState = {
    products: []
}
const getProducts = (state = initialState, action) => {
    switch (action.type) {
        case types.RECIEVE_PRODUCTS:
            return {
                ...state,
                products: action.products
            }

        default:
            return state
    }
}

export default combineReducers({
    getProducts
})