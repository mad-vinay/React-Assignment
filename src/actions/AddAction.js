// action for adding baby name

export const productList = (data) => {
    return{
        type: 'PRODUCT_LIST',
        data
    }
};

export const sidebar = (data) => {
    return{
        type: 'SIDEBAR',
        data
    }
};

export const sortby = (data) => {
    return{
        type: 'SORTBY',
        data
    }
};

export const homepage = (data) => {
    return{
        type: 'HOME',
        data
    }
};
