import {GET_PRODUCT_DETAIL, ADD_TO_CART} from './constants';

export const getDetailProduct = (productId, cbSuccess, cbFailed) => ({
    type: GET_PRODUCT_DETAIL,
    productId,
    cbSuccess,
    cbFailed,
});

export const addToCart = (payload, cbSuccess, cbFailed) => ({
    type: ADD_TO_CART,
    payload,
    cbSuccess,
    cbFailed,
});