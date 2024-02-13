import { GET_CATEGORY_LIST_FAILED, GET_CATEGORY_LIST_REQUEST, GET_CATEGORY_LIST_SUCCESS } from './constants';

export const getCategoryListRequest = (payload) => ({
  type: GET_CATEGORY_LIST_REQUEST,
  payload,
});

export const getCategoryListSuccess = (data) => ({
  type: GET_CATEGORY_LIST_SUCCESS,
  data,
});

export const getCategoryListFailed = (error) => ({
  type: GET_CATEGORY_LIST_FAILED,
  error,
});
