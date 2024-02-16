import { produce } from 'immer';

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

export const initialState = {
  categoryList: {
    data: [],
    isError: null,
  },
  categoryDetail: {
    data: [],
    isError: null,
  },
  createCategory: {
    isError: null,
  },
  updateCategory: {
    isError: null,
  },
  deleteCategory: {
    isError: null,
  },
};

export const storedKey = ['category'];

const categoryReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      // GET Category List
      case GET_CATEGORY_LIST_REQUEST:
        draft.categoryList.isError = null;
        draft.categoryList.data = [];
        break;

      case GET_CATEGORY_LIST_SUCCESS:
        draft.categoryList.isError = null;
        draft.categoryList.data = action.data;
        break;

      case GET_CATEGORY_LIST_FAILED:
        draft.categoryList.isError = action.error;
        draft.categoryList.data = [];
        break;

      // GET Category Detail
      case GET_CATEGORY_DETAIL_REQUEST:
        draft.categoryDetail.isError = null;
        draft.categoryDetail.data = [];
        break;

      case GET_CATEGORY_DETAIL_SUCCESS:
        draft.categoryDetail.isError = null;
        draft.categoryDetail.data = action.data;
        break;

      case GET_CATEGORY_DETAIL_FAILED:
        draft.categoryDetail.isError = action.error;
        draft.categoryDetail.data = [];
        break;

      // POST Create Category
      case POST_CREATE_CATEGORY_REQUEST:
        draft.createCategory.isError = null;
        break;

      case POST_CREATE_CATEGORY_FAILED:
        draft.createCategory.isError = action.error;
        break;

      // PATCH Update Category
      case PATCH_UPDATE_CATEGORY_REQUEST:
        draft.updateCategory.isError = null;
        break;

      case PATCH_UPDATE_CATEGORY_FAILED:
        draft.updateCategory.isError = action.error;
        break;

      // DELETE Category
      case DELETE_CATEGORY_REQUEST:
        draft.deleteCategory.isError = null;
        break;

      case DELETE_CATEGORY_FAILED:
        draft.deleteCategory.isError = action.error;
        break;

      default:
        break;
    }
  });

export default categoryReducer;
