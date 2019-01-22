import { combineReducers } from 'redux';
import productList from './AddReducer';
import sidebar from './AddReducer';
import sortby from './AddReducer';
import homepage from './AddReducer';

export const ReducerList = combineReducers({
    productList,
    sidebar,
    sortby,
    homepage
});
