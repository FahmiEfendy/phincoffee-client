import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  ping: 'ping.json',
  getProduct: 'product',
  createProduct: 'product/create',
  updateProduct: 'product/update',
  deleteProduct: 'product/delete',
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
export const getAllProduct = () => callAPI(urls.getProduct, 'get');
export const getOneProduct = (productId) => callAPI(`${urls.getProduct}/${productId}`, 'get');
export const createProduct = (payload) =>
  callAPI(urls.createProduct, 'post', { 'Content-Type': 'multipart/form-data' }, {}, payload);
export const updateProduct = (productId, payload) =>
  callAPI(`${urls.updateProduct}/${productId}`, 'put', { 'Content-Type': 'multipart/form-data' }, {}, payload);
export const deleteProduct = (productId) => callAPI(`${urls.deleteProduct}/${productId}`, 'delete');
