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

export const sizeFilter = (data) => {
    return{
        type: 'SIZE_FILTER',
        data
    }
};

export const updateFilter = (data) => {
    return{
        type: 'UPDATE_FILTER',
        data
    }
};

export const priceFilter = (data) => {
    return{
        type: 'PRICE_FILTER',
        data
    }
};

export const clearFilter = (data) => {
    return{
        type: 'CLEAR_FILTER',
        data
    }
};

export const countUpdation = (data) => {
    return{
        type: 'COUNT_UPDATION',
        data
    }
};

export const viewCart = (data) => {
    return{
        type: 'VIEW_CART',
        data
    }
};
