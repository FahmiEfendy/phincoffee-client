import {
  GET_CATEGORY_DETAIL_FAILED,
  GET_CATEGORY_DETAIL_REQUEST,
  GET_CATEGORY_DETAIL_SUCCESS,
  GET_CATEGORY_LIST_FAILED,
  GET_CATEGORY_LIST_REQUEST,
  GET_CATEGORY_LIST_SUCCESS,
} from './constants';

// GET Category List
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

// GET Category Detail
export const getCategoryDetailRequest = (id) => ({
  type: GET_CATEGORY_DETAIL_REQUEST,
  id,
});

export const getCategoryDetailSuccess = (data) => ({
  type: GET_CATEGORY_DETAIL_SUCCESS,
  data,
});

export const getCategoryDetailFailed = (error) => ({
  type: GET_CATEGORY_DETAIL_FAILED,
  error,
});
