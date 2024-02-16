import { CREATE_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, GET_ALL_PRODUCT, SET_ALL_PRODUCT } from './constants';

export const setAllProduct = (products) => ({
  type: SET_ALL_PRODUCT,
  products,
});

export const getAllProduct = (cbFailed) => ({
  type: GET_ALL_PRODUCT,
  cbFailed,
});

export const createProduct = (payload, cbSuccess, cbFailed) => ({
  type: CREATE_PRODUCT,
  payload,
  cbSuccess,
  cbFailed,
});

export const editProduct = (payload, productId, cbSuccess, cbFailed) => ({
  type: EDIT_PRODUCT,
  payload,
  productId,
  cbSuccess,
  cbFailed,
});

export const deleteProduct = (productId, cbSuccess, cbFailed) => ({
  type: DELETE_PRODUCT,
  productId,
  cbSuccess,
  cbFailed,
});
