import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  ping: 'ping.json',
  register: 'register',
  login: 'login',
  getProduct: 'product',
  createProduct: 'product/create',
  updateProduct: 'product/update',
  deleteProduct: 'product/delete',

  createCategory: 'category/create',
  categoryList: 'category/list',
  categoryDetail: 'category/detail',
  updateCategory: 'category/update',
  deleteCategory: 'category/delete',
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const ping = () => callAPI(urls.ping, 'get');
export const register = (dataUser) => callAPI(urls.register, 'POST', {}, {}, dataUser);
export const login = (dataUser) => callAPI(urls.login, 'POST', {}, {}, dataUser);
export const getAllProduct = (params) => callAPI(urls.getProduct, 'get', {}, params);
export const getOneProduct = (productId) => callAPI(`${urls.getProduct}/${productId}`, 'get');
export const createProduct = (payload) =>
  callAPI(urls.createProduct, 'post', { 'Content-Type': 'multipart/form-data' }, {}, payload);
export const updateProduct = (productId, payload) =>
  callAPI(`${urls.updateProduct}/${productId}`, 'put', { 'Content-Type': 'multipart/form-data' }, {}, payload);
export const deleteProduct = (productId) => callAPI(`${urls.deleteProduct}/${productId}`, 'delete');

export const postCreateCategory = (data) => callAPI(urls.createCategory, 'POST', {}, {}, data);
export const getCategoryList = (params) => callAPI(urls.categoryList, 'GET', {}, params);
export const getCategoryDetail = (id) => callAPI(`${urls.categoryDetail}/${id}`, 'GET');
export const patchUpdateCategory = (payload) =>
  callAPI(`${urls.updateCategory}/${payload.id}`, 'PATCH', {}, {}, payload.data);
export const deleteCategory = (id) => callAPI(`${urls.deleteCategory}/${id}`, 'DELETE');
