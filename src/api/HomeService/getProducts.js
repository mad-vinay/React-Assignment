//import axios from "axios";
//import {data} from '../../assets/data/data.json';

export function getProductsService() {
    //const url = "../../assets/data/data.json";
    // const url = "http://localhost/data.json";
    // axios.get(url)
    //     .then((response) => {
    //         debugger;
    //         return response.data;
    //     })
    //     .catch((err) => {
    //         debugger
    //         return err;
    //     })
    var data = require('../../assets/data/data.json');
    return data;
};