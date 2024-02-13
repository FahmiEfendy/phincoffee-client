import { GET_ALL_PRODUCT, SET_ALL_PRODUCT } from './constants';

export const setAllProduct = (products) => ({
  type: SET_ALL_PRODUCT,
  products,
});

export const getAllProduct = (cbFailed) => ({
  type: GET_ALL_PRODUCT,
  cbFailed,
});
