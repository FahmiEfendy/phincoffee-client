import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  ping: 'ping.json',

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

export const postCreateCategory = (data) => callAPI(urls.createCategory, 'POST', {}, {}, data);
export const getCategoryList = (params) => callAPI(urls.categoryList, 'GET', {}, params);
export const getCategoryDetail = (id) => callAPI(`${urls.categoryDetail}/${id}`, 'GET');
export const patchUpdateCategory = (payload) =>
  callAPI(`${urls.updateCategory}/${payload.id}`, 'PATCH', {}, {}, payload.data);
export const deleteCategory = (id) => callAPI(`${urls.deleteCategory}/${id}`, 'DELETE');
