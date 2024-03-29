import {
  DELETE_CATEGORY_FAILED,
  DELETE_CATEGORY_REQUEST,
  GET_CATEGORY_DETAIL_FAILED,
  GET_CATEGORY_DETAIL_REQUEST,
  GET_CATEGORY_DETAIL_SUCCESS,
  GET_CATEGORY_LIST_FAILED,
  GET_CATEGORY_LIST_REQUEST,
  GET_CATEGORY_LIST_SUCCESS,
  PATCH_UPDATE_CATEGORY_FAILED,
  PATCH_UPDATE_CATEGORY_REQUEST,
  POST_CREATE_CATEGORY_FAILED,
  POST_CREATE_CATEGORY_REQUEST,
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

// POST Create Category
export const postCreateCategoryRequest = (payload, callback) => ({
  type: POST_CREATE_CATEGORY_REQUEST,
  payload,
  callback,
});

export const postCreateCategoryFailed = (error) => ({
  type: POST_CREATE_CATEGORY_FAILED,
  error,
});

// PATCH Update Category
export const patchUpdateCategoryRequest = (payload, callback) => ({
  type: PATCH_UPDATE_CATEGORY_REQUEST,
  payload,
  callback,
});

export const patchUpdateCategoryFailed = (error) => ({
  type: PATCH_UPDATE_CATEGORY_FAILED,
  error,
});

// DELETE Category
export const deleteCategoryRequest = (id, callback) => ({
  type: DELETE_CATEGORY_REQUEST,
  id,
  callback,
});

export const deleteCategoryFailed = (error) => ({
  type: DELETE_CATEGORY_FAILED,
  error,
});
